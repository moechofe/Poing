Loading = class()

function Loading:init()
    self.step = "composition"
end

function Loading:composition()
    local next_scene = Composition.setup()
    if next_scene then scene = next_scene return end
    self.step = "asset"
end

function Loading:asset()
    if Asset.generate() then self.step = "finish" end
end

function Loading:finish()
    scene = Play.initNormal()
end

function Loading:draw()
    self[self.step](self)
    
    -- TODO: Display a logo, a loading bar...
end

function Loading:touched(t)
end
