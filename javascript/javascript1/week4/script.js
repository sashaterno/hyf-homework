// Voice assistant

let myName = '';
const toDo = [];

function getReply(command) {
    const name = command.split(' ');
    if (command.startsWith('Hello my name is')) {
        if (myName === '') {
            myName = name[name.length - 1];
            return `Nice to meet you ${myName}!`;
        } else {
            return 'You wrote twice!';
        }
    } else if (command === 'What is my name') {
        if (myName === '') {
            return "You haven't introduced yourself yet!"
        } else {
            return `Your name is ${myName}!`;
        }
    } else if (command.startsWith('Add') && command.endsWith('to my todo')) {
        let clear = command.replace('Add ', '');
        let activity = clear.replace(' to my todo', '');
        toDo.push(activity);
        return `${activity} added to your todo!`;
    } else if (command.startsWith('Remove') && command.endsWith('from my todo')) {
        let clear = command.replace('Remove ', '');
        let activity = clear.replace(' from my todo', '');
        for (let i = 0; i < toDo.length; i++) {
            if (toDo[i] === activity) {
                toDo.splice(i, 1);
            }
        }
        return `Removed ${activity} from your todo!`;
    } else if (command === 'What is on my todo') {
        let result = '';
        for (let i = 0; i < toDo.length; i++) {
            result += `${toDo[i]}; `;
        }
        return `You have ${toDo.length} todos - ${result}`;
    } else if (command === 'What day is it today') {
        let today = new Date();
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `Today: ${today.getDate()} of ${month[today.getMonth()]} ${today.getFullYear()}`;
    } else if (command.startsWith('What is')) {
        let clear = command.replace('What is ', '');
        let numbers = clear.split(' ');
        let num1 = Number(numbers[0]);
        let num2 = Number(numbers[2]);
        let op = numbers[1];
        switch (op) {
            case '+':
                return `Result: ${num1 + num2}`;
            case '-':
                return `Result: ${num1 - num2}`;
            case '*':
                return `Result: ${num1 * num2}`;
            case '/':
                return `Result: ${num1 / num2}`;
            default:
                return 'Error!';
        }
    } else if (command.startsWith('Set a timer for') && command.endsWith('minutes')) {
        let clear = command.replace('Set a timer for ', '');
        let num = clear.replace(' minutes', '');
        setTimeout(function () {
            console.log('Timer done!');
        }, num * 60000);
        return `Timer set for ${num} minutes!`;
    }
}

console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Add swimming to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo'));
console.log(getReply('What day is it today'));
console.log(getReply('What is 3 + 3'));
console.log(getReply('What is 4 * 12'));
console.log(getReply('Set a timer for 1 minutes'));