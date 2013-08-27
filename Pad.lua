Pad = class()

Pad.color = color(255)
Pad.colorBorder = color(239)

function Pad.initNormal()
    local instance = {}
    setmetatable(instance,Pad)
    
    instance:init()
    
    return instance
end

function Pad:init(comp, pos, size, thickness, zoneLeft, zoneRight, left, right, bottom, top, halfSize, zoneHalfSize)
    self.comp = comp

    self.pos = pos
    self.size = size
    self.halfSize = halfSize
    self.zoneHalfSize = zoneHalfSize
    self.thickness = thickness

    self.frame = readImage("Dropbox:pad")
    
    self.zoneLeft = zoneLeft
    self.zoneRight = zoneRight
    --self.zoneHalfSize = math.floor(size / 2)

    self.left = left
    self.right = right
    self.bottom = bottom
    self.top = top
    
    self.body = physics.body(POLYGON,
        vec2(right,top),
        vec2(left,top),
        vec2(left,bottom),
        vec2(right,bottom))
        
    self.body.type = DYNAMIC
    self.body.info = self
    self.body.restitution = 1.0
    self.body.categories = {3}
    self.body.mask = {0}

    self:update(pos)

end

function Pad:draw()
    pushStyle()

    spriteMode(CORNERS)
    sprite(self.frame,
        self.body.points[3].x, self.body.points[3].y,
        self.body.points[1].x, self.body.points[1].y)
    
    popStyle()
end

function Pad:touched(t)
    if t.state == BEGAN
    and self.touch == nil
    and t.x >= self.zoneLeft and t.x <= self.zoneRight
    and t.y >= self.zoneBottom and t.y <= self.zoneTop then
        self.touch = t.id
        --self:moveTo(self:limit(t.y))
    elseif t.state == MOVING
    and self.touch == t.id
    and t.x >= self.zoneLeft and t.x <= self.zoneRight then
        self:moveTo(self:limit(t.y), t)
    elseif t.state == ENDED
    and self.touch == t.id then
        self.touch = nil
        local y = self:limit(t.y)
        self:moveTo(y, t)
        self:update(y)
    end
end

function Pad:update(pos)
    local top = pos + self.halfSize
    local bottom = pos - self.halfSize
        
    --self.body.points[1].y = top
    --self.body.points[2].y = top
    --self.body.points[3].y = bottom
    --self.body.points[4].y = bottom
    
    --print(self.body.points[3])
    
    self.zoneBottom = pos - self.zoneHalfSize
    self.zoneTop = pos + self.zoneHalfSize
end

function Pad:moveTo(y, t)
--    self.body.position.y = y
    print(vec2(t.deltaX, t.deltaY) / DeltaTime)
    
    self.body.linearVelocity = vec2(t.deltaX, t.deltaY) / DeltaTime

end

function Pad:limit(y)
    return math.min(math.max(y, self.comp.boardBottom + self.halfSize), self.comp.boardTop - self.halfSize)
end

function Pad:throwOut(b)
    print("PAD",b)
    b:throw(-b.normal.x, b.normal.y, b.speed)
end

function Pad:__tostring()
    return "Pad"
end

