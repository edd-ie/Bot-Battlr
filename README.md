# Bot Battlr

A card game where player can add bot to their army view their stats and even discharge from the troops

## Table of Contents

1. [Getting started](#Getting-started)
2. [Usage](#Usage)
3. [Code](#Code)
   - [Recruit](#Recruit)
   - [Dismiss](#Dismiss)
   - [Discharge](#Discharge)
4. [Sources](#Sources)

## <a id="Getting-started">Getting started</a>

**Clone** the project files to your local repository:

- HTTPS => `https://github.com/edd-ie/Bot-Battlr.git`
- SSH => `git@github.com:edd-ie/Bot-Battlr.git`
- Git CLI => `gh repo clone edd-ie/Bot-Battlr`

Open terminal and Install all dependencies using.

```
npm install
```

Open your terminal and run this command to start json-server.

```
npm run server
```

Open a new terminal and run this command to start the react app (accept the assigning of a new port if prompted)

```
npm start
```

Your default browser will be launched and the application will be rendered.
<img src="./public/Screenshot.png" 
alt="App screenshot"
style="border-radius:12px;"/>

## <a id="Usage">Usage</a>

The application displays the bots in cards showing their different stats.

User can add a bot to their army by click on the card to which it will be add to the top of site.

User can dismiss a bot from their army by simply clicking on the added card.

Users can also discharge the bot by clicking on the
<button>Discharge ❌</button>.
⚠This action is cannot be reversed⚠

## <a id="Code">Code</a>

The JavaScript code for the Battle Bot webpage is rendered by the `index.js `file.
The file sources the JSX code from the `App.js` file.

### <a id="Recruit">Recruit</a>

Bot display is handle by `Profile.js`
It uses `fetch()` to source the data from `db.json`

It also has `handleAddbot(botInfo)` that handles the bot recruitment.

### <a id="Dismiss">Dismiss</a>

Bot dismissal it handled by `Army.js`

### <a id="Discharge">Dismiss</a>

The discharge of bots from the ranks is handled by `Profile.js`

It uses `handleDelete(id)` to discharge bot from the ranks

## <a id="Sources">Sources</a>

The application sources data from:

- Dataset - [Google Drive](https://drive.google.com/file/d/157IfYxr4Bp63-ByF1g1wCP1uOpQ5i2R4/view)
