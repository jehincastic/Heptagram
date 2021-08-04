const mongoose = require('mongoose');
const { Schema } = mongoose;

const serverConfigSchema = new Schema({
	id_: String,
	userRoleId:  String,
	mutedRoleId: String,
	staffRoleId: String,
	antiLinkOn: Boolean,
});


module.exports = mongoose.model('serverConfig', serverConfigSchema);