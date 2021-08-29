// obtém os elementos de botão e a lista dos tweets
const btnTweet = document.querySelector('.conteudo-principal__formulario button')
const listTweet = document.querySelector('.conteudo-principal__lista-tweet')

// adiciona um evento de click ao botão
btnTweet.addEventListener('click', clickBtnTweet)

// função (callback/listener) chamada quando o botão é clicado pelo usuário
function clickBtnTweet(e) {
   e.preventDefault()

   // captura o valor de texto do tweet, informado pelo usuário
   let textTweet = document.querySelector('.conteudo-principal__formulario textarea').value

   // verifica se o usuário escreveu algum conteúdo de texto
   // para o tweet e faz uma simples validação, através de um
   // alert pop-up
   if (!textTweet)
      alert('O tweet não pode ser vazio, informe algum texto!')
   else {
      // guarda o componente tweet criado, em uma variável
      let tweetComponent = makeTweetComponent(textTweet)

      // adiciona o tweet à lista de tweets
      listTweet.appendChild(tweetComponent)

      // limpa o campo do formulário, onde o usuário escreve o texto do tweet
      document.querySelector('.conteudo-principal__formulario textarea').value = ''
   }
}

// função que cria o componente tweet e o retorna para o fluxo principal da aplicação
function makeTweetComponent(textTweet) {
   // cria os componentes do Tweet no DOM
   let li = document.createElement('li')
   li.classList.add('conteudo-principal__tweet')

   let img = document.createElement('img')
   img.setAttribute('src', 'assets/img/ProfilePic.png')
   img.setAttribute('alt', 'Daniel')
   img.classList.add('tweet__foto-perfil')

   let div = document.createElement('div')
   div.classList.add('tweet__info-perfil')

   let h2 = document.createElement('h2')
   h2.textContent = 'Daniel'

   let span = document.createElement('span')
   span.textContent = '@danielkenzie 14s'

   let p = document.createElement('p')
   p.innerHTML = textTweet

   // monta o layout do Tweet a partir dos componentes já criados
   div.appendChild(h2)
   div.appendChild(span)
   div.appendChild(p)

   li.appendChild(img)

   li.appendChild(div)

   // retorna o tweet completamente montado
   return li
}