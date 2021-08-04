const mongoose = require('mongoose');
const { Schema } = mongoose;

const reqString = {
	type: String,
	required: true,
};


const serverConfigSchema = new Schema({
	guildId: reqString,
	userRoleId:  String,
	mutedRoleId: String,
	staffRoleId: String,
	antiLinkOn: Boolean,
});


module.exports = mongoose.model('serverConfig', serverConfigSchema);