Play = class()

Play.boardRatio = 9/16
Play.clearColor = color(0,0,0)

Play.controlInvertSide = false
Play.controlSize = 0.08

Play.boardView = vec4()
Play.boardWidth = 0
Play.boardHeight = 0
Play.boardTop = 0
Play.controlView = vec4()

function Play.setup()

    local controlWidth = math.floor(WIDTH * Play.controlSize)
    Play.boardWidth = WIDTH - controlWidth
    Play.boardHeight = math.floor(WIDTH * Play.boardRatio)
    Play.boardTop = math.floor((HEIGHT - Play.boardHeight) / 2)

    if Play.controlInvertSide then
    else
        Play.controlView.x = Play.boardWidth
        Play.controlView.z = Play.boardWidth + controlWidth
        Play.controlView.y = Play.boardTop
        Play.controlView.w = Play.boardTop + Play.boardHeight
        
        Play.boardView.x = 0
        Play.boardView.z = Play.boardWidth
        Play.boardView.y = Play.boardTop
        Play.boardView.w = Play.boardTop + Play.boardHeight
    end
    
end

function Play:init()
    self.pad = Pad(
        Play.boardView.x,
        Play.boardView.z,
        Play.boardView.y,
        Play.boardView.w)
end

function Play:draw()
    background(Play.clearColor)
    
    self.pad:draw()
end
