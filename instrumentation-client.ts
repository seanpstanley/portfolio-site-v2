import { initBotId } from "botid/client/core";

// Vercel BotID: attaches a bot-detection challenge to protected requests,
// checked server-side with `checkBotId()`. The contact form is a server
// action, which POSTs to the page it's on.
initBotId({
  protect: [{ path: "/", method: "POST" }],
});
