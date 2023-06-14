import Validator from '../Validator';

test('testing Validator class', () => {
  const user = new Validator();
  const result = user.validateUsername('aTanya-123_h');
  expect(result).toBe(true);
});
