import { hello } from '.';

describe('index', () => {
  it('should return Hello, World!', () => {
    expect(hello()).toBe('Hello, World!');
  });
});
