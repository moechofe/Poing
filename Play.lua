Play = class()

Play.color = color(0)

function Play.initNormal()
local i = {} setmetatable(i,Play)
    
    i.comp, i.pad, i.wall = Comp.initNormal()
    
    i.ball = Ball(450,200)
    
    i.ball:throw(-0.5, 1, 20)

return i end

function Play:draw()
    background(self.color)
    
    self.comp:draw()
    self.pad:draw()
    self.ball:draw()
    
    --self.control:draw()
    --self.board:draw()
    --self.wall:draw()
    --self.pad:draw()
    --self.balls:draw(self.board)

    --sprite("Dropbox:ball", 500,300,12)
    
    if debug then Debug.draw(self.pad) end
end

function Play:touched(t)
    self.pad:touched(t)
end

function Play:collide(c)
    Debug.collide(c)
    
    if c.state == BEGAN then
      --  print("bodyA:",c.bodyA.info," bodyB:",c.bodyB.info,c.position,c.normalImpulse)
        --c.bodyA.info:throwOut(c.bodyB.info)
    end
end
