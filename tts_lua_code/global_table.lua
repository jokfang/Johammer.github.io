-- Bundled by luabundle {"rootModuleName":"Global.-1.lua","version":"1.6.0"}
local __bundle_require, __bundle_loaded, __bundle_register, __bundle_modules = (function(superRequire)
	local loadingPlaceholder = {[{}] = true}

	local register
	local modules = {}

	local require
	local loaded = {}

	register = function(name, body)
		if not modules[name] then
			modules[name] = body
		end
	end

	require = function(name)
		local loadedModule = loaded[name]

		if loadedModule then
			if loadedModule == loadingPlaceholder then
				return nil
			end
		else
			if not modules[name] then
				if not superRequire then
					local identifier = type(name) == 'string' and '\"' .. name .. '\"' or tostring(name)
					error('Tried to require ' .. identifier .. ', but no such module has been registered')
				else
					return superRequire(name)
				end
			end

			loaded[name] = loadingPlaceholder
			loadedModule = modules[name](require, loaded, register, modules)
			loaded[name] = loadedModule
		end

		return loadedModule
	end

	return require, loaded, register, modules
end)(nil)
__bundle_register("Global.-1.lua", function(require, _LOADED, __bundle_register, __bundle_modules)
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

    function onLoad()
        local bounds = self.getBoundsNormalized();
        modelSizeX = bounds['size']['x'];
        local decodedMemo = JSON.decode(self.memo)
    
        isShowWoundsAndSpellTokens = true;

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
        rebuildXml();
    end

    function hpUp(player_color)
        local decodedMemo = JSON.decode(self.memo)

        printToAll("'" .. decodedMemo['unitName'] .. "' gained 1 Wound.");
        
        self.memo = JSON.encode(mergeTables(decodedMemo, {
            currentToughValue = decodedMemo['currentToughValue'] + 1,
        }))
        

        self.call('rebuildName');
        self.call('rebuildXml');
    end

    function hpDown(player_color)
        local decodedMemo = JSON.decode(self.memo)

        printToAll("'" .. decodedMemo['unitName'] .. "' lost 1 Wound.");
        
        self.memo = JSON.encode(mergeTables(decodedMemo, {
            currentToughValue = decodedMemo['currentToughValue'] - 1,
        }))
        
        self.call('rebuildName');
        self.call('rebuildXml');
    end

    function spellTokensUp(player_color)
        local decodedMemo = JSON.decode(self.memo)
        
        printToAll("'" .. decodedMemo['unitName'] .. "' gained 1 Spell Token.");
        
        self.memo = JSON.encode(mergeTables(decodedMemo, {
            currentCasterValue = decodedMemo['currentCasterValue'] + 1,
        }))

        self.call('rebuildName');
        self.call('rebuildXml');
    end

    function spellTokensDown(player_color)
        local decodedMemo = JSON.decode(self.memo)
        
        printToAll("'" .. decodedMemo['unitName'] .. "' lost 1 Spell Token.");
        
        self.memo = JSON.encode(mergeTables(decodedMemo, {
            currentCasterValue = decodedMemo['currentCasterValue'] - 1,
        }))

        self.call('rebuildName');
        self.call('rebuildXml');
    end

    function toggleActivated(player_color)
        local decodedMemo = JSON.decode(self.memo)
        local unitMates = getAllUnitMates();
        printToAll("'" .. decodedMemo['unitName'] .. "' toggled activation")
        for _, unitMate in ipairs(unitMates) do
            
            unitMate.memo = JSON.encode(mergeTables(JSON.decode(unitMate.memo), {
                isActivated = not decodedMemo['isActivated'],
            }))
            
            unitMate.call('rebuildContext');
            unitMate.call('rebuildStatusEffectThings');
        end
    end

    function toggleStunned(player_color)
        local decodedMemo = JSON.decode(self.memo)
        local unitMates = getAllUnitMates()
        printToAll("'" .. decodedMemo['unitName'] .. "' toggled Stunned")
        
        for _, unitMate in ipairs(unitMates) do
            unitMate.memo = JSON.encode(mergeTables(JSON.decode(unitMate.memo), {
                isStunned = not decodedMemo['isStunned'],
            }))
            unitMate.call('rebuildContext');
            unitMate.call('rebuildStatusEffectThings');
        end
    end

    function toggleShaken(player_color)
        local decodedMemo = JSON.decode(self.memo)
        local unitMates = getAllUnitMates()
        
        printToAll("'" .. decodedMemo['unitName'] .. "' toggled Shaken")

        for _, unitMate in ipairs(unitMates) do
            
            unitMate.memo = JSON.encode(mergeTables(JSON.decode(unitMate.memo), {
                isShaken = not decodedMemo['isShaken'],
            }))
            unitMate.call('rebuildContext');
            unitMate.call('rebuildStatusEffectThings');
        end
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
            armyMate.call('rebuildXml');
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

        if measuringCircle.radius == 0 then
            measuringCircle.radius = 3;
        elseif measuringCircle.radius == 3 then
            measuringCircle.radius = 6;
        elseif measuringCircle.radius == 6 then
            measuringCircle.radius = 9;
        elseif measuringCircle.radius == 9 then
            measuringCircle.radius = 12;
        elseif measuringCircle.radius == 12 then
            measuringCircle.radius = 18;
        elseif measuringCircle.radius == 18 then
            measuringCircle.radius = 24;
        elseif measuringCircle.radius == 24 then
            measuringCircle.radius = 30;
        elseif measuringCircle.radius == 30 then
            measuringCircle.radius = 0;
        end

    
        if measuringCircle.radius == 0 then
            printToAll("'" .. decodedMemo['unitName'] .. "' model measuring aura turned off")
        else
            printToAll("'" .. decodedMemo['unitName'] .. "' model measuring aura set to " .. measuringCircle.radius .. "''")
        end
    
        rebuildStatusEffectThings();
    end

    function cycleShowHideWoundsAndSpellTokens()
        isShowWoundsAndSpellTokens = not isShowWoundsAndSpellTokens;
        self.call('rebuildXml');
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

    function rebuildXml()
        if (isShowWoundsAndSpellTokens == false) then
            self.clearButtons();
            return;
        end

        local decodedMemo = JSON.decode(self.memo)

        local bounds = self.getVisualBoundsNormalized();
        local modelSizeY = (bounds['size']['y'] + (bounds['size']['y'] / 2)) / self.getScale()['y'];    

        local rowCount = 1;
        if (decodedMemo['originalCasterValue'] ~= 0) then
            rowCount = rowCount + 1;
        end

        local buttonRowsDistribution = distributeObjects(rowCount, 0.35);

        self.clearButtons();

        if (decodedMemo['gameSystem'] == 'gf' or decodedMemo['gameSystem'] == 'aof' or decodedMemo['gameSystem'] == 'aofr') then
            local woundsDistribution = distributeObjects(decodedMemo['originalToughValue'], 0.275);
            
            -- do wounds for non skirmish games
            for key, value in pairs(woundsDistribution) do
                if (decodedMemo['currentToughValue'] < key) then
                    opacity = 0.6;
                else
                    opacity = 1;
                end
                self.createButton({
                    click_function = "__noop",
                    function_owner = self,
                    label          = "",
                    position       = {value, modelSizeY, buttonRowsDistribution[1]},
                    rotation       = {0, 0, 0},
                    width          = 100,
                    height         = 100,
                    font_size      = 340,
                    color          = {1, 0, 0, opacity},
                    font_color     = {1, 1, 1},
                    
                })
            end
        end

        if (decodedMemo['gameSystem'] == 'aofs' or decodedMemo['gameSystem'] == 'gff') then
            local woundsDistribution = distributeObjects(decodedMemo['originalToughValue'] + 5, 0.275);
            
            -- do wounds for skirmish games
                -- basically, they have as many wounds as they have tough plus 5
            for key, value in pairs(woundsDistribution) do
                if (decodedMemo['currentToughValue'] < key) then
                    opacity = 0.6;
                else
                    opacity = 1;
                end
                self.createButton({
                    click_function = "__noop",
                    function_owner = self,
                    label          = "",
                    position       = {value, modelSizeY, buttonRowsDistribution[1]},
                    rotation       = {0, 0, 0},
                    width          = 100,
                    height         = 100,
                    font_size      = 340,
                    color          = {1, 0, 0, opacity},
                    font_color     = {1, 1, 1},
                    
                })
            end
        end

        -- do spell tokens
        -- spell tokens are always the same regardless of game system

        if (decodedMemo['originalCasterValue'] > 0) then
            local spellTokensDistribution = distributeObjects(6, 0.275);
            local opacity = 1;
            for key, value in pairs(spellTokensDistribution) do
                if (decodedMemo['currentCasterValue'] < key) then
                    opacity = 0.6;
                else
                    opacity = 1;
                end
                self.createButton({
                    click_function = "__noop",
                    function_owner = self,
                    label          = "",
                    position       = {value, modelSizeY, buttonRowsDistribution[2]},
                    rotation       = {0, 0, 0},
                    width          = 100,
                    height         = 100,
                    font_size      = 340,
                    color          = {0, 1, 1, opacity},
                    font_color     = {1, 1, 1},
                    
                })
            end
        end
    end

    function rebuildName()
        local decodedMemo = JSON.decode(self.memo)

        local gameSystem = decodedMemo['gameSystem']
        local nameToAssign = decodedMemo['nameToAssign']
        local currentTough = decodedMemo['currentToughValue']
        local currentCaster = decodedMemo['currentCasterValue']
        local originalTough = decodedMemo['originalToughValue']
        local originalCaster = decodedMemo['originalCasterValue']

        if (decodedMemo['gameSystem'] == 'gf' or decodedMemo['gameSystem'] == 'aof' or decodedMemo['gameSystem'] == 'aofr') then
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

        if (decodedMemo['gameSystem'] == 'aofs' or decodedMemo['gameSystem'] == 'gff') then
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
    
    function rebuildContext()
        local decodedMemo = JSON.decode(self.memo)
        
        self.clearContextMenu()

        self.addContextMenuItem("▼ Model", __noop, true)

        if (decodedMemo['originalToughValue'] ~= 0 or decodedMemo['gameSystem'] == 'aofs' or decodedMemo['gameSystem'] == 'gff') then
            self.addContextMenuItem("Wounds +", hpUp, true)
            self.addContextMenuItem("Wounds -", hpDown, true)
        end

        if (decodedMemo['originalCasterValue'] ~= 0) then
            self.addContextMenuItem("Spell Tokens +", spellTokensUp, true)
            self.addContextMenuItem("Spell Tokens -", spellTokensDown, true)
        end

        if (decodedMemo['originalToughValue'] ~= 0 or decodedMemo['gameSystem'] == 'aofs' or decodedMemo['gameSystem'] == 'gff' or decodedMemo['originalCasterValue'] ~= 0) then
            self.addContextMenuItem("Toggle W/SP Count", cycleShowHideWoundsAndSpellTokens, false)
        end    

        self.addContextMenuItem("Measuring", cycleMeasuringRadius, true)
        self.addContextMenuItem("Measuring Off", measuringOff, true) 

        self.addContextMenuItem("▼ Unit", __noop, true)

        if (decodedMemo['isActivated']) then
            self.addContextMenuItem("☑ Activated", toggleActivated, false)
        else
            self.addContextMenuItem("☐ Activated", toggleActivated, false)
        end

        if (decodedMemo['gameSystem'] == 'aofs' or decodedMemo['gameSystem'] == 'gff') then
            if (decodedMemo['isStunned']) then
                self.addContextMenuItem("☑ Stunned", toggleStunned, false)
            else
                self.addContextMenuItem("☐ Stunned", toggleStunned, false)
            end
        end

        if (decodedMemo['gameSystem'] == 'gf' or decodedMemo['gameSystem'] == 'aof' or decodedMemo['gameSystem'] == 'aofr') then
            if (decodedMemo['isShaken']) then
                self.addContextMenuItem("☑ Shaken", toggleShaken, false)
            else
                self.addContextMenuItem("☐ Shaken", toggleShaken, false)
            end
        end
    
        self.addContextMenuItem("Select All", selectAllUnit)
        self.addContextMenuItem("Count", countUnit)

        self.addContextMenuItem("▼ Army", __noop, true)
        
        self.addContextMenuItem("Army Measuring Off", measuringOffArmy)
        self.addContextMenuItem("Deactivate", deactivateArmy)
        self.addContextMenuItem("Refresh Spell Tokens", armyRefreshSpellTokens)
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
    ]], unitIndex, modelIndex, calculateFontSize(totalModelsInThisUnit, 26, 4), modelDefinition['name']:gsub("%&", "<![CDATA[&]]>"), calculateFontSize(totalModelsInThisUnit, 20, 2), modelDefinition['loadoutCSV']:gsub("%&", "<![CDATA[&]]>"))
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
            currentToughValue = 0,
            currentCasterValue = 0,
            armyNameToAssign = armyNameToAssign,
        })
        target.setRotation({0, 180, 0});
        target.reload();
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
end)
__bundle_register("vscode/console", function(require, _LOADED, __bundle_register, __bundle_modules)
require("Console/console++")

-- function prototype
function onExternalCommand(command) end

-- Overwrite onChat function if you rather be handled by onExternalMessage
-- function onChat(message, player) end

function onExternalMessage(data)
  if data.input ~= nil then onExternalCommand(data.input) end
  if data.command ~= nil then
    local hostPlayer
    local players = getSeatedPlayers()
    for key, value in pairs(players) do
      if Player[value].host then
        hostPlayer = Player[value]
      end
    end
    if data.command ~= '' then
      local command = ''
      local command_function = nil
      local parameters = {hostPlayer}
      local requires_admin = false
      local command_mode = console.in_command_mode[hostPlayer.steam_id]
      if command_mode and console.active then
          command, command_function, parameters, requires_admin = console.get_command(data.command, hostPlayer)
      elseif data.command:sub(1, 1) == console.command_char and console.active then
          if data.command:len() > 1 then
              command, command_function, parameters, requires_admin = console.get_command(data.command:sub(2), hostPlayer)
          else
              command, command_function, parameters, requires_admin = console.get_command(console.command_char, hostPlayer)
          end
      else
          for i, f in ipairs(console.validation_functions) do
              local valid, response = f(data.command)
              if response == nil then response = '' end
              if not valid then
                  printToColor(response, hostPlayer.color, console.invalid_color)
                  return false
              end
          end
          return true
      end
      if console.active then
          if command_function and (hostPlayer.admin or not requires_admin) then
              if command_mode then
                  data.command = console.command_char .. console.command_char .. data.command
              end
              local response, mute = command_function(unpack(parameters))
              if response ~= nil or mute ~= nil then
                  if not mute then
                      printToColor('\n'..data.command, hostPlayer.color, console.command_color)
                  end
                  if response then
                      printToColor(response, hostPlayer.color, console.output_color)
                  end
              end
              if console.in_command_mode[hostPlayer.steam_id] then console.display_prompt(hostPlayer) end
              return false
          else
              printToColor('\n'..data.command, hostPlayer.color, console.command_color)
              printToColor(console.error_bb .. "<command '" .. command .. "' not found>[-]", hostPlayer.color, console.output_color)
              return false
          end
      end
    end
  end
end

end)
__bundle_register("Console/console++", function(require, _LOADED, __bundle_register, __bundle_modules)
require("Console/console")

if not console.plusplus then
    console.plusplus = true

    -- Change these values as you wish
    console.seperator         = '/'
    console.wildcard          = '*'
    console.literal           = '`'  -- string parameters will be treated as paths where apt unless prefixed with this
    console.result            = '~'  -- refers to the most recently returned result from a call
    console.command_seperator = ';'  -- used in batch files to seperate commands
    console.indent            = '  '
    console.crop_string_at = 20
    console.builtin_path = 'sys'
    console.table_bb    = '[EEDD88]'
    console.hidden_bb   = '[DDAAAA]'
    console.function_bb = '[AADDAA]'
    console.value_bb    = '[88EE88]'
    console.boolean_bb  = '[CCCCFF]'
    console.object_bb   = '[CCBBCC]'
    console.guid_bb     = '[BBBBBB]'

    console.autoexec         = ''
    console.autoexec_options = '-s'

    -- Exposed methods:

    function console.hide_globals(label)
        -- all globals present when you call this will be hidden under <label> (unless built-in or already hidden)
        local hidden = {}
        for global, _ in pairs(_G) do
            local found = false
            for _, globals in pairs(console.hidden_globals) do
                if globals[global] then
                    found = true
                    break
                end
            end
            if not found then
                table.insert(hidden, global)
            end
        end
        if console.hidden_globals[label] == nil then
            console.hidden_globals[label] = {}
        end
        for _, global in ipairs(hidden) do
            console.hidden_globals[label][global] = true
        end
    end

    function console.load()
        -- call this function in an onLoad event to enable the autoexec
        console.cd = console.seperator
        for _, player in pairs(getSeatedPlayers()) do
            if Player[player].admin then
                console.commands['exec'].command_function(Player[player], console.seperator..'console'..console.seperator..'autoexec', console.autoexec_options)
                break
            end
        end
    end

    function console.update()
        -- call this function in an onUpdate event to enable the watch list
        if console.watch_list and not console.watch_list_paused then
            for variable, watch in pairs(console.watch_list) do
                if watch.throttle == 0 or watch.last_check + watch.throttle < os.clock() then
                    watch.last_check = os.clock()
                    local node, id, parent, found
                    if watch.is_guid then
                        node = getObjectFromGUID(variable)
                        found = tostring(node) ~= 'null'
                    else
                        node, id, parent, found = console.node_from_path(variable)
                    end
                    if node ~= nil and found then
                        if type(node) == 'userdata' then
                            if tostring(node) ~= 'null' then
                                local p = function (x) return math.floor(x * 100) * 0.01 end
                                local r = function (x) return math.floor(x + 0.5) end
                                local position = node.getPosition()
                                local rotation = node.getRotation()
                                if p(position.x) ~= p(watch.position.x) or r(rotation.x) ~= r(watch.rotation.x) or
                                   p(position.y) ~= p(watch.position.y) or r(rotation.y) ~= r(watch.rotation.y) or
                                   p(position.z) ~= p(watch.position.z) or r(rotation.z) ~= r(watch.rotation.z) then
                                   watch.position = position
                                   watch.rotation = rotation
                                   node = ' ∡ '..r(rotation.x)..' '..r(rotation.y)..' '..r(rotation.z) ..
                                        console.boolean_bb..'   ⊞  '..p(position.x)..'   '..p(position.y)..'   '..p(position.z)
                                   if watch.is_guid then
                                       variable = console.format_guid(variable)
                                   else
                                       variable = console.object_bb .. variable .. '[-]'
                                   end
                                   printToColor(variable .. console.value_bb .. node .. '[-]', watch.player, console.output_color)
                                end
                            end
                        elseif type(node) == 'function' then
                            local result = node(unpack(watch.parameters))
                            if watch.property and (type(result) == 'table' or type(result) == 'userdata') then
                                result = result[watch.property]
                                if type(result) == 'function' then
                                    result = result()
                                end
                            end
                            if result ~= watch.value then
                                watch.value = result
                                result = tostring(result)
                                if result:len() > console.crop_string_at then result = result:sub(1, console.crop_string_at) .. '...' end
                                if result:len() == 6 and watch.label:lower():find('guid') then result = console.format_guid(result) end
                                printToColor(watch.label .. console.value_bb .. result .. '[-]', watch.player, console.output_color)
                            end
                        else
                            if node ~= watch.value then
                                watch.value = node
                                if type(node) == 'boolean' then
                                    if node then
                                        node = 'true'
                                    else
                                        node = 'false'
                                    end
                                elseif type(node) == 'string' then
                                    if node:len() > console.crop_string_at then node = node:sub(1, console.crop_string_at):gsub('\n', ' ') .. '...' end
                                end
                                printToColor(variable .. ': ' .. console.value_bb .. node .. '[-]', watch.player, console.output_color)
                            end
                        end
                    end
                end
            end
        end
    end

    -- simple swear-blocking validation
    console.add_validation_function(
        function (message)
            local message = message:lower()
            for i, bad_word in pairs({'fuck', 'cunt'}) do
                if message:find(bad_word) then
                    return false, "No swearing!"
                end
            end
            return true
        end
    )

    -- End of exposed methods.  You shouldn't need to interact with anything below (under normal circumstances)


    -- override default prompt with one which displays current table
    function console.display_prompt(player)
        printToColor(console.cd .. ' ' .. console.command_char..console.command_char, player.color, console.prompt_color)
    end


    -- console++ follows

    console.cd = console.seperator
    console.hidden_globals = {}
    console.hide_globals(console.builtin_path)

    function console.is_hidden(label)
        for _, globals in pairs(console.hidden_globals) do
            if globals[label] then
                return true
            end
        end
        return false
    end

    function console.escape_bb(s)
        local s = tostring(s)
        if s == '' then
            return ''
        else
            local r = ''
            for c = 1, s:len() do
                local char = s:sub(c, c)
                if char == '[' then
                    r = r .. '[\u{200B}'
                elseif char == ']' then
                    r = r .. '\u{200B}]'
                else
                    r = r .. char
                end
            end
            return r
        end
    end

    function console.format_guid(guid)
        return console.guid_bb .. '⁅' .. guid .. '⁆[-]'
    end

    function console.fill_path(path)
        local path = path
        local filter = nil
        if path == nil then
            return console.cd, filter
        end
        local c = path:len()
        if path:sub(c) ~= console.seperator then
            local found = false
            while c > 0 do
                local char = path:sub(c, c)
                if char == console.wildcard then
                    found = true
                elseif char == console.seperator then
                    break
                end
                c = c - 1
            end
            if found then
                filter = '^'
                for i = c + 1, path:len() do
                    local char = path:sub(i, i)
                    if char == console.wildcard then
                        filter = filter .. '.*'
                    else
                        filter = filter .. char
                    end
                end
                filter = filter .. '$'
                path = path:sub(1, c)
            end
        end
        if path:sub(1,1) == console.seperator then
            return path, filter
        else
            return console.cd .. path, filter
        end
    end

    function console.node_from_path(path)
        local node = _G
        local id = {''}
        local parent = {nil}
        local found = true
        local depth = 0
        local stack = {}
        local hidden = nil
        local ends_with_table = {true}
        if path == 'true' then
            node = true
        elseif path == 'false' then
            node = false
        elseif path ~= console.seperator then
            for i, part in ipairs(console.split(path, console.seperator)) do
                if part == '..' then
                    if depth > 0 then
                        node = table.remove(parent)
                        table.remove(id)
                        table.remove(stack)
                        table.remove(ends_with_table)
                        depth = depth - 1
                    end
                elseif part == '.' then
                    ; -- do nothing, . = where we are
                elseif part == console.result then
                    table.insert(parent, node)
                    table.insert(id, part)
                    table.insert(stack, part)
                    node = console.returned_value
                    table.insert(ends_with_table, type(node) == 'table')
                    depth = depth + 1
                elseif node[part] ~= nil then
                    table.insert(parent, node)
                    table.insert(id, part)
                    table.insert(stack, part)
                    node = node[part]
                    table.insert(ends_with_table, type(node) == 'table')
                    depth = depth + 1
                elseif node == _G and console.hidden_globals[part] then
                    hidden = console.hidden_globals[part]
                else
                    table.insert(id, part)
                    found = false
                    break
                end
            end
        end
        path = ''
        for i, part in ipairs(stack) do
            path = path .. console.seperator .. part
        end
        if table.remove(ends_with_table) then
            path = path .. console.seperator
        end
        return node, table.remove(id), table.remove(parent), found, path, hidden
    end


    -- commands

    console.add_admin_command('cd', '[<table>]',
        'Display current table or change current table',
        function (player, path)
            if path == nil then
                return console.cd
            else
                path = tostring(path)
            end
            local location = console.fill_path(path)
            local node, id, parent, found, location = console.node_from_path(location)
            local text = nil
            if node ~= nil and found and type(node) == 'table' then
                console.cd = location
                if not console.in_command_mode[player.steam_id] then text = console.cd end
            else
                text = console.error_bb .. '<not found>[-]'
            end
            return text, false
        end
    )
    console.add_admin_command('cd..', '', 'Change current table to parent table.', 'cd', {'..'})

    console.add_admin_command('ls', '[' .. console.option .. '?afotv] [' .. console.option .. 'r[#]] [<table>]',
        'Display variables in current table or specified table',
        function (player, ...)
            local help_details = console.header_bb .. 'Options[-]\n' ..
                'Show:\n '..console.option..'f functions\n '..console.option..'o objects\n '..
                console.option..'v variables (defaults to on)\n '..console.option..'t tables (defaults to on)\n '..
                console.option..'a all\n\n' ..console.option..'r[#] recurse [# layers if specified]'
            local path = console.cd
            local display_functions = false
            local display_objects = false
            local display_variables = false
            local display_tables = false
            local display_all = false
            local recursions_left = 0
            for i, arg in ipairs({...}) do
                arg = tostring(arg)
                if arg:len() > 1 and arg:sub(1,1) == console.option then
                    local c = 2
                    while c <= arg:len() do
                        local option = arg:sub(c,c)
                        if option == 'f' then
                            display_functions = not display_functions
                        elseif option == 'o' then
                            display_objects = not display_objects
                        elseif option == 'v' then
                            display_variables = not display_variables
                        elseif option == 't' then
                            display_tables = not display_tables
                        elseif option == 'a' then
                            display_all = not display_all
                        elseif option == 'r' then
                            local n = ''
                            local j = c + 1
                            while j <= arg:len() do
                                local char = arg:sub(j, j)
                                if char:match('%d') then
                                    n = n .. char
                                else
                                    break
                                end
                                j = j + 1
                            end
                            c = j - 1
                            if n == '' then
                                recursions_left = 20
                            else
                                recursions_left = tonumber(n)
                            end
                        elseif option == '?' or option == 'h' then
                            return help_details
                        else
                            return console.error_bb .. "<option '" .. console.option .. option .. "' not recognized>[-]\n"
                        end
                        c = c + 1
                    end
                else
                    path = arg
                end
            end
            local default_variables = not (display_tables or display_objects or display_functions or display_variables)
            if display_functions or display_objects or display_variables then
                display_tables = not display_tables
            end
            if display_all then
                display_functions = true
                display_objects = true
                display_variables = true
                display_tables = true
            elseif default_variables then
                display_functions = false
                display_objects = false
                display_variables = true
                display_tables = true
            end
            local location, filter = console.fill_path(path)
            return console.ls(player, location, filter, display_functions, display_objects, display_variables, display_tables, recursions_left)
        end
    )
    console.add_admin_command('dir', nil, nil, 'ls')
    console.add_admin_command(console.result, '', "Calls 'ls "..console.option.."a "..console.result.."'", 'ls', {console.option..'a', console.result})

    function console.ls(player, path, filter, display_functions, display_objects, display_variables, display_tables, recursions_left, indent)
        local text = ''
        local indent = indent or ''
        local node, id, parent, found, location, hidden = console.node_from_path(path)
        local paths = {}
        if node ~= nil and (found or hidden) then
            if type(node) == 'table' then
                local tables = {}
                local entries = {}
                for k, v in pairs(node) do
                    if (node ~= _G or (not hidden and not console.is_hidden(k)) or (hidden and hidden[k])) and (filter == nil or k:match(filter)) then
                        if type(v) == 'table' then
                            local t = console.table_bb .. k .. '[-]'
                            table.insert(tables, t)
                            paths[t] = path .. console.seperator .. k
                        else
                            if type(v) == 'function' then
                                if display_functions then
                                    table.insert(entries, console.function_bb .. k .. '[-]()')
                                end
                            elseif type(v) == 'userdata' then
                                if display_objects then
                                    local tag = tostring(v)
                                    if tag:find('(LuaGameObjectScript)') and not tag:gsub('(LuaGameObjectScript)',''):find('Script ') then
                                        tag = v.tag .. ' ' .. console.format_guid(v.getGUID())
                                    end
                                    if type(k) == 'number' and math.floor(k) == k then k = string.format('%04d', k) end
                                    table.insert(entries, console.object_bb .. k .. '[-]: '  .. tag)
                                end
                            elseif display_variables then
                                if type(v) == 'boolean' then
                                    if v then
                                        v = 'true'
                                    else
                                        v = 'false'
                                    end
                                    table.insert(entries, k .. ': ' .. console.boolean_bb .. v .. '[-]')
                                else
                                    local is_guid = false
                                    if type(v) == 'string' then
                                        if v:len()> console.crop_string_at then v = v:sub(1, console.crop_string_at):gsub('\n', ' ') .. '...' end
                                        if type(k) == 'string' and k:lower():find('guid') and v:len() == 6 then
                                            is_guid = true
                                        end
                                    end
                                    if is_guid then
                                        table.insert(entries, k .. ': ' .. console.format_guid(v) .. '[-]')
                                    else
                                        table.insert(entries, k .. ': ' .. console.value_bb .. console.escape_bb(v) .. '[-]')
                                    end
                                end
                            end
                        end
                    end
                end
                local cmp = function (a, b)
                    if not a then
                        return true
                    elseif not b then
                        return false
                    else
                        local la = a:len()
                        local lb = b:len()
                        local c = 1
                        repeat
                            if c > la and c <= lb then
                                return true
                            elseif c > lb and c <= la then
                                return false
                            elseif c > la then
                                return false
                            else
                                local ba = a:sub(c, c):byte()
                                local bb = b:sub(c, c):byte()
                                if ba < bb then
                                    return true
                                elseif bb < ba then
                                    return false
                                end
                            end
                            c = c + 1
                        until false
                    end
                end
                table.sort(tables, cmp)
                table.sort(entries, cmp)
                local cr = ''
                if display_tables then
                    for i, t in ipairs(tables) do
                        text = text .. cr .. indent .. t .. console.seperator
                        if recursions_left ~= 0 then
                            text = text .. '\n' .. console.ls(player, paths[t], filter,
                                display_functions, display_objects, display_variables, display_tables,
                                recursions_left-1, indent..console.indent)
                        end
                        cr = '\n'
                    end
                    if node == _G and not hidden then
                        for label, _ in pairs(console.hidden_globals) do
                            if (filter == nil or label:match(filter)) then -- and label ~= console.builtin_path
                                text = text .. cr .. indent .. console.hidden_bb .. label .. console.seperator .. '[-]'
                                cr = '\n'
                            end
                        end
                    end
                end
                for _, entry in ipairs(entries) do
                    text = text .. cr .. indent .. entry
                    cr = '\n'
                end
            elseif type(node) == 'userdata' then
                local tag = tostring(node)
                if tag ~= 'null' and tag:find('(LuaGameObjectScript)') and not tag:gsub('(LuaGameObjectScript)',''):find('Script ') then
                    tag = node.tag .. ' ' .. console.format_guid(node.getGUID())
                end
                text = indent .. console.object_bb .. id .. '[-]: ' .. tag
            elseif type(node) == 'function' then
                text = indent .. console.function_bb .. id .. '[-]()'
            elseif type(node) == 'boolean' then
                if node then
                    text = indent .. id .. ': ' .. console.boolean_bb .. 'true[-]'
                else
                    text = indent .. id .. ': ' .. console.boolean_bb .. 'false[-]'
                end
            else
                if type(id) == 'string' and id:lower():find('guid') and type(node) == 'string' and node:len() == 6 then
                    text = indent .. id .. ': ' .. console.format_guid(node) .. '[-]'
                else
                    text = indent .. id .. ': ' .. console.value_bb .. console.escape_bb(node) .. '[-]'
                end
            end
        else
            text = indent .. console.error_bb .. '<not found>[-]'
        end
        return text
    end

    console.add_admin_command('call', '<function> [<parameter>...]',
        'Call function with parameters and display result.',
        function (player, ...)
            local path = nil
            local parameters = {}
            for i, arg in ipairs({...}) do
                if i == 1 then
                    path = tostring(arg)
                else
                    if type(arg) == 'string' then
                        if arg:len() > 2 and arg:sub(1,1) == console.literal then
                            arg = arg:sub(2)
                        else
                            local node, id, parent, found = console.node_from_path(console.fill_path(arg))
                            if node ~= nil and found then
                                arg = node
                            end
                        end
                    end
                    table.insert(parameters, arg)
                end
            end
            if path == nil then
                return console.error_bb .. '<you must supply a function>[-]'
            end
            local location = console.fill_path(path)
            local node, id, parent, found, location = console.node_from_path(location)
            local text = nil
            if node ~= nil and found and type(node) == 'function' then
                console.returned_value = node(unpack(parameters))
                text = tostring(console.returned_value)
                if console.deferred_assignment then
                    local da = console.deferred_assignment
                    if da.command == 'set' then
                        if da.parent[da.id] ~= nil then
                            if da.force or type(console.returned_value) == type(da.parent[da.id]) then
                                da.parent[da.id] = console.returned_value
                                text = text .. '\n' .. console.header_bb .. "<set '" .. da.id .. "'>[-]"
                            else
                                text = text .. '\n' .. console.error_bb .. "<cannot set '" .. da.id .. "': it is of type '" .. type(da.parent[da.id]) .. "'>[-]"
                            end
                        else
                            text = text .. '\n' .. console.error_bb .. "<cannot set '" .. da.id .. "': it does not exist>[-]"
                        end
                    elseif da.command == 'add' then
                        if da.parent[da.id] == nil then
                            da.parent[da.id] = console.returned_value
                            text = text .. '\n' .. console.header_bb .. "<added '" .. da.id .. "'>[-]"
                        else
                            text = text .. '\n' .. "<cannot add '" .. da.id .. "': it already exists>[-]"
                        end
                    end
                    console.deferred_assignment = nil
                end
            else
                text = console.error_bb .. '<not found>[-]'
            end
            return text, false
        end
    )

    console.add_admin_command('set', '['..console.option..'f] <variable> [<value>]',
        "Set variable to value.  If no value specified then the next value returned from 'call' is used.\n" ..
            console.option ..'f  force overwrite ignoring type',
        function (player, ...)
            local variable = nil
            local value = nil
            local force = false
            for _, arg in ipairs({...}) do
                if type(arg) == 'string' and arg:len() > 1 and arg:sub(1, 1) == console.option then
                    local c = 2
                    while c <= arg:len() do
                        local option = arg:sub(c, c)
                        if option == "f" then
                            force = not force
                        else
                            return console.error_bb .. "<option '" .. option .. "' not recognized>[-]"
                        end
                        c = c + 1
                    end
                elseif variable == nil then
                    variable = tostring(arg)
                else
                    value = arg
                end
            end
            if variable == nil then
                return console.error_bb .. '<you must supply a variable>[-]'
            end
            variable = console.fill_path(variable)
            local node, id, parent, found = console.node_from_path(variable)
            local text = ''
            if node ~= nil and found then
                if value == nil then
                    console.deferred_assignment = {command = 'set', parent = parent, id = id, force = force}
                    text = id .. ': ' .. console.header_bb .. "<awaiting 'call'>[-]"
                else
                    console.deferred_assignment = nil
                    if type(value) == 'string' and value:len() > 0  then
                        if value:sub(1, 1) == console.literal then
                            value = value:sub(2)
                        else
                            local value_node, value_id, value_parent, value_found = console.node_from_path(value)
                            if value_node ~= nil and value_found then
                                value = value_node
                            else
                                return console.error_bb .. '<not found>[-]'
                            end
                        end
                    end
                    if type(node) == 'boolean' then
                        if not value or tostring(value):lower() == 'false' then
                            value = false
                        else
                            value = true
                        end
                    end
                    if type(node) == type(value) or force then
                        parent[id] = value
                        text = id .. ': ' .. console.value_bb .. tostring(parent[id]) .. '[-]'
                    else
                        return console.error_bb .. "<cannot set '" .. id .. "': it is of type '" .. type(node) .. "'>[-]"
                    end
                end
            else
                text = console.error_bb .. '<not found>[-]'
            end
            return text
        end
    )

    console.add_admin_command('toggle', '<boolean>',
        'Toggle specified boolean variable',
        function (player, variable)
            if variable == nil then
                return console.error_bb .. '<you must supply variable>'
            else
                variable = tostring(variable)
            end
            local variable = console.fill_path(variable)
            local node, id, parent, found = console.node_from_path(variable)
            local text = ''
            if node ~= nil and found then
                if type(node) == 'boolean' then
                    if node then
                        parent[id] = false
                        text = id .. ': ' .. console.value_bb .. 'false[-]'
                    else
                        parent[id] = true
                        text = id .. ': ' .. console.value_bb .. 'true[-]'
                    end
                else
                    text = console.error_bb .. '<can only toggle a boolean>[-]'
                end
            else
                text = console.error_bb .. '<not found>[-]'
            end
            return text
        end
    )
    console.add_admin_command('tgl', nil, nil, 'toggle')

    console.add_admin_command('rm', '<variable>',
        'Remove specified variable',
        function (player, variable)
            if variable == nil then
                return console.error_bb .. '<you must supply variable>'
            else
                variable = tostring(variable)
            end
            local variable = console.fill_path(variable)
            local node, id, parent, found = console.node_from_path(variable)
            local text = ''
            if node ~= nil and found then
                parent[id] = nil
                text = id .. " removed!"
            else
                text = console.error_bb .. '<not found>[-]'
            end
            return text
        end
    )
    console.add_admin_command('del', nil, nil, 'rm')

    console.add_admin_command('add', '<variable> [<value>]',
        "Create a variable set to value.   If no value specified then the next value returned from 'call' is used.",
        function (player, variable, value)
            if variable == nil then
                return console.error_bb .. '<you must supply variable>[-]'
            else
                variable = tostring(variable)
            end
            local variable = console.fill_path(variable)
            local node, id, parent, found = console.node_from_path(variable)
            local text = ''
            if found then
                return console.error_bb .. '<already exists>[-]'
            elseif node == nil or id == '' then
                return console.error_bb .. '<not found>[-]'
            else
                if value == nil then
                    console.deferred_assignment = {command = 'add', parent = node, id = id}
                    text = id .. ': ' .. console.header_bb .. "<awaiting 'call'>[-]"
                else
                    console.deferred_assignment = nil
                    if type(value) == 'string' and value:len() > 0  then
                        if value:sub(1, 1) == console.literal then
                            value = value:sub(2)
                        else
                            local value_node, value_id, value_parent, value_found = console.node_from_path(value)
                            if value_node ~= nil and value_found then
                                value = value_node
                            else
                                return console.error_bb .. '<not found>[-]'
                            end
                        end
                    end
                    node[id] = value
                    text = id .. ': ' .. console.value_bb .. tostring(value) .. '[-]'
                end
            end
            return text
        end
    )

    console.add_admin_command('exec', '['..console.option..'?qsv] <commands>',
        'Execute a series of commands held in a string: commands are seperated by a new line or '..console.command_seperator,
        function (player, ...)
            local help_details = console.option..'q    quiet: will not output anything except final output\n' ..
                                 console.option..'s    silent: will not output anything at all\n'..
                                 console.option..'v    verbose: will output commands as they execute\n'
            local commands = nil
            local verbose = false
            local quiet = false
            local silent = false
            for _, arg in ipairs({...}) do
                if type(arg) == 'string' and arg:len() > 1 and arg:sub(1,1) == console.option then
                    local c = 2
                    while c <= arg:len() do
                        local option = arg:sub(c,c)
                        if option == '?' then
                            return help_details
                        elseif option == 'q' then
                            quiet = not quiet
                        elseif option == 's' then
                            silent = not silent
                        elseif option == 'v' then
                            verbose = not verbose
                        else
                            return console.error_bb .. "<option '" .. option .. "' not recognized>"
                        end
                        c = c + 1
                    end
                elseif commands == nil then
                    commands = tostring(arg)
                end
            end
            if silent then quiet = true end
            if commands:len() > 1 and commands:sub(1, 1) == console.literal then
                commands = commands:sub(2)
            else
                local variable = console.fill_path(commands)
                local node, id, parent, found = console.node_from_path(variable)
                if node ~= nil and found then
                    commands = node
                else
                    return console.error_bb .. '<not found>[-]'
                end
            end
            if commands:find('\n') then
                commands = console.split(commands, '\n')
            else
                commands = console.split(commands, console.command_seperator)
            end
            local end_result = nil
            for _, command_text in ipairs(commands) do
                local command = ''
                local command_function = nil
                local parameters = {player}
                local requires_admin = false
                command, command_function, parameters, requires_admin = console.get_command(command_text, player)
                if command ~= '' then
                    if command_function and (player.admin or not requires_admin) then
                        local response, mute = command_function(unpack(parameters))
                        if response ~= nil or mute ~= nil then
                            if not mute and verbose and not quiet then
                                printToColor('\n'..command_text, player.color, console.command_color)
                            end
                            if response then
                                end_result = response
                                if not quiet then
                                    printToColor(response, player.color, console.output_color)
                                end
                            end
                        end
                    elseif not quiet then
                        if verbose then printToColor('\n'..command_text, player.color, console.command_color) end
                        printToColor(console.error_bb .. "<command '" .. command .. "' not found>[-]", player.color, console.output_color)
                    end
                end
            end
            if end_result and not silent then
                printToColor(end_result, player.color, console.output_color)
            end
        end
    )

    console.add_admin_command('watch', '['..console.option..'?cgp] ['..console.option..'t#] ['..console.option..console.seperator..'<property>] [<variable>]',
        'Watch a variable or object and display it whenever it changes.\n' .. console.hidden_bb ..
        'Requires you to add a '..console.function_bb..'console.update()[-] call to an ' ..
        console.function_bb .. 'onUpdate[-] event in your code.[-]\n',
        function (player, ...)
            local help_details = 'Call without a parameter to display watched items, or with a variable to add it to watch list.\n' ..
                                console.option..'c will clear variable if specified, or all.\n' ..
                                console.option..'g will let you specify an object by its GUID.\n' ..
                                console.option..'t# will throttle output to # seconds.\n' ..
                                console.option..console.seperator..'<property> will watch the property of the variable.\n' ..
                                console.option..'p will pause or unpause watching.\n'
            local path = nil
            local clearing = false
            local throttle = nil
            local pause_changed = false
            local by_guid = false
            local parameters = {}
            local labels = {}
            local property = nil
            for _, arg in ipairs({...}) do
                if type(arg) == 'string' and arg:len() > 1 and arg:sub(1,1) == console.option then
                    local c = 2
                    while c <= arg:len() do
                        local option = arg:sub(c,c)
                        if option == '?' then
                            return help_details
                        elseif option == 'c' then
                            clearing = not clearing
                        elseif option == 'p' then
                            pause_changed = not pause_changed
                        elseif option == 'g' then
                            by_guid = not by_guid
                        elseif option == console.seperator then
                            if arg:len() > c then
                                property = arg:sub(c + 1)
                                c = arg:len() + 1
                            end
                        elseif option == 't' then
                            local n = ''
                            local j = c + 1
                            while j <= arg:len() do
                                local char = arg:sub(j, j)
                                if char:match('[0-9.]') then
                                    n = n .. char
                                else
                                    break
                                end
                                j = j + 1
                            end
                            c = j - 1
                            if n == '' then
                                return console.error_bb .. '<you must provide a throttle duration (in seconds)>[-]'
                            else
                                throttle = tonumber(n)
                            end
                        else
                            return console.error_bb .. "<option '" .. option .. "' not recognized>"
                        end
                        c = c + 1
                    end
                else
                    if path == nil then
                        path = tostring(arg)
                    else
                        local label = tostring(arg)
                        if type(arg) == 'string' then
                            if arg:len() > 2 and arg:sub(1,1) == console.literal then
                                arg = arg:sub(2)
                                label = arg
                            else
                                local node, id, parent, found = console.node_from_path(console.fill_path(arg))
                                if node ~= nil and found then
                                    arg = node
                                end
                            end
                        end
                        table.insert(labels, label)
                        table.insert(parameters, arg)
                    end
                end
            end
            local text = ''
            if pause_changed then
                if console.watch_list_paused then
                    console.watch_list_paused = nil
                    text = text .. console.header_bb .. '<unpaused>[-]'
                else
                    console.watch_list_paused = true
                    text = text .. console.header_bb .. '<paused>[-]'
                end
            end
            if path == nil then
                if throttle ~= nil then
                    text = text .. '\n' .. console.error_bb .. '<you must provide a variable or object>[-]'
                elseif by_guid then
                    text = text .. '\n' .. console.error_bb .. '<you must provide a GUID>[-]'
                elseif clearing then
                    console.watch_list = nil
                    console.watch_list_paused = nil
                    text = text .. '\nWatch list cleared!'
                elseif not pause_changed then
                    if console.watch_list then
                        local watched = {}
                        for label, watch in pairs(console.watch_list) do
                            if watch.player == player.color then
                                table.insert(watched, label)
                            end
                        end
                        table.sort(watched)
                        text = text .. '\n'..console.header_bb..'Watching:[-]'
                        for _, label in ipairs(watched) do
                            local watch = console.watch_list[label]
                            local is_guid = (label:len() == 6 and label:sub(1,1) ~= console.seperator)
                            local node, id, parent, found
                            local prefix
                            text = text .. '\n'
                            if is_guid then
                                prefix =  console.format_guid(label)
                                node = getObjectFromGUID(label)
                                found = tostring(node) ~= 'null'
                            else
                                prefix = label
                                node, id, parent, found = console.node_from_path(label)
                            end
                            if node ~= nil and found then
                                if type(node) == 'userdata' then
                                    prefix = console.object_bb .. prefix .. '[-]'
                                    local position = node.getPosition()
                                    local rotation = node.getRotation()
                                    local p = function (x) return math.floor(x * 100) * 0.01 end
                                    local r = function (x) return math.floor(x + 0.5) end
                                    text = text .. prefix .. console.value_bb .. ' ∡ '..r(rotation.x)..' '..r(rotation.y)..' '..r(rotation.z) .. '[-]'..
                                            console.boolean_bb..'   ⊞  '..p(position.x)..'   '..p(position.y)..'   '..p(position.z)
                                elseif type(node) == 'function' then
                                    local result = node(unpack(console.watch_list[label].parameters))
                                    if watch.property and (type(result) == 'table' or type(result) == 'userdata') then
                                        result = result[watch.property]
                                        if type(result) == 'function' then
                                            result = result()
                                        end
                                    end
                                    result = tostring(result)
                                    if watch.propery and watch.property:lower():find('guid') then
                                        result = console.format_guid(result)
                                    end
                                    if result:len() > console.crop_string_at then result = result:sub(1, console.crop_string_at) .. '...' end
                                    text = text .. watch.label .. console.value_bb .. result .. '[-]'
                                else
                                    if type(node) == 'boolean' then
                                        if node then
                                            node = 'true'
                                        else
                                            node = 'false'
                                        end
                                    elseif type(node) == 'string' then
                                        if node:len() > console.crop_string_at then node = node:sub(1, console.crop_string_at):gsub('\n', ' ') .. '...' end
                                    end
                                    text = text .. prefix .. ': ' .. console.value_bb .. node .. '[-]'
                                end
                            end
                        end
                    else
                        text = text .. "\nWatch list is empty."
                    end
                end
            else
                if not by_guid then
                    path = console.fill_path(path)
                end
                if clearing then
                    local node, id, parent, found
                    if not by_guid then
                        node, id, parent, found, path = console.node_from_path(path)
                    end
                    if console.watch_list[path] then
                        console.watch_list[path] = nil
                        if next(console.watch_list) == nil then
                            console.watch_list = nil
                        end
                        text = text .. '\n' .. console.header_bb.. 'No longer watching:[-] ' .. path
                    else
                        text = text .. '\n' .. console.error_bb .. '<not found>[-]'
                    end
                else
                    local node, id, parent, found
                    if by_guid then
                        node = getObjectFromGUID(path)
                        found = tostring(node) ~= 'null'
                    else
                        node, id, parent, found, path = console.node_from_path(path)
                    end
                    if node ~= nil and found then
                        if console.watch_list == nil then console.watch_list = {} end
                        if throttle == nil then throttle = 0 end
                        console.watch_list[path] = {player=player.color, throttle=throttle, last_check=0, property=property}
                        if type(node) == 'userdata' then
                            console.watch_list[path].position = node.getPosition()
                            console.watch_list[path].rotation = node.getRotation()
                            console.watch_list[path].is_guid  = by_guid
                        elseif type(node) == 'function' then
                            console.watch_list[path].parameters = parameters
                            console.watch_list[path].value = node
                            console.watch_list[path].label = console.function_bb .. path .. '[-]'
                            if property then
                                console.watch_list[path].label = console.watch_list[path].label .. console.seperator .. property
                            end
                            for _, label in ipairs(labels) do
                                console.watch_list[path].label = console.watch_list[path].label .. ' ' .. console.hidden_bb .. label .. '[-]'
                            end
                            console.watch_list[path].label = console.watch_list[path].label .. ': '
                        else
                            console.watch_list[path].value = node
                        end
                        if by_guid then
                            path = console.format_guid(path)
                        end
                        text = text .. '\n' .. console.header_bb .. 'Watching:[-] ' .. path
                    else
                        text = text .. '\n' .. console.error_bb .. '<not found>[-]'
                    end
                end
            end
            if text:len() > 1 and text:sub(1, 1) == '\n' then
                text = text:sub(2)
            end
            return text
        end
    )

    console.add_player_command('shout', '<text>',
        'Broadcast <text> to all players. Colour a section with {RRGGBB}section{-}.',
        function (player, ...)
            local text = player.steam_name .. ': '
            local space = ''
            for _, word in ipairs({...}) do
                text = text .. space .. tostring(word)
                space = ' '
            end
            text = text:gsub('{','[')
            text = text:gsub('}',']')
            broadcastToAll(text, stringColorToRGB(player.color))
            return nil, false
        end
    )

    -- change the command help color so client added commands appear different to console++
    console.set_command_listing_bb('[A0F0C0]')
end

end)
__bundle_register("Console/console", function(require, _LOADED, __bundle_register, __bundle_modules)
if not console then
    console = {}

    -- Change these values as you wish
    console.command_char = '>'
    console.option       = '-'
    console.prompt_color  = {r = 0.8,  g = 1.0,  b = 0.8 }
    console.command_color = {r = 0.8,  g = 0.6,  b = 0.8 }
    console.output_color  = {r = 0.88, g = 0.88, b = 0.88}
    console.invalid_color = {r = 1.0,  g = 0.2,  b = 0.2 }
    console.header_bb       = '[EECCAA]'
    console.error_bb        = '[FF9999]'
    console.inbuilt_help_bb = '[E0E0E0]'
    console.client_help_bb  = '[C0C0FF]'

    -- Exposed methods:

    function console.add_validation_function(validation_function)
        -- Adds a validation function all chat will be checked against:
        -- function(string message) which returns (boolean valid, string response)
        -- If all validation functions return <valid> as true the message will be displayed.
        -- If one returns <valid> as false then its <response> will be displayed to that player instead.
        table.insert(console.validation_functions, validation_function)
    end

    function console.add_player_command(command, parameter_text, help_text, command_function, default_parameters)
        -- Adds a command anyone can use, see below for details
        console.add_command(command, false, parameter_text, help_text, command_function, default_parameters)
    end

    function console.add_admin_command(command, parameter_text, help_text, command_function, default_parameters)
        -- Adds a command only admins can use, see below for details
        console.add_command(command, true, parameter_text, help_text, command_function, default_parameters)
    end

    function console.add_command(command, requires_admin, parameter_text, help_text, command_function, default_parameters)
        -- Adds a command to the console.
        -- command_function must take <player> as its first argument, and then any
        --   subsequent arguments you wish which will be provided by the player.
        -- You may alias an already-present command by calling this with command_function set to
        --   the command string instead of a function.  default_parameters can be set for the alias.
        -- See basic built-in commands at the bottom of this file for examples.
        local commands = console.commands
        local command_function = command_function
        local help_text = help_text
        local parameter_text = parameter_text
        if type(command_function) == 'string' then --alias
            if help_text == nil then
                help_text = commands[command_function].help_text
            end
            if parameter_text == nil then
                parameter_text = commands[command_function].parameter_text
            end
            command_function = commands[command_function].command_function
        end
        console.commands[command] = {
            command_function   = command_function,
            requires_admin     = requires_admin,
            parameter_text     = parameter_text,
            help_text          = help_text,
            help_bb            = console.command_help_bb,
            default_parameters = default_parameters,
        }
    end

    function console.set_command_listing_bb(bb)
        -- Tags commands added after with a bb color for when they are displayed (i.e. with 'help')
        console.command_help_bb = bb
    end

    function console.disable()
        -- Disables console for command purposes, but leaves validation functions running
        console.active = false
    end

    function console.enable()
        -- Enables console commands (console commands are on by default)
        console.active = true
    end

    -- End of exposed methods.  You shouldn't need to interact with anything below (under normal circumstances)


    console.active = true
    console.in_command_mode = {}
    console.commands = {}
    console.validation_functions = {}
    console.set_command_listing_bb(console.inbuilt_help_bb)

    function onChat(message, player)
        if message ~= '' then
            local command = ''
            local command_function = nil
            local parameters = {player}
            local requires_admin = false
            local command_mode = console.in_command_mode[player.steam_id]
            if command_mode and console.active then
                command, command_function, parameters, requires_admin = console.get_command(message, player)
            elseif message:sub(1, 1) == console.command_char and console.active then
                if message:len() > 1 then
                    command, command_function, parameters, requires_admin = console.get_command(message:sub(2), player)
                else
                    command, command_function, parameters, requires_admin = console.get_command(console.command_char, player)
                end
            else
                for i, f in ipairs(console.validation_functions) do
                    local valid, response = f(message)
                    if response == nil then response = '' end
                    if not valid then
                        printToColor(response, player.color, console.invalid_color)
                        return false
                    end
                end
                return true
            end
            if console.active then
                if command_function and (player.admin or not requires_admin) then
                    if command_mode then
                        message = console.command_char .. console.command_char .. message
                    end
                    local response, mute = command_function(unpack(parameters))
                    if response ~= nil or mute ~= nil then
                        if not mute then
                            printToColor('\n'..message, player.color, console.command_color)
                        end
                        if response then
                            printToColor(response, player.color, console.output_color)
                        end
                    end
                    if console.in_command_mode[player.steam_id] then console.display_prompt(player) end
                    return false
                else
                    printToColor('\n'..message, player.color, console.command_color)
                    printToColor(console.error_bb .. "<command '" .. command .. "' not found>[-]", player.color, console.output_color)
                    return false
                end
            end
        end
    end

    function console.get_command(message, player)
        local command_name = ''
        local command_function = nil
        local requires_admin = false
        local parameters = {player}
        for i, part in ipairs(console.split(message)) do
            if i == 1 then
                command_name = part
                local command = console.commands[command_name]
                if command then
                    command_function = command.command_function
                    requires_admin = command.requires_admin
                    if command.default_parameters then
                        for _, parameter in ipairs(command.default_parameters) do
                            table.insert(parameters, parameter)
                        end
                    end
                end
            else
                table.insert(parameters, part)
            end
        end
        return command_name, command_function, parameters, requires_admin
    end

    function console.display_prompt(player)
        printToColor(console.command_char..console.command_char, player.color, console.prompt_color)
    end

    function console.split(text, split_on)
        local split_on = split_on or ' '
        if type(split_on) == 'string' then
            local s = {}
            for c = 1, split_on:len() do
                s[split_on:sub(c,c)] = true
            end
            split_on = s
        end
        local parts = {}
        if text ~= '' then
            local make_table = function(s)
                local entries = console.split(s, ' ,')
                local t = {}
                for _, entry in ipairs(entries) do
                    if type(entry) == 'string' and entry:find('=') then
                        e = console.split(entry, '=')
                        t[e[1]] = e[2]
                    else
                        table.insert(t, entry)
                    end
                end
                return t
            end
            local current_split_on = split_on
            local adding = false
            local part = ""
            local totype = tonumber
            for c = 1, text:len() do
                local char = text:sub(c, c)
                if adding then
                    if current_split_on[char] then -- ended current part
                        if totype(part) ~= nil then
                            table.insert(parts, totype(part))
                        else
                            table.insert(parts, part)
                        end
                        adding = false
                        current_split_on = split_on
                        totype = tonumber
                    else
                        part = part .. char
                    end
                else
                    if not current_split_on[char] then -- found start of part
                        if char == "'" then
                            current_split_on = {["'"] = true}
                            totype = tostring
                            part = ''
                        elseif char == '"' then
                            current_split_on = {['"'] = true}
                            totype = tostring
                            part = ''
                        elseif char == '{' then
                            current_split_on = {['}'] = true}
                            totype = make_table
                            part = ''
                        else
                            part = char
                        end
                        adding = true
                    end
                end
            end
            if adding then
                if totype(part) ~= nil then
                    table.insert(parts, totype(part))
                else
                    table.insert(parts, part)
                end
            end
        end
        return parts
    end


    -- Add basic built-in console commands

    console.add_player_command('help', '[' .. console.option .. 'all|<command>]',
        'Display available commands or help on all commands or help on a specific command.',
        function (player, command)
            if command ~= nil then
                command = tostring(command)
            end
            local make_help = function (command)
                return console.header_bb .. command .. ' ' .. console.commands[command].parameter_text ..
                        '[-]\n' .. console.commands[command].help_text
            end
            local info_mode = false
            if command == console.option..'all' then
                info_mode = true
            end
            if command and console.commands[command] then
                return make_help(command)
            elseif command and not info_mode then
                return console.error_bb .. "<command '" .. command .. "' not found>[-]"
            else
                local msg = console.header_bb .. 'Available commands:[-]'
                local command_list = {}
                for c, _ in pairs(console.commands) do
                    if player.admin or not console.commands[c].requires_admin then
                        if info_mode then
                            table.insert(command_list, make_help(c))
                        else
                            table.insert(command_list, c)
                        end
                    end
                end
                table.sort(command_list)
                local sep
                if info_mode then
                    sep = '\n\n'
                else
                    sep = '\n'
                end
                for _, c in ipairs(command_list) do
                    local cmd = console.commands[c]
                    if cmd then
                        msg = msg .. sep .. cmd.help_bb .. c .. '[-]'
                    else
                        msg = msg .. sep .. c
                    end
                    if not info_mode then sep = ', ' end
                end
                return msg
            end
        end
    )
    console.add_player_command('?', nil, nil, 'help')
    console.add_player_command('info', '', 'Display help on all available commands.', 'help', {console.option..'all'})

    console.add_player_command('exit', '',
        "Leave <command mode> ('" .. console.command_char .. "' does the same).",
        function (player)
            console.in_command_mode[player.steam_id] = nil
            return console.header_bb .. '<command mode: off>[-]'
        end
    )

    console.add_player_command('cmd', '',
        "Enter <command mode> ('" .. console.command_char .. "' does the same).",
        function (player)
            console.in_command_mode[player.steam_id] = true
            return console.header_bb .. '<command mode: on>[-]'
        end
    )

    console.add_player_command(console.command_char, '',
        'Toggle <command mode>',
        function (player)
            console.in_command_mode[player.steam_id] = not console.in_command_mode[player.steam_id]
            if console.in_command_mode[player.steam_id] then
                return console.header_bb .. '<command mode: on>[-]', true
            else
                return console.header_bb .. '<command mode: off>[-]', true
            end
        end
    )

    console.add_player_command('=', '<expression>',
        'Evaluate an expression',
        function (player, ...)
            local expression = ''
            for _, arg in ipairs({...}) do
                expression = expression .. ' ' .. tostring(arg)
            end
            if not player.admin then
                expression = expression:gasub('[a-zA-Z~]', '')
            end
            console.returned_value = dynamic.eval(expression)
            return console.returned_value
        end
    )

    console.add_player_command('echo', '<text>',
        'Display text on screen',
        function (player, ...)
            local text = ''
            for _, arg in ipairs({...}) do
                text = text .. ' ' .. tostring(arg)
            end
            printToColor(text, player.color, console.output_color)
            return false
        end
    )

    console.add_player_command('cls', '',
        'Clear console text',
        function (player)
            return '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' ..
                   '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
        end
    )

    console.add_player_command('alias', '<alias> <command> [<parameter>...]',
        'Create a command alias.',
        function (player, ...)
            local alias
            local command
            local parameters = {}
            for i, arg in ipairs({...}) do
                if i == 1 then
                    alias = tostring(arg)
                elseif i == 2 then
                    command = tostring(arg)
                else
                    table.insert(parameters, arg)
                end
            end
            if not alias then
                return console.error_bb .. '<must provide an alias>[-]'
            --elseif console.commands[alias] ~= nil then
            --    return console.error_bb .. "<command '" .. alias .. "' already exists!>[-]"
            elseif command == nil then
                return console.error_bb .. "<must provide a command>[-]"
            elseif console.commands[command] == nil then
                return console.error_bb .. "<command '" .. command .. "' does not exist>[-]"
            else
                local text = console.header_bb .. alias .. '[-] = ' .. command
                local help_text = console.commands[command].help_text
                if not help_text:find('\nAliased to: ') then
                    help_text = help_text .. '\nAliased to: ' .. command
                end
                local combined_parameters = {}
                if console.commands[command].default_parameters then
                    for _, parameter in ipairs(console.commands[command].default_parameters) do
                        table.insert(combined_parameters, parameter)
                    end
                end
                for _, parameter in ipairs(parameters) do
                    table.insert(combined_parameters, parameter)
                    text = text .. ' ' .. parameter
                    help_text = help_text .. ' ' .. parameter
                end
                console.add_command(alias, console.commands[command].requires_admin, console.commands[command].parameter_text, help_text, command, combined_parameters)
                return text
            end
        end
    )

    -- change the command help color so client added commands appear different to in-built
    console.set_command_listing_bb(console.client_help_bb)
end

end)
return __bundle_require("Global.-1.lua")