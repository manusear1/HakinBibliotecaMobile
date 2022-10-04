window.onload = function(){
    var url = 'https://hakim.profrodolfo.com.br/livro.php';
    var d = document.querySelector('.dados');
    let btn = document.getElementById('buscar');
    let campbusca = document.getElementById('txtBusca');

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

    function PesquisarLivro(){
        let search = document.getElementById('txtBusca').value.toUpperCase();
        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
                if(json[i].titulo.toUpperCase().includes(search)){
                    d.innerHTML+= `
                        <div class="productBox">
                            <img src="${json[i].capa}">
                            <h3>${json[i].titulo}</h3>
                            <h4>${json[i].ano}</h4>
                        </div>
                    `;
                }
            }
        }).catch();
    }


    btn.addEventListener('click', function(){
        d.innerHTML = ``;
        PesquisarLivro();
    });
    ExibirLivros();
}