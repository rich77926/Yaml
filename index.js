// import YAML from 'yaml';
// import fs from 'fs';
const yaml = require('yaml');
const fs = require('fs');

let yamlContent = fs.readFileSync('./test.yml','utf8');
let jsonContent = fs.readFileSync('./test.json','utf8');

let yamlObj = yaml.parseAllDocuments(yamlContent);
let jsonObj = JSON.parse(jsonContent);

console.log(JSON.stringify(yamlObj));
console.log(JSON.stringify(jsonObj));


