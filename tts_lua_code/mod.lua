require("vscode/console")
-- OPR AF to TTS by Tombola
local army = {}
local armyId = nil; -- the army ID relative to OPR AF to TTS
local gameSystemToAssign = nil; -- the game system we're assigning, so models know what they are (for their right click menus)

local notecardGuid = 'e73b3a'
local oprAfToTtsLink = ""
local activeArmyListCardIndex = nil;

local nameOfModelAssigning = nil;
local nameToAssign = nil;
local descriptionToAssign = nil;
local unitIdToAssign = nil;
local originalToughValueToAssign = nil;
local originalCasterValueToAssign = nil;
local armyNameToAssign = nil;
local unitColorToAssign = nil;
local unitColorAssignments = {}  -- Maps unitId -> color for consistent unit coloring

-- Global Font Scaling Constants
local GLOBAL_FONT_SCALING = {
    name_base = 26,
    name_decrease = 4,
    loadout_base = 20,
    loadout_decrease = 2
}

-- Unit Color Palette for visual distinction (20 colors)
local UNIT_COLORS = {
    {0, 0, 255},        -- Blue
    {255, 0, 0},        -- Red
    {0, 255, 0},        -- Green
    {255, 255, 0},      -- Yellow
    {255, 0, 255},      -- Magenta
    {0, 255, 255},      -- Cyan
    {255, 128, 0},      -- Orange
    {128, 0, 255},      -- Purple
    {0, 128, 0},        -- Dark Green
    {128, 128, 0},      -- Olive
    {255, 192, 204},    -- Pink
    {0, 0, 128},        -- Navy
    {128, 64, 0},       -- Brown
    {192, 192, 192},    -- Silver
    {255, 215, 0},      -- Gold
    {0, 128, 128},      -- Teal
    {128, 0, 0},        -- Maroon
    {128, 128, 255},    -- Light Blue
    {255, 128, 128},    -- Salmon
    {128, 255, 128},    -- Light Green
}
local unitColorIndexCounter = 0  -- Track which color to assign next

-- When saving, remove the --lua
-- local perModelCode = [[
local perModelCode = [[
    function distributeObjects(numObjects, spacing)
        if numObjects <= 0 then
            return {} -- Return an empty table for an invalid input
        elseif numObjects == 1 then
            return {0} -- Center position for a single object
        end
    
        local positions = {}
        local totalWidth = (numObjects - 1) * spacing
    
        for i = 1, numObjects do
            local position = (i - 1) * spacing - totalWidth / 2
            table.insert(positions, position)
        end
    
        return positions
    end

    function tablelength(T)
        local c = 0
        for _ in pairs(T) do
            c = c + 1
        end
        return c
    end

    function largestWithMax(a, b, c)
        return (a > b) and (b > c and c or b) or (a > c and c or a)
    end

    function smallestWithMin(a, b, c)
        return (a < b) and (b < c and b or c) or (a < c and a or c)
    end

    function numOrMin(a, b)
        if (a < b) then
            return b
        else
            return a
        end
    end

    function numOrMax(a, b)
        if (a > b) then
            return b
        else
            return a
        end
    end

    function mergeTables(table1, table2)
        local mergedTable = {}
    
        for key, value in pairs(table1) do
            mergedTable[key] = value
        end
    
        for key, value in pairs(table2) do
            mergedTable[key] = value
        end
    
        return mergedTable
    end

    function roundToTwoDecimalPlaces(number)
        return math.floor(number * 100 + 0.5) / 100
    end

    function __noop()
        -- deliberately blank
    end

    -- Constants
    local MEASURING_RADII = {3, 6, 9, 12, 18, 24, 30}
    local FONT_SCALING = {
        name_base = 26,
        name_decrease = 4,
        loadout_base = 20,
        loadout_decrease = 2
    }

    -- Game System Helper Functions
    function isTraditionalSystem(gameSystem)
        return gameSystem == 'gf' or gameSystem == 'aof' or gameSystem == 'aofr'
    end

    function isSkirmishSystem(gameSystem)
        return gameSystem == 'aofs' or gameSystem == 'gff'
    end

    -- Memo Update Helper
    function updateMemo(updates)
        local decodedMemo = JSON.decode(self.memo)
        self.memo = JSON.encode(mergeTables(decodedMemo, updates))
    end

    -- Generic Toggle Function for Unit-wide Status
    function toggleUnitStatus(statusField, statusName)
        local decodedMemo = JSON.decode(self.memo)
        local unitMates = getAllUnitMates()
        printToAll("'" .. decodedMemo['unitName'] .. "' toggled " .. statusName)

        for _, unitMate in ipairs(unitMates) do
            local mateMemo = JSON.decode(unitMate.memo)
            unitMate.memo = JSON.encode(mergeTables(mateMemo, {
                [statusField] = not decodedMemo[statusField]
            }))
            unitMate.call('rebuildContext')
            unitMate.call('rebuildStatusEffectThings')
        end
    end

    function onLoad()
        local bounds = self.getBoundsNormalized();
        modelSizeX = bounds['size']['x'];
        modelSizeY = bounds['size']['y'];
        local decodedMemo = JSON.decode(self.memo)

        measuringCircle = {
            color             = {255, 255, 255, 0.9}, --RGB color of the circle
            radius            = 0,           --radius of the circle around the object
            steps             = 64,          --number of segments that make up the circle
            thickness         = 0.05,         --thickness of the circle line
            vertical_position = 0.5,         --vertical height of the circle relative to the object
        }

        isActivatedCircle = {
            color             = {46 / 255, 204 / 255, 113 / 255, 1}, --RGB color of the circle
            radius            = 0,           --radius of the circle around the object
            steps             = 16,          --number of segments that make up the circle
            thickness         = 0.1,         --thickness of the circle line
        }

        isShakenCircle = {
            color             = {241 / 255, 196 / 255, 15 / 255, 1}, --RGB color of the circle
            radius            = 0,           --radius of the circle around the object
            steps             = 5,          --number of segments that make up the circle
            thickness         = 0.2,         --thickness of the circle line
        }

        isStunnedCircle = {
            color             = {231 / 255, 76 / 255, 60 / 255, 1}, --RGB color of the circle
            radius            = 0,           --radius of the circle around the object
            steps             = 6,          --number of segments that make up the circle
            thickness         = 0.2,         --thickness of the circle line
        }

        rebuildContext();
        rebuildStatusEffectThings();
        rebuildName();
        rebuildActionPanelXml();
    end

    function hpUp(player_color)
        local decodedMemo = JSON.decode(self.memo)

        printToAll("'" .. decodedMemo['unitName'] .. "' gained 1 Wound.");

        self.memo = JSON.encode(mergeTables(decodedMemo, {
            currentToughValue = decodedMemo['currentToughValue'] + 1,
        }))


        self.call('rebuildName');
        self.call('rebuildActionPanelXml');
    end

    function hpDown(player_color)
        local decodedMemo = JSON.decode(self.memo)

        printToAll("'" .. decodedMemo['unitName'] .. "' lost 1 Wound.");

        self.memo = JSON.encode(mergeTables(decodedMemo, {
            currentToughValue = decodedMemo['currentToughValue'] - 1,
        }))

        self.call('rebuildName');
        self.call('rebuildActionPanelXml');
    end

    function spellTokensUp(player_color)
        local decodedMemo = JSON.decode(self.memo)

        printToAll("'" .. decodedMemo['unitName'] .. "' gained 1 Spell Token.");

        self.memo = JSON.encode(mergeTables(decodedMemo, {
            currentCasterValue = decodedMemo['currentCasterValue'] + 1,
        }))

        self.call('rebuildName');
        self.call('rebuildActionPanelXml');
    end

    function spellTokensDown(player_color)
        local decodedMemo = JSON.decode(self.memo)

        printToAll("'" .. decodedMemo['unitName'] .. "' lost 1 Spell Token.");

        self.memo = JSON.encode(mergeTables(decodedMemo, {
            currentCasterValue = decodedMemo['currentCasterValue'] - 1,
        }))

        self.call('rebuildName');
        self.call('rebuildActionPanelXml');
    end

    function toggleActivated(player_color)
        toggleUnitStatus('isActivated', 'activation')
        closeActionPanel()
    end

    function toggleStunned(player_color)
        toggleUnitStatus('isStunned', 'Stunned')
        closeActionPanel()
    end

    function toggleShaken(player_color)
        toggleUnitStatus('isShaken', 'Shaken')
        closeActionPanel()
    end

    function getAllUnitMates()
        local decodedMemo = JSON.decode(self.memo)
        local unitObjects = getObjectsWithTag('OPRAFTTS_unit_id_' .. decodedMemo['unitId'])
        return unitObjects
    end

    function getAllArmyMates()
        local decodedMemo = JSON.decode(self.memo)
        local armyObjects = getObjectsWithTag('OPRAFTTS_army_id_' .. decodedMemo['armyId'])
        return armyObjects
    end

    function selectAllUnit(player_color)
        local unitMates = getAllUnitMates();
        
        for _, unitMate in ipairs(unitMates) do
            unitMate.addToPlayerSelection(player_color);
        end
    end

    function countUnit(player_color)
        local unitMates = getAllUnitMates();
        local decodedMemo = JSON.decode(self.memo)
        printToAll("Unit '" .. decodedMemo['unitName'] .. "' has " .. tablelength(unitMates) .." models remaining.")
    end

    function deactivateArmy()
        local armyMates = getAllArmyMates();
        local decodedMemo = JSON.decode(self.memo)
        printToAll("'" .. decodedMemo['armyNameToAssign'] .. "' deactivated")

        for _, armyMate in ipairs(armyMates) do
            armyMate.memo = JSON.encode(mergeTables(JSON.decode(armyMate.memo), {
                isActivated = false,
            }))

            armyMate.call('rebuildContext');
            armyMate.call('rebuildStatusEffectThings');
        end
    end

    function armyRefreshSpellTokens()
        local armyMates = getAllArmyMates();
        local decodedMemo = JSON.decode(self.memo)
        printToAll("'" .. decodedMemo['armyNameToAssign'] .. "' Spell Tokens refreshed")

        for _, armyMate in ipairs(armyMates) do
            local armyMateMemo = JSON.decode(armyMate.memo);

            armyMate.memo = JSON.encode(mergeTables(armyMateMemo, {
                currentCasterValue = numOrMax(armyMateMemo['currentCasterValue'] + armyMateMemo['originalCasterValue'], 6),
            }))
            armyMate.call('rebuildContext');
            armyMate.call('rebuildName');
            armyMate.call('rebuildActionPanelXml');
            armyMate.call('rebuildStatusEffectThings');
        end
    end

    -- code taken from https://pastebin.com/Y1tTQ8Yw with huge appreciation to the original author
    function getCircleVectorPoints(radius, steps, y, accountForScale)
        local bounds = self.getBoundsNormalized();
        local scale = self.getScale();

        local halfOfBaseWidth = bounds['size']['x'] / 2;
        local halfOfBaseLength = bounds['size']['z'] / 2;

        local xRadius = numOrMin(radius + halfOfBaseWidth, 0.4);
        local zRadius = numOrMin(radius + halfOfBaseLength, 0.4);

        -- if we account for scale, then 3'' will always be 3'' even if the model is scaled up
        if (accountForScale) then
            xRadius = xRadius / scale['x'];
            zRadius = zRadius / scale['z'];
        end

        local t = {}
        local d,s,c,r = 360/steps, math.sin, math.cos, math.rad
        for i = 0,steps do
            table.insert(t, {
                c(r(d*i)) * xRadius,                   -- x
                y,                                  -- y
                s(r(d*i)) * zRadius                 -- z
            })
        end
        return t
    end
    
    function cycleMeasuringRadius()
        local decodedMemo = JSON.decode(self.memo)

        local currentIndex = 0
        for i, radius in ipairs(MEASURING_RADII) do
            if measuringCircle.radius == radius then
                currentIndex = i
                break
            end
        end

        if currentIndex == 0 or currentIndex == #MEASURING_RADII then
            measuringCircle.radius = currentIndex == 0 and MEASURING_RADII[1] or 0
        else
            measuringCircle.radius = MEASURING_RADII[currentIndex + 1]
        end

    
        if measuringCircle.radius == 0 then
            printToAll("'" .. decodedMemo['unitName'] .. "' model measuring aura turned off")
        else
            printToAll("'" .. decodedMemo['unitName'] .. "' model measuring aura set to " .. measuringCircle.radius .. "''")
        end
    
        rebuildStatusEffectThings();
    end

    -- Legacy function kept for backward compatibility with old models
    function cycleShowHideWoundsAndSpellTokens()
        -- HP/SP display is now handled by XML-based stat bars (always visible)
    end

    function rebuildStatusEffectThings()
        local decodedMemo = JSON.decode(self.memo)
           
        local vectorPointsTable = {}
        
        local scale = self.getScale();
        local heightForCircles = 0.4 / scale['y'];

        if (measuringCircle.radius > 0) then
            table.insert(vectorPointsTable, {
                points    = getCircleVectorPoints(measuringCircle.radius, measuringCircle.steps, measuringCircle.vertical_position, true),
                color     = measuringCircle.color,
                thickness = measuringCircle.thickness,
                rotation  = {0,0,0},
            })
        end
        if (decodedMemo['isActivated']) then
            table.insert(vectorPointsTable, {
                points    = getCircleVectorPoints(isActivatedCircle.radius, isActivatedCircle.steps, heightForCircles, true),
                color     = isActivatedCircle.color,
                thickness = isActivatedCircle.thickness,
                rotation  = {0,0,0},
            })
        end

        if (decodedMemo['isShaken']) then
            table.insert(vectorPointsTable, {
                points    = getCircleVectorPoints(isShakenCircle.radius, isShakenCircle.steps, heightForCircles + 0.2, true),
                color     = isShakenCircle.color,
                thickness = isShakenCircle.thickness,
                rotation  = {0,0,0},
            })
        end

        if (decodedMemo['isStunned']) then
            table.insert(vectorPointsTable, {
                points    = getCircleVectorPoints(isStunnedCircle.radius, isStunnedCircle.steps, heightForCircles + 0.2, true),
                color     = isStunnedCircle.color,
                thickness = isStunnedCircle.thickness,
                rotation  = {0,0,0},
            })
        end
    
        self.setVectorLines(vectorPointsTable)
    end

    -- Legacy function kept for backward compatibility with old models
    -- HP/SP display is now handled by XML-based stat bars in rebuildActionPanelXml()
    function rebuildXml()
        self.clearButtons();
    end

    function rebuildName()
        local decodedMemo = JSON.decode(self.memo)

        local gameSystem = decodedMemo['gameSystem']
        local nameToAssign = decodedMemo['nameToAssign']
        local currentTough = decodedMemo['currentToughValue']
        local currentCaster = decodedMemo['currentCasterValue']
        local originalTough = decodedMemo['originalToughValue']
        local originalCaster = decodedMemo['originalCasterValue']

        if isTraditionalSystem(decodedMemo['gameSystem']) then
            if (originalTough ~= 0 and originalCaster ~= 0) then
                self.setName(nameToAssign .. "\r\n" .. "Wounds: ".. currentTough .. "/" .. originalTough .. "\r\n" .. "Spell Tokens: " .. currentCaster .. '/6')
            elseif (originalTough ~= 0 and originalCaster == 0) then
                self.setName(nameToAssign .. "\r\n" .. "Wounds:" .. currentTough .. '/' .. originalTough)
            elseif (originalTough == 0 and originalCaster ~= 0) then
                self.setName(nameToAssign .. "\r\n" .. "Spell Tokens: " .. currentCaster .. '/6')
            else
                self.setName(nameToAssign)
            end
        end

        if isSkirmishSystem(decodedMemo['gameSystem']) then
            if (originalTough ~= 0) then
                nameToAssign = nameToAssign .. "\r\nTough: " .. originalTough;
            end

            nameToAssign = nameToAssign .. "\r\nWounds: " .. currentTough;
            
            if (originalCaster ~= 0) then
                nameToAssign = nameToAssign .. "\r\n" .. "Spell Tokens: " .. currentCaster .. '/6';
            end
            self.setName(nameToAssign)
        end
    end

    function measuringOff()
        local decodedMemo = JSON.decode(self.memo)
        measuringCircle.radius = 0;
        printToAll("'" .. decodedMemo['unitName'] .. "' Measuring Off")
        rebuildStatusEffectThings();
    end

    function measuringOffArmy()
        local decodedMemo = JSON.decode(self.memo)

        local armyMates = getAllArmyMates();
        for _, armyMate in ipairs(armyMates) do
            armyMate.call('measuringOff');
        end
        
        printToAll("'" .. decodedMemo['armyNameToAssign'] .. "' Measuring Off")
        rebuildStatusEffectThings();

    end
    
    -- Menu position/rotation adjustment functions
    function moveMenuUp()
        local decodedMemo = JSON.decode(self.memo)
        local currentOffset = decodedMemo['menuHeightOffset'] or 0
        self.memo = JSON.encode(mergeTables(decodedMemo, {
            menuHeightOffset = currentOffset + 20
        }))
        rebuildActionPanelXml()
    end

    function moveMenuDown()
        local decodedMemo = JSON.decode(self.memo)
        local currentOffset = decodedMemo['menuHeightOffset'] or 0
        self.memo = JSON.encode(mergeTables(decodedMemo, {
            menuHeightOffset = currentOffset - 20
        }))
        rebuildActionPanelXml()
    end

    function rotateMenuLeft()
        local decodedMemo = JSON.decode(self.memo)
        local currentRotation = decodedMemo['menuRotationOffset'] or 0
        self.memo = JSON.encode(mergeTables(decodedMemo, {
            menuRotationOffset = currentRotation - 15
        }))
        rebuildActionPanelXml()
    end

    function rotateMenuRight()
        local decodedMemo = JSON.decode(self.memo)
        local currentRotation = decodedMemo['menuRotationOffset'] or 0
        self.memo = JSON.encode(mergeTables(decodedMemo, {
            menuRotationOffset = currentRotation + 15
        }))
        rebuildActionPanelXml()
    end

    function rebuildContext()
        self.clearContextMenu()
        self.addContextMenuItem("Menu Up", moveMenuUp, true)
        self.addContextMenuItem("Menu Down", moveMenuDown, true)
        -- self.addContextMenuItem("Rotate Left 15°", rotateMenuLeft, true)
        -- self.addContextMenuItem("Rotate Right 15°", rotateMenuRight, true)
    end

    -- Action Panel UI State
    isActionPanelOpen = false

    function closeActionPanel()
        if not isActionPanelOpen then return end
        local decodedMemo = JSON.decode(self.memo)
        local rotationOffset = decodedMemo['menuRotationOffset'] or 0
        self.UI.hide('action-panel')
        self.UI.setAttribute('toggle-bar-panel', 'rotation', '90 ' .. (180 - rotationOffset) .. ' 0')
        isActionPanelOpen = false
    end

    -- Called by army mates to close this object's menu
    function closeMenuFromExternal()
        if not isActionPanelOpen then return end
        local decodedMemo = JSON.decode(self.memo)
        local rotationOffset = decodedMemo['menuRotationOffset'] or 0
        self.UI.hide('action-panel')
        self.UI.setAttribute('toggle-bar-panel', 'rotation', '90 ' .. (180 - rotationOffset) .. ' 0')
        isActionPanelOpen = false
    end

    function toggleActionPanel(player, value, id)
        local decodedMemo = JSON.decode(self.memo)
        local rotationOffset = decodedMemo['menuRotationOffset'] or 0

        if isActionPanelOpen then
            self.UI.hide('action-panel')
            -- Rotate back to normal (^ pointing up)
            self.UI.setAttribute('toggle-bar-panel', 'rotation', '90 ' .. (180 - rotationOffset) .. ' 0')
            isActionPanelOpen = false
        else
            -- Close all other menus in the same army before opening this one
            local armyMates = getAllArmyMates()
            for _, armyMate in ipairs(armyMates) do
                if armyMate ~= self then
                    armyMate.call('closeMenuFromExternal')
                end
            end

            self.UI.show('action-panel')
            -- Rotate 180 on Z axis to flip the ^ to point down
            self.UI.setAttribute('toggle-bar-panel', 'rotation', '90 ' .. (180 - rotationOffset) .. ' 180')
            isActionPanelOpen = true
        end
    end

    function buildActionPanelXml()
        local decodedMemo = JSON.decode(self.memo)
        local color = decodedMemo['unitColor'] or {128, 128, 128}  -- Default gray
        local r, g, b = color[1], color[2], color[3]
        local gameSystem = decodedMemo['gameSystem']
        local hasTough = decodedMemo['originalToughValue'] ~= 0 or isSkirmishSystem(gameSystem)
        local hasCaster = decodedMemo['originalCasterValue'] ~= 0

        -- Get current HP/SP values for the bars
        local currentTough = decodedMemo['currentToughValue'] or 0
        local originalTough = decodedMemo['originalToughValue'] or 0
        local currentCaster = decodedMemo['currentCasterValue'] or 0

        -- Build colors string for button states: normal|hover|pressed|disabled
        local buttonColors = string.format(
            "rgba(%s,%s,%s,0.3)|rgba(%s,%s,%s,1)|rgba(%s,%s,%s,0.8)|rgba(%s,%s,%s,0.2)",
            r, g, b, r, g, b, r, g, b, r, g, b
        )

        local btnColors = 'colors="rgba(255,255,255,0.9)|rgba(255,255,255,1)|rgba(200,200,200,1)|rgba(128,128,128,0.5)"'

        -- Build Model column buttons (conditionally)
        local modelButtons = ""
        if hasTough then
            modelButtons = modelButtons .. '<Button onClick="hpUp" fontSize="14" ' .. btnColors .. '>HP +</Button>'
            modelButtons = modelButtons .. '<Button onClick="hpDown" fontSize="14" ' .. btnColors .. '>HP -</Button>'
        end
        if hasCaster then
            modelButtons = modelButtons .. '<Button onClick="spellTokensUp" fontSize="14" ' .. btnColors .. '>SP +</Button>'
            modelButtons = modelButtons .. '<Button onClick="spellTokensDown" fontSize="14" ' .. btnColors .. '>SP -</Button>'
        end
        modelButtons = modelButtons .. '<Button onClick="cycleMeasuringRadius" fontSize="14" ' .. btnColors .. '>Measuring</Button>'
        modelButtons = modelButtons .. '<Button onClick="measuringOff" fontSize="12" ' .. btnColors .. '>Measuring Off</Button>'

        -- Build Unit column buttons (conditionally based on game system)
        local unitButtons = '<Button onClick="toggleActivated" fontSize="14" ' .. btnColors .. '>Activated</Button>'
        if isSkirmishSystem(gameSystem) then
            unitButtons = unitButtons .. '<Button onClick="toggleStunned" fontSize="14" ' .. btnColors .. '>Stunned</Button>'
        end
        if isTraditionalSystem(gameSystem) then
            unitButtons = unitButtons .. '<Button onClick="toggleShaken" fontSize="14" ' .. btnColors .. '>Shaken</Button>'
        end
        unitButtons = unitButtons .. '<Button onClick="selectAllUnit" fontSize="14" ' .. btnColors .. '>Select All</Button>'
        unitButtons = unitButtons .. '<Button onClick="countUnit" fontSize="14" ' .. btnColors .. '>Count</Button>'

        -- Build Army column buttons
        local armyButtons = '<Button onClick="measuringOffArmy" fontSize="12" ' .. btnColors .. '>Measuring Off</Button>'
        armyButtons = armyButtons .. '<Button onClick="deactivateArmy" fontSize="14" ' .. btnColors .. '>Deactivate</Button>'
        armyButtons = armyButtons .. '<Button onClick="armyRefreshSpellTokens" fontSize="12" ' .. btnColors .. '>Refresh Spells</Button>'

        -- Calculate positions based on actual model height
        -- getBounds() returns world-space dimensions including inherent model size
        -- Negative Z moves up for Object UI
        local bounds = self.getBounds()
        local actualHeight = bounds['size']['y']

        -- Get custom offset values from memo (for per-model adjustment)
        local heightOffset = decodedMemo['menuHeightOffset'] or 0
        local rotationOffset = decodedMemo['menuRotationOffset'] or 0

        local toggleBarZ = -((actualHeight * 100) + 80 + heightOffset)
        local statBarsZ = -((actualHeight * 100) + 130 + heightOffset)
        local actionPanelZ = -((actualHeight * 100) + 310 + heightOffset)

        -- Base rotation is "90 180 0", subtract from Y for pivot-style rotation
        local menuRotation = "90 " .. (180 - rotationOffset) .. " 0"

        -- Build HP/SP bars XML (always visible, 100% opacity)
        -- HP bar: #e74c3c (red), SP bar: #3498db (blue)
        -- HP on top, SP below (using VerticalLayout)
        local statBarsXml = ""
        if hasTough or hasCaster then
            local barContents = ""

            -- HP bar first (will be on top in VerticalLayout)
            if hasTough then
                -- For skirmish systems, show current wounds out of (tough + 5)
                -- For traditional systems, show current wounds out of original tough
                local maxWounds = originalTough
                if isSkirmishSystem(gameSystem) then
                    maxWounds = originalTough + 5
                end
                barContents = barContents .. '<Panel color="#e74c3c" minHeight="24" preferredHeight="24">' ..
                    '<Text fontSize="16" fontStyle="Bold" color="#FFFFFF">HP: ' .. currentTough .. '/' .. maxWounds .. '</Text>' ..
                '</Panel>'
            end

            -- SP bar second (will be below HP in VerticalLayout)
            if hasCaster then
                barContents = barContents .. '<Panel color="#3498db" minHeight="24" preferredHeight="24">' ..
                    '<Text fontSize="16" fontStyle="Bold" color="#FFFFFF">SP: ' .. currentCaster .. '/6</Text>' ..
                '</Panel>'
            end

            -- Calculate height based on how many bars we have
            local barCount = 0
            if hasTough then barCount = barCount + 1 end
            if hasCaster then barCount = barCount + 1 end
            local panelHeight = (barCount * 26) + ((barCount - 1) * 4) + 4  -- 26 per bar + spacing + padding

            statBarsXml = '<Panel id="stat-bars-panel" position="0 0 ' .. statBarsZ .. '" rotation="' .. menuRotation .. '" width="100" height="' .. panelHeight .. '">' ..
                '<VerticalLayout spacing="4" padding="2" childAlignment="MiddleCenter" childForceExpandHeight="false">' ..
                    barContents ..
                '</VerticalLayout>' ..
            '</Panel>'
        end

        -- Close button: red background, white text

        local xml = '<Defaults><Button fontSize="14" fontStyle="Bold" /></Defaults>' ..
            '<Panel id="toggle-bar-panel" position="0 0 ' .. toggleBarZ .. '" rotation="' .. menuRotation .. '" width="36" height="36">' ..
                '<Button id="toggle-bar" onClick="toggleActionPanel" width="36" height="36" fontSize="14" fontStyle="Bold" textColor="#FFFFFF" colors="' .. buttonColors .. '">^</Button>' ..
            '</Panel>' ..
            statBarsXml ..
            '<Panel id="action-panel" position="0 0 ' .. actionPanelZ .. '" rotation="' .. menuRotation .. '" active="false" width="380" height="320">' ..
                '<VerticalLayout spacing="5" padding="10" childForceExpandHeight="false" childForceExpandWidth="false">' ..
                    '<Panel color="rgba(0,0,0,0.85)" padding="10">' ..
                        '<HorizontalLayout spacing="10" childForceExpandWidth="false">' ..
                            '<VerticalLayout spacing="5" minWidth="110" preferredWidth="110">' ..
                                '<Text fontSize="16" fontStyle="Bold" color="#FFFFFF">Model</Text>' ..
                                modelButtons ..
                            '</VerticalLayout>' ..
                            '<VerticalLayout spacing="5" minWidth="110" preferredWidth="110">' ..
                                '<Text fontSize="16" fontStyle="Bold" color="#FFFFFF">Unit</Text>' ..
                                unitButtons ..
                            '</VerticalLayout>' ..
                            '<VerticalLayout spacing="5" minWidth="110" preferredWidth="110">' ..
                                '<Text fontSize="16" fontStyle="Bold" color="#FFFFFF">Army</Text>' ..
                                armyButtons ..
                            '</VerticalLayout>' ..
                        '</HorizontalLayout>' ..
                    '</Panel>' ..
                '</VerticalLayout>' ..
                '<Button onClick="closeActionPanel" width="28" height="28" fontSize="14" fontStyle="Bold" textColor="#FFFFFF" color="#e74c3c" rectAlignment="UpperRight" offsetXY="-15 -15">X</Button>' ..
            '</Panel>'

        return xml
    end

    function rebuildActionPanelXml()
        local wasOpen = isActionPanelOpen
        local xml = buildActionPanelXml()
        self.UI.setXml(xml)
        isActionPanelOpen = false

        -- Restore open state if panel was open before rebuild
        if wasOpen then
            Wait.frames(function()
                local decodedMemo = JSON.decode(self.memo)
                local rotationOffset = decodedMemo['menuRotationOffset'] or 0
                self.UI.show('action-panel')
                self.UI.setAttribute('toggle-bar-panel', 'rotation', '90 ' .. (180 - rotationOffset) .. ' 180')
                isActionPanelOpen = true
            end, 1)
        end
    end
]]


function calculateFontSize(totalModels, startingValue, decreaseAmount)
    -- Use a formula to calculate y based on the value of x
    return startingValue - (decreaseAmount * (totalModels - 1));
end

local function BuildModelCard(modelDefinition, unitIndex, modelIndex, totalModelsInThisUnit)
    return string.format([[
        <Button id="%s-%s" onClick="Global/beginAssignment">
            <VerticalLayout childForceExpandHeight="false" height="200" padding="20" spacing="20">
                <Text fontSize="%s" fontStyle="bold" color="#2f3640">%s</Text>
                <Text fontSize="%s" color="#2f3640" fontStyle="italic">Loadout: %s</Text>
            </VerticalLayout>
        </Button>
    ]], unitIndex, modelIndex, calculateFontSize(totalModelsInThisUnit, GLOBAL_FONT_SCALING.name_base, GLOBAL_FONT_SCALING.name_decrease), modelDefinition['name']:gsub("%&", "<![CDATA[&]]>"), calculateFontSize(totalModelsInThisUnit, GLOBAL_FONT_SCALING.loadout_base, GLOBAL_FONT_SCALING.loadout_decrease), modelDefinition['loadoutCSV']:gsub("%&", "<![CDATA[&]]>"))
end

local function BuildUnitLayout(unitDefinition, unitIndex)
    local thisUnitsModelCardsXml = ''
    local totalModelsInThisUnit = tablelength(unitDefinition['modelDefinitions'])
    for index, modelDefinition in pairs(unitDefinition['modelDefinitions']) do
        thisUnitsModelCardsXml = thisUnitsModelCardsXml .. BuildModelCard(modelDefinition, unitIndex, index, totalModelsInThisUnit)
    end

    return string.format([[
        <VerticalLayout
        childForceExpandHeight="false"
          height="100"
          spacing="10">
          <Text
              fontSize="30"
              color="#FFFFFF"
              fontStyle="bold"
          >Ut: %s</Text>
          
            <HorizontalLayout
              spacing="40">
                %s
            </HorizontalLayout>
        </VerticalLayout>
        
    ]], unitDefinition['name']:gsub("%&", "<![CDATA[&]]>"), thisUnitsModelCardsXml)
end

local function BuildLayout(cardsXml, totalUnitCount)
    return string.format([[
        <Panel width="600" height="3500" position="-450,-1700,-1000">
        <VerticalScrollView scrollSensitivity="40" width="700" height="3500">
            <VerticalLayout
                width="600" 
                height="%s"
                spacing="40"
                padding="0 0 40 40"
            >%s</VerticalLayout>
            </VerticalScrollView>
        </Panel>
    ]], totalUnitCount * 350, cardsXml)
end


function cancelCurrentAssigning()
    nameOfModelAssigning = nil;
    nameToAssign = nil;
    descriptionToAssign = nil;
    unitIdToAssign = nil;
    originalToughValueToAssign = nil;
    originalCasterValueToAssign = nil;
    unitColorToAssign = nil;
end

-- insane that this isn't in the Lua standard library???
function tablelength(T)
    local count = 0
    for _ in pairs(T) do
        count = count + 1
    end
    return count
end

function string:split(inSplitPattern, outResults)
    if not outResults then
        outResults = {}
    end
    local theStart = 1
    local theSplitStart, theSplitEnd = string.find(self, inSplitPattern, theStart)
    while theSplitStart do
        table.insert(outResults, string.sub(self, theStart, theSplitStart - 1))
        theStart = theSplitEnd + 1
        theSplitStart, theSplitEnd = string.find(self, inSplitPattern, theStart)
    end
    table.insert(outResults, string.sub(self, theStart))
    return outResults
end

function onExternalCommand(input)
    print('VSCode: ' .. input)
end

function onTextInputChange(_, v)
    oprAfToTtsLink = v
end

function noop()
end

function onLoad(save_state)
end

function onSubmit()
    UI.hide("main-panel")
    WebRequest.get(oprAfToTtsLink, handleResponse)
end

function onCloseInput()
    UI.hide("main-panel")
end

function sendRequest(data)
    -- Perform the request
    WebRequest.get(oprAfToTtsLink, handleResponse)
end

function beginAssignment(player, _, id)
    local idxs = id:split("-")
    local unitIndex = tonumber(idxs[1]);
    local modelIndex = tonumber(idxs[2]);

    nameOfModelAssigning = army[unitIndex]['modelDefinitions'][modelIndex]['name']
    nameToAssign = army[unitIndex]['modelDefinitions'][modelIndex]['ttsNameOutput']
    descriptionToAssign = army[unitIndex]['modelDefinitions'][modelIndex]['ttsDescriptionOutput']
    unitIdToAssign = army[unitIndex]['unitId']
    originalToughValueToAssign = army[unitIndex]['modelDefinitions'][modelIndex]['originalToughValue']
    originalCasterValueToAssign = army[unitIndex]['modelDefinitions'][modelIndex]['originalCasterValue']

    -- Assign a consistent color for this unit (same color for all models in the unit)
    if unitColorAssignments[unitIdToAssign] == nil then
        unitColorIndexCounter = unitColorIndexCounter + 1
        local colorIndex = ((unitColorIndexCounter - 1) % #UNIT_COLORS) + 1
        unitColorAssignments[unitIdToAssign] = UNIT_COLORS[colorIndex]
    end
    unitColorToAssign = unitColorAssignments[unitIdToAssign]

    broadcastToAll("Assigning '" .. nameOfModelAssigning .. "'")
end

function assignNameAndDescriptionToObjects( object )
    local players = Player.getPlayers();
    local player = players[1];

    local selectedObjects

    if (object ~= nil) then
        selectedObjects = { object }
    else
        selectedObjects = player.getSelectedObjects();
    end

    for _, target in ipairs(selectedObjects) do
        target.setName(nameToAssign)
        target.setDescription(descriptionToAssign)
        target.setLuaScript(perModelCode);
        -- clear out existing tags
        target.setTags({});

        -- set the new tags
        target.addTag('OPRAFTTS_unit_id_' .. unitIdToAssign)
        target.addTag('OPRAFTTS_army_id_' .. armyId)

        -- Calculate starting HP based on game system
        -- For skirmish systems: max HP = tough + 5
        -- For traditional systems: max HP = originalToughValue
        local startingHP = originalToughValueToAssign
        if gameSystemToAssign == 'aofs' or gameSystemToAssign == 'gff' then
            startingHP = originalToughValueToAssign + 5
        end

        target.memo = JSON.encode({
            isActivated = false,
            isShaken = false,
            isWavering = false,
            isStunned = false,
            gameSystem = gameSystemToAssign,
            unitId = unitIdToAssign,
            armyId = armyId,
            unitName = nameOfModelAssigning,
            nameToAssign = nameToAssign,
            originalToughValue = originalToughValueToAssign,
            originalCasterValue = originalCasterValueToAssign,
            currentToughValue = startingHP,
            currentCasterValue = originalCasterValueToAssign,
            armyNameToAssign = armyNameToAssign,
            unitColor = unitColorToAssign,
        })
        target.setRotation({0, 180, 0});
        target.reload();  -- Reload to trigger onLoad() which sets up the action panel UI
    end

    broadcastToAll("Assigned '" .. nameOfModelAssigning .. "' to " .. tablelength(selectedObjects) .. " objects!", {0, 1, 0})
end

function onScriptingButtonDown(index, player_color)
    -- scripting key 1 is assign to selected objects
    if (index == 1) then
        if nameToAssign == nil then
            return
        end
        if descriptionToAssign == nil then
            return
        end
        assignNameAndDescriptionToObjects();
        cancelCurrentAssigning();
    end

    -- scripting key 2 is cancel assigning
    if (index == 2 and nameOfModelAssigning ~= nil) then
        broadcastToAll("Stopped assigning '" .. nameOfModelAssigning .. "'")
        cancelCurrentAssigning();
    end
end

function click_func()

end



function onObjectPickUp(player_color, picked_up_object)
    if nameToAssign == nil then
        return
    end
    if descriptionToAssign == nil then
        return
    end

    assignNameAndDescriptionToObjects(picked_up_object);
    
    cancelCurrentAssigning();
end

function createCards(unitsDefinitions)
    local cardsAnchor = getObjectFromGUID(notecardGuid)
    army = unitsDefinitions
    local cardsXml = ''
    local totalUnitCount = tablelength(army)
    for unitIndex, unitDefinition in pairs(unitsDefinitions) do
        cardsXml = cardsXml .. BuildUnitLayout(unitDefinition, unitIndex)
    end
    cardsAnchor.UI.setXml(BuildLayout(cardsXml, totalUnitCount))
end

local function isValidJson(jsonString)
    -- First, check if the string is not nil or empty
    if not jsonString or jsonString:match("^%s*$") then
        return false
    end

    -- Use pcall to catch any errors during JSON decoding
    local success, result = pcall(function()
        return JSON.decode(jsonString)
    end)

    -- Return true if decoding was successful
    return success
end

function handleResponse(response)
    if response.is_error then
        broadcastToAll("Couldn't get the list from the server! Please re-load and try again", ERROR_RED)
        return
    end

    if not isValidJson(response.text) then
        broadcastToAll("Data from the server is not structured data - are you sure you copied the right URL? Please double check your URL and try again", ERROR_RED)
        return
    end

    local data = JSON.decode(response.text)

    armyId = data['listId'];
    gameSystemToAssign = data['listJson']['gameSystem'];
    armyNameToAssign = data['listJson']['listName'];

    local units = {}
    for _, unitDefinition in ipairs(data['listJson']['units']) do
        local unit = {
            name = unitDefinition['name'],
            modelDefinitions = unitDefinition['modelDefinitions'],
            unitId = unitDefinition['unitId'],
        }
        table.insert(units, unit)
    end
    createCards(units)
end