import countBy from './countBy.js'

type TransacaoValor = Transacao & { valor: number } // substitui o valor antigo pelo novo que agora só possui number e nao mais null 

function filtrarValor(transacao: Transacao): transacao is TransacaoValor { // se é assim precisa retornar true ou false
  return transacao.valor !== null // retorna true ou false
}

export default class Estatisticas {
  private transacoes: Transacao[]
  total;
  pagamento;
  status;
  semana;
  melhorDia;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes
    this.total = this.setTotal()
    this.pagamento = this.setPagamento()
    this.status = this.setStatus()
    this.semana = this.setSemana()
    this.melhorDia = this.setMelhorDia()
  }

  private setTotal() {
    return this.transacoes
    .filter(
     /*transacao => transacao.valor !== null*/ filtrarValor
    ).reduce((acc, item) => {
      return acc + item.valor
    }, 0)
  }

  private setPagamento() { // isolar somente os metodos de pagamento
    return countBy(this.transacoes.map(({ pagamento }) => pagamento))
  }

  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status))
  }

  private setSemana() {
    const semana = {
      domingo: 0,
      segunda: 0,
      terca: 0,
      quarta: 0,
      quinta: 0,
      sexta: 0,
      sabado: 0,
    }
    for (let i= 0; i < this.transacoes.length; i++) {
      const day = this.transacoes[i].data.getDay()
      if (day === 0) semana.domingo += 1
      if (day === 1) semana.segunda += 1
      if (day === 2) semana.terca += 1
      if (day === 3) semana.quarta += 1
      if (day === 4) semana.quinta += 1
      if (day === 5) semana.sexta += 1
      if (day === 5) semana.sabado += 1
    }
    console.log(semana)
    return semana
  }

  private setMelhorDia() {
    return Object.entries(this.semana).sort((a,b) => {
      return b[1] - a[1]
    })[0]
  }
}