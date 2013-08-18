-- Poing!
local DEBUG = true

supportedOrientations(LANDSCAPE_ANY)

local play = nil
local scene = nil

function setup()
    
    Play.setup()
    
    play = Play()
    
    if DEBUG then Debug.setup() end
    
    scene = play
end

function draw()
    scene:draw()
    
    if DEBUG then Debug.draw() end
end

function touched(t)
    print(t.x, t.y)
end
