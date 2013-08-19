Pad = class()

Pad.spaceRatio = 0.008
Pad.sizeRatio = 0.14
Pad.thickRatio = 0.007

function Pad:init(column, bottom, top, width)
    self.column = column
    self.bottom = bottom
    self.top = top
    
    local height = top - bottom
    
    self.pos = bottom + math.floor(height / 2)
    
    self.size = math.floor((height * Pad.sizeRatio) / 2)
    
    self.thick = math.floor((width * Pad.thickRatio) / 2)
    
    self.color = color(255,255,255)
end

function Pad:draw()
    pushStyle()
    
    rectMode(RADIUS)
    fill(self.color)
    rect(self.column, self.pos, self.thick, self.size)
    
    popStyle()
end

function Pad:moveTo(y)
    self.pos = y
end

function Pad:limit(y)
    return math.min(math.max(y, self.bottom + self.size), self.top - self.size)
end
