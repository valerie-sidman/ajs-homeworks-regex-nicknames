import Validator from '../classValidator';

test('check username', () => {
  expect(Validator.validateUsername('Боб')).toBe(false);
  expect(Validator.validateUsername('bob123')).toBe(false);
  expect(Validator.validateUsername('123bob')).toBe(false);
  expect(Validator.validateUsername('-bob')).toBe(false);
  expect(Validator.validateUsername('bob-')).toBe(false);
  expect(Validator.validateUsername('-bob-')).toBe(false);
  expect(Validator.validateUsername('_bob')).toBe(false);
  expect(Validator.validateUsername('bob_')).toBe(false);
  expect(Validator.validateUsername('_bob_')).toBe(false);
  expect(Validator.validateUsername('bob1234bob')).toBe(false);
  expect(Validator.validateUsername('bob123bob')).toBe(true);
  expect(Validator.validateUsername('bob123BoB123bob')).toBe(true);
  expect(Validator.validateUsername('bob-Bob')).toBe(true);
  expect(Validator.validateUsername('bob_Bob')).toBe(true);
});
