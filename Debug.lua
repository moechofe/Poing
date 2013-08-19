Debug = class()

function Debug.setup()

    parameter.watch("FPS")
    FPS = 0

    parameter.watch("DeltaTime")

    Debug.timeInterval = 0
    Debug.frameCount = 0

end

function Debug.draw()
    Debug.frameCount = Debug.frameCount + 1
    Debug.timeInterval = Debug.timeInterval + DeltaTime

    if Debug.timeInterval > 1 then
        FPS = math.floor(Debug.frameCount / Debug.timeInterval)
        Debug.timeInterval = 0
        Debug.frameCount = 0
    end
end
