let fs = require('fs')

global.owner = ['6285608625102'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  vinco: 'https://viko-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'ebb6251cc00f9c63',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear3.herokuapp.com': 'https://youtu.be/JNuiRPRysuk',
  'https://viko-api.herokuapp.com': 'vinko',
  'https://leyscoders-api.herokuapp.com': 'IkyOgiwara'
}

lolkey = 'rey2k21'
zekskey = 'apivinz'
xteamkey = 'ebb6251cc00f9c63'
leyskey = 'dappakntlll'
bearkey = 'https://youtu.be/JNuiRPRysuk'
ApiiKey = 'https://tinyurl.com/SCRIPT-YUI-MD'
vinkey = 'vinko'

namabot = 'Yui-Chan'
namalu = 'LeonGanz'
footer = '\nBy LeonGanz'
kasihcaption = `Nih Kak`

// Sticker WM
global.stiker_wait = '_*Tunggu Sebentar...*_'
global.packname = 'LeonGanz'
global.author = 'Putri Azizah♡'
global.email = 'ramaagung050307@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = '©LeonGanz'
global.media = 'https://raw.githubusercontent.com/Bl4ck-lion/Alphabot-Md/v7.1/image/lol_1.jpg'

global.wait = '_*Tunggu Sebentar Sedang Yui Proses...*_'
global.eror = '_*Server Error*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
