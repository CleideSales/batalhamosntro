const {
  Monstro,
  atacar,
  curar,
  fortalecer,
  fortalecimentoAtaque,
  fortalecimentoTotal,
  fortalecimentoDefesa,
} = require('./batalhamonstro');

const dragao = new Monstro("Dragão", 100, 40, 20);
const guerreiro = new Monstro("Guerreiro", 90, 35, 25);

console.log("Estado inicial:", dragao, guerreiro);


atacar(dragao, guerreiro);
console.log("Após Dragão atacar Guerreiro:", dragao, guerreiro);

atacar(guerreiro, dragao);
console.log("Após Guerreiro atacar Dragão:", dragao, guerreiro);


fortalecer(guerreiro, fortalecimentoAtaque);
console.log("Após fortalecer ataque do Guerreiro:", guerreiro);


fortalecer(dragao, fortalecimentoTotal);
console.log("Após fortalecer totalmente o Dragão:", dragao);

fortalecer(guerreiro, fortalecimentoDefesa);
console.log("Após fortalecer defesa do Guerreiro:", guerreiro);
