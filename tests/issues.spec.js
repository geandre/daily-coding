import solver1 from '../src/issue-1';
import solver2 from '../src/issue-2';

const { expect } = require('chai');

describe('Test for issue #1', () => {
  it('Problem solver1 must be a function', () => expect(solver1).to.be.a('function'));
  it('Function solver1 must return true for k = 17 and list = [10, 15, 3, 7]', () => expect(solver1(17, [10, 15, 3, 7])).to.equal(true));
  it('Function solver1 must return true for k = 10 and list = [10, 15, 3, 7]', () => expect(solver1(10, [10, 15, 3, 7])).to.equal(true));
  it('Function solver1 must return false for k = 0 and list = [10, 15, 3, 7]', () => expect(solver1(0, [10, 15, 3, 7])).to.equal(false));
});

describe('Test for issue #2', () => {
  it('Problem solver2 must be a function', () => expect(solver2).to.be.a('function'));
  it('Function solver2 must return [120, 60, 40, 30, 24] for list = [1, 2, 3, 4, 5]', () => expect(solver2([1, 2, 3, 4, 5])).to.deep.equal([120, 60, 40, 30, 24]));
  it('Function solver2 must return [2, 3, 6] for list = [3, 2, 1]', () => expect(solver2([3, 2, 1])).to.deep.equal([2, 3, 6]));
});
