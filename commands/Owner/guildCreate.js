const { colors, cdn } = require('../../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'guildcreate',
	aliases: ['gc'],
	description: 'pretends a new guild has been added. (for testing only)',
	category: 'Owner',
	ownerOnly: true,
	hidden: true,

	execute({ client, message }) {

		client.emit('guildCreate', message.guild);

		const embed = new MessageEmbed()
			.setColor(colors.heptagram)
			.setTitle(`Guild Create Emmitted!`)
			.setDescription(`You have succesfully emmited a guild create. || <@${message.author.id}>`)
			.setTimestamp()
			.setFooter("Message sent by the Heptagram Bot", `${cdn.sqlogo}`);

		message.channel.send(embed);
	},
};
