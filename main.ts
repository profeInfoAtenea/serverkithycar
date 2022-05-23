function Izquierda () {
    robotbit.GeekServo(robotbit.Servos.S1, 105)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
}
input.onButtonPressed(Button.AB, function () {
    Avanzar()
})
function Derecha () {
    robotbit.GeekServo(robotbit.Servos.S1, -25)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
input.onButtonPressed(Button.B, function () {
    Izquierda()
})
function Avanzar () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    robotbit.GeekServo(robotbit.Servos.S1, 50)
    robotbit.MotorRunDual(
    robotbit.Motors.M1B,
    255,
    robotbit.Motors.M2A,
    -255
    )
}
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        Avanzar()
    }
    for (let index = 0; index <= 4; index++) {
        Derecha()
    }
    for (let index = 0; index <= 4; index++) {
        Avanzar()
    }
    for (let index = 0; index <= 4; index++) {
        Izquierda()
    }
})
