namespace SpriteKind {
    export const TNT = SpriteKind.create()
    export const hreat = SpriteKind.create()
    export const gold = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == 開始 % 1) {
        if (150 >= player1.x) {
            player1.x += 5
        }
    }
})
function doSomething3 () {
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == 開始 % 1) {
        if (110 >= player1.y) {
            player1.y += 5
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == 開始 % 1) {
        if (10 <= player1.x) {
            player1.x += -5
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (0 == 開始 % 1) {
        if (10 <= player1.x) {
            player1.x += -5
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0.1 != 開始) {
        結束 = 開始
        開始 = 0.1
        TF = game.ask("確定要結束?")
        if (TF == true) {
            game.reset()
        } else {
            開始 = 結束
        }
    }
})
info.onCountdownEnd(function () {
    if (開始 < 4) {
        if (30 * 開始 <= info.score()) {
            if (info.life() >= 6) {
                info.changeScoreBy((info.life() - 6) * 5)
            }
            info.changeScoreBy(info.life())
            game.splash("第" + 開始 + "關結束，準備開始第" + (開始 + 1) + "關", "，請按A鍵")
            開始 = 開始 + 0.5
            player1.setPosition(scene.screenWidth() / 2, 110)
            car1.setPosition(randint(10, 150), 10)
            car2.setPosition(randint(10, 150), 10)
            car3.setPosition(randint(10, 150), 10)
        } else {
            info.changeScoreBy(info.life())
            game.gameOver(false)
        }
    } else {
        info.changeScoreBy(info.life())
        game.gameOver(true)
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (0 == 開始 % 1) {
        if (110 >= player1.y) {
            player1.y += 5
        }
    }
})
function doSomething () {
    if (n == 0) {
        T1 = 0
    } else if (n == 1) {
        T2 = 0
    } else if (n == 2) {
        T3 = 0
    } else if (n == 3) {
        T4 = 0
    } else if (n == 4) {
        T5 = 0
    } else if (n == 5) {
        T6 = 0
    } else if (n == 6) {
        T7 = 0
    } else if (n == 7) {
        T8 = 0
    } else if (n == 8) {
        T9 = 0
    } else if (n == 9) {
        T10 = 0
    }
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if ((開始 + 0.1) % 1 == 0) {
        if (info.life() <= 3) {
            info.setLife(info.life() + 3)
        } else {
            info.setLife(6)
        }
        info.startCountdown(60)
        car1.vy = randint(開始 * 10, 開始 * 10 + 20)
        car2.vy = randint(開始 * 10, 開始 * 10 + 20)
        car3.vy = randint(開始 * 10, 開始 * 10 + 20)
        開始 = 開始 + 0.1
    } else if (開始 % 1 == 0) {
        if (T1 == 0) {
            TNT1.setPosition(player1.x, player1.y)
            TNT1.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 2 . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            TNT1.vy = (randint(開始 * 10, 開始 * 10 + 20) / 10 + 50) * -1
            T1 = 1
        } else if (T2 == 0) {
            TNT2.setPosition(player1.x, player1.y)
            TNT2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 2 . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            TNT2.vy = (randint(開始 * 10, 開始 * 10 + 20) / 10 + 50) * -1
            T2 = 1
        } else if (T3 == 0) {
            TNT3.setPosition(player1.x, player1.y)
            TNT3.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 2 . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            TNT3.vy = (randint(開始 * 10, 開始 * 10 + 20) / 10 + 50) * -1
            T3 = 1
        } else if (T4 == 0) {
            TNT4.setPosition(player1.x, player1.y)
            TNT4.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 2 . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            TNT4.vy = (randint(開始 * 10, 開始 * 10 + 20) / 10 + 50) * -1
            T4 = 1
        } else if (T5 == 0) {
            TNT5.setPosition(player1.x, player1.y)
            TNT5.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 2 . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            TNT5.vy = (randint(開始 * 10, 開始 * 10 + 20) / 10 + 50) * -1
            T5 = 1
        } else if (T6 == 0) {
            TNT6.setPosition(player1.x, player1.y)
            TNT6.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 2 . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            TNT6.vy = (randint(開始 * 10, 開始 * 10 + 20) / 10 + 50) * -1
            T6 = 1
        } else if (T7 == 0) {
            TNT7.setPosition(player1.x, player1.y)
            TNT7.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 2 . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            TNT7.vy = (randint(開始 * 10, 開始 * 10 + 20) / 10 + 50) * -1
            T7 = 1
        } else if (T8 == 0) {
            TNT8.setPosition(player1.x, player1.y)
            TNT8.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 2 . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            TNT8.vy = (randint(開始 * 10, 開始 * 10 + 20) / 10 + 50) * -1
            T8 = 1
        } else if (T9 == 0) {
            TNT9.setPosition(player1.x, player1.y)
            TNT9.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 2 . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            TNT9.vy = (randint(開始 * 10, 開始 * 10 + 20) / 10 + 50) * -1
            T9 = 1
        } else if (T10 == 0) {
            TNT10.setPosition(player1.x, player1.y)
            TNT10.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 3 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 3 . . . . 
                . . . . . 2 1 1 1 1 1 2 . . . . 
                . . . . . 2 3 1 1 1 3 2 . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            TNT10.vy = (randint(開始 * 10, 開始 * 10 + 20) / 10 + 50) * -1
            T10 = 1
        }
    } else if ((0.5 + 開始) % 1 == 0) {
        開始 = 0.4 + 開始
        game.splash("遊戲規則:", "過關須滿" + 30 * (0.1 + 開始) + "分")
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (0 == 開始 % 1) {
        if (150 >= player1.x) {
            player1.x += 5
        }
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
function 爆炸 (list11: Sprite[], num11: number) {
    list11[num11].setImage(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . 2 3 1 1 1 1 1 1 3 3 2 . . 
        . . . 2 1 1 1 1 1 1 1 1 1 2 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 3 1 1 1 1 1 1 1 3 . . . 
        . . . . . 2 3 3 3 3 3 2 . . . . 
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
        `)
    pause(100)
    list11[num11].setImage(img`
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 . . . 
        . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
        . . . 2 2 4 d 5 5 d d 4 4 . . . 
        . . 2 4 d d 5 5 5 5 d d 5 4 . . 
        . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
        . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
        . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
        . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
        . . 4 d 5 d 5 5 5 d d d 4 4 . . 
        . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    list11[num11].setImage(img`
        . . . 2 2 4 4 4 4 4 2 2 2 . . . 
        . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
        . . b b d d 1 1 3 d d 1 b b . . 
        b b d 1 1 3 1 1 d 1 d 1 1 d b b 
        b d d b b b b b b b b b b d d b 
        b d d b b b 2 4 4 2 b b b d d b 
        . b d d d d 2 4 4 2 d d d d b . 
        . . b b b b 2 4 4 2 b b b b . . 
        4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
        2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
        2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
        . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
        . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
        . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
        . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        `)
    pause(100)
    list11[num11].setImage(img`
        . . . c c c c c c . . . . . . . 
        . c c b d d d d b . c c c c c c 
        c b d d d b b . . . . b d d c c 
        c d d b b . . . . . . b c d d c 
        b d d c b . . . . . b c c d d b 
        . b d c c c b b b b c c d d b . 
        . . b b b d d d d d d b b b . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . b b b . . . . . b b . . b b . 
        . b d d b . . . . b b . b d d b 
        . b d d d b . . . . . . b d d b 
        . . b d d b . . . . . . . b b . 
        . . . b b b . . . . . . . . . . 
        . . . . . . . . b b . . . . . . 
        . . . . . . . . b b . . . . . . 
        `)
    pause(100)
    list11[num11].setImage(img`
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
        `)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == 開始 % 1) {
        if (10 <= player1.y) {
            player1.y += -5
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (0 == 開始 % 1) {
        if (10 <= player1.y) {
            player1.y += -5
        }
    }
})
function doSomething2 () {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
}
let n = 0
let TF = false
let 結束 = 0
let T10 = 0
let T9 = 0
let T8 = 0
let T7 = 0
let T6 = 0
let T5 = 0
let T4 = 0
let T3 = 0
let T2 = 0
let T1 = 0
let 開始 = 0
let TNT10: Sprite = null
let TNT9: Sprite = null
let TNT8: Sprite = null
let TNT7: Sprite = null
let TNT6: Sprite = null
let TNT5: Sprite = null
let TNT4: Sprite = null
let TNT3: Sprite = null
let TNT2: Sprite = null
let TNT1: Sprite = null
let player1: Sprite = null
let car3: Sprite = null
let car2: Sprite = null
let car1: Sprite = null
scene.setBackgroundColor(9)
car1 = sprites.create(img`
    . . . . . . e e c c e e . . . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    . . . . 2 c 2 2 2 2 2 2 c 2 . . 
    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
    . . . f 2 2 4 2 2 2 2 2 c 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 c 2 4 4 2 2 2 c 2 f . 
    . . . e 2 c e c c c c e c 2 e . 
    . . . e 2 e c b b b b c e 2 e . 
    . . . e 2 e b b b b b b e 2 e . 
    . . . e e e e e e e e e e e e . 
    . . . f e d e e e e e e d e f . 
    . . . f e 2 d e e e e d 2 e f . 
    . . . f f e e e e e e e e f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Enemy)
car2 = sprites.create(img`
    . . . . . . e e c c e e . . . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    . . . . 2 c 2 2 2 2 2 2 c 2 . . 
    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
    . . . f 2 2 4 2 2 2 2 2 c 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 c 2 4 4 2 2 2 c 2 f . 
    . . . e 2 c e c c c c e c 2 e . 
    . . . e 2 e c b b b b c e 2 e . 
    . . . e 2 e b b b b b b e 2 e . 
    . . . e e e e e e e e e e e e . 
    . . . f e d e e e e e e d e f . 
    . . . f e 2 d e e e e d 2 e f . 
    . . . f f e e e e e e e e f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Enemy)
car3 = sprites.create(img`
    . . . . . . e e c c e e . . . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    . . . . 2 c 2 2 2 2 2 2 c 2 . . 
    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
    . . . f 2 2 4 2 2 2 2 2 c 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 c 2 4 4 2 2 2 c 2 f . 
    . . . e 2 c e c c c c e c 2 e . 
    . . . e 2 e c b b b b c e 2 e . 
    . . . e 2 e b b b b b b e 2 e . 
    . . . e e e e e e e e e e e e . 
    . . . f e d e e e e e e d e f . 
    . . . f e 2 d e e e e d 2 e f . 
    . . . f f e e e e e e e e f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Enemy)
player1 = sprites.create(img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 6 c 6 . . 
    . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
    . . . f 6 6 9 6 6 6 6 6 c 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 c 6 9 9 6 6 6 c 6 f . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 d 8 8 8 8 8 8 d 8 f . 
    . . . f 8 6 d 8 8 8 8 d 6 8 f . 
    . . . f f 8 8 8 8 8 8 8 8 f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Player)
TNT1 = sprites.create(img`
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
    `, SpriteKind.TNT)
TNT2 = sprites.create(img`
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
    `, SpriteKind.TNT)
TNT3 = sprites.create(img`
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
    `, SpriteKind.TNT)
TNT4 = sprites.create(img`
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
    `, SpriteKind.TNT)
TNT5 = sprites.create(img`
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
    `, SpriteKind.TNT)
TNT6 = sprites.create(img`
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
    `, SpriteKind.TNT)
TNT7 = sprites.create(img`
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
    `, SpriteKind.TNT)
TNT8 = sprites.create(img`
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
    `, SpriteKind.TNT)
TNT9 = sprites.create(img`
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
    `, SpriteKind.TNT)
TNT10 = sprites.create(img`
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
    `, SpriteKind.TNT)
let hreat1 = sprites.create(img`
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
    `, SpriteKind.hreat)
let gold1 = sprites.create(img`
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
    `, SpriteKind.gold)
player1.setPosition(scene.screenWidth() / 2, 100)
car1.setPosition(randint(10, 150), 10)
car2.setPosition(randint(10, 150), 10)
while (car2.overlapsWith(car1)) {
    car2.setPosition(randint(10, 150), 10)
}
car3.setPosition(randint(10, 150), 10)
while (car3.overlapsWith(car1) || car3.overlapsWith(car2)) {
    car3.setPosition(randint(10, 150), 10)
}
info.setScore(0)
game.splash("遊戲即將開始，請按A鍵")
開始 = 0.5
let TNTT = [
T1,
T2,
T3,
T4,
T5,
T6,
T7,
T8,
T9,
T10
]
let TNTALL = [
TNT1,
TNT2,
TNT3,
TNT4,
TNT5,
TNT6,
TNT7,
TNT8,
TNT9,
TNT10
]
T1 = 0
T2 = 0
T3 = 0
T4 = 0
T5 = 0
T6 = 0
T7 = 0
T8 = 0
T9 = 0
T10 = 0
let h = 0
let g = 0
info.setLife(1)
forever(function () {
    if (0 == 開始 % 1) {
        if (car1.y >= 110) {
            car1.setPosition(randint(10, 150), 10)
        }
        if (car2.y >= 110) {
            car2.setPosition(randint(10, 150), 10)
        }
        if (car3.y >= 110) {
            car3.setPosition(randint(10, 150), 10)
        }
        if (player1.overlapsWith(car1)) {
            car1.setPosition(randint(10, 150), 10)
            info.changeLifeBy(-1)
            doSomething3()
        }
        if (player1.overlapsWith(car2)) {
            car2.setPosition(randint(10, 150), 10)
            info.changeLifeBy(-1)
            doSomething3()
        }
        if (player1.overlapsWith(car3)) {
            car3.setPosition(randint(10, 150), 10)
            info.changeLifeBy(-1)
            doSomething3()
        }
    }
})
forever(function () {
    if (0 == 開始 % 1) {
        if (info.countdown() <= (開始 - 1) * 60 + (50 - 10 * h)) {
            h += 1
            hreat1.setPosition(randint(10, 150), 10)
            hreat1.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f . f f f f f . . 
                . . f f 3 3 3 f f f 3 3 3 f f . 
                . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
                . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
                . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
                . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
                . . f f 3 3 3 b b b 3 3 3 f f . 
                . . . f f 3 b b b b b 3 f f . . 
                . . . . f f b b b b b f f . . . 
                . . . . . f f b b b f f . . . . 
                . . . . . . f f b f f . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            hreat1.vy = 20 + randint(開始 * 10, 開始 * 10 + 20) / 10
        }
        if (info.countdown() <= (開始 - 1) * 60 + (55 - 10 * g)) {
            g += 1
            gold1.setPosition(randint(10, 150), 10)
            animation.runImageAnimation(
            gold1,
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            100,
            true
            )
            gold1.vy = 20 + randint(開始 * 10, 開始 * 10 + 20) / 10
        }
    }
})
forever(function () {
    if (0 == 開始 % 1) {
        n = 0
        for (let index = 0; index < 10; index++) {
            if (TNTALL[n].overlapsWith(car1)) {
                if (info.countdown() <= 15) {
                    info.changeScoreBy(2)
                } else {
                    info.changeScoreBy(1)
                }
                car1.setPosition(randint(10, 150), 10)
                TNTALL[n].setImage(img`
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
                    `)
                爆炸(TNTALL, n)
                doSomething()
                music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            } else if (TNTALL[n].overlapsWith(car2)) {
                if (info.countdown() <= 15) {
                    info.changeScoreBy(2)
                } else {
                    info.changeScoreBy(1)
                }
                car2.setPosition(randint(10, 150), 10)
                爆炸(TNTALL, n)
                TNTALL[n].setImage(img`
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
                    `)
                doSomething()
                music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            } else if (TNTALL[n].overlapsWith(car3)) {
                if (info.countdown() <= 15) {
                    info.changeScoreBy(2)
                } else {
                    info.changeScoreBy(1)
                }
                car3.setPosition(randint(10, 150), 10)
                爆炸(TNTALL, n)
                TNTALL[n].setImage(img`
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
                    `)
                doSomething()
                music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            }
            if (TNTALL[n].y <= 10) {
                TNTALL[n].setImage(img`
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
                    `)
                doSomething()
            }
            n += 1
        }
    }
})
forever(function () {
    if (0 == 開始 % 1) {
        if (car1.overlapsWith(car3)) {
            car3.setPosition(randint(10, 150), 10)
            car1.setPosition(randint(10, 150), 10)
        }
        if (car1.overlapsWith(car2)) {
            car1.setPosition(randint(10, 150), 10)
            car2.setPosition(randint(10, 150), 10)
        }
        if (car3.overlapsWith(car2)) {
            car3.setPosition(randint(10, 150), 10)
            car2.setPosition(randint(10, 150), 10)
        }
    }
})
forever(function () {
    if (0 == 開始 % 1) {
        if (hreat1.overlapsWith(car1)) {
            car1.setPosition(randint(10, 150), 10)
        }
        if (hreat1.overlapsWith(car2)) {
            car2.setPosition(randint(10, 150), 10)
        }
        if (hreat1.overlapsWith(car3)) {
            car3.setPosition(randint(10, 150), 10)
        }
        if (hreat1.overlapsWith(player1)) {
            info.setLife(1 + info.life())
            doSomething2()
            hreat1.setImage(img`
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
                `)
            hreat1.setVelocity(0, 0)
        }
    }
})
forever(function () {
    if (0 == 開始 % 1) {
        if (gold1.overlapsWith(car1)) {
            car1.setPosition(randint(10, 150), 10)
        }
        if (gold1.overlapsWith(car2)) {
            car2.setPosition(randint(10, 150), 10)
        }
        if (gold1.overlapsWith(car3)) {
            car3.setPosition(randint(10, 150), 10)
        }
        if (gold1.overlapsWith(player1)) {
            info.changeScoreBy(5)
            doSomething2()
            gold1.setImage(img`
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
                `)
            gold1.setPosition(-50, -50)
            gold1.setVelocity(0, 0)
        }
    }
})
game.onUpdateInterval(100, function () {
    car1.vy = randint(開始 * 10, 開始 * 10 + 20)
    car2.vy = randint(開始 * 10, 開始 * 10 + 20)
    car3.vy = randint(開始 * 10, 開始 * 10 + 20)
})
