Play = class()

function Play.initNormal()
    local instance = {}
    setmetatable(instance,Play)
    
    local board = Board.initNormal()
    local wall = Wall.initNormal()
    local pad = Pad.initNormal()
    local control = Control.initNormal(pad)
    
    if debug then
        print(board)
        print(wall)
        print(control)
        print(pad)
    end

    instance:init(board, pad, control, balls, wall)

    return instance
end

function Play:init(board, pad, control, balls, wall)
    self.board = board
    self.pad = pad
    self.control = control
    self.balls = balls
    self.wall = wall
    
    self.color = color(0,0,0)
end

function Play:draw()
    background(self.color)
    
    --self.control:draw()
    self.board:draw()
    self.wall:draw()
    self.pad:draw()
    --self.balls:draw(self.board)

    --tint(255)
    sprite(Asset.bricks[1], 302,300, Brick.scale)

    --sprite("Dropbox:brick-02", 400,300,Brick.width*scale)
    
    if debug then Debug.draw(self.board, self.control) end
end

function Play:touched(t)
    self.control:touched(t)
end
