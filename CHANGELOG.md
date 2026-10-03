# Changelog

Patch notes for Switch Hub. Nothing fancy, just what changed and why.

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
