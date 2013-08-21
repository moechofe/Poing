Control = class()

function Control.initNormal(pad)
    local instance = {}
    setmetatable(instance,Control)
    
    instance:init(pad)
    
    return instance
end

function Control:init(pad)
    self.pad = pad
    
    local pos = Board.bottomWall + Control.halfSize + math.floor((Control.height - 2 * Control.halfSize) / 2)
    self.bottom = pos - Control.halfSize
    self.top = pos + Control.halfSize
end

function Control:touched(t)
    if t.state == BEGAN
    and self.touch == nil
    and t.x >= self.left and t.x <= self.right
    and t.y >= self.bottom and t.y <= self.top then
        self.touch = t.id
        self:apply(t)
    elseif t.state == MOVING
    and self.touch == t.id
    and t.x >= self.left and t.x <= self.right then
        self:apply(t)
    elseif t.state == ENDED
    and self.touch == t.id then
        self.touch = nil
        self:apply(t)
        self:update(t)
    end
end

function Control:apply(t)
    self.pad:moveTo(self.pad:limit(t.y))
end

function Control:update(t)
    local pos = self.pad:limit(t.y)
    self.bottom = pos - Control.halfSize
    self.top = pos + Control.halfSize
end

function Control:__tostring()
    return "Control: "..self.left.."x"..self.bottom.."x"..self.right.."x"..self.top
end
