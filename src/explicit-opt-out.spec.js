import globalPad from 'left-pad';
import localPad from './left-pad';

jest.unmock('left-pad');

describe('with an explicit opt-out', () => {
  it('globalPad should not be a mock function', () => {
    expect(jest.isMockFunction(globalPad)).toBe(false);
  });

  it('localPad should not be a mock function', () => {
    expect(jest.isMockFunction(localPad)).toBe(false);
  });
});
