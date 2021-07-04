// Which Michael Scott are you today?

// Store message components
const messageComponents = {
	mood: [
		'Happy',
		'Sad',
		'Outraged',
		'Lonely',
		'Funny',
		'In love',
		'Inspirational',
		'Mischievous'
	],
	buddy: ['Pam', 'Jim', 'Dwight', 'Ryan', 'Jan', 'Holly', 'Kevin', 'Stanley'],
	alter_ego: [
		'Prison Mike',
		'Agent Michael Scarn',
		'Ping',
		'Michael Klump',
		'Michael the Magician',
		'Date Mike',
		'Michael Scotch',
		'Caleb Crawdad'
	]
};

// Generate random number
const randomNumber = () => {
	return Math.floor(Math.random() * 8);
};

// Randomly select message components and save them to an array
const selectedComponents = [];

const randomlySelect = () => {
	for (const component in messageComponents) {
		const index = randomNumber();
		selectedComponents.push(messageComponents[component][index]);
	}
};

// Generate the printed message
const generateMessage = () => {
	randomlySelect();
	console.log("What's up Michael Scott!");
	console.log(`Today your mood is: ${selectedComponents[0]}`);
	console.log(`Your best buddy is: ${selectedComponents[1]}`);
	console.log(`Your alter ego is: ${selectedComponents[2]}`);
	console.log("That's what she said!");
};

generateMessage();
