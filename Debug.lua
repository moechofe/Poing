Debug = class()

function Debug.setup()

    parameter.clear()

    FPS = 0
    parameter.watch("FPS")

    Debug.timeInterval = 0
    Debug.frameCount = 0
    parameter.watch("DeltaTime")

    parameter.boolean("DisplayZones",false)

end

function Debug.draw(board, control)
    
    Debug.frameCount = Debug.frameCount + 1
    Debug.timeInterval = Debug.timeInterval + DeltaTime

    if Debug.timeInterval > 1 then
        FPS = math.floor(Debug.frameCount / Debug.timeInterval)
        Debug.timeInterval = 0
        Debug.frameCount = 0
    end
    
    pushStyle()
    
    if DisplayZones then
        
        -- Debug board
        fill(color(0,255,0,127))
        rect(
            board.left,
            board.bottom,
            board.right,
            board.top)
        
        -- Debug control
        fill(color(255,0,0,127))
        rect(
            control.left,
            control.bottom,
            control.right,
            control.top)

    end

    popStyle()
end
