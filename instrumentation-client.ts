import { initBotId } from "botid/client/core";

// The contact form is a server action, which POSTs to the page it's on.
initBotId({
  protect: [{ path: "/", method: "POST" }],
});
