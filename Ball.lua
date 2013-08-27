Ball = class()

function Ball:init(x,y)
    
    self.body = physics.body(CIRCLE, math.floor((Comp.ballSize * self.scale) / 2))
    self.body.x = x
    self.body.y = y
    self.body.gravityScale = 0
    self.body.mass = 0.05
    self.body.friction = 0
    self.body.bullet = true
    self.body.info = self
    
    self.frame = readImage("Dropbox:ball")
    
    self.size = Comp.ballSize * self.scale
    
    self.normal = vec2()
end

function Ball:draw()
    spriteMode(CENTER)
    sprite(self.frame, self.body.x, self.body.y, self.size)
end

function Ball:throwOut(s)
    s.throwOut(self)
end

function Ball:throw(x, y, speed)
    print(x,y,speed,self.body.linearVelocity , self.body.angularVelocity)
    self.normal.x = x
    self.normal.y = y
    self.speed = speed
    self.body.linearVelocity = vec2()
    self.body.angularVelocity = 0
    self.body:applyForce(self.normal * self.speed)
    --self.body.linearVelocity = self.normal
    
end

function Ball:__tostring()
    return "Ball:"..self.body.x.."x"..self.body.y
end
