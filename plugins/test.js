const { bot } = require("../lib/");
bot(
  {
    pattern: "test ?(.*)",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match) => {
    message.downloadMediaMessage()
  }
);
