const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remind')
        .setDescription('Set a reminder!'),
    async execute(interaction) {
        await interaction.reply(`>>> To set a reminder, reply with "(the title of your reminder) (time interval)".\nFor example, to set a wake-up alarm in 2 hours, reply "(WAKE UP!) (2h)".`);
    },
};