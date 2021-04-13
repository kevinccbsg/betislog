const betislog = require('..');

(async () => {
  await betislog();
  // Betisman log
  var a = 2
  console.options({ quotes: true });
  console.betis(a);
})();
