Pad = class()

Pad.thinRatio = 0.01
Pad.sizeRatio = 0.1

Pad.color = color(255,255,255)

function Pad:init(left, right, bottom, top, invertSide)
    self.sizeRatio = Pad.sizeRatio
    self.size = math.floor(self.sizeRatio * (top - bottom))
    self.thin = math.floor(self.thinRatio * (right - left))
    
    if invertSize then
    else
        self.pos = vec2(
            right - math.floor(self.thin * 1.3),
            bottom + math.floor((top - bottom) / 2) )
    end
end

function Pad:draw()
    pushStyle()
    
    print(self.pos, self.thin, self.size)
    fill(Pad.color)
    rectMode(CENTER)
    rect(self.pos.x, self.pos.y, self.thin, self.size)
    
    popStyle()
end
