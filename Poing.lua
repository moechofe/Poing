debug = true

-- Setup device
supportedOrientations(LANDSCAPE_ANY)
displayMode(FULLSCREEN)
noSmooth()
rectMode(CORNERS)

function setup()    
    scene = Loading()
    if debug then Debug.setup() end
end

function draw()
    scene:draw()
end

function touched(t)
    scene:touched(t)
end

function collide(c)
    if c.state == BEGAN then
        c.bodyA.info:throwOut(c.bodyB.info, c.normal, c.normalImpulse)
    end
end

saveProjectInfo("Description", "Prototype of a copy of Poing!, the best Breakout clone for the Amiga")
saveProjectInfo("Author", "truc@moechofe.com")

