let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/4b2459adcc002cfc2eb49.jpg'
let text = `⟨───[ 𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 ]───⟩

┌〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕
│
├ 15 ʜᴀʀɪ 3,5ᴋ / ɢʀᴏᴜᴘ
├ 30 ʜᴀʀɪ 7ᴋ / ɢʀᴏᴜᴘ
├ 45 ʜᴀʀɪ 10,5ᴋ / ɢʀᴏᴜᴘ
├ 60 ʜᴀʀɪ 14ᴋ / ɢʀᴏᴜᴘ
├ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ / ɢʀᴏᴜᴘ 
│
└────ᴇʟᴀɪɴᴀ ʙᴏᴛ ʙʏ ʀʏʜᴀʀ ₪

┌〔 𝙷𝙰𝚁𝙶𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
│
├ 15 ʜᴀʀɪ 5ᴋ 
├ 30 ʜᴀʀɪ 10ᴋ 
├ 45 ʜᴀʀɪ 15ᴋ 
├ 60 ʜᴀʀɪ 20ᴋ 
├ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ
│
└────ᴇʟᴀɪɴᴀ ʙᴏᴛ ʙʏ ʀʏʜᴀʀ ₪

┌〔 ꜰɪᴛᴜʀ 430+ 〕
│
├ ᴡᴇʟᴄᴏᴍᴇ
├ ᴋɪᴄᴋ
├ ᴀɴᴛɪʟɪɴᴋ
├ ꜱᴛɪᴋᴇʀ
├ ꜱᴏᴜɴᴅ
├ ᴀɴɪᴍᴇ
├ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
├ ꜱᴇɴᴅ ʙᴜɢ
├ ɢᴀᴍᴇ ʀᴘɢ
├ ᴅʟʟ
│
└────ᴇʟᴀɪɴᴀ ʙᴏᴛ ʙʏ ʀʏʜᴀʀ ₪
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: 'https://wa.me/p/5301996616514622/6282182461800'}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(sewabot|sewa|belibot|buyprem)$/i

export default handler