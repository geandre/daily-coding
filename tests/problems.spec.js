import solver from '../src/solvers';

const { expect } = require('chai');

describe('Test case #1', () => {
  it('Problem solver.case1 must be a function', () => expect(solver.case1).to.be.a('function'));
  it('Function solver.case1 must return true for k = 17 and list = [10, 15, 3, 7]', () => expect(solver.case1(17, [10, 15, 3, 7])).to.equal(true));
  it('Function solver.case1 must return true for k = 10 and list = [10, 15, 3, 7]', () => expect(solver.case1(10, [10, 15, 3, 7])).to.equal(true));
  it('Function solver.case1 must return false for k = 0 and list = [10, 15, 3, 7]', () => expect(solver.case1(0, [10, 15, 3, 7])).to.equal(false));
});

describe('Test case #2', () => {
  it('Problem solver.case2 must be a function', () => expect(solver.case2).to.be.a('function'));
  it('Function solver.case2 must return [120, 60, 40, 30, 24] for list = [1, 2, 3, 4, 5]', () => expect(solver.case2([1, 2, 3, 4, 5])).to.deep.equal([120, 60, 40, 30, 24]));
  it('Function solver.case2 must return [2, 3, 6] for list = [3, 2, 1]', () => expect(solver.case2([3, 2, 1])).to.deep.equal([2, 3, 6]));
});
