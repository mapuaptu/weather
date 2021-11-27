console.clear();

const fs = require('fs');

fs.readdir('./fonts', (err, data) => {
  data.forEach((f) => {
//  console.log(f.replace(/\s/gi, ''));
    fs.rename(`./fonts/${f}`, `./fonts/${f.replace(/\s/gi, '')}`, (err, data) => console.log(err));
  });
});

