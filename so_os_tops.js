function solucao(produtos) {
    let total = 0;
    let totalTop = 0;
    for(var i = 0; i < produtos.length; i++) {
        total = total + produtos[i].preco;
        if(produtos[i].preco > 10000) {
            totalTop = totalTop + produtos[i].preco;
        } 
    }
    console.log({
        totalTop: totalTop,
        percentual: totalTop / total
    })
    
}