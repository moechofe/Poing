Asset = {}

Asset.step = 1
Asset.stepMax = 2

Asset.pad = nil
Asset.bricks = {}

function Asset.generate()
    Asset["step"..Asset.step]()
    Asset.step = Asset.step + 1
    if Asset.step > Asset.stepMax then return true
    else return false end
end

function Asset.step1()
    Asset.pad = readImage("Dropbox:pad")
end

function Asset.step2()
    Asset.bricks[1] = readImage("Dropbox:brick-01")
end
