import fetchData from "./fetchData.js";
import normalizeTransacao from "./normalizeTransacao.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizeTransacao);
}
handleData();
//# sourceMappingURL=script.js.map