# Changelog

Patch notes for Switch Hub. Nothing fancy, just what changed and why.

## [1.9.0] - 2026-11-13

### Added
- **Group chat for 3 or more people.** There's a new Groups section in the sidebar. Tap **+ New**, name the group and pick two or more friends from your friends list. Everyone in the group connects directly to everyone else (no server, and the chat keeps working even if the person who made it leaves), so it's best for small friend groups of up to 12. Groups support text, replies, reactions, pinning, edit and delete (only your own messages), typing indicators ("Falcon is typing"), and read receipts that count people ("seen by 2/3"). You can send screenshots, clips and files up to 50 MB too. Each message shows who sent it.
- **Group info.** The 👥 button in a group's header lets you rename it, see who's online, add more friends, or leave.
- **Saved in your browser, with catch-up.** Groups and their history are saved in each member's browser. If you were offline, you catch up on what you missed from whoever is online when you reconnect.
- Only your friends can add you to a group, and strangers can't open a group connection to you.

### Notes
- Gallery browsing, watch together, calls and games are still one-on-one for now.

## [1.8.0] - 2026-11-13

### Added
- **See which browser you and your friend are using.** When you're connected, Peer Activity shows a line like "🌐 You: Chrome · Joseph: Firefox", and Settings shows "Your browser: Chrome" under your Peer ID. Only the browser's name is shared (Chrome, Edge, Firefox, Safari, Opera, Brave, Vivaldi, Samsung Internet or DuckDuckGo), never the full user agent or anything else about your device. A friend on an older version shows as "unknown" until they update.

### Fixed
- **A friend's name could stay "New Friend" after connecting.** The first hello between two browsers could arrive before the other side was listening and get lost. Each side now answers a hello once, so names, status and the browser name always arrive.

## [1.7.0] - 2026-11-12

### Added
- **Search by month name.** Type a month in the gallery search to see everything from it: `march` shows every March, `march 2024` shows just March 2024, and `mar 5 2024` (or `5th March 2024`) narrows it to one day. Short forms like `mar` or `sept` work, any order works, and the existing searches (game names, `2024`, `2024-03`) are unchanged. The search box now says "Search game, month or date...".

## [1.6.1] - 2026-11-12

### Changed
- **"By Play Time" only shows on your own gallery.** Play time is only known for your own games, so the option is hidden while you're looking at a friend's gallery (and a friend's gallery falls back to All Media if it was selected), and comes back when you switch to your own.

## [1.6.0] - 2026-11-12

### Added
- **Three new ways to sort your gallery.** **By Year** and **By Month** group your captures under 2025, or "March 2025", newest first (captures with no readable date go under "Unknown date"). **By Play Time** lists your most-played games first and shows the hours in each heading (for example "ABZU · 100 h"), using Nintendo's total play time when Hub has seen it and its own tracked time otherwise; games with no known play time come last, most captures first. You can still rename a game or mark it as a spoiler from the Play Time view, just like By Game. Play time comes from your own Switch status, so in a friend's gallery By Play Time just groups by game.

### Changed
- The Sort By list in the sidebar is now a compact two-column grid so the extra options don't make it longer. The top bar and "what your friend is browsing" text name the new sorts.

## [1.5.0] - 2026-11-12

### Changed
- **The play-time journal now uses Nintendo's own play time.** Your Switch status already includes the total time you've played each game and when you first played it, so Hub records those instead of relying only on its own stopwatch. Each game shows, for example, "563 h played in total · first played Aug 5, 2018", and the same totals appear in the journal header, the Markdown export, and the all-time Stats and Year card ("Time played (Nintendo)"). The game you're playing, or the last one you played while offline, fills in the first time Hub sees it, and games show up in the journal even if you have no captures of them. The totals are saved in this browser.
- **Session start times are more accurate.** Nintendo also says when the current game was started, so a session Hub only noticed halfway through now counts from the real start. Hub's own tracking is still shown ("tracked by Hub") as the per-session detail, and still drives the per-year numbers, because Nintendo only reports all-time totals.

## [1.4.1] - 2026-11-12

### Fixed
- **Long highlight reels crashed the tab (black screen).** Two memory problems, both worst on long or 1080p reels:
  - Still images are drawn instantly, so the encoder fell behind and hundreds of raw video frames piled up waiting. Hub now waits for the encoder to catch up (a 160-second 1080p test reel went from crashing at 5.9 GB of browser memory to finishing at about 1 GB).
  - Finishing the file used to build several full copies of the video in memory. It is now assembled piece by piece, which also helps the clip trimmer.
- Reels are encoded at a slightly lower bitrate (still sharp for game footage), so long reels make smaller files that are easier to send.

## [1.4.0] - 2026-11-12

### Changed
- **Guess the game clues are blurred.** The cropped clue is now also softened, so names and HUD text can't be read but shapes and colours still give hints. The full, sharp screenshot still shows when the round is revealed.
- **A tidier sidebar.** Tools are now a compact two-column grid instead of a long stack of buttons. Discover and Albums & tools can be collapsed with the arrow beside their heading (Hub remembers which you closed). In Peer Activity, Watch together, Voice call, Session album and a new **Games** menu share a grid; Vote on the best shot and Guess the game live inside Games, so new games can be added there without making the sidebar longer.

### Fixed
- **Highlight reel is sturdier on long renders.** If the tab goes to the background while a reel renders, it now pauses and continues when you come back (before, the browser's throttling could make it fail). Hub also keeps the screen awake while rendering, asks before you refresh or close the tab mid-render, and frees each clip's video memory as soon as that clip is done.

## [1.3.2] - 2026-11-12

### Fixed
- **Highlight reel stalled with "Rendering stalled" on long clips.** A clip set to play all the way to its last frame stopped sending frame updates once it ended, so the stall check fired even though nothing was wrong (it showed up right at the end of the first clip). Clips are now ended by the video's own "finished" signal, and if a clip runs out a moment early its last frame is held so the rest of the reel and its sound stay in step. A 30 second clip played in full now renders to exactly 30 seconds. The tab still needs to stay in front while a reel renders.

## [1.3.1] - 2026-11-12

### Fixed
- **The highlight reel showed pictures you didn't pick.** Two captures of the same game with the same file time were treated as one, so ticking one also pulled in its twins. Selection now tracks the exact picture you tapped, so the reel lists only what you selected.

### Changed
- **Annotate text can be moved, resized and rotated.** Tap a piece of text to select it, drag it to move, drag the square corner handle to resize, drag the round handle above it to rotate (hold Shift to snap to 15 degrees), and double-click to change the words. Every change can be undone and redone. Clicking away while typing now keeps the text instead of dropping it.

## [1.3.0] - 2026-11-12

### Added
- **Redact tool.** Before you send a screenshot (or from the lightbox), blur or pixelate parts of it, like a friend code or a name. Drag a box and it's pixelated for real in the pixels, so it can't be undone from the file.
- **Annotate.** Draw arrows, boxes, freehand and text on a screenshot before sending. Same editor as redact, with undo.
- **Guess the game.** Pick a screenshot, hide its caption and filename, and your friend guesses the game. Scores are kept for the session.
- **Vote on the best shot.** Start a vote from the session album; everyone taps their favourite and a "Best of" list is kept in this browser.
- **Highlight reel maker.** Select screenshots and clips, and Hub stitches them into one WebM reel. It renders in real time, so keep the tab in front while it runs.
- **Play-time journal.** A per-game journal with captures, tracked play time and your own notes, a timeline view and a Markdown export. Play time is only tracked while Hub is open and an NSA ID is set in Settings.
- **Shareable Year in Review card.** A 1080x1350 post or 1080x1920 story PNG with your top games and stats. Games marked as spoilers are left out. Save it or send it straight to a friend.

### Changed
- Stats now shows tracked time played.

## [1.2.1] - 2026-11-10

### Fixed
- **The caption was hidden behind the picture.** The screenshot or clip sat on a higher layer than the caption box, so whenever it reached the bottom of the window (short or wide windows, tall clips) the caption was covered and you could only see a sliver. The caption is now on top, and the picture makes room for it so it never covers the video controls either. Thanks for the screen recording that pointed this out.

## [1.2.0] - 2026-11-10

### Changed
- **Capture times come from the file name.** Switch names start with the moment of capture (for example `2017122820483800-…` is 28 Dec 2017 at 8:48 PM). Hub now reads the time as well as the date, and shows it in a 12-hour format with AM/PM: in the lightbox next to the date, in the tooltip when you hover a thumbnail, and in the Discord large-image hover text ("captured Dec 28, 2017 at 8:48 PM"). Friends see the time too once they're on this version. Files whose name has no time just show the date.
- **All Media now sorts newest to oldest by the file name's date and time**, the same source Date sort uses, instead of the file's own modified date. Within a day, Date sort and Game sort now also put the latest capture first. Your favourites, captions and albums are unaffected.

### Fixed
- **Caption box hardened.** The caption field now has a solid dark background, forced white text, a larger font and a live character count under it, so what you type is always visible. (I couldn't reproduce text going missing here, so if it still looks blank for you, tell me what device and browser you're on.)

## [1.1.4] - 2026-11-10

### Fixed
- **WebM exports still froze and stuttered.** Tested against a real 720p Switch clip: the old export stamped each frame with the moment it happened to arrive, so the file had uneven gaps (about 19 ms next to 48 ms) and repeated frames, and it had no duration or seek index. WebM export now encodes with the browser's video encoder and gives every frame the exact timestamp it has in the original clip. Audio is cut and encoded as Opus separately, and the WebM is written with its duration and a seek index, so it scrubs and loops properly. On the test clip, 299 of the 300 source frames came out with a steady 33 ms between them. Browsers without the video encoder fall back to the previous method.

## [1.1.3] - 2026-11-10

### Fixed
- **WebM exports could look choppy.** The export recorded the clip by sampling a hidden, 2-pixel video on the recorder's own clock, which repeats and skips frames unevenly (a 24 fps clip came out as an uneven 30 fps, for example) and lets the browser throttle a video nobody can see. Exports now copy each decoded frame to a canvas exactly once and record that, with the clip rendered at full size behind the page, repeated frames skipped, and the bitrate scaled to the clip's resolution (larger clips use VP8, which keeps up in real time). Browsers without frame callbacks use the old method. Keep the tab in front while a WebM is exporting.

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
