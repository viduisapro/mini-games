namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const gost = SpriteKind.create()
    export const water = SpriteKind.create()
}
namespace StatusBarKind {
    export const snow = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.npc, SpriteKind.ball, function (sprite, otherSprite) {
    if (!(sprites.readDataBoolean(otherSprite, "red") || sprites.readDataBoolean(otherSprite, "blue"))) {
        sprites.changeDataNumberBy(sprite, "snow", 1)
        otherSprite.destroy()
    } else if (sprites.readDataBoolean(sprite, "red") && sprites.readDataBoolean(otherSprite, "blue")) {
        otherSprite.destroy()
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -1
        tiles.placeOnTile(sprite, tiles.getTileLocation(team_1_x, team_1_y))
    } else if (sprites.readDataBoolean(sprite, "blue") && sprites.readDataBoolean(otherSprite, "red")) {
        otherSprite.destroy()
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -1
        tiles.placeOnTile(sprite, tiles.getTileLocation(team_2_x, team_2_y))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    if (!(sprites.readDataBoolean(otherSprite, "red") || sprites.readDataBoolean(otherSprite, "blue"))) {
        sprites.changeDataNumberBy(sprite, "snow", 1)
        otherSprite.destroy()
    } else if (sprites.readDataBoolean(sprite, "red") && sprites.readDataBoolean(otherSprite, "blue")) {
        otherSprite.destroy()
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -1
        tiles.placeOnTile(sprite, tiles.getTileLocation(team_1_x, team_1_y))
    } else if (sprites.readDataBoolean(sprite, "blue") && sprites.readDataBoolean(otherSprite, "red")) {
        otherSprite.destroy()
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, sprite).value += -1
        tiles.placeOnTile(sprite, tiles.getTileLocation(team_2_x, team_2_y))
    }
})
function Block_party_go () {
    tiles.destroySpritesOfKind(SpriteKind.water)
    if (Math.percentChance(50)) {
        tiles.loadMap(tiles.createMap(tilemap`level19`))
    } else {
        tiles.loadMap(tiles.createMap(tilemap`level19`))
    }
    sprites.setDataBoolean(mysprite, "sp", false)
    sprites.setDataNumber(mysprite, "chance", 40)
    game2 = "Block Party"
    tiles.placeOnRandomTile(mysprite, sprites.dungeon.collectibleInsignia)
    sprites.setDataNumber(mysprite, "players", 5)
    for (let value of sprites.allOfKind(SpriteKind.npc)) {
        tiles.placeOnRandomTile(value, sprites.dungeon.collectibleInsignia)
    }
    corlerset()
}
function doSomething3 () {
    pick = randint(1, 6)
    for (let value of sprites.allOfKind(SpriteKind.npc)) {
        if (!(sprites.readDataBoolean(value, "if tutched the grund"))) {
            if (value.tileKindAt(TileDirection.Bottom, assets.tile`myTile7`)) {
                team_red += 1
                sprites.setDataBoolean(value, "if tutched the grund", true)
                sprites.setDataBoolean(value, "red", true)
            } else if (value.tileKindAt(TileDirection.Bottom, assets.tile`myTile9`)) {
                team_blue += 1
                sprites.setDataBoolean(value, "if tutched the grund", true)
                sprites.setDataBoolean(value, "blue", true)
            }
        }
    }
    if (!(sprites.readDataBoolean(mysprite, "if tutched the grund"))) {
        if (mysprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile7`)) {
            team_red += 1
            sprites.setDataBoolean(mysprite, "if tutched the grund", true)
            sprites.setDataBoolean(mysprite, "red", true)
        } else if (mysprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile9`)) {
            team_blue += 1
            sprites.setDataBoolean(mysprite, "if tutched the grund", true)
            sprites.setDataBoolean(mysprite, "blue", true)
        }
    }
    if (sprites.readDataBoolean(mysprite, "if tutched the grund")) {
        if (team_blue == 4 && team_red == 4) {
            start_game = false
        } else if (team_blue < team_red) {
            if (sprites.readDataBoolean(sprites.allOfKind(SpriteKind.npc)[0], "if tutched the grund")) {
                if (sprites.readDataBoolean(sprites.allOfKind(SpriteKind.npc)[0], "red")) {
                    tiles.placeOnRandomTile(sprites.allOfKind(SpriteKind.npc)[0], sprites.dungeon.collectibleInsignia)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[0], "if tutched the grund", false)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[0], "red", false)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[0], "blue", false)
                } else if (sprites.readDataBoolean(sprites.allOfKind(SpriteKind.npc)[pick], "red")) {
                    tiles.placeOnRandomTile(sprites.allOfKind(SpriteKind.npc)[pick], sprites.dungeon.collectibleInsignia)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[pick], "if tutched the grund", false)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[pick], "red", false)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[pick], "blue", false)
                }
            }
        } else if (team_blue > team_red) {
            if (sprites.readDataBoolean(sprites.allOfKind(SpriteKind.npc)[0], "if tutched the grund")) {
                if (sprites.readDataBoolean(sprites.allOfKind(SpriteKind.npc)[0], "blue")) {
                    tiles.placeOnRandomTile(sprites.allOfKind(SpriteKind.npc)[0], sprites.dungeon.collectibleInsignia)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[0], "if tutched the grund", false)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[0], "blue", false)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[0], "red", false)
                } else if (sprites.readDataBoolean(sprites.allOfKind(SpriteKind.npc)[pick], "blue")) {
                    tiles.placeOnRandomTile(sprites.allOfKind(SpriteKind.npc)[pick], sprites.dungeon.collectibleInsignia)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[pick], "if tutched the grund", false)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[pick], "blue", false)
                    sprites.setDataBoolean(sprites.allOfKind(SpriteKind.npc)[pick], "red", false)
                }
            }
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(sprites.readDataBoolean(mysprite, "sp"))) {
        if (mysprite.isHittingTile(CollisionDirection.Bottom)) {
            mysprite.vy = -140
        }
    }
})
function corlerset () {
    for (let value of tiles.getTilesByType(assets.tile`myTile35`)) {
        sprites.setDataNumber(mysprite, "nper", randint(1, 5))
        if (sprites.readDataNumber(mysprite, "nper") == 1) {
            tiles.setTileAt(value, assets.tile`myTile32`)
            tiles.setWallAt(value, true)
        } else if (sprites.readDataNumber(mysprite, "nper") == 2) {
            tiles.setTileAt(value, assets.tile`myTile25`)
            tiles.setWallAt(value, true)
        } else if (sprites.readDataNumber(mysprite, "nper") == 3) {
            tiles.setTileAt(value, assets.tile`myTile29`)
            tiles.setWallAt(value, true)
        } else if (sprites.readDataNumber(mysprite, "nper") == 4) {
            tiles.setTileAt(value, assets.tile`myTile26`)
            tiles.setWallAt(value, true)
        } else if (sprites.readDataNumber(mysprite, "nper") == 5) {
            tiles.setTileAt(value, assets.tile`myTile33`)
            tiles.setWallAt(value, true)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile34`)) {
        sprites.setDataNumber(mysprite, "nper", randint(1, 5))
        if (sprites.readDataNumber(mysprite, "nper") == 1) {
            tiles.setTileAt(value, assets.tile`myTile32`)
            tiles.setWallAt(value, true)
        } else if (sprites.readDataNumber(mysprite, "nper") == 2) {
            tiles.setTileAt(value, assets.tile`myTile25`)
            tiles.setWallAt(value, true)
        } else if (sprites.readDataNumber(mysprite, "nper") == 3) {
            tiles.setTileAt(value, assets.tile`myTile29`)
            tiles.setWallAt(value, true)
        } else if (sprites.readDataNumber(mysprite, "nper") == 4) {
            tiles.setTileAt(value, assets.tile`myTile26`)
            tiles.setWallAt(value, true)
        } else if (sprites.readDataNumber(mysprite, "nper") == 5) {
            tiles.setTileAt(value, assets.tile`myTile33`)
            tiles.setWallAt(value, true)
        }
    }
    sprites.setDataNumber(mysprite, "nper", randint(1, 5))
    if (sprites.readDataNumber(mysprite, "nper") == 1) {
        corlerpicker.setOutline(1, 5)
        corlerpicker.setText("yellow")
        corlerpicker.setFlag(SpriteFlag.Invisible, false)
        doSomething5(assets.tile`myTile32`)
        tilemapstufff = assets.tile`myTile32`
    } else if (sprites.readDataNumber(mysprite, "nper") == 2) {
        corlerpicker.setOutline(1, 7)
        corlerpicker.setText("green")
        corlerpicker.setFlag(SpriteFlag.Invisible, false)
        doSomething5(assets.tile`myTile15`)
        tilemapstufff = assets.tile`myTile15`
    } else if (sprites.readDataNumber(mysprite, "nper") == 3) {
        corlerpicker.setOutline(1, 3)
        corlerpicker.setText("pink")
        corlerpicker.setFlag(SpriteFlag.Invisible, false)
        doSomething5(assets.tile`myTile29`)
        tilemapstufff = assets.tile`myTile29`
    } else if (sprites.readDataNumber(mysprite, "nper") == 4) {
        corlerpicker.setOutline(1, 10)
        corlerpicker.setText("purple")
        corlerpicker.setFlag(SpriteFlag.Invisible, false)
        doSomething5(assets.tile`myTile26`)
        tilemapstufff = assets.tile`myTile26`
    } else if (sprites.readDataNumber(mysprite, "nper") == 5) {
        corlerpicker.setOutline(1, 2)
        corlerpicker.setText("red")
        corlerpicker.setFlag(SpriteFlag.Invisible, false)
        doSomething5(assets.tile`myTile33`)
        tilemapstufff = assets.tile`myTile33`
    }
    info.startCountdown(5)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(sprites.readDataBoolean(mysprite, "sp"))) {
        if (mysprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`)) {
            if (game.ask("Do you want to play", "Dodge Ball?")) {
                dodge_ball_start()
            }
        } else if (mysprite.tileKindAt(TileDirection.Center, assets.tile`myTile27`)) {
            if (game.ask("Do you want to play", "Block Party?")) {
                blockparty()
            }
        }
        ballthore()
    }
})
function blockparty () {
    tiles.loadMap(tiles.createMap(tilemap`level9`))
    tiles.placeOnRandomTile(mysprite, sprites.dungeon.collectibleInsignia)
    game2 = "lobby 5 players"
    for (let value of tiles.getTilesByType(assets.tile`myTile21`)) {
        mySprite5 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.water)
        animation.runImageAnimation(
        mySprite5,
        [img`
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            `,img`
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            `,img`
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            `],
        100,
        true
        )
        tiles.placeOnTile(mySprite5, value)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprites.readDataBoolean(sprite, "blue") && sprites.readDataBoolean(otherSprite, "red")) {
        sprite.destroy()
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.gost)
        mySprite4.setPosition(otherSprite.x, otherSprite.x)
        tron = false
    }
    if (sprites.readDataBoolean(sprite, "red") && sprites.readDataBoolean(otherSprite, "blue")) {
        sprite.destroy()
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.gost)
        mySprite4.setPosition(otherSprite.x, otherSprite.x)
        tron = false
    }
})
info.onCountdownEnd(function () {
    if (game2 == "Dodge Ball") {
        for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
            tiles.setWallAt(value, false)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        game.splash("The barriers have been removed.")
    } else if (game2 == "Block Party") {
        doSomething4()
        if (sprites.readDataNumber(mysprite, "chance") == 40) {
            sprites.setDataNumber(mysprite, "chance", 50)
        } else if (sprites.readDataNumber(mysprite, "chance") == 50) {
            sprites.setDataNumber(mysprite, "chance", 60)
        } else if (sprites.readDataNumber(mysprite, "chance") == 60) {
            sprites.setDataNumber(mysprite, "chance", 70)
        } else if (sprites.readDataNumber(mysprite, "chance") == 70) {
            sprites.setDataNumber(mysprite, "chance", 80)
        }
        next = true
    }
})
function skins () {
    list = [
    img`
        . . . . f f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 d d d d f . . . . 
        . . . . f 5 d f d f d f . . . . 
        . . . . f 5 d f d f d f . . . . 
        . . f f f 5 d d d d d f f f . . 
        . . f a a a a a a a a a a f . . 
        . . f a a a 4 a a 4 a a a f . . 
        . . f d d a 4 4 4 4 a d d f . . 
        . . f d d a 4 4 4 4 a d d f . . 
        . . f d d a a a a a a d d f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . f f f f f f f f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f d d f d f d f . . . . 
        . . . . f d d f d f d f . . . . 
        . . f f f f f f f f f f f f . . 
        . . f 2 4 2 4 2 4 2 4 2 4 f . . 
        . . f 4 2 4 2 4 2 4 2 4 2 f . . 
        . . f d d 2 4 2 4 2 4 d d f . . 
        . . f d d 4 2 4 2 4 2 d d f . . 
        . . f d d 2 4 2 4 2 4 d d f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . f f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 d d d d f . . . . 
        . . . . f 5 d f d f d f . . . . 
        . . . . f 5 d f d f d f . . . . 
        . . f f f d d d d d d f f f . . 
        . . f 4 4 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 4 4 4 f . . 
        . . f d d 4 4 4 4 4 4 d d f . . 
        . . f d d 4 4 4 4 4 4 d d f . . 
        . . f d d 4 4 4 4 4 4 d d f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . f f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 d d d d f . . . . 
        . . . . f 5 d f d f d f . . . . 
        . . . . f 5 d f d f d f . . . . 
        . . f f f d d d d d d f f f . . 
        . . f 2 2 2 2 8 8 2 2 2 2 f . . 
        . . f 2 2 2 2 8 8 2 2 2 2 f . . 
        . . f d d 2 2 8 8 2 2 d d f . . 
        . . f d d 2 2 8 8 2 2 d d f . . 
        . . f d d 2 2 8 8 2 2 d d f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . f f f f f f f f . . . . 
        . . . . f e e e e e e f . . . . 
        . . . . f e e d d d d f . . . . 
        . . . . f d d f d f d f . . . . 
        . . . . f d d f d f d f . . . . 
        . . f f f d d d d d d f f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f d d 5 5 5 5 5 5 d d f . . 
        . . f d d 5 5 5 5 5 5 d d f . . 
        . . f d d 5 5 5 5 5 5 d d f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . f f f f f f f f . . . . 
        . . . . f e e e e e e f . . . . 
        . . . . f e e d d d d f . . . . 
        . . . . f d d f d f d f . . . . 
        . . . . f d d f d f d f . . . . 
        . . f f f d d d d d d f f f . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 4 8 8 4 8 8 8 f . . 
        . . f d d 8 4 4 4 4 8 d d f . . 
        . . f d d 8 4 4 4 4 8 d d f . . 
        . . f d d 8 8 8 8 8 8 d d f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . f f f f f f f f . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f d d f d f d f . . . . 
        . . . . f d d f d f d f . . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f 7 6 7 6 7 6 7 6 7 6 f . . 
        . . f 6 7 6 7 6 7 6 7 6 7 f . . 
        . . f d d 7 6 7 6 7 6 d d f . . 
        . . f d d 6 7 6 7 6 7 d d f . . 
        . . f d d 7 6 7 6 7 6 d d f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . . f f . . f f . . . . . 
        . . . . f 4 4 f f 4 4 f . . . . 
        . . . . f 4 4 4 4 4 4 f . . . . 
        . . . . f e 4 f 4 f e f . . . . 
        . . . . f 4 4 f 4 f 4 f . . . . 
        . . f f f e 4 4 4 4 e f f f . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . . f 4 4 8 8 8 8 8 8 4 4 f . . 
        . . f e e 8 8 8 8 8 8 e e f . . 
        . . f 4 4 8 8 8 8 8 8 4 4 f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . . f f . . f f . . . . . 
        . . . . f c c f f c c f . . . . 
        . . . . f c c c c c c f . . . . 
        . . . . f c 1 3 c 3 1 f . . . . 
        . . . . f c 1 3 c 3 1 f . . . . 
        . . f f f c c c c c c f f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f c c 2 2 2 2 2 2 c c f . . 
        . . f c c 2 2 2 2 2 2 c c f . . 
        . . f c c 2 2 2 2 2 2 c c f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . . f f . . f f . . . . . 
        . . . . f e e f f e 4 f . . . . 
        . . . . f 4 e 4 e e e f . . . . 
        . . . . f e e f e f e f . . . . 
        . . . . f e 4 f e f 4 f . . . . 
        . . f f f e e e 4 e e f f f . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . . f 4 e 8 8 8 8 8 8 4 e f . . 
        . . f e e 8 8 8 8 8 8 e 4 f . . 
        . . f e 4 8 8 8 8 8 8 e e f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . . f 4 e f f 4 e f . . . . 
        . . . . f e e f f e 4 f . . . . 
        . . . . f f f f f f f f . . . . 
        `,
    img`
        . . . . f f f f f f f f . . . . 
        . . . . f 5 7 9 6 a 3 f . . . . 
        . . . . f 5 7 9 6 a 3 f . . . . 
        . . . . f 5 7 f 6 f 3 f . . . . 
        . . . . f 5 7 f 6 f 3 f . . . . 
        . . f f f 5 7 9 6 a 3 f f f . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . . f 2 4 8 8 8 8 8 8 2 4 f . . 
        . . f 2 4 8 8 8 8 8 8 2 4 f . . 
        . . f 2 4 8 8 8 8 8 8 2 4 f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . f f f f f f f f . . . . 
        . . . . f e e e e e e f . . . . 
        . . . . f e e d d d d f . . . . 
        . . . . f d d f d f d f . . . . 
        . . . . f d d f d f d f . . . . 
        . . f f f d d d d d d f f f . . 
        . . f 2 4 5 7 9 8 a 3 2 4 f . . 
        . . f 2 4 5 7 9 8 a 3 2 4 f . . 
        . . f d d 5 7 9 8 a 3 d d f . . 
        . . f d d 5 7 9 8 a 3 d d f . . 
        . . f d d 5 7 9 8 a 3 d d f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . f f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f 5 5 d d d d f . . . . 
        . . . . f 5 5 f d f d f . . . . 
        . . . . f 5 d f d f d f . . . . 
        . . f f f d d d d d d f f f . . 
        . . f 2 4 5 7 9 8 a 3 2 4 f . . 
        . . f 2 4 5 7 9 8 a 3 2 4 f . . 
        . . f d d 5 7 9 8 a 3 d d f . . 
        . . f d d 5 7 9 8 a 3 d d f . . 
        . . f d d 5 7 9 8 a 3 d d f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `,
    img`
        . . . . f f f f f f f f f . . . 
        . . . . f 5 7 9 8 a 3 2 f f . . 
        . . . . f 5 7 9 8 a 3 2 4 f . . 
        . . . . f e e d d d d f f f . . 
        . . . . f e d f d f d f . . . . 
        . . . . f d d f d f d f . . . . 
        . . f f f d d d d d d f f f . . 
        . . f 2 4 5 7 9 8 a 3 2 4 f . . 
        . . f 2 4 5 7 9 8 a 3 2 4 f . . 
        . . f d d 5 7 9 8 a 3 d d f . . 
        . . f d d 5 7 9 8 a 3 d d f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . . . f 6 6 f f 6 6 f . . . . 
        . . . f f e e f f e e f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f f f f f f f . . . 
        `
    ]
    sprites.setDataNumber(mysprite, "skins", 13)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    if (game2 == "Dodge Ball") {
        if (status.spriteAttachedTo().kind() == SpriteKind.npc) {
            if (sprites.readDataBoolean(status.spriteAttachedTo(), "red")) {
                status.spriteAttachedTo().destroy()
                team_red += -1
            } else if (sprites.readDataBoolean(status.spriteAttachedTo(), "blue")) {
                status.spriteAttachedTo().destroy()
                team_blue += -1
            }
        } else {
            if (sprites.readDataBoolean(status.spriteAttachedTo(), "red")) {
                team_red += -1
            } else if (sprites.readDataBoolean(status.spriteAttachedTo(), "blue")) {
                team_blue += -1
            }
            status.spriteAttachedTo().setFlag(SpriteFlag.Invisible, true)
            status.spriteAttachedTo().setFlag(SpriteFlag.Ghost, true)
            controller.moveSprite(status.spriteAttachedTo())
            sprites.setDataBoolean(status.spriteAttachedTo(), "sp", true)
            status.destroy()
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_in) {
        mySprite2.setFlag(SpriteFlag.Invisible, true)
        _in = false
    } else {
        mySprite2.setFlag(SpriteFlag.Invisible, false)
        _in = true
    }
})
scene.onHitWall(SpriteKind.ball, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "red") || sprites.readDataBoolean(sprite, "blue")) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 4 5 7 9 8 a . . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . . 2 4 5 7 9 8 a . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ball)
        mySprite3.setFlag(SpriteFlag.GhostThroughSprites, false)
        sprites.setDataBoolean(mySprite3, "blue", false)
        sprites.setDataBoolean(mySprite3, "red", false)
        mySprite3.ay = 200
        mySprite3.setPosition(sprite.x, sprite.y)
        sprite.destroy()
    }
})
function stuff () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite2.setPosition(34, 17)
    mySprite2.setFlag(SpriteFlag.RelativeToCamera, true)
    mySprite2.setFlag(SpriteFlag.Invisible, true)
    sprites.setDataBoolean(mysprite, "sp", false)
    sprites.setDataSprite(mysprite, "redtx", textsprite.create("red wins", 0, 2))
    sprites.setDataSprite(mysprite, "bluetx", textsprite.create("blue wins", 0, 8))
    sprites.readDataSprite(mysprite, "redtx").setPosition(50, 62)
    sprites.readDataSprite(mysprite, "redtx").setFlag(SpriteFlag.RelativeToCamera, true)
    sprites.readDataSprite(mysprite, "redtx").setFlag(SpriteFlag.Invisible, true)
    sprites.readDataSprite(mysprite, "redtx").setImage(transformSprites.scale2x(sprites.readDataSprite(mysprite, "redtx").image))
    sprites.readDataSprite(mysprite, "bluetx").setPosition(50, 62)
    sprites.readDataSprite(mysprite, "bluetx").setFlag(SpriteFlag.RelativeToCamera, true)
    sprites.readDataSprite(mysprite, "bluetx").setFlag(SpriteFlag.Invisible, true)
    sprites.readDataSprite(mysprite, "bluetx").setImage(transformSprites.scale2x(sprites.readDataSprite(mysprite, "bluetx").image))
    corlerpicker = textsprite.create("red", 0, 1)
    corlerpicker.setPosition(74, 22)
    corlerpicker.setFlag(SpriteFlag.RelativeToCamera, true)
    corlerpicker.setFlag(SpriteFlag.Invisible, true)
}
function now () {
    pick = randint(1, 6)
    return pick
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.npc, function (sprite, otherSprite) {
    if (sprites.readDataBoolean(sprite, "blue") && sprites.readDataBoolean(otherSprite, "red")) {
        sprite.destroy()
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.gost)
        mySprite4.setPosition(otherSprite.x, otherSprite.x)
        tron = false
    }
    if (sprites.readDataBoolean(sprite, "red") && sprites.readDataBoolean(otherSprite, "blue")) {
        sprite.destroy()
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.gost)
        mySprite4.setPosition(otherSprite.x, otherSprite.x)
        tron = false
    }
})
function doSomething5 (myImage: Image) {
    for (let value of tiles.getTilesByType(myImage)) {
        if (Math.percentChance(sprites.readDataNumber(mysprite, "chance"))) {
            sprites.setDataNumber(mysprite, "nper2", randint(1, 5))
            if (sprites.readDataNumber(mysprite, "nper2") == 1) {
                tiles.setTileAt(value, assets.tile`myTile32`)
                tiles.setWallAt(value, true)
            } else if (sprites.readDataNumber(mysprite, "nper2") == 2) {
                tiles.setTileAt(value, assets.tile`myTile25`)
                tiles.setWallAt(value, true)
            } else if (sprites.readDataNumber(mysprite, "nper2") == 3) {
                tiles.setTileAt(value, assets.tile`myTile29`)
                tiles.setWallAt(value, true)
            } else if (sprites.readDataNumber(mysprite, "nper2") == 4) {
                tiles.setTileAt(value, assets.tile`myTile26`)
                tiles.setWallAt(value, true)
            } else if (sprites.readDataNumber(mysprite, "nper2") == 5) {
                tiles.setTileAt(value, assets.tile`myTile33`)
                tiles.setWallAt(value, true)
            }
        }
    }
}
function dodge_ball_start () {
    tiles.loadMap(tiles.createMap(tilemap`level9`))
    tiles.placeOnRandomTile(mysprite, sprites.dungeon.collectibleInsignia)
    game2 = "lobby 8 players"
    for (let value of tiles.getTilesByType(assets.tile`myTile21`)) {
        mySprite5 = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.water)
        animation.runImageAnimation(
        mySprite5,
        [img`
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            `,img`
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            `,img`
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            `,img`
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            `,img`
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 9 9 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 9 9 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 9 9 8 8 8 8 8 8 8 8 8 8 8 8 
            `],
        100,
        true
        )
        tiles.placeOnTile(mySprite5, value)
    }
}
function doSomething2 (mySprite: Sprite) {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.max = 3
    statusbar.value = 3
    statusbar.attachToSprite(mySprite)
    sprites.setDataNumber(mySprite, "snow", 0)
}
function dodge_ball_go () {
    tiles.destroySpritesOfKind(SpriteKind.water)
    sprites.setDataNumber(mysprite, "nper2", randint(1, 5))
    if (sprites.readDataNumber(mysprite, "nper2") == 1) {
        tiles.loadMap(tiles.createMap(tilemap`level24`))
        team_1_x = 21
        team_1_y = 12
        team_2_x = 38
        team_2_y = 12
    } else if (sprites.readDataNumber(mysprite, "nper2") == 2) {
        tiles.loadMap(tiles.createMap(tilemap`level7`))
        team_1_x = 21
        team_1_y = 12
        team_2_x = 38
        team_2_y = 12
    } else if (sprites.readDataNumber(mysprite, "nper2") == 3) {
        tiles.loadMap(tiles.createMap(tilemap`level4`))
        team_1_x = 21
        team_1_y = 5
        team_2_x = 38
        team_2_y = 5
    } else if (sprites.readDataNumber(mysprite, "nper2") == 4) {
        tiles.loadMap(tiles.createMap(tilemap`level23`))
        team_1_x = 1
        team_1_y = 14
        team_2_x = 58
        team_2_y = 14
        effects.clouds.endScreenEffect()
        scene.setBackgroundColor(15)
    } else if (sprites.readDataNumber(mysprite, "nper2") == 5) {
        effects.clouds.endScreenEffect()
        effects.blizzard.startScreenEffect()
        tiles.loadMap(tiles.createMap(tilemap`level8`))
        team_2_x = 57
        team_2_y = 14
        team_1_x = 2
        team_1_y = 14
    }
    team_blue = 0
    team_red = 0
    sprites.setDataBoolean(mysprite, "if tutched the grund", false)
    sprites.setDataBoolean(mysprite, "blue", false)
    sprites.setDataBoolean(mysprite, "red", false)
    for (let value of sprites.allOfKind(SpriteKind.npc)) {
        sprites.setDataBoolean(value, "if tutched the grund", false)
        sprites.setDataBoolean(value, "blue", false)
        sprites.setDataBoolean(value, "red", false)
    }
    doSomething2(mysprite)
    for (let value of sprites.allOfKind(SpriteKind.npc)) {
        tiles.placeOnRandomTile(value, sprites.dungeon.collectibleInsignia)
        doSomething2(value)
    }
    tiles.placeOnRandomTile(mysprite, sprites.dungeon.collectibleInsignia)
    start_game = true
    while (start_game) {
        if (Math.percentChance(50)) {
            tiles.placeOnTile(mysprite, tiles.getTileLocation(team_1_x, team_1_y))
            team_red = 1
            sprites.setDataBoolean(mysprite, "red", true)
            sprites.setDataBoolean(mysprite, "blue", false)
            statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mysprite).setLabel("Red", 2)
            for (let value of sprites.allOfKind(SpriteKind.npc)) {
                if (!(team_red >= 4)) {
                    team_red += 1
                    tiles.placeOnTile(value, tiles.getTileLocation(team_1_x, team_1_y))
                    sprites.setDataBoolean(value, "red", true)
                    sprites.setDataBoolean(value, "blue", false)
                    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, value).setLabel("Red", 2)
                } else if (!(team_blue >= 4)) {
                    team_blue += 1
                    tiles.placeOnTile(value, tiles.getTileLocation(team_2_x, team_2_y))
                    sprites.setDataBoolean(value, "blue", true)
                    sprites.setDataBoolean(value, "red", false)
                    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, value).setLabel("Blue", 8)
                }
            }
        } else {
            tiles.placeOnTile(mysprite, tiles.getTileLocation(team_2_x, team_2_y))
            sprites.setDataBoolean(mysprite, "red", false)
            sprites.setDataBoolean(mysprite, "blue", true)
            statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mysprite).setLabel("Blue", 8)
            team_blue = 1
            for (let value of sprites.allOfKind(SpriteKind.npc)) {
                if (!(team_red >= 4)) {
                    team_red += 1
                    tiles.placeOnTile(value, tiles.getTileLocation(team_1_x, team_1_y))
                    sprites.setDataBoolean(value, "red", true)
                    sprites.setDataBoolean(value, "blue", false)
                    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, value).setLabel("Red", 2)
                } else if (!(team_blue >= 4)) {
                    team_blue += 1
                    tiles.placeOnTile(value, tiles.getTileLocation(team_2_x, team_2_y))
                    sprites.setDataBoolean(value, "blue", true)
                    sprites.setDataBoolean(value, "red", false)
                    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, value).setLabel("Blue", 8)
                }
            }
        }
        start_game = false
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        tiles.setWallAt(value, false)
    }
    info.startCountdown(30)
    game2 = "Dodge Ball"
}
function doSomething4 () {
    if (sprites.readDataNumber(mysprite, "nper") == 1) {
        for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
            tiles.setTileAt(value, assets.tile`myTile35`)
            tiles.setWallAt(value, true)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile29`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile33`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
    } else if (sprites.readDataNumber(mysprite, "nper") == 2) {
        for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile29`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile33`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
            tiles.setTileAt(value, assets.tile`myTile35`)
            tiles.setWallAt(value, true)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
    } else if (sprites.readDataNumber(mysprite, "nper") == 3) {
        for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile29`)) {
            tiles.setTileAt(value, assets.tile`myTile35`)
            tiles.setWallAt(value, true)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile33`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
    } else if (sprites.readDataNumber(mysprite, "nper") == 4) {
        for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile29`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
            tiles.setTileAt(value, assets.tile`myTile35`)
            tiles.setWallAt(value, true)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile33`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
    } else if (sprites.readDataNumber(mysprite, "nper") == 5) {
        for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile29`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile33`)) {
            tiles.setTileAt(value, assets.tile`myTile35`)
            tiles.setWallAt(value, true)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
            tiles.setTileAt(value, assets.tile`myTile34`)
            tiles.setWallAt(value, false)
        }
    }
}
function ballthore () {
    if (game2 == "Dodge Ball") {
        if (sprites.readDataNumber(mysprite, "snow") >= 1) {
            if (sprites.readDataBoolean(mysprite, "rl")) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 2 4 5 7 9 8 a . . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . . 2 4 5 7 9 8 a . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mysprite, 100, -100)
                projectile.setKind(SpriteKind.ball)
                sprites.setDataBoolean(projectile, "blue", sprites.readDataBoolean(mysprite, "blue"))
                sprites.setDataBoolean(projectile, "red", sprites.readDataBoolean(mysprite, "red"))
                projectile.ay = 200
                projectile.setFlag(SpriteFlag.AutoDestroy, false)
                projectile.setFlag(SpriteFlag.DestroyOnWall, false)
                sprites.changeDataNumberBy(mysprite, "snow", -1)
            } else {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 2 4 5 7 9 8 a . . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . 3 2 4 5 7 9 8 a c . . . . 
                    . . . . 2 4 5 7 9 8 a . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mysprite, -100, -100)
                projectile.setKind(SpriteKind.ball)
                sprites.setDataBoolean(projectile, "blue", sprites.readDataBoolean(mysprite, "blue"))
                sprites.setDataBoolean(projectile, "red", sprites.readDataBoolean(mysprite, "red"))
                projectile.ay = 200
                projectile.setFlag(SpriteFlag.AutoDestroy, false)
                projectile.setFlag(SpriteFlag.DestroyOnWall, false)
                sprites.changeDataNumberBy(mysprite, "snow", -1)
            }
            if (sprites.readDataBoolean(mysprite, "red")) {
                projectile.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 2 2 2 2 2 2 2 . . . . . 
                    . . . 2 2 2 2 2 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 2 2 2 2 . . . . 
                    . . . . 2 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (sprites.readDataBoolean(mysprite, "blue")) {
                projectile.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 8 8 8 8 8 8 8 . . . . . 
                    . . . 8 8 8 8 8 8 8 8 8 . . . . 
                    . . . 8 8 8 8 8 8 8 8 8 . . . . 
                    . . . 8 8 8 8 8 8 8 8 8 . . . . 
                    . . . 8 8 8 8 8 8 8 8 8 . . . . 
                    . . . 8 8 8 8 8 8 8 8 8 . . . . 
                    . . . 8 8 8 8 8 8 8 8 8 . . . . 
                    . . . 8 8 8 8 8 8 8 8 8 . . . . 
                    . . . . 8 8 8 8 8 8 8 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        }
    }
}
let the_other_players: Sprite = null
let myMinimap: minimap.Minimap = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let list: Image[] = []
let next = false
let tron = false
let mySprite4: Sprite = null
let mySprite5: Sprite = null
let tilemapstufff: Image = null
let corlerpicker: TextSprite = null
let start_game = false
let team_blue = 0
let team_red = 0
let pick = 0
let team_2_y = 0
let team_2_x = 0
let team_1_y = 0
let team_1_x = 0
let game2 = ""
let _in = false
let mysprite: Sprite = null
mysprite = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . . . f e e e e e e f . . . . 
    . . . . f e e 4 4 4 4 f . . . . 
    . . . . f e 4 f 4 f 4 f . . . . 
    . . . . f e 4 f 4 f 4 f . . . . 
    . . f f f 4 4 4 4 4 4 f f f . . 
    . . f 8 8 8 8 8 8 8 8 8 8 f . . 
    . . f 8 8 8 8 8 8 8 8 8 8 f . . 
    . . f 4 4 8 8 8 8 8 8 4 4 f . . 
    . . f 4 4 8 8 8 8 8 8 4 4 f . . 
    . . f 4 4 8 8 8 8 8 8 4 4 f . . 
    . . f f f 6 6 6 6 6 6 f f f . . 
    . . . . f 6 6 f f 6 6 f . . . . 
    . . . f f e e f f e e f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mysprite, 100, 0)
mysprite.ay = 200
stuff()
_in = true
tiles.loadMap(tiles.createMap(tilemap`level1`))
scene.cameraFollowSprite(mysprite)
scene.setBackgroundColor(9)
tiles.placeOnRandomTile(mysprite, sprites.dungeon.collectibleInsignia)
effects.clouds.startScreenEffect()
game2 = "None"
game.onUpdate(function () {
    myMinimap = minimap.minimap(MinimapScale.Half, 2, 0)
    minimap.includeSprite(myMinimap, mysprite)
    for (let value of sprites.allOfKind(SpriteKind.npc)) {
        minimap.includeSprite(myMinimap, value)
    }
    for (let value of sprites.allOfKind(SpriteKind.ball)) {
        minimap.includeSprite(myMinimap, value, MinimapSpriteScale.MinimapScale)
    }
    mySprite2.setImage(myMinimap.image)
})
forever(function () {
    if (game2 == "lobby 8 players not happening") {
        music.playMelody(music.convertRTTTLToMelody("Wait:d=4,o=5,b=0:8p,10c#4,51p,15d.,7p,18d.4,25p,16c,31d4,16p.,18c#4,8p,8p.,8p.,14d,8p.,17c#4,15p,8p,8p,13b4,9p,8p.,8p.,33d.,57p,56e4,9p,18d4,14p,16d.4,2p.,14c#4,p,14a#4"), 60)
    }
})
forever(function () {
    if (game2 == "lobby 8 players") {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Right)) && (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Top), CollisionDirection.Right))) && value.isHittingTile(CollisionDirection.Bottom)) && value.isHittingTile(CollisionDirection.Right) || value.isHittingTile(CollisionDirection.Left) && (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Left)) && (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Top), CollisionDirection.Left))) && value.isHittingTile(CollisionDirection.Bottom)))) {
                value.vy = -140
            } else {
                if (Math.percentChance(sprites.readDataNumber(value, "going"))) {
                    sprites.setDataNumber(value, "going", 99)
                    value.vx = 100
                } else {
                    sprites.setDataNumber(value, "going", 1)
                    value.vx = -100
                }
            }
        }
    }
    if (game2 == "Dodge Ball") {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Right)) && (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Top), CollisionDirection.Right))) && value.isHittingTile(CollisionDirection.Bottom)) && value.isHittingTile(CollisionDirection.Right) || value.isHittingTile(CollisionDirection.Left) && (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Left)) && (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Top), CollisionDirection.Left))) && value.isHittingTile(CollisionDirection.Bottom)))) {
                value.vy = -140
            } else {
                if (Math.percentChance(sprites.readDataNumber(value, "going"))) {
                    sprites.setDataNumber(value, "going", 99)
                    value.vx = 100
                } else {
                    sprites.setDataNumber(value, "going", 1)
                    value.vx = -100
                }
            }
        }
    }
    if (game2 == "lobby 5 players") {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Right)) && (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Top), CollisionDirection.Right))) && value.isHittingTile(CollisionDirection.Bottom)) && value.isHittingTile(CollisionDirection.Right) || value.isHittingTile(CollisionDirection.Left) && (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Left)) && (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Top), CollisionDirection.Left))) && value.isHittingTile(CollisionDirection.Bottom)))) {
                value.vy = -140
            } else {
                if (Math.percentChance(sprites.readDataNumber(value, "going"))) {
                    sprites.setDataNumber(value, "going", 99)
                    value.vx = 100
                } else {
                    sprites.setDataNumber(value, "going", 1)
                    value.vx = -100
                }
            }
        }
    }
})
forever(function () {
    if (game2 == "lobby 8 players") {
        for (let index = 0; index < 7; index++) {
            skins()
            the_other_players = sprites.create(list[randint(0, sprites.readDataNumber(mysprite, "skins"))].clone(), SpriteKind.npc)
            sprites.setDataNumber(the_other_players, "going", 50)
            the_other_players.ay = 200
            tiles.placeOnRandomTile(the_other_players, sprites.dungeon.collectibleInsignia)
            pause(1000)
        }
        dodge_ball_go()
    }
    if (game2 == "lobby 5 players") {
        for (let index = 0; index < 4; index++) {
            skins()
            the_other_players = sprites.create(list[randint(0, sprites.readDataNumber(mysprite, "skins"))].clone(), SpriteKind.npc)
            sprites.setDataNumber(the_other_players, "going", 50)
            the_other_players.ay = 200
            tiles.placeOnRandomTile(the_other_players, sprites.dungeon.collectibleInsignia)
            pause(1000)
        }
        Block_party_go()
    }
})
forever(function () {
    if (next) {
        next = false
        pause(5000)
        corlerset()
    }
})
game.onUpdateInterval(2000, function () {
    if (game2 == "Dodge Ball") {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 4 5 7 9 8 a . . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . 3 2 4 5 7 9 8 a c . . . . 
            . . . . 2 4 5 7 9 8 a . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ball)
        mySprite3.setFlag(SpriteFlag.GhostThroughSprites, true)
        sprites.setDataBoolean(mySprite3, "blue", true)
        sprites.setDataBoolean(mySprite3, "red", true)
        mySprite3.ay = 200
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile12`)
    }
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.npc)) {
        if (value.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava0)) {
            value.destroy()
            sprites.changeDataNumberBy(mysprite, "players", -1)
        }
        pause(100)
    }
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (value.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava0)) {
            value.setFlag(SpriteFlag.Invisible, true)
            value.setFlag(SpriteFlag.Ghost, true)
            controller.moveSprite(value)
            sprites.setDataBoolean(value, "sp", true)
            sprites.changeDataNumberBy(mysprite, "players", -1)
        }
        pause(100)
    }
})
forever(function () {
    if (game2 == "Block Party") {
        info.setScore(sprites.readDataNumber(mysprite, "players"))
        if (sprites.readDataNumber(mysprite, "players") == 1) {
            if (sprites.readDataBoolean(mysprite, "sp")) {
                game.splash("You Lose")
                pause(2000)
                game.reset()
            } else {
                game.splash("You win!!!!!!!!")
                effects.confetti.startScreenEffect()
                pause(2000)
                game.reset()
            }
        } else if (sprites.readDataNumber(mysprite, "players") == 0) {
            game.splash("You Lose")
            pause(2000)
            game.reset()
        }
    }
})
forever(function () {
    if (controller.right.isPressed()) {
        sprites.setDataBoolean(mysprite, "rl", true)
    } else if (controller.left.isPressed()) {
        sprites.setDataBoolean(mysprite, "rl", false)
    }
})
forever(function () {
    if (game2 == "Block Party") {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (value.tileKindAt(TileDirection.Bottom, tilemapstufff) || (Math.percentChance(5) && value.tileKindAt(TileDirection.Bottom, assets.tile`myTile33`) || value.tileKindAt(TileDirection.Bottom, assets.tile`myTile35`))) {
                value.vx = 0
            } else {
                if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Right)) && (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Top), CollisionDirection.Right))) && value.isHittingTile(CollisionDirection.Bottom)) && value.isHittingTile(CollisionDirection.Right) || value.isHittingTile(CollisionDirection.Left) && (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Left)) && (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Top), CollisionDirection.Left))) && value.isHittingTile(CollisionDirection.Bottom)))) {
                    value.vy = -140
                } else {
                    if (Math.percentChance(sprites.readDataNumber(value, "going"))) {
                        sprites.setDataNumber(value, "going", 99)
                        value.vx = 100
                    } else {
                        sprites.setDataNumber(value, "going", 1)
                        value.vx = -100
                    }
                }
            }
        }
    }
})
forever(function () {
    if (game2 == "Dodge Ball") {
        if (team_red == 0) {
            sprites.readDataSprite(mysprite, "bluetx").setFlag(SpriteFlag.Invisible, false)
            effects.confetti.startScreenEffect()
            pause(5000)
            game.reset()
        } else if (team_blue == 0) {
            sprites.readDataSprite(mysprite, "redtx").setFlag(SpriteFlag.Invisible, false)
            effects.confetti.startScreenEffect()
            pause(5000)
            game.reset()
        }
    }
})
forever(function () {
    if (game2 == "Dodge Ball") {
        for (let value of sprites.allOfKind(SpriteKind.Player)) {
            if (value.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
                if (sprites.readDataBoolean(value, "red")) {
                    tiles.placeOnTile(value, tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Left))
                } else if (sprites.readDataBoolean(value, "blue")) {
                    tiles.placeOnTile(value, tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Right))
                }
            }
        }
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (value.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
                if (sprites.readDataBoolean(value, "red")) {
                    tiles.placeOnTile(value, tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Left))
                    sprites.setDataNumber(value, "going", 1)
                } else if (sprites.readDataBoolean(value, "blue")) {
                    tiles.placeOnTile(value, tiles.locationInDirection(tiles.locationOfSprite(value), CollisionDirection.Right))
                    sprites.setDataNumber(value, "going", 99)
                }
            }
        }
        info.setScore(sprites.readDataNumber(mysprite, "snow"))
    }
})
forever(function () {
    if (game2 == "Dodge Ball") {
        for (let value of sprites.allOfKind(SpriteKind.npc)) {
            if (sprites.readDataNumber(value, "snow") >= 1) {
                tron = true
                while (tron) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . 2 . . . . . . . 2 . . . . 
                        . . 2 2 2 4 5 7 9 8 a 2 2 . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . 2 2 2 4 5 7 9 8 a 2 2 . . . 
                        . . . 2 . . . . . . . 2 . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, value, -100, 0)
                    projectile.setFlag(SpriteFlag.Invisible, true)
                    projectile.setFlag(SpriteFlag.BounceOnWall, true)
                    sprites.setDataBoolean(projectile, "red", sprites.readDataBoolean(value, "red"))
                    sprites.setDataBoolean(projectile, "blue", sprites.readDataBoolean(value, "blue"))
                    projectile.lifespan = 2000
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . 2 . . . . . . . 2 . . . . 
                        . . 2 2 2 4 5 7 9 8 a 2 2 . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . 2 2 2 4 5 7 9 8 a 2 2 . . . 
                        . . . 2 . . . . . . . 2 . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, value, 100, 0)
                    projectile.lifespan = 2000
                    sprites.setDataBoolean(projectile, "red", sprites.readDataBoolean(value, "red"))
                    sprites.setDataBoolean(projectile, "blue", sprites.readDataBoolean(value, "blue"))
                    projectile.setFlag(SpriteFlag.Invisible, true)
                    projectile.setFlag(SpriteFlag.BounceOnWall, true)
                    pause(1)
                }
                if (mySprite4.x > value.x) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . 2 4 5 7 9 8 a . . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . . 2 4 5 7 9 8 a . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, value, 100, -100)
                    projectile.setFlag(SpriteFlag.DestroyOnWall, false)
                    projectile.setFlag(SpriteFlag.AutoDestroy, false)
                    projectile.setKind(SpriteKind.ball)
                    sprites.setDataBoolean(projectile, "red", sprites.readDataBoolean(value, "red"))
                    sprites.setDataBoolean(projectile, "blue", sprites.readDataBoolean(value, "blue"))
                    projectile.ay = 200
                    sprites.changeDataNumberBy(value, "snow", -1)
                } else if (mySprite4.x < value.x) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . 2 4 5 7 9 8 a . . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . 3 2 4 5 7 9 8 a c . . . . 
                        . . . . 2 4 5 7 9 8 a . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, value, -100, -100)
                    projectile.setFlag(SpriteFlag.DestroyOnWall, false)
                    projectile.setFlag(SpriteFlag.AutoDestroy, false)
                    projectile.setKind(SpriteKind.ball)
                    projectile.ay = 200
                    sprites.setDataBoolean(projectile, "red", sprites.readDataBoolean(value, "red"))
                    sprites.setDataBoolean(projectile, "blue", sprites.readDataBoolean(value, "blue"))
                    sprites.changeDataNumberBy(value, "snow", -1)
                }
                mySprite4.destroy()
                if (sprites.readDataBoolean(value, "red")) {
                    projectile.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . 2 2 2 2 2 2 2 . . . . . 
                        . . . 2 2 2 2 2 2 2 2 2 . . . . 
                        . . . 2 2 2 2 2 2 2 2 2 . . . . 
                        . . . 2 2 2 2 2 2 2 2 2 . . . . 
                        . . . 2 2 2 2 2 2 2 2 2 . . . . 
                        . . . 2 2 2 2 2 2 2 2 2 . . . . 
                        . . . 2 2 2 2 2 2 2 2 2 . . . . 
                        . . . 2 2 2 2 2 2 2 2 2 . . . . 
                        . . . . 2 2 2 2 2 2 2 . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                } else if (sprites.readDataBoolean(value, "blue")) {
                    projectile.setImage(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . 8 8 8 8 8 8 8 . . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 . . . . 
                        . . . 8 8 8 8 8 8 8 8 8 . . . . 
                        . . . . 8 8 8 8 8 8 8 . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `)
                }
            }
        }
    }
})
