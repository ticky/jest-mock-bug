import globalPad from 'left-pad';
import localPad from './left-pad';

describe('with no explicit opt-out', () => {
  it('globalPad should not be a mock function', () => {
    expect(jest.isMockFunction(globalPad)).toBe(false);
  });

  it('localPad should not be a mock function', () => {
    expect(jest.isMockFunction(localPad)).toBe(false);
  });
});
