type TransacaoValor = Transacao & { valor: number }; // substitui o valor antigo pelo novo que agora só possui number e nao mais null 

function filtrarValor(transacao: Transacao): transacao is TransacaoValor { // se é assim precisa retornar true ou false
  return transacao.valor !== null // retorna true ou false
}

export default class Estatisticas {
  private transacoes: Transacao[]
  total;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes
    this.total = this.setTotal()
  }

  private setTotal() {
    return this.transacoes
    .filter(
     /*transacao => transacao.valor !== null*/ filtrarValor
    ).reduce((acc, item) => {
      return acc + item.valor
    }, 0)

  }
}