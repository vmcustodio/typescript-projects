import fetchData from "./fetchData.js";
import normalizeTransacao from "./normalizeTransacao.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?")
  if(!data) return
  const transacoes = data.map(normalizeTransacao)
}

handleData()