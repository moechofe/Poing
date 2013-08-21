Wall = class()

Wall.color = color(239)

function Wall.initNormal()
    local instance = {}
    setmetatable(instance,Wall)
    
    instance.left = 0
    instance.right = Wall.thickness
    
    instance:init()
    
    return instance
end

function Wall:init()
    self.force = 10
end

function Wall:draw()
    pushStyle()

    fill(self.color)
    rectMode(CORNERS)
    rect(self.left,self.bottom,self.right,self.top)

    popStyle()
end

function Wall:__tostring()
    return "Wall: "..self.left.."x"..self.bottom.."x"..self.right.."x"..self.top
end
    
