module.exports = {
	name: 'config',
	description: 'config work',
	category: 'Configuration',
	minArgs: 0,
	maxArgs: 0,
	expectedArgs: "",
	permissions: ["MANAGE_GUILD"],


	execute({ message, roles }) {
		if (message.member.roles.cache.has(roles.admin)) {
			message.channel.send('This is an admin command example');
		}
		else {
			message.channel.send('Sorry, this is a restricted command example!');
		}
	},
};