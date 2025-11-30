const btnLateral = document.querySelector('.btn-lateral');
const menuLateral = document.querySelector('.menu-lateral');
const background = document.querySelector('.background');
const btnTopo = document.querySelector('.btn-topo');

/* FICAR DE OLHO, QUANDO MEU BOTÃO LATERAL FOR CLICADO, ADICIONA AS CLASSES ACTIVE MO MEU MENU LATERAL,AÍ APARECE, E DESAPARECE SE CLICADO NOVAMENTE*/
btnLateral.addEventListener('click', () => {
  btnLateral.classList.toggle('active');
  menuLateral.classList.toggle('active');
  background.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
})

/* FICAR DE OLHO, QUANDO CLICAR NA PARTE DO CONTEUDO, ONDE TEM MEU BACKGROUND NA FRENTE, REMOVE AS CLASSES ACTIVE, E MEU MENU LATERAL SOME */
background.addEventListener('click', () => {
  btnLateral.classList.remove('active');
  menuLateral.classList.remove('active');
  background.classList.remove('active');
  document.body.classList.remove('no-scroll');
})

/* FICAR DE OLHO NO MEU NAVEGADOR, QUANDO ATINGIR O PX DESEJADO NO SCROLL, ADICIONE A CLASSE ACTIVE E O BOTAO APARECE, E QUANDO SAIR DO PX ELE DESAPARECE */
window.addEventListener('scroll', () => {
    if (window.scrollY > 1200) {
    btnTopo.classList.add('active');
  } else {
    btnTopo.classList.remove('active');
  }
})


/* FICAR DE OLHO, QUANDO MEU BOTAO VOLTAR A HOME FOR CLICADO, VOLTARA LÁ PRO INÍCIO DO SITE */
btnTopo.addEventListener('click', () => {

  window.location.href = "#inicio"
})



// ENVIAR MENSAGEM FORMATADA PRO WHATSAPP
function enviarWhats(event) {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5563999789035'

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;

    window.open(url, '_blank')
}

// NOTIFICAÇÃO POPUP PERSONALIZADO 
/*window.addEventListener('load', function() {
  Swal.fire({
    title: '< > Informações do Desenvolvedor',
    html: `<div style="text-align: left;">
      🛠️| Olá! Estamos realizando melhorias no site para torná-lo ainda mais fluido e visualmente impactante.<br><br>
      ☰| Novo menu implementado.<br><br>
      
    </div>`,
    /*imageUrl: './img/projeto5.PNG',
    imageWidth: 500,
    imageHeight: 250,
    imageAlt: 'Imagem do Portfolio',
    confirmButtonText: 'Ok',
    background: '#1e1e2f',
    color: '#fff',
    confirmButtonColor: '#9400D3'
  });
});*/