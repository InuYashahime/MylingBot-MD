let handler = async (m, { conn, participants, command, usedPrefix }) => { 
try{
let texto = `${lenguajeMY['smskick1']()}${usedPrefix + command} @${global.owner[0][0]}*`
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}

if (!global.db.data.settings[conn.user.jid].restrict) return conn.sendButton(m.chat, wm, `${lenguajeMY['smsAvisoAG']()}${lenguajeMY['smsSoloOwner']()}`, null, [[lenguajeMY.smsEncender(), `${usedPrefix}on restringir`]], fkontak, m)
if (!m.mentionedJid[0] && !m.quoted) return m.reply(texto, m.chat, { mentions: conn.parseMention(texto)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
let eliminar = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return conn.reply(m.chat, texto, fkontak, m) 
if(m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== "") {

var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant
if(conn.user.jid.includes(mentioned)) return conn.reply(m.chat, `${lenguajeMY['smskick1']()}${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)
//let eliminar = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove')
let done = `${lenguajeMY['smsAvisoEG']()}*@${mentioned.split("@")[0]} ${lenguajeMY['smskick2']()}*`
let err1 = `${lenguajeMY['smsAvisoFG']()}*@${mentioned.split("@")[0]} ${lenguajeMY['smskick3']()}*`
let err2 = `${lenguajeMY['smsAvisoAG']()}*@${mentioned.split("@")[0]} ${lenguajeMY['smskick4']()}*`


if (eliminar[0].status === "200") m.reply(done, m.chat, { mentions: conn.parseMention(done)})  
else if (eliminar[0].status === "406") m.reply(err1, m.chat, { mentions: conn.parseMention(err1)})   
else if (eliminar[0].status === "404") m.reply(err2, m.chat, { mentions: conn.parseMention(err2)})  
else conn.sendButton(m.chat, `\n${wm}`, lenguajeMY['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeMY.smsMensError1(), `#reporte ${lenguajeMY['smsMensError2']()} *${usedPrefix + command}*`]], m)
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) return
} catch (e) {
await m.reply(m.chat, `\n${wm}`, lenguajeMY['smsMalError3']() + '#report ' + usedPrefix + command, m)   
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeMY['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeMY.smsMensError1(), `#reporte ${lenguajeMY['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeMY['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}} 
handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|echar|hechar|sacar|ban)$/i
handler.admin = handler.group = handler.botAdmin = true
export default handler
