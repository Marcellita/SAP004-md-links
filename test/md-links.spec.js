const mdLinks = require('../index.js');

describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('return an array with objects containing links and text', () => {
    return expect(mdLinks('./test/txt.md')).resolves.toEqual([{
        file: './test/txt.md',
        text: 'Node.js',
        href: 'https://nodejs.org/pt-br/'
      },
      {
        file: './test/txt.md',
        text: 'Chrome',
        href: 'https://developers.google.com/v8/'
      }
    ])
  })
});

it('should return error message when the file is not found', () => {
  return expect(mdLinks('')).rejects.toEqual('Arquivo não encontrado');
});