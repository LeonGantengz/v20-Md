let handler  = async (m, { conn }) => {
	
	await m.reply('Si ajg mau coli.')
  conn.reply(m.chat,`${pickRandom(global.bokep)}`, m)
}
handler.help = ['filebokep']
handler.tags = ['nsfw']
handler.command = /^(filebokep)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.nsfw = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
//tambah sendiri kalo kurang
global.bokep = [
'TOBAT BANG 
“Allah SWT melaknat orang yang menikahi tangannya (mengambil kesenangan (onani) dengan tangannya). Dan sesungguhnya Allah SWT merusak umat yang bermain alat kemaluan."',
]
