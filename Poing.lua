DEBUG = true

scene = nil

supportedOrientations(LANDSCAPE_ANY)
noSmooth()

function setup()

    scene = Play.singleNormal()
    
    if DEBUG then Debug.setup() end
    
end

function draw()
    scene:draw()
    
    if DEBUG then Debug.draw() end
end

function touched(t)
    scene:touched(t)
end

function collide(c)
    if c.state == BEGAN then
        c.bodyA.info:throwOut(c.bodyB.info, c.normal, c.normalImpulse)
    end
end
