module.exports = {
    name: "hi",
    alias: ["hello","alive","hi"],
    desc: "Say hello to bot.",
    react: "🧣",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());
        await Miku.sendMessage(m.from,{image:{url:botImage1},caption:`\nකොහොමද *${pushName}* මම *ƊƋГƘ ѦしẜƋ ⱮƊ* bot. මගේ owner ගේ you Tube Channel eka https://youtube.com/@VihangaTheekshana මගේ menu එක ගන්න *${prefix}help* කියලා ගහන්න ස්තුති.\n\n_🧩 Server Uptime:_ *${uptime()}*\n_🎀 Status:_ *Operational*\n`},{quoted:m})
    }
}