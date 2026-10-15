# Changelog

Patch notes for Switch Hub. Nothing fancy, just what changed and why.

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
