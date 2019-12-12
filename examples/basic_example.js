const betislog = require('..');

(async () => {
  await betislog();

  // Here is you, logging some logs
  console.log('Boring.');

  // Betisman log
  console.betis('Amazing!');
})();
