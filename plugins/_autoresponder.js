import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(autoresp, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '⋉ 𝐌𝐲𝐥𝐢𝐧𝐠𝐁𝐨𝐭-𝐌𝐃 ⋊', body: '⪩ CREATE BY WILSON', sourceUrl: null, thumbnail: md}}})}
    
return !0 }
export default handler
