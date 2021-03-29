const { resolve } = require('path');

const root = resolve(__dirname, '..');

/** https://jestjs.io/docs/configuration */
module.exports = {
  rootDir: root /**  raiz do diretório que contém o arquivo de configuração do Jest */,
  displayName:
    'root-tests' /** Permite que uma etiqueta seja impressa ao lado de um teste durante sua execução. */,
  testEnvironment:
    'jsdom' /** O ambiente de teste que será usado para teste. */,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/'
  ] /** Pastas ou arquivos a serem ignorados  */,
  collectCoverage: true /** Indica que as informações de coleta do teste devem ser coletadas e reportadas no console. */,
  collectCoverageFrom: [
    'src/**/tests/*.ts(x)?',
    '!src/**/stories/*.tsx'
  ] /** Um padrão glob relativo à rootDircorrespondência dos arquivos dos quais as informações de cobertura precisam ser coletadas. */
};
