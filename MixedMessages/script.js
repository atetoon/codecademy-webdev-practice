const moods = ['Happy', 'Focused', 'Curious'];
const actions = ['learn', 'debug', 'build'];
const goals = ['code', 'a website', 'a project', 'a new skill'];

const randomPicker = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(`Today you're feeling ${randomPicker(moods)}. Time to ${randomPicker(actions)} ${randomPicker(goals)}`);
