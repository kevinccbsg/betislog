const betislog = require('..');

(async () => {
  await betislog();

  // Here is you, logging some logs
  console.options({ quotes: true });

  // Betisman log
  console.betis('Amazing!');
})();
