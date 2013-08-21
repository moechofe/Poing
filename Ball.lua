Ball = class()

Ball.sizeRatio = 0.015
Ball.max = 1

function Ball:init(height)
    self.used = true
    
    self.size = math.floor(height * Ball.sizeRatio)
    
    self.speed = 1
    
    self.color = color(255,255,255)
    
    self.body = physics.body(CIRCLE, self.size / 2)
    self.body.x = 300
    self.body.y = 500
    self.body.gravityScale = 0
    self.body.bullet = true
    self.body.info = self

    self:throw(vec2(0,1) * self.speed)
end

function Ball:throwOut(b, normal, magnitude)
    normal.x = -normal.x
    self:throw(normal * self.speed)
end

function Ball:throw(v)
    self.body:applyForce(v)
end

function Ball:draw()
    pushStyle()
   
    ellipseMode(CENTER)
    fill(self.color)
    ellipse(self.body.x, self.body.y, self.size)
   
    popStyle()
end

function Ball:__tostring()
    return "Ball"
end

Balls = class()

function Balls:init(height)
    for i=1,Ball.max do
        table.insert(self, Ball(height))
    end
end

function Balls:draw(board)
    for i,b in ipairs(self) do
        b:draw()
    end
end
