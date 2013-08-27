debug = true

-- Setup device
supportedOrientations(LANDSCAPE_ANY)
displayMode(FULLSCREEN)
noSmooth()
rectMode(CORNERS)
--ellipseMode(CENTER)

function setup()    
    scene = Play.initNormal()
    if debug then Debug.setup() end
end

function draw()
    scene:draw()
end

function touched(t)
    scene:touched(t)
end

function collide(c)
    scene:collide(c)
end

saveProjectInfo("Description", "Prototype of a copy of Poing!, the best Breakout clone for the Amiga")
saveProjectInfo("Author", "truc@moechofe.com")

