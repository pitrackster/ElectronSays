# Simon Say's game

Super simple implementation of the game Simon Say's

- Electron
- ReactJS
- Webaudio API

### Original game infos

#### The game features 4 skill levels

- Repeat a sequence of 8 colours
- Repeat a sequence of 14 colours
- Repeat a sequence of 20 colours
- Repeat a sequence of 31 colours

#### Squares / Tiles

- Green square – G4 391.995 Hz
- Red square – E4 329.628 Hz
- Yellow square – C4 261.626 Hz
- Blue square – G3 195.998 Hz

#### Misc

- Sequence length: 1‐5, tone duration 0.42 seconds, pause between tones 0.05 seconds
- Sequence length: 6‐13, tone duration 0.32 seconds, pause between tones 0.05 seconds
- Sequence length: 14‐31, tone duration 0.22 seconds, pause between tones 0.05 seconds

### Install

`npm install && npm run start`


### Scripts

- `npm run webpack` - build javascript
- `npm run watch` - build javascript and watch for changes
- `npm run start` - build javascript and starts electron app

### TODO

- add game rules (score incrementation depending on the current level, more pads, the user is currently not able to press a pad once more than requested...)
- make it rock solid (for exemple consider that the user can press to pads at once on touch screens)
- save game state
- add options (username scores sounds colors ...)
- allow multiple game styles/modes and layouts (Pads à la "Space Invaders" for exemple)

...