# TTS Mod Context Documentation

## Overview

The TTS (Tabletop Simulator) mod `tts_lua_code/mod.lua` is a comprehensive Lua script that integrates with the OPR Army Forge to TTS web tool. It enables users to import army definitions from the web tool and assign them to physical models in Tabletop Simulator, providing rich game mechanics and status tracking.

## Architecture

The mod operates in two distinct phases:

### Phase 1: Army Loading

1. User inputs URL from web tool via TTS UI
2. Mod fetches army data using `WebRequest.get()`
3. JSON response parsed and converted to internal format
4. Dynamic UI cards generated for unit/model selection

### Phase 2: Model Assignment

1. User selects model definition from UI cards
2. Assignment mode activated with model data cached
3. User assigns to TTS objects via hotkey or pickup detection
4. Complete Lua script injected into each assigned model

## Data Flow

```
Web Tool URL → WebRequest.get() → handleResponse() → createCards() → UI Display

User Selection → beginAssignment() → Cache Model Data → Assignment Trigger

assignNameAndDescriptionToObjects() → Inject perModelCode → Tag & Configure
```

### Key Data Structures

**Army Data Format:**

```lua
{
  listId = "unique_id",
  gameSystem = "gf|gff|aof|aofs|aofr",
  listName = "Army Name",
  units = {
    {
      name = "Unit Name",
      unitId = "unit_id",
      modelDefinitions = {
        {
          name = "Model Name",
          loadoutCSV = "Equipment CSV",
          ttsNameOutput = "Formatted Name",
          ttsDescriptionOutput = "Formatted Description",
          originalToughValue = number,
          originalCasterValue = number
        }
      }
    }
  }
}
```

**Model Memo State:**

```lua
{
  isActivated = false,
  isShaken = false,  -- GF/AOF/AOFR only
  isStunned = false, -- GFF/AOFS only
  gameSystem = "system_code",
  unitId = "unit_identifier",
  armyId = "army_identifier",
  unitName = "display_name",
  nameToAssign = "formatted_name",
  originalToughValue = number,
  originalCasterValue = number,
  currentToughValue = number,
  currentCasterValue = number,
  armyNameToAssign = "army_name"
}
```

## Per-Model Code System

The most sophisticated aspect is the `perModelCode` string (lines 21-619), a complete Lua script injected into every assigned model. This provides:

### Game Mechanics by System

**Grimdark Future (GF) / Age of Fantasy (AOF) / Age of Fantasy Regiments (AOFR):**

- Wounds = Tough value
- Status: Activated, Shaken
- Name format: "Name\nWounds: X/Y\nSpell Tokens: X/6"

**Grimdark Future Firefight (GFF) / Age of Fantasy Skirmish (AOFS):**

- Wounds = Tough + 5
- Status: Activated, Stunned
- Name format includes Tough rating display

### Interactive Features

**Model Actions (Right-click context menu):**

- `hpUp()` / `hpDown()` - Wound management
- `spellTokensUp()` / `spellTokensDown()` - Spell token management
- `cycleMeasuringRadius()` - Measuring circles (3", 6", 9", 12", 18", 24", 30")
- `cycleShowHideWoundsAndSpellTokens()` - Toggle UI elements

**Unit Actions:**

- `toggleActivated()` - Unit activation status
- `toggleShaken()` / `toggleStunned()` - Status effects
- `selectAllUnit()` - Select all models in unit
- `countUnit()` - Count remaining models

**Army Actions:**

- `deactivateArmy()` - Deactivate entire army
- `armyRefreshSpellTokens()` - Restore spell tokens army-wide
- `measuringOffArmy()` - Remove all measuring circles

### Visual System

**Status Circles:**

- Activated: Green circle (16 steps)
- Shaken: Yellow pentagon (5 steps)
- Stunned: Red hexagon (6 steps)
- Measuring: White circle (64 steps, variable radius)

**Wound/Spell Token UI:**

- Dynamic button generation based on values
- Red buttons for wounds, cyan for spell tokens
- Opacity indicates current vs maximum values
- Scalable layout based on model count

## UI Components

### Dynamic XML Generation

**Layout Structure:**

```
Panel (600x3500) → VerticalScrollView → VerticalLayout
    ↓
Units (VerticalLayout spacing=40)
    ↓
Models (HorizontalLayout spacing=40)
    ↓
Model Cards (Button with VerticalLayout)
```

**Font Scaling:**

- `calculateFontSize(totalModels, startingValue, decreaseAmount)`
- Names: 26 font, -4 per additional model
- Loadouts: 20 font, -2 per additional model

**Special Character Handling:**

- Ampersands wrapped in `<![CDATA[&]]>` for XML safety

## Assignment System

### Trigger Methods

**Method 1: Scripting Hotkeys**

- Key 1: `onScriptingButtonDown(1)` → Assign to selected objects
- Key 2: `onScriptingButtonDown(2)` → Cancel assignment

**Method 2: Pickup Detection**

- `onObjectPickUp()` → Auto-assign to picked up object

### Assignment Process

1. **Cache Model Data:** `beginAssignment()` stores:

   - `nameOfModelAssigning` - Display name
   - `nameToAssign` - Formatted TTS name
   - `descriptionToAssign` - Formatted TTS description
   - `unitIdToAssign` - Unit identifier
   - `originalToughValueToAssign` - Base tough value
   - `originalCasterValueToAssign` - Base caster value

2. **Apply to Objects:** `assignNameAndDescriptionToObjects()`:
   - Set name and description
   - Inject `perModelCode` as Lua script
   - Add tags: `OPRAFTTS_unit_id_X`, `OPRAFTTS_army_id_X`
   - Initialize memo with default state
   - Rotate model (0, 180, 0)
   - Reload model to apply script

## State Management

### Tagging System

- `OPRAFTTS_unit_id_[unitId]` - Groups models by unit
- `OPRAFTTS_army_id_[armyId]` - Groups models by army
- Used by `getAllUnitMates()` and `getAllArmyMates()`

### Global Variables

- `army[]` - Parsed army data from API
- `armyId` - Current army identifier
- `gameSystemToAssign` - Game system code
- `armyNameToAssign` - Army display name
- `oprAfToTtsLink` - Input URL from user
- `notecardGuid` - UI anchor object GUID ('e73b3a')

## Key Functions Reference

### Core Functions

- `onLoad()` - Initialize mod
- `onSubmit()` - Process URL input
- `handleResponse()` - Parse API response
- `createCards()` - Generate selection UI
- `beginAssignment()` - Start model assignment
- `assignNameAndDescriptionToObjects()` - Apply to TTS objects

### Per-Model Functions

- `rebuildName()` - Update model name display
- `rebuildXml()` - Update wound/token UI
- `rebuildContext()` - Update right-click menu
- `rebuildStatusEffectThings()` - Update visual circles

### Utility Functions

- `tablelength()` - Count table entries
- `string:split()` - String splitting
- `isValidJson()` - JSON validation
- `distributeObjects()` - Layout positioning
- `getCircleVectorPoints()` - Circle drawing math

## Integration Points

### Web Tool API

- **Endpoint Pattern:** User-provided URL from web tool
- **Response Format:** JSON with `listId`, `listJson` containing army data
- **Error Handling:** Network errors and malformed JSON detection

### TTS Integration

- **UI System:** XML-based interface with dynamic generation
- **Object System:** Name, description, tags, memo, and script injection
- **Event System:** Button clicks, hotkeys, object pickup detection
- **Visual System:** Vector lines for circles, button UI for counters

### Game System Support

- **GF/AOF/AOFR:** Traditional wound system, Shaken status
- **GFF/AOFS:** Skirmish wound system (Tough+5), Stunned status
- **Universal:** Spell tokens (max 6), measuring tools, activation tracking

## Development Considerations

### Code Structure

- Single file with embedded per-model code string
- Global state management for assignment process
- Event-driven architecture for user interactions
- **Refactored (2025)**: Added helper functions and constants for maintainability

### Performance

- Dynamic UI generation scales with army size
- Vector line calculations for status circles
- JSON parsing and validation for API responses

### Extensibility

- Game system detection drives different mechanics
- Modular function structure for easy enhancement
- Tag-based object organization for batch operations

## Recent Refactoring (2025)

The mod has been significantly refactored to improve maintainability and reduce code duplication:

### Helper Functions Added

**Game System Helpers:**
```lua
function isTraditionalSystem(gameSystem)  -- GF/AOF/AOFR
function isSkirmishSystem(gameSystem)     -- GFF/AOFS
```

**Generic Toggle System:**
```lua
function toggleUnitStatus(statusField, statusName)  -- Unified toggle logic
```

**UI Helpers:**
```lua
function createStatusButton(position, color, opacity, modelSizeY, rowIndex, buttonRowsDistribution)
function updateMemo(updates)  -- Simplified memo updates
```

### Constants Extracted

**Configuration Constants:**
```lua
MEASURING_RADII = {3, 6, 9, 12, 18, 24, 30}
FONT_SCALING = {name_base = 26, name_decrease = 4, loadout_base = 20, loadout_decrease = 2}
BUTTON_CONFIG = {width = 100, height = 100, font_size = 340, wound_spacing = 0.275, row_spacing = 0.35}
COLORS = {wound = {1, 0, 0}, spell = {0, 1, 1}, text = {1, 1, 1}}
GLOBAL_FONT_SCALING = {name_base = 26, name_decrease = 4, loadout_base = 20, loadout_decrease = 2}
```

### Refactoring Benefits

- **~100+ lines eliminated** through deduplication
- **Easier maintenance**: Game system changes, colors, measurements centralized
- **Improved readability**: Clear helper function names vs long conditionals
- **Better extensibility**: Adding new systems/features much simpler
- **Zero functional changes**: All existing behavior preserved

### Key Improvements

1. **Game System Checks**: `if isTraditionalSystem(gameSystem)` vs long OR chains
2. **Toggle Functions**: 3 identical functions → 1 generic + 3 one-liners
3. **Button Creation**: Repetitive createButton calls → single helper function
4. **Measuring Cycling**: Long if-elseif chain → elegant array-based cycling
5. **Magic Numbers**: Hardcoded values → named constants
6. **Assignment Process**: Optimized to prevent unwanted tool switching

## Pointer Mode Preservation (2025)

A critical issue was identified where assigning model data would cause TTS to switch users from pointer mode to measuring mode. The root cause was discovered and fixed through targeted API optimization.

### Root Cause Discovery

**Problem**: Assigning card data to models triggered automatic tool switching from pointer to measuring mode

**Investigation Process**:
1. TTS API research revealed no direct tool control functions (`setPlayerTool()` doesn't exist)
2. Initial complex solutions with delays and batching caused Lua errors
3. **Root cause identified**: `target.reload()` call in assignment function

### The Fix

**Solution**: Remove unnecessary `target.reload()` call from `assignNameAndDescriptionToObjects()`

**Before (Problematic)**:
```lua
for _, target in ipairs(selectedObjects) do
    target.setName(nameToAssign)
    target.setDescription(descriptionToAssign)
    target.setLuaScript(perModelCode)
    target.setTags({})
    target.addTag('OPRAFTTS_unit_id_' .. unitIdToAssign)
    target.addTag('OPRAFTTS_army_id_' .. armyId)
    target.memo = JSON.encode(memoData)
    target.setRotation({0, 180, 0})
    target.reload()  -- ← THIS was causing tool switching!
end
```

**After (Fixed)**:
```lua
for _, target in ipairs(selectedObjects) do
    target.setName(nameToAssign)
    target.setDescription(descriptionToAssign)
    target.setLuaScript(perModelCode)
    target.setTags({})
    target.addTag('OPRAFTTS_unit_id_' .. unitIdToAssign)
    target.addTag('OPRAFTTS_army_id_' .. armyId)
    target.memo = JSON.encode(memoData)
    target.setRotation({0, 180, 0})
    -- target.reload()  -- ← Removed - was unnecessary and problematic
end
```

### Why `reload()` Was Problematic

**What `reload()` does** (from TTS API):
- Deletes and respawns the object instantly
- Invalidates old object reference
- Primarily used for custom object modifications (`setCustomObject()`)
- **Major operation that triggers TTS tool behavior changes**

**Why it wasn't needed**:
- Assignment targets are standard game pieces, not custom objects
- `setLuaScript()` works without reload on standard objects
- Script functionality initializes when first accessed
- TTS auto-refreshes standard objects for most property changes

### Testing Considerations

**Key functionalities to verify after `reload()` removal**:
- ✅ Right-click context menus on assigned models
- ✅ Wound tracking buttons appearing correctly
- ✅ Status effect circles (activated, shaken, stunned)
- ✅ Measuring radius cycling functionality
- ✅ Unit-wide operations (select all, count, toggles)
- ✅ Script initialization and `onLoad()` execution

### Impact

- **✅ Fixed tool switching**: Users stay in pointer mode during assignment
- **✅ Simplified code**: Removed unnecessary complex solutions
- **✅ Maintained functionality**: All existing features work identically
- **✅ Both methods work**: Hotkey assignment and pickup assignment both fixed
- **✅ Performance improvement**: Eliminated heavy object respawn operation

**This was a perfect example of finding the minimal, targeted fix rather than over-engineering a complex solution.**

## Floating UI System (2025)

A new experimental feature was added to replace right-click context menus with floating 3D UI buttons, providing a more modern and accessible interface.

### Implementation Overview

**Problem**: Right-click context menus are hidden and require discovery
**Solution**: Floating XML UI buttons positioned in 3D space near models

### Technical Implementation

**Core Functions**:
```lua
function createFloatingWoundButtons()  -- Generate XML for wound +/- buttons
function rebuildFloatingUI()           -- Update object's UI with new XML
function toggleFloatingUIMode()        -- Switch between floating UI and right-click modes
```

**3D Positioning System**:
```lua
-- Dynamic positioning based on model bounds and scale
local bounds = self.getBoundsNormalized()
local scale = self.getScale()
local forwardOffset = (bounds['size']['z'] / 2) + 0.5  -- In front of model
local heightOffset = bounds['size']['y'] + 0.3         -- Above model base

-- Scale-aware positioning
forwardOffset = forwardOffset / scale['z']
heightOffset = heightOffset / scale['y']
```

**XML Structure**:
```xml
<Panel position="0 Y Z" rotation="0 0 0">
    <HorizontalLayout spacing="10">
        <Button onClick="hpDown" text="-" color="#e74c3c" tooltip="Decrease Wounds"/>
        <Button onClick="hpUp" text="+" color="#27ae60" tooltip="Increase Wounds"/>
    </HorizontalLayout>
</Panel>
```

### User Experience Features

**Toggle System**:
- Right-click menu option: "UI: Floating" / "UI: Menu"
- Dynamically switches between floating buttons and context menu items
- Per-model setting that persists until toggled

**Visual Design**:
- Red "-" button for decreasing wounds
- Green "+" button for increasing wounds
- Tooltips for accessibility
- 35x35 pixel buttons with bold 24pt font
- Positioned in front of model at eye level

**Conditional Display**:
- Only shows for models with wound tracking capability
- Respects existing "Toggle W/SP Count" setting
- Automatically hidden when floating UI is disabled

### Integration Points

**Existing Systems**:
- Integrates with wound tracking (`hpUp()`, `hpDown()` functions)
- Connects to `rebuildXml()` system for show/hide behavior
- Works with game system detection (traditional vs skirmish)

**Rebuild Triggers**:
- `onLoad()` - Initial setup
- `cycleShowHideWoundsAndSpellTokens()` - Visibility toggle
- `toggleFloatingUIMode()` - Mode switching
- All wound-related functions - Updates after changes

### Benefits

- **Accessibility**: Visible buttons vs hidden right-click menus
- **Modern UX**: Contemporary interface patterns
- **VR Compatibility**: 3D UI works better in VR than context menus
- **Discoverability**: Users can see available actions immediately
- **Proof of Concept**: Foundation for expanding other functions to UI

### Future Expansion Potential

This system provides a framework for moving other right-click menu functions to floating UI:
- Spell token management
- Status effects (activated, shaken, stunned)
- Measuring tools
- Unit-wide operations

**Current Status**: Experimental feature, defaulting to enabled (`useFloatingUIButtons = true`)
