// Which Michael Scott are you today?

// Store message components
const messageComponents = {
	mood: [
		'Happy',
		'Sad',
		'Outraged',
		'Lonely',
		'Funny',
		'Loving',
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
	],
	quote: [
		"That's what she said",
		"Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
		"I'm not superstitious, but I am a little stitious.",
		'You know what they say. Fool me once, strike one, but fool me twice...strike three.',
		'And I knew exactly what to do. But in a much more real sense, I had no idea what to do.',
		'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.',
		'You should never settle for who you are.',
		'I am running away from my responsibilities, and it feels good.'
	]
};

// Generate random number
// const randomNumber = () => {
// 	return Math.floor(Math.random() * 8);
// };

// Randomly select message components and save them to an array
// const selectedComponents = [];

// const randomlySelect = () => {
// 	for (const component in messageComponents) {
// 		const index = randomNumber();
// 		selectedComponents.push(messageComponents[component][index]);
// 	}
// };

// Generate the printed message
// const generateMessage = () => {
// 	randomlySelect();
// 	console.log("What's up Michael Scott!");
// 	console.log(`Today your mood is: ${selectedComponents[0]}`);
// 	console.log(`Your best buddy is: ${selectedComponents[1]}`);
// 	console.log(`Your alter ego is: ${selectedComponents[2]}`);
// 	console.log("That's what she said!");
// };

// generateMessage();

// message = `Good morning Michael! Today you are in a ${mood} mood. You best buddy is ${buddy} and your alter ego is ${alter_ego}. Your quote of the day is ${quote}. Have a great day at Dunder Mifflin, Michael! `;
