let name;
let age;
let status;

function shwoDetails(a, b, c) {
    let info = [a, b, c];
    for (let i = 0; i < info.length; i++) {
        typeof info[i] === 'string'
            ? name = info[i]
            : typeof info[i] === 'number'
                ? age = info[i]
                : typeof info[i] === 'boolean'
        status = info[i]
        status === true
            ? status = 'You Are Hired'
            : status = 'You Are Not Hired'


    }
    console.log(`Hello ${name} Your Age Is ${age} You Status is ${status}`)
}
shwoDetails(false, 'noha', 26)