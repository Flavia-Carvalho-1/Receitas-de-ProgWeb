const montarTabela = (itens, idElemento, cabecalhos, propriedades) => {

   const div = document.getElementById(idElemento)

   if (!itens || itens.length === 0) {
      div.innerHTML = "<p>Nenhum item encontrado.</p>"
      return
   }

   const linhaCabecalho = `<tr>${cabecalhos.map( c => `<th>${c}</th>` ).join("")}</tr>`

   const linhas = itens.map( item => {
      const celulas = propriedades.map( prop => `<td>${item[prop]}</td>` ).join("")
      return `<tr>${celulas}</tr>`
   })

   div.innerHTML = `
      <table class="tabela-generica">
         ${linhaCabecalho}
         ${linhas.join("\n")}
      </table>
   `
}