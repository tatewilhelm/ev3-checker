// EV3 Checker
// Created by The Average Dolphin
// www.averagedolphin.tk

// Vars init
let home_refresh = 0
let In_Check_10 = 0
let Current_Mode = 0
let Serial = 0
// Basic Funcs, One manages up, the other manages down, and the other manages what menu to be brought up
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    if (In_Check_10 == 0) {
        if (Current_Mode == 0) {

        } else {
            Current_Mode += -1
        }
    }
})
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    if (In_Check_10 == 0) {
        In_Check_10 = 1
        brick.clearScreen()
        if (Current_Mode == 0) {
            brick.showValue("Bat Level", brick.batteryInfo(BatteryProperty.Level), 1)
            brick.showValue("Bat Current", brick.batteryInfo(BatteryProperty.Current), 3)
            brick.showValue("Bat Voltage", brick.batteryInfo(BatteryProperty.Voltage), 5)
            brick.showString("Press enter to exit", 11)
        }
        if (Current_Mode == 1) {
            brick.showPorts()
        }
        if (Current_Mode == 2) {
            brick.showValue("Serial Num", Serial, 1)
            brick.showString("Press enter to exit", 11)
        }
        if (Current_Mode == 3) {
            brick.showString("Created By:", 1)
            brick.showString("The Average Dolphin", 2)
            brick.showString("www.averagedolphin.tk", 5)
            brick.showString("Press enter to exit", 11)
        }
        if (Current_Mode == 4) {
            brick.exitProgram()
        }
    } else {
        In_Check_10 = 0
        brick.clearScreen()
    }
})
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    if (In_Check_10 == 0) {
        if (Current_Mode == 4) {

        } else {
            Current_Mode += 1
        }
    }
})

Serial = control.deviceSerialNumber()
Current_Mode = 0
home_refresh = 0
In_Check_10 = 0

forever(function () {
    if (In_Check_10 == 1) {

    } else {
        if (Current_Mode == 0) {
            brick.showString("EV3 Checker", 1)
            brick.showString("[ Battery ]", 3)
            brick.showString("  Motor/sensors", 5)
            brick.showString("  Device", 7)
            brick.showString("  About", 9)
            brick.showString("  Exit", 11)
        }
        if (Current_Mode == 1) {
            brick.showString("EV3 Checker", 1)
            brick.showString("  Battery ", 3)
            brick.showString("[ Motor/sensors ]", 5)
            brick.showString("  Device", 7)
            brick.showString("  About", 9)
            brick.showString("  Exit", 11)
        }
        if (Current_Mode == 2) {
            brick.showString("EV3 Checker", 1)
            brick.showString("  Battery ", 3)
            brick.showString("  Motor/sensors ", 5)
            brick.showString("[ Device ]", 7)
            brick.showString("  About", 9)
            brick.showString("  Exit", 11)
        }
        if (Current_Mode == 3) {
            brick.showString("EV3 Checker", 1)
            brick.showString("  Battery ", 3)
            brick.showString("  Motor/sensors ", 5)
            brick.showString("  Device ", 7)
            brick.showString("[ About ]", 9)
            brick.showString("  Exit", 11)
        }
        if (Current_Mode == 4) {
            brick.showString("EV3 Checker", 1)
            brick.showString("  Battery ", 3)
            brick.showString("  Motor/sensors ", 5)
            brick.showString("  Device ", 7)
            brick.showString("[ About ]", 9)
            brick.showString("  Exit", 11)
        }
    }
})
