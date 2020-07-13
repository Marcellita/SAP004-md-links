const fs = require('fs');
let newArray = [];

const mdLinks = (files) => {
  return new Promise((resolve, reject) => {
    const regExp = /\[.[^[\](\)]*\]\(http[^#][^[\](\)]*\)/gm;
    fs.readFile(files, 'utf8', (err, data) => {
      if (err) {
        return reject('Arquivo não encontrado')
      } else {
        const query = data.match(regExp);
        query.map((links) => {
          const link = links.split('](');
          const newlinks = {
            file: files,
            text: link[0].replace('[', ''),
            href: link[1].replace(')', ''),
          };
          newArray.push(newlinks);
        });
        return resolve(newArray);
      };
    });
  });

};

module.exports = mdLinks;