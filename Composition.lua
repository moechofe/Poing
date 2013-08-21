Composition = {}

function Composition.setup()

    -- TODO: remove dobloon values: Wall.bottom = Board.bottomWall

    -- Define original dimensions for some graphics stuff in pixels.
    -- TODO: Make this local.
    Brick.width = 7 -- Width of the brick in pixels.
    Brick.height = 11 -- Height of the brick in pixels.
    Brick.space = 1 -- Space between two bricks in pixels.
    Brick.cols = 20 -- Number of columns of bricks.
    Brick.rows = 11 -- Number of rows of bricks.
    Board.safeWidth = 60 -- Width where no bricks can be put on in pixels.
    
    wall_thickness = 1 -- Width on the destructible wall in pixels.
    pad_thickness = 3 -- Width of the paddle in pixels.

    local board_thickness = 1 -- Height of the top and bottom walls in pixels.

    -- Determine the space for the control width need to put fingers.
    local control_min_width = 240
    if WIDTH < 1024 then control_min_width = 60
    elseif WIDTH < 2048 then control_min_width = 120 end

    -- Compute the width and height of the board at scale 1.
    local board_width
        = Brick.width * Brick.cols
        + Brick.space * (Brick.cols + 2)
        + Board.safeWidth
        + wall_thickness
        + pad_thickness
    local board_height
        = Brick.height * Brick.rows
        + Brick.space * (Brick.rows + 2)
        + board_thickness * 2

    -- Compute the max scale possible with the device
    local max_scale = math.floor(WIDTH / board_width)
    
    -- Find the best scale that fit with the minimum control width.
    scale = max_scale
    while WIDTH - (board_width * scale) < control_min_width do
        scale = scale - 2 end
        
    -- Declare coords values for differents assets.
    Brick.scale = Brick.width * scale
    
    -- Declare coords values for the board.
    Board.width = WIDTH --Board.width = board_width * scale
    Board.bottom = math.floor((HEIGHT - (board_height * scale)) / 2)
    Board.bottomWall = Board.bottom + board_thickness * scale
    Board.top = Board.bottom + (board_height * scale)
    Board.topWall = Board.top - board_thickness * scale

    -- Declare coords valuers for the wall.
    Wall.thickness = wall_thickness * scale
    Wall.bottom = Board.bottomWall
    Wall.top = Board.topWall

    -- Declare the size of the pad.
    Pad.right = board_width * scale
    Pad.left = Pad.right - pad_thickness * scale
    Pad.size = math.floor(board_height * 0.6)
    Pad.halfSize = math.floor(Pad.size / 2)
    Pad.thickness = pad_thickness * scale
    Pad.bottom = Board.bottomWall
    Pad.top = Board.topWall
    Pad.height = Pad.top - Pad.bottom
    
    -- Declare the size of the control.
    Control.left = Pad.right - math.floor(WIDTH * 0.05)
    Control.right = WIDTH
    Control.halfSize = math.floor(board_height * 0.5)
    Control.height = Pad.height

    if debug then
        print("Scale: "..scale)
    end

    -- NOTE: Important check about the height of the screen.
    if Control.height + Control.height * 0.2 > HEIGHT then
        return Error.initHeight() end
    
end
