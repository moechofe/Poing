Board = class()

Board.heightRatio = 9/16

function Board:init(left, right, bottom, top)
    self.left = left
    self.right = right
    self.bottom = bottom
    self.top = top
    
    self.topBody = physics.body( EDGE,
        vec2(left,top),
        vec2(right,top) )
    self.topBody.info = self
    
    self.bottomBody = physics.body( EDGE,
        vec2(left,bottom),
        vec2(right,bottom) )
    self.bottomBody.info = self
    
    self.color = color(40,40,50)
end

function Board:draw()
    pushStyle()
    
    rectMode(CORNERS)
    fill(self.color)
    rect(self.left, self.bottom, self.right, self.top)
    
    popStyle()
end

function Board:throwOut(b, normal, magnitude)
    normal.x = -normal.x
    b:throw(normal * b.speed)
end

function Board:__tostring()
    return "Board"
end
