/**
//TROCA A VIEW ATIVA NO DASHBOARD
 * ESCONDE TODAS E MOSTRA APENAS A QUE O USUÁRIO CLICOU
 * @param {string} id - NOME DA VIEW (HOME, PROJETOS, CONQUISTAS, PERFIL)*/
function mostrarView(id) {
    // ESCONDE TODAS AS VIEWS
    document.querySelectorAll('.view').forEach(function(el) {
        el.classList.remove('ativa');
    });
    // MOSTRA APENAS A VIEW CLICADA
    document.getElementById(id).classList.add('ativa');
}

/* ---- Controle do menu hambúrguer (mobile) ---- */
function toggleMenu() {
    const barra = document.getElementById('barra-lateral');
    const overlay = document.getElementById('overlay-menu');
    if (barra) barra.classList.toggle('aberto');
    if (overlay) overlay.classList.toggle('visivel');
}

function fecharMenu() {
    const barra = document.getElementById('barra-lateral');
    const overlay = document.getElementById('overlay-menu');
    if (barra) barra.classList.remove('aberto');
    if (overlay) overlay.classList.remove('visivel');
}


