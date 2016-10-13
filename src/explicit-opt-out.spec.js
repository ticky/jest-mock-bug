import globalPad from 'left-pad';
import localPad from './left-pad';

jest.unmock('left-pad');

describe('test cases for this jest bug', () => {
  it('globalPad should not be a mock function', () => {
    expect(jest.isMockFunction(globalPad)).toBe(false);
  });

  it('localPad should not be a mock function', () => {
    expect(jest.isMockFunction(localPad)).toBe(false);
  });
});
