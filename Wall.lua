Wall = class{}

function Wall:init(comp, column, bottom, top, force)
    self.comp = comp
    self.body = physics.body(EDGE, vec2(column,comp.boardBottom), vec2(column,comp.boardTop))
    self.body.type = STATIC
    self.body.info = self
    self.body.restitution = 1.0
    self.body.categories = {2}
    self.body.mask = {0}
    
    self.force = force
end

function Wall:throwOut(b)
    b:throw(-b.normal.x, b.normal.y, b.speed)
end

function Wall:__tostring()
    return "Wall"
end
