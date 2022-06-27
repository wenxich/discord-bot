const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remind')
        .setDescription('Set a reminder!'),
    async execute(interaction) {
        await interaction.reply(`>>> To set a reminder, reply with __the title of your reminder in quotation marks__ and then a __time interval__ (a number + either D, H, or S for days, hours, or seconds).\nFor example, to set a wake-up alarm in 2 hours, you could reply **"WAKE UP!" 2H**.`);
    },
};