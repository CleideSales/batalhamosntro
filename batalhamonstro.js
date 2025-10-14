class Monstro {
  constructor(nome, vida, ataque, defesa) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }
}

function atacar(monstro1, monstro2) {
  if (monstro2.defesa >= monstro1.ataque) {
    monstro1.vida -= (monstro2.defesa - monstro1.ataque);
    return false; // Ataque não funcionou
  } else {
    monstro2.vida -= (monstro1.ataque - monstro2.defesa);
    return true; // Ataque funcionou
  }
}

function curar(monstro, valorCura) {
  monstro.vida += valorCura;
  return monstro;
}

function fortalecer(monstro, callback) {
  return callback(monstro);
}

function fortalecimentoAtaque(monstro) {
  monstro.ataque += monstro.ataque * 0.3;
  return monstro;
}
function fortalecimentoTotal(monstro) {
  monstro.ataque += monstro.ataque * 0.5;
  monstro.defesa += monstro.defesa * 0.5;
  return monstro;
}

function fortalecimentoDefesa(monstro) {
  monstro.defesa += monstro.defesa * 0.25;
  return monstro;
}

module.exports = {
  Monstro,
  atacar,
  curar,
  fortalecer,
  fortalecimentoAtaque,
  fortalecimentoTotal,
  fortalecimentoDefesa,
};
