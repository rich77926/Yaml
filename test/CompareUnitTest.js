const chai = require('chai');
const { describe, it } = require('mocha');
const yaml = require('yaml');
const fs = require('fs');



describe('Compare Yaml and Json data', () => {
    it('The same content', () => {
        // arrange
        let yamlContent = fs.readFileSync('./test.yml','utf8');
        let jsonContent = fs.readFileSync('./test.json','utf8');

        // act
        let yamlObj = yaml.parseAllDocuments(yamlContent);
        let jsonObj = JSON.parse(jsonContent);
        let yamlString = JSON.stringify(yamlObj);
        let jsonString = JSON.stringify(jsonObj);

        // assert
        chai.expect(yamlString).to.equal(jsonString);
    })
})