Play = class()

function Play.singleNormal()
    local instance = {}
    setmetatable(instance,Play)

    local boardHeight = math.floor(HEIGHT * Board.heightRatio)

    local columnBoardControl = math.floor(WIDTH * Control.widthRatio)
    local rowBoardTurntable = math.floor((HEIGHT - boardHeight) / 2)
    local rowBoardScore = rowBoardTurntable + boardHeight
    
    local columnPad = columnBoardControl - math.floor(columnBoardControl * Pad.spaceRatio)

    local board = Board(
        0,
        columnBoardControl,
        rowBoardTurntable,
        rowBoardScore )
    
    local pad = Pad(
        columnPad,
        rowBoardTurntable,
        rowBoardScore,
        columnBoardControl )

    local control = Control(
        columnBoardControl,
        WIDTH,
        rowBoardTurntable,
        rowBoardScore,
        pad )
    
    local balls = Balls(boardHeight)

    instance:init(board, pad, control, balls)

    return instance
end

function Play:init(board, pad, control, balls)
    self.board = board
    self.pad = pad
    self.control = control
    self.balls = balls
    
    self.color = color(0,0,0)
end

function Play:draw()
    background(self.color)
    
    self.control:draw()
    self.board:draw()
    self.pad:draw()
    self.balls:draw(self.board)
end

function Play:touched(t)
    self.control:touched(t)
end
