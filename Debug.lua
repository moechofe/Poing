Debug = class()

Debug.contacts = {}

function Debug.setup()

    parameter.clear()

    FPS = 0
    parameter.watch("FPS")

    Debug.timeInterval = 0
    Debug.frameCount = 0
    parameter.watch("DeltaTime")

    parameter.boolean("DisplayZones",true)
    parameter.boolean("DisplayContacts",true)

end

function Debug.draw(pad)
    
    Debug.frameCount = Debug.frameCount + 1
    Debug.timeInterval = Debug.timeInterval + DeltaTime

    if Debug.timeInterval > 1 then
        FPS = math.floor(Debug.frameCount / Debug.timeInterval)
        Debug.timeInterval = 0
        Debug.frameCount = 0
    end
    
    pushStyle()
    
    if DisplayZones then
        
        -- Debug control
        fill(color(255,0,0,127))
        rect(
            pad.zoneLeft,
            pad.zoneBottom,
            pad.zoneRight,
            pad.zoneTop)

    end

    if DisplayContacts then
        
        fill(color(0,255,0))
        for k,v in ipairs(Debug.contacts) do
            for m,n in ipairs(v.points) do
                ellipse(n.x, n.y, 5)
            end
        end
        
    end

    popStyle()
end

function Debug.collide(c)
    if c.state == BEGAN then
        Debug.contacts[c.id] = c
        sound(SOUND_HIT, 2643)
    elseif c.state == MOVING then
        Debug.contacts[c.id] = c
    elseif c.state == ENDED then
        Debug.contacts[c.id] = nil
    end
end

