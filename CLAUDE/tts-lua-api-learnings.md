# floating text that is perpendicular to the "front" as if you were facing the model parallel to the ground

local object = spawnObject({
type = "rpg_BEAR",

        position = {0, 3, 0},
        scale = {2, 2, 2},
        sound = false,
        -- callback_function = function(spawned_object)
        --     log(spawned_object.getBounds())
        -- end
    })

    print(object.getGUID())


    object.UI.setXml('<Text rotation="-90 0 0" fontSize="26" position="-100 0 -100" color="red">●●●○○○</Text>')
