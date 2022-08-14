//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94750309616']
global.premium = ['94750309616']
global.ownernomer = '94750309616'
global.ownername = '𝒍𝒂𝒌𝒊𝒚𝒂🔆❤️'
global.botname = '𝗟𝗮𝗸𝗶𝘆𝗮 𝗕𝗼𝘁'
global.footer = '𝘓𝘈𝘒𝘐𝘠𝘈 𝘉𝘙𝘖'
global.cap = '𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 𝐋𝐀𝐊𝐈𝐘𝐀'
global.ig = 'https://youtube.com/channel/UCOdv2fhpb0ECkrcXbTtI_jw'
global.region = 'Sri Lanka,Galle'
global.sc = '𝗬𝗼𝘂𝗧𝘂𝗯𝗲'
global.myweb = 'https://chat.whatsapp.com/IErnSNPEYCI9w3ddmcf0gS'
global.packname = '𝘓𝘈𝘒𝘐𝘠𝘈 𝘉𝘙𝘖 𝘚𝘛𝘐𝘊𝘒𝘌𝘙 𝘉𝘖𝘛'
global.author = '𝙇𝙖𝙠𝙞𝙮𝙖 𝙗𝙧𝙤✍️🤍'
global.autobio = 'true'
global.sessionName = 'LAKIYA'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'හරි ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'ටිකක් ඉන්න...',
    error: 'අව්ලක්.වීඩියො එක ලොකු වැඩි ඇති🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
