#!/usr/bin/env node

const mdLinks = require('./index.js');

mdLinks(process.argv[2])
  .then(array => {
    if (typeof array === "undefined") {
      console.log("links not found")
    } else {
      array.forEach(newobjet => {
        console.log(`File: ${newobjet.file} | Text: ${newobjet.text} | Href: ${newobjet.href}`)

      });
    }
  })
  .catch(error => console.log(error));