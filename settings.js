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
global.owner = ['94723418093']
global.premium = ['94723418093']
global.ownernomer = '94723418093'
global.ownername = '៚𝙸𝙳𝚄𝚁𝙰𝙽𝙶𝙰 𝙱𝙾𝚃⁵⁴¹⃟✦⃝̮̮〽️'
global.botname = '𝙸𝙳𝚄𝚁𝙰𝙽𝙶𝙰 𝙱𝙾𝚃'
global.footer = '𝙸𝙳𝚄𝚁𝙰𝙽𝙶𝙰 𝙱𝙾𝚃'
global.cap = '*Genarated By 𝙸𝙳𝚄𝚆𝙰*'
global.ig = 'https://github.com/𝙸𝙳𝚄𝚁𝙰𝙽𝙶𝙰 𝙱𝙾𝚃'
global.region = 'Sri Lanka, 𝙺𝚄𝚁𝚄𝙽𝙴𝙶𝙰𝙻𝙰, 𝙼𝙰𝚆𝙰𝚃𝙷𝙰𝙶𝙰𝙼𝙰'
global.sc = 'https://github.com/𝙸𝙳𝚄𝚁𝙰𝙽𝙶𝙰 𝙱𝙾𝚃'
global.myweb = https://vt.tiktok.com/ZSRNFeYjn/?k=1
global.packname = '𝙸𝙳𝚄𝚁𝙰𝙽𝙶𝙰 𝙱𝙾𝚃 Md Sticker Bot'
global.author = '៚𝙸𝙳𝚄𝚁𝙰𝙽𝙶𝙰 𝙱𝙾𝚃⁵⁴¹⃟✦⃝̮̮〽️'
global.autobio = 'true'
global.sessionName = 'session'
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
