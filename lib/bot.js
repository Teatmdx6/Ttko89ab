const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/NovaMdofficial/NOVA-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://NOVA-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/NovaMdofficial/NOVA-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/NOVA-MD/NOVA-MD",
REPO_NAME: process.env.REPO_NAME || "NOVA-MD",
BOT_NAME: process.env.BOT_NAME || "NOVA-MD",
DESCRIPTION: process.env.DESCRIPTION || "NOVA MD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94743363230",
OWNER_NAME: process.env.OWNER_NAME || "NovaMd Official",
ST_SAVE: process.env.ST_SAVE || "NOVA-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "NOVA-MD-BY-NovaMd-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY NOVA-MD`* _*POWERD BY*_ *NovaMd Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "NOVA-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ NOVA-MD BY NOVA-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363348739987203@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x06",
INSTA: process.env.INSTA || "https://Instagram.com/NovaMdofficial",
ALIVE_IMG: process.env.ALIVE_IMG || "https://o.uguu.se/YsGvSyfy.png",
OWNER_IMG: process.env.OWNER_IMG || "https://o.uguu.se/YsGvSyfy.png",
CONVERT_IMG: process.env.CONVERT_IMG || "https://o.uguu.se/YsGvSyfy.png",
AI_IMG: process.env.AI_IMG || "https://o.uguu.se/YsGvSyfy.png",
SEARCH_IMG: process.env.SEARCH_IMG || "https://o.uguu.se/YsGvSyfy.png",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://o.uguu.se/YsGvSyfy.png",
MAIN_IMG: process.env.MAIN_IMG || "https://o.uguu.se/YsGvSyfy.png",
GROUP_IMG: process.env.GROUP_IMG || "https://o.uguu.se/YsGvSyfy.png",
FUN_IMG: process.env.FUN_IMG || "https://o.uguu.se/YsGvSyfy.png",
TOOLS_IMG: process.env.TOOLS_IMG || "https://o.uguu.se/YsGvSyfy.png",
OTHER_IMG: process.env.OTHER_IMG || "https://o.uguu.se/YsGvSyfy.png",
MOVIE_IMG: process.env.MOVIE_IMG || "https://o.uguu.se/YsGvSyfy.png",
NEWS_IMG: process.env.NEWS_IMG || "https://o.uguu.se/YsGvSyfy.png",
PP_IMG: process.env.PP_IMG || "https://o.uguu.se/YsGvSyfy.png"
};
