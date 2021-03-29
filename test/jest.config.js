const { resolve } = require('path');

const root = resolve(__dirname, '..');

const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root /** Padrão: a raiz do diretório que contém o arquivo de configuração do Jest ou o package.json ou o pwdse nenhum package.jsonfor encontrado */,
    displayName:
      'end2end-tests' /**Permite que uma etiqueta seja impressa ao lado de um teste durante sua execução. */,
    testMatch: [
      '<rootDir>/test/**/*.test.ts'
    ] /** Os padrões glob que Jest usa para detectar arquivos de teste. */
  }
};
