Comp = class()

Comp.colsSingle = 20
Comp.colsDouble = 14
Comp.rows = 11
Comp.safeZoneSingle = 60 -- Width where no bricks can be put on in pixels.
Comp.safeZoneDouble = 40 -- Ditoo for two players.
Comp.brickWidth = 7
Comp.brickHeight = 11
Comp.brickSpace = 1
Comp.wallThickness = 1
Comp.padThickness = 3
Comp.color = color(239)
Comp.wallForce = 0
Comp.padSizeRatio = 0.16
Comp.padZoneAdditionWidthRatio = 0.02
Comp.padSafeZoneRatio = 0.05
Comp.sizeRatio = 0.015
Comp.ballSize = 3

-- Init a board composition for a normal game.
function Comp.initNormal()
local i = {} setmetatable(i,Comp)

    local control_min_width = Comp.computeControlMinSize()
    local need_width = Comp.computeNeedWidth(Comp.colsSingle, Comp.safeZoneSingle, 1, 1)
    
    -- Compute the max scale possible with the device
    local s = math.floor(WIDTH / need_width)
    -- Find the best scale that fit with the minimum control width.
    while WIDTH - (need_width * s) < control_min_width do s = s - 2 end
    
    i.wallForce = 10
    i.wallLeft = 0
    i.wallRight = Comp.wallThickness * s
    
    i:init(s)
    
    local board_width = need_width * s
    
    local pad_thickness = Comp.padThickness * s
    local pad_size = math.floor(i.boardHeight * Comp.padSizeRatio)
    local center_height = math.floor(HEIGHT / 2)
    local pad_half_size = math.floor((i.boardHeight * Comp.padSizeRatio) / 2)
    local pad_zone_half_size = pad_half_size + math.floor((i.boardHeight * Comp.padSafeZoneRatio) / 2)
    
    local pad = Pad(
        i,
        math.floor(HEIGHT / 2),
        pad_size,
        pad_thickness,
        board_width - math.floor(WIDTH * Comp.padZoneAdditionWidthRatio),
        WIDTH,
        board_width - pad_thickness,
        board_width,
        center_height - pad_half_size,
        center_height + pad_half_size,
        pad_half_size,
        pad_zone_half_size)
        
    local wall = Wall(
        i,
        i.wallRight)

    Ball.scale = s

    physics.gravity(0,0)
    
return i, pad, wall end

-- Init a board composition for a reverse game.
function Comp.initReverse() 
end

-- Init a board composition for a double game.
function Comp.initDouble()
end

function Comp:init(s)
    self.boardHeight = (Comp.brickHeight * Comp.rows + Comp.brickSpace * (Comp.rows + 1)) * s
    
    self.boardBottom = math.floor((HEIGHT - self.boardHeight) / 2)
    self.boardTop = self.boardBottom + self.boardHeight
    
    self.wallBottom = self.boardBottom - Comp.wallThickness * s
    self.wallTop = self.boardTop + Comp.wallThickness * s
    
    self.left = 0
    self.right = WIDTH
    
    self.bodyBottom = physics.body(EDGE, vec2(self.left,self.boardBottom), vec2(self.right,self.boardBottom))
    self.bodyBottom.type = STATIC
    self.bodyBottom.info = self
    self.bodyBottom.restitution = 1.0
    self.bodyBottom.categories = {1}
    self.bodyBottom.mask = {0}
    
    self.bodyTop = physics.body(EDGE, vec2(self.left,self.boardTop), vec2(self.right,self.boardTop))
    self.bodyTop.type = STATIC
    self.bodyTop.info = self
    self.bodyTop.restitution = 1.0
    self.bodyTop.categories = {1}
    self.bodyTop.mask = {0}
end

function Comp:draw()
    fill(self.color)
    rect(self.left, self.wallBottom, self.right, self.boardBottom)
    rect(self.left, self.wallTop, self.right, self.boardTop)
    
    if self.wallForce then rect(self.wallLeft, self.wallBottom, self.wallRight, self.wallTop) end
end

function Comp:throwOut(b)
    print("COMP:",b,"bounciness",self.bodyTop.restitution)
    b:throw(b.normal.x, -b.normal.y, b.speed)
end

-- Compute the width and height of the board at scale 1.
function Comp.computeNeedWidth(cols, safe, players, walls)
    return
          Comp.brickWidth * cols
        + Comp.brickSpace * (cols + 1)
        + safe * players
        + Comp.wallThickness * walls
        + Comp.padThickness * players
end
    
-- Determine the space for the control width need to put fingers.
function Comp.computeControlMinSize()
    if WIDTH < 1024 then return 60
    elseif WIDTH < 2048 then return 120
    else return 240 end
end

function Comp:__tostring()
    return "Comp"
end
