const html = require("html-template-tag");

module.exports = () => html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />

      <title>Pomodoro</title>
    </head>
    <body>
      <main class="app">
        <progress id="js-progress" value="0"></progress>
        <div class="progress-bar"></div>
        <div class="timer">
          <div class="button-group mode-buttons" id="js-mode-buttons">
            <button
              data-mode="pomodoro"
              class="button active mode-button"
              id="js-pomodoro"
            >
              Pomodoro
            </button>
            <button
              data-mode="shortBreak"
              class="button mode-button"
              id="js-short-break"
            >
              Short break
            </button>
            <button
              data-mode="longBreak"
              class="button mode-button"
              id="js-long-break"
            >
              Long break
            </button>
          </div>
          <div class="clock" id="js-clock">
            <span id="js-minutes">45</span>
            <span class="separator">:</span>
            <span id="js-seconds">00</span>
          </div>
          <button class="main-button" data-action="start" id="js-btn">
            Start
          </button>
        </div>
      </main>
      <div class="hidden">
        <audio src="backtowork.mp3" data-sound="pomodoro"></audio>
        <audio src="break.mp3" data-sound="shortBreak"></audio>
        <audio src="break.mp3" data-sound="longBreak"></audio>
      </div>
      <script src="main.js"></script>
    </body>
  </html> `;
