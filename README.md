# Switch Hub

A little browser app for Nintendo Switch nerds who want to show their friends what they've been playing.

Load up your `Nintendo/Album` folder and browse your own screenshots and clips, then connect directly to a friend's browser (no server, no accounts, no uploading anything anywhere) and you can see their gallery too, chat with them, and watch each other's live Switch status while you do it. It started as two separate little tools and eventually just made sense to smush them together into one thing, so here we are.

## [👉 Try it here](https://codymkw.github.io/switch-hub/)

No install, no sign-up. Just open it in Chrome, Edge, or Opera on desktop (it needs the File System Access API to read your SD card folder, which Safari/Firefox don't support yet).

## What it actually does

**Gallery side**
- Browse your screenshots and clips straight off your SD card, sorted by date or by game (it auto-identifies ~650+ games from a community title-ID database, no manual tagging needed)
- Search, filter by photo/video, favorite the ones you want to find again later
- Slideshow mode, random screenshot button, "on this day" for old memories
- Mark a game as spoiler and it's automatically hidden from anyone you're connected to (and blurred in your own view too, in case you're screen-sharing)
- See what your friend is currently looking at in their gallery, and jump straight to it

**Chat side**
- Real read receipts (sent / delivered / seen), typing indicators, message reactions
- Edit or delete your own messages
- Send files and images, with an actual progress bar instead of just... nothing happening for 20 seconds
- Basic markdown (`**bold**`, `*italic*`, `` `code` ``), auto-linked URLs
- Export a conversation as a `.txt` file, or just clear it

**Both sides**
- Everything runs peer-to-peer (via [PeerJS](https://peerjs.com/)/WebRTC) directly between browsers. Nothing gets uploaded to a server — if you and your friend both close the tab, the connection's just gone.
- You get a permanent ID the first time you open it, so you can just copy an invite link and send it to someone. They click it, it connects automatically, done. No typing IDs back and forth.
- Optional live "what game is my friend playing right now" status via [nxapi's presence API](https://github.com/samuelthomas2774/nxapi) — add anyone's NSA ID and see their online/game status update in real time, whether or not you're actively connected to them.

## How to actually use it with a friend

1. Open the app, hit **Settings**, set your name/avatar/status if you want.
2. Click **Copy Invite Link** and send it to a friend (Discord, text, whatever).
3. They open it, it connects automatically, and now you can see each other's galleries and chat.

That's it. If the link ever stops working (new device, cleared your browser data, whatever), just grab a fresh one.

## A few honest caveats

- **Both people need the tab open at the same time.** This isn't a messaging service with a backend — if your friend's browser isn't open, there's nobody to connect to. Not what to reach for instead of Discord for anything time-sensitive.
- **Your Peer ID is basically a key.** Anyone who has your invite link can connect to you. If you want to kill an old link, there's a "Reset my ID" button in Settings.
- **Video playback depends on your browser's codec support.** If a clip won't preview, it'll tell you why (usually HEVC, which most browsers can't decode) and let you download it to play elsewhere instead of just failing silently.
- **File attachments in chat don't survive a page refresh** — the actual file data can't be stored in a way that persists, so if you reload, you'll see a message history but the attachment itself will say it expired. Text messages, reactions, and everything else stick around fine.
- The Switch presence stuff depends on a third-party API staying up. If it's down, you'll just see "Unavailable" instead of someone's status — nothing else breaks.

## The standalone versions

Hub is the combined version, but the two halves also still exist on their own if you just want one piece:

- **[Switch Chat](https://codymkw.github.io/switch-chat/)** — just the chat, no gallery
- **[Switch Album Gallery](https://codymkw.github.io/switch-album-gallery/)** — just the gallery, no chat

All three save their own separate local data, so renaming a game or saving a friend in one won't show up in another unless it's Hub pulling in the Gallery's game-name/spoiler data specifically (that part's shared automatically since they're hosted under the same domain).

## Credits

- Game name database from [RenanGreca/Switch-Screenshots](https://github.com/RenanGreca/Switch-Screenshots)
- Switch presence data from [nxapi](https://github.com/samuelthomas2774/nxapi)
- P2P connections via [PeerJS](https://peerjs.com/)

Built for fun, mostly to send Joseph my Splatoon screenshots without a middleman. Hope it's useful to more than just us.
