require('dotenv').config();
const cron = require('node-cron');
const axios = require('axios').default;

const OFF = process.env.OFF;
const RECCURENCE = process.env.RECCURENCE;
const ENDPOINT = process.env.ENDPOINT;
if (!RECCURENCE || !ENDPOINT) {
	throw new Error('Missing environment variables');
}

const teamsMessage = () => {
	const date = new Date();
	const isoDate = date.toLocaleDateString();
	const dayOfWeek = date.toLocaleString('default', {
		weekday: 'long',
	});

	return {
		'@type': 'MessageCard',
		'@context': 'https://schema.org/extensions',
		summary: `Standup: Happy ${dayOfWeek}!`,
		themeColor: '0078D7',
		sections: [
			{
				activityTitle: 'Standup',
				activitySubtitle: isoDate,
				text: `Happy ${dayOfWeek}! Just answer these three questions:\n1. What did you do since the last Standup?\n2. What will you be working on today/tomorrow?\n3. Any blockers?`,
			},
		],
	};
};

const sendMessage = async () => {
	if (OFF) return;

	console.log('Sending message', new Date());
	try {
		await axios.post(ENDPOINT, teamsMessage());
		console.log('Message sent');
	} catch (err) {
		console.log('Error sending message');
		console.log(err);
	}
};

cron.schedule(RECCURENCE, sendMessage);

console.log('Cron job started');
