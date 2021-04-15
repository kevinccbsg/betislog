const terminalImage = require('terminal-image');
const betisAdvice = require('./data/betis_advice.json');

const betisLog = (image) => {
  let con = console.log;
  let activeRandom = false;
  let testIndex = 0;

  console.log = function() {

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
    const message = `${betisAdvice[randomIndex]}: ${stringOfArgs}`;
    // Add the bubble if there is something to log!
    if(stringOfArgs.length > 0) {
      betis[0] = betis[0] + "                      ---" + ("-".repeat(message.length)) + "-";
      betis[1] = betis[1] + "                   -(   " + message + "   )";
      betis[2] = betis[2] + "                 /    ---" + ("-".repeat(message.length)) + "-";
    }

    // Log the betis!
    for(i = 0; i < betis.length; i++) {
      con.apply(console, [betis[i]]);
    }
  }
};

const init = async () => {
  const image = await terminalImage.file(__dirname + 'betislog.png', {width: '15%', height: '20%'});
  betisLog(image);
};

module.exports = init;
