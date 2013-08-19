Control = class()

Control.widthRatio = 0.9
Control.sizeRatio = 0.3

function Control:init(left, right, bottom, top, pad)
    -- XXX: Used?
    self.left = left
    self.right = right
    self.bottom = bottom
    self.top = top
    
    local height = top - bottom
    local width = right - left
    
    self.pos = bottom + math.floor(height / 2)
    self.size = math.floor((height * Control.sizeRatio) / 2)
    self.thick = math.floor(width / 2)
    self.column = left + math.floor(width / 2)
    
    self.pad = pad
    self.touch = nil
    
    self.color = color(0,0,127)
end

function Control:draw()
    pushStyle()
    
    rectMode(RADIUS)
    fill(self.color)
    rect(self.column, self.pos, self.thick, self.size)
    
    popStyle()
end

function Control:touched(t)
    if t.state == BEGAN
    and self.touch == nil
    and t.x >= self.left and t.x <= self.right
    and t.y >= (self.pos - self.size) and t.y <= (self.pos + self.size) then
        self.touch = t.id
        self:apply(t)
    elseif t.state == MOVING
    and self.touch == t.id
    and t.x >= self.left and t.x <= self.right then
        self:apply(t)
    elseif t.state == ENDED
    and self.touch == t.id then
        self.touch = nil
        self:update(t)
    end
end

function Control:apply(t)
    self.pad:moveTo(self.pad:limit(t.y))
end

function Control:update(t)
    self.pos = self.pad:limit(t.y)
end
