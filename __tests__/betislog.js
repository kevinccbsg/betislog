const betislog = require('..');
const betis_advice = require('../data/betis_advice.json');

const spy = jest.spyOn(global.console, 'log').mockImplementation((...args) => args);

describe('betislog package', () => {
  beforeEach(() => {
    spy.mockClear();
  });

  it('should match snapshot', async () => {
    await betislog();
    console.betis('Message');
    expect(console.log).toBeCalled();
    expect(console.log).toHaveBeenNthCalledWith(2, expect.stringMatching(/Message/));
  });

  it('should match snapshot', async () => {
    const index = 0;
    await betislog();
    console.options({ quotes: true, index });
    console.betis('Message');
    expect(console.log).toBeCalled();
    const pattern = new RegExp(betis_advice[index]);
    expect(console.log).toHaveBeenNthCalledWith(2, expect.stringMatching(pattern));
    expect(console.log).toHaveBeenNthCalledWith(2, expect.stringMatching(/Message/));
  });

  it('should match snapshot', async () => {
    const index = 2;
    await betislog();
    console.options({ quotes: true, index });
    console.betis('Message');
    expect(console.log).toBeCalled();
    const pattern = new RegExp(betis_advice[index]);
    expect(console.log).toHaveBeenNthCalledWith(2, expect.stringMatching(pattern));
    expect(console.log).not.toHaveBeenNthCalledWith(2, expect.stringMatching(/Message/));
  });
});
