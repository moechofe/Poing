Pad = class()

Pad.color = color(255)
Pad.colorBorder = color(239)

function Pad.initNormal()
    local instance = {}
    setmetatable(instance,Pad)
    
    instance:init()
    
    return instance
end

function Pad:init()

    self.column = self.left + math.floor((self.right - self.left) / 2)
    self.pos = self.bottom + math.floor(self.height / 2)

end

function Pad:draw()
    pushStyle()
    
    spriteMode(CENTER)
    sprite(Asset.pad,self.column,self.pos,self.thickness,self.size)
    
    popStyle()
end

function Pad:moveTo(y)
    self.pos = y
end

function Pad:limit(y)
    return math.min(math.max(y, self.bottom + self.halfSize), self.top - self.halfSize)
end

function Pad:__tostring()
    return "Pad: "..self.left.."x"..self.bottom.."x"..self.right.."x"..self.top.." size: "..self.size.."x"..self.thickness
end
