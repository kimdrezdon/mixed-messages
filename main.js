// Store message components
const messageComponents = {
	mood: [
		'happy',
		'sad',
		'outraged',
		'lonely',
		'funny',
		'loving',
		'inspirational',
		'mischievous'
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

// Generates a random number between 0 and 7
const generateRandomNum = () => Math.floor(Math.random() * 8);

// Returns the component in messageComponents object, at the index provided
const selectComponent = (type, num) => messageComponents[type][num];

// Generates the random message to be logged to the console
const generateMessage = () => {
	let mood = selectComponent('mood', generateRandomNum());
	let buddy = selectComponent('buddy', generateRandomNum());
	let alter_ego = selectComponent('alter_ego', generateRandomNum());
	let quote = selectComponent('quote', generateRandomNum());

	return `Good morning Michael! Here is your guide for the day: \n Today you are feeling ${mood}. \n You best buddy will be ${buddy}. \n Your alter ego is ${alter_ego}. \n Your phrase of the day is "${quote}". \n Have a great day at Dunder Mifflin, Michael! `;
};

// Log the message to the console
console.log(generateMessage());
