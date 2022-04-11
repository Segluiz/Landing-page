const barradeclique = document.querySelector('.linhas');
const linksdenavagacao = document.querySelector('.nav-list');

barradeclique.addEventListener('click', ()=>{
    const linksdenavagacao = document.querySelector('.nav-list');
    linksdenavagacao.classList.toggle('active')
})

