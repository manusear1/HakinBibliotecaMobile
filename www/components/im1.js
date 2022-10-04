window.onload = function(){
    var url = 'https://hakim.profrodolfo.com.br/livro.php';
    var d = document.querySelector('.dados');

    function ExibirLivros(){
        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
            		d.innerHTML+= `
                        <div class="productBox">
                            <img src="${json[i].capa}">
                            <h3>${json[i].titulo}</h3>
                            <h4>${json[i].ano}</h4>
                        </div>
                	`;
            }
        }).catch();
    }

    ExibirLivros();
}