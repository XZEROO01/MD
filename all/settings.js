const fs = require('fs')
const chalk = require('chalk')

global.owner = "6282140506913"
global.ownernumber = "6282140506913"
global.ownernomer = "6282140506913"
global.botname = "Xme MD"
global.namabot = "Xme MD"
global.ownername = "Rafzz"
global.namaCreator = "Rafzz"
global.autoJoin = false
global.antilink = false
global.versisc = 'V9 Private'
global.namasc = 'V9 BY SanZ Official'
global.wagc = "https://chat.whatsapp.com/JPHQbZSeG14Gdf5M8M0mOB"
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.merchant = 'M220510ACSX4641HS'
global.apitokendo = '-'
global.apilinode = '-'
global.secret = '-'
global.domain = '' // Isi Domain Lu
global.apikeyy = '' // Isi Apikeyy Plta Lu
global.capikeyy = '' // Isi Apikeyy Pltc Lu
global.signature = '-'
//MAU PEDIA
global.api_key = "-"//@zallDev
global.api_id = "-"//@zallDev
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By Rafzz Offcial"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})