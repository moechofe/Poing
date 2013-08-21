Board = class()

Board.color = color(239)

function Board.initNormal()
    local instance = {}
    setmetatable(instance,Board)
    
    instance.left = 0
    instance.right = Board.width
    
    return instance
end

function Board:draw()
    pushStyle()
    
    rectMode(CORNERS)
    fill(Board.color)
    rect(0,self.top,self.right,self.topWall)
    rect(0,self.bottom,self.right,self.bottomWall)
    
    popStyle()
end

function Board:throwOut(b, normal, magnitude)
    normal.x = -normal.x
    b:throw(normal * b.speed)
end

function Board:__tostring()
    return "Board: "..self.left.."x"..self.bottom.."x"..self.right.."x"..self.top
end
