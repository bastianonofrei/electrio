let curent = ['Current i(t)', 2, 5, 6, 4, 0, -2, -5, -6, -4, 0, 2]
let voltage = ['Voltage u(t)', 0, 7, 9.5, 5.5, 4.5, 0, -7, -9.5, -5.5, -4.5, 0]
var chart = c3.generate({
    bindto: '#chartCurrentVoltage',
    data: {
        columns: [
            voltage,
            curent
        ],
        type: 'spline'
    }
});
let length = curent.length
let power = []

for (let j = 0; j < length; j++) {
    if (j == 0) {
        power[j] = "Power p(t)"
    } else {
        power[j] = 0
    }
}



function find_Power(curent, voltage) {
    for (let i = 0; i < power.length; i++) {
        if (i == 0) {
            power[0] = "Power p(t)"
        } else {
            power[i] = curent[i] * voltage[i]
        }

    }
    return power;
}
power = find_Power(curent, voltage);
var chart = c3.generate({
    bindto: '#chartPower',
    data: {
        columns: [
            power
        ],
        type: 'spline'
    }
});






