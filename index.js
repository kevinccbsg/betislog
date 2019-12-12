const terminalImage = require('terminal-image');
const betisAdvice = require('./data/betis_advice.json');

const betisLog = (image) => {
  let con = console;
  let activeRandom = false;
  let testIndex = 0;

  con.options = function ({ quotes, index }) {
    activeRandom = quotes;
    testIndex = index;
  };

  con.betis = function() {

    let i,
      css = "color: green";

    let betis = ['',
      '',
      '',
      image,
    ];
      

    // Gets args as a string
    const args = Array.prototype.slice.call(arguments);
    let stringOfArgs = args.join(' ');
    let randomIndex = Math.floor(Math.random()*betisAdvice.length);
    if (process.env.TEST) {
      randomIndex = testIndex;
    }
    stringOfArgs = randomIndex === 2 ? ' ' : stringOfArgs;
    const message = activeRandom ? `${betisAdvice[randomIndex]}: ${stringOfArgs}` : stringOfArgs;
    // Add the bubble if there is something to log!
    if(stringOfArgs.length > 0) {
      betis[0] = betis[0] + "                      ---" + ("-".repeat(message.length)) + "-";
      betis[1] = betis[1] + "                   -(   " + message + "   )";
      betis[2] = betis[2] + "                 /    ---" + ("-".repeat(message.length)) + "-";
    }

    // Log the betis!
    for(i = 0; i < betis.length; i++) {
      console.log(betis[i]);
    }
  }
};

const init = async () => {
  const image = await terminalImage.file('betislog.png');
  betisLog(image);
};

module.exports = init;
