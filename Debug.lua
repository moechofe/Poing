Debug = class()

Debug.playZonesBoard = color(127,127,255,96)
Debug.playZonedControl = color(255,127,127,96)

function Debug.setup()
    
    parameter.boolean("playDisplayZones", false)
    
    parameter.action("test", function() print(WIDTH) end)
    
end

function Debug.draw()
    pushStyle()
    rectMode(CORNERS)
    
    if playDisplayZones then
        
        fill(Debug.playZonesBoard)
        rect(
            Play.boardView.x,
            Play.boardView.y,
            Play.boardView.z,
            Play.boardView.w)
        
        fill(Debug.playZonedControl)
        rect(
            Play.controlView.x,
            Play.controlView.y,
            Play.controlView.z,
            Play.controlView.w)
        
    end
    
    popStyle()
end
