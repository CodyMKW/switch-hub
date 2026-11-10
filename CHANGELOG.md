# Changelog

Patch notes for Switch Hub. Nothing fancy, just what changed and why.

## [1.1.2] - 2026-11-10

### Changed
- **Videos in chat now play right in the conversation**, the same way screenshots show up as images, instead of appearing as a download link. They have the usual controls (play, scrub, volume, fullscreen), and keep playing if the chat refreshes underneath. If your browser can't play a particular clip, it falls back to a download link.

## [1.1.1] - 2026-11-10

### Changed
- **Video calls are gone; voice calls stay.** No camera is ever asked for now. A call shows a small panel with a timer, mute and hang up.
- **Faster, and much harder to freeze.** Select mode, Select all and sorting no longer rebuild the whole grid or keep dozens of video decoders alive: clip previews only load while they're on (or near) the screen and are released when they scroll away. Select all updates the tiles in place (about 8x faster on a 3,000-file library in my test). Sorting by game and the per-group counts are computed once instead of once per comparison. Chat writes to storage are batched instead of saving the whole history on every event, long chats only draw the latest 200 messages (with a "Show earlier" button), bursts of incoming file chunks or a batch send redraw once per frame, and zipping shows progress and lets the page breathe between files.

### Fixed
- **Watch together invites said "they can't watch right now" and the other person never saw anything.** Invites and calls used the browser's own pop-up dialog, which Chrome can block or skip when the tab is in the background, and that counted as "no". They now show a card inside the page (with a ringing sound, a flashing tab title, and a system notification if you've allowed those), and your friend's answer is what you see.
- **Accepting a watch together invite cancelled it straight away.** Joining now takes a proper invite, accept, start handshake, so a late or stale answer can't leave one side stuck. The follower's screen also only closes when the host actually stops viewing something, not at the start of the session.
- **Voice calls said "invite sent" and "didn't pick up" at once.** The call only starts after the other person presses Answer. If you cancel it, they see a missed call; if they're already on a call, you're told.
- A late "disconnected" event from an old connection can no longer tear down the new one.

## [1.1.0] - 2026-11-09

### Added
- **Reply to a message.** Hover a message and hit ↩️ to quote it. The quote shows above your reply, and clicking it jumps to (and briefly highlights) the original.
- **Pinned messages.** Pin or unpin any message with 📌. Pins sync to both of you, and a bar above the chat shows them (click it to cycle through if there's more than one).
- **Captions on screenshots.** Open one of your screenshots and click the caption pill to write a note. A connected friend sees it live, and a 💬 badge appears on the thumbnail.
- **Reactions that stick on screenshots.** Reacting to a friend's screenshot used to be a floating emoji that vanished. It's now also saved on their side as a badge on the thumbnail and shown under the screenshot in their lightbox (with a button to clear it).
- **Albums.** Make named albums in the sidebar, filter the gallery to one, rename or delete them. Deleting an album never touches your screenshots.
- **Select mode.** Pick multiple screenshots, then add them to an album, send them to a friend one by one (with progress), add them to the session album, or download them as a zip with a folder per game. The zip is built in the browser without a library.
- **Duplicate finder.** Finds identical files (same size, then a fingerprint of the start, middle and end of each file) and can hide the extras for the session. Nothing is ever deleted.
- **Stats & Year in Review.** Totals, photos vs clips, top games, busiest day and month, longest streak, a day-by-day calendar heatmap, and a per-year recap.
- **Watch together.** Invite a friend, they accept, and their screen follows yours (screenshots, arrow keys and slideshow). Pass the remote back and forth, and end it from the banner at the top.
- **Shared session album.** Either of you can add screenshots to a pile that both of you see while connected. Spoiler-marked games can't be added.
- **Voice and video calls**, with mute and camera toggles. The call rings through the existing connection and only starts once the other person accepts, and an uninvited call is rejected.
- **Clip trim and GIF export.** The ✂️ button on a local clip opens a trimmer. Export the selection as a WebM, or as a GIF (up to 15 seconds, 240/320/480px, 8/10/15 fps). Both are made in your browser.
- **Installable app.** Added a web app manifest, icons and a service worker, plus an "Install as an app" button when your browser supports it. The app shell now opens offline.

### Fixed
- **Closing the lightbox told your friend you were still looking at that screenshot.** The "what they're viewing" update went out before the lightbox had finished closing, so your friend's panel kept showing the old screenshot (and "Jump to what they're viewing" kept offering it). It now reports "not viewing" immediately.
- **Offline, the app tried to use a connection library that hadn't loaded.** It now says it can't connect to friends right now and carries on with your local gallery.

### Changed
- The connected-friend panel (jump to viewing, watch together, calls, session album) now appears as soon as you connect, rather than after the first thing your friend does.

## [1.0.5] - 2026-10-15

### Fixed
- **A friend's gallery could show up empty after they loaded a big folder (like a USB export).** The sender built a thumbnail for every file before sending anything, and one unreadable file could stall the whole sync forever. Thumbnails now give up after 10 seconds, and files that can't be previewed show a "No preview" tile you can still click. The gallery also goes out in small batches instead of one giant message, so photos start appearing right away. Thumbnails are now made straight from the files instead of loading every full-size image into memory first.
- **The game database update could fail completely over a stray comma.** A trailing comma in `game_ids.json` made the whole refresh fail with a JSON error. The update now retries leniently, so one typo in the list can't break it.
- **USB-loaded screenshots with a stray letter after the game ID weren't getting named.** Some USB files are named like `...-2A1FB921003961F7A6B12A2A7A1629DCL.jpg`, an ID plus an extra letter, and those landed under "UNSORTED-" and never matched the database. IDs are now matched even with extra trailing letters or a `_c`-style suffix, and a full ID anywhere in a filename is picked up too. Names are looked up without the "UNSORTED-" prefix, so this also works for a friend still on an older version.

### Changed
- "UNSORTED-" no longer appears in game names. Files with no ID and no game folder show their own name, or "Unsorted" when there isn't a usable one.

## [1.0.4] - 2026-10-15

### Added
- **USB-loaded folders now load properly.** USB exports arrange screenshots in a folder per game (like "Mario Kart World") with no title ID in the filenames, which used to dump everything into "UNSORTED". When a file has no ID, Switch Hub now uses the name of the folder it sits in as the game name. Container folders like `Album`, `Nintendo` and year/month/day folders are skipped. These games group, search, spoiler-hide, and rename like any other. SD card loading is unchanged.
- **You now get told when new games are added to the game database.** A toast lists the new games (for example "3 new games added to the database: X, Y, Z and 2 more"). If any of your unnamed screenshots are now identified, it says how many.

### Changed
- The game database now checks for updates on load and every 30 minutes while the app is open (refreshing if the last check was over 6 hours ago), instead of once a day.
- The Refresh Game Database button now tells you when you're already up to date or can't reach the database.

## [1.0.3] - 2026-10-03

### Fixed

* **Chat could still be used after disconnecting.** The message box, attachment button, and emoji button now disable themselves when there isn't an active connection, preventing messages from being sent while offline.
* **Disconnect notifications could be unreliable.** Improved connection cleanup so the chat properly updates when a friend disconnects.
* **Switching tabs could cause false disconnects.** Removed the heartbeat timeout that could incorrectly close an otherwise working connection when the browser delayed background-tab timers.

## [1.0.2] - 2026-10-02

### Fixed
- **"Send to Chat" had no way to actually pick a friend.** If you clicked it without already having a friend selected, it just told you to "select a friend first" with no way to do that from the lightbox. It now asks you who to send it to (or just sends it straight away if you've only got one friend added), and tells you plainly if you haven't added anyone yet instead of leaving you stuck.

## [1.0.1] - 2026-10-02

### Fixed
- **"Scanning Album..." could get stuck on screen** after a folder finished loading, sitting on top of the gallery that had already loaded underneath it. Turned out two CSS utility classes (`.hidden` and `.flex`) were both marked `!important`, and re-adding `hidden` without also removing `flex` let `flex` win the tie, so the box never actually disappeared. Always clears properly now.
- **The blue "Load SD Card" button on the welcome screen didn't do anything.** Only the sidebar's "Load SD Card Folder" button was actually wired up. Both buttons open the folder picker now.
- The scanning counter could get stuck on a stale number (like "Found: 200 files" when 233 actually loaded) if the total wasn't an even multiple of 50. It now always shows the real final count.

## [1.0.0] - 2026-10-02

### Added
- Initial release of **Switch Hub** — Switch Gallery and Switch Chat merged into a single app with one identity, one Peer ID, and one friends list instead of two separate tools.
- Browse your own screenshots/clips from your SD card, or a connected friend's gallery, without leaving the app you chat with them in.
- Invite-link connecting: copy a link, send it to a friend, they click it, you're connected. No more passing Peer IDs back and forth.
- Permanent Peer ID — generated once and reused every time you open the app, so invite links and saved friends don't go stale on reload.
- "Send to Chat" lets you hand a screenshot straight from the gallery into a chat message.
- A pinned "My SD Card" row so you can duck back to your own local gallery without dropping a friend's connection in the background.
- Everything from the standalone apps carried over: game auto-naming from a community database, spoiler protection, favorites, slideshow, search/filters, read receipts, typing indicators, message reactions, editing/deleting messages, file transfers with real progress bars, and live Switch status for your friends.
