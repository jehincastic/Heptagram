const mongo = require('./mongo.js');
const serverConfigSchema = require('../Schemas/serverConfigSchema');


module.exports = (client) => {
	client.on('guildCreate', async (guild) => {

		await mongo().then(mongoose => {

			try {
				new serverConfigSchema({
					guildId: guild.id,
					userRoleId:  String,
					mutedRoleId: String,
					staffRoleId: String,
					antiLinkOn: Boolean,
				}).save();

				console.log('New guild created: ' + guild.name);
			}
			finally {
				mongoose.connection.close();
			}

		});
	});
};