/**
 * FUNÇÃO CHAMADA AO CLICAR NO BOTÃO ENTRAR
 * VERIFICA USUÁRIO E SENHA, SALVA SESSÃO E REDIRECIONA
 */
function entrar() {
    // PEGA O QUE FOI DIGITADO NOS CAMPOS
    var user = document.getElementById('usuario').value;
    var pass = document.getElementById('senha').value;

    // VERIFICA SE USUÁRIO E SENHA ESTÃO CORRETOS
    if (user == "Userf" && pass == "Learninghub") {
        // SALVA A SESSÃO NO NAVEGADOR (SESSIONSTORAGE)
        sessionStorage.setItem('usuarioLogado', 'true');
        
        // VAI PARA O PAINEL PRINCIPAL
        window.location.href = "lightboard.html"; 
        
    } else {
        // MOSTRA ERRO E LIMPA A SENHA PARA TENTAR DE NOVO
        alert("Usuário ou senha incorretos!");
        document.getElementById('senha').value = '';
        document.getElementById('senha').focus();
    }
}

// ESCUTA O TECLADO EM TODA A PÁGINA
document.addEventListener('keydown', function (e) {
    // VERIFICA SE A TECLA PRESSIONADA É ENTER
    if (e.key === 'Enter') {
        // CLICA NO BOTÃO DE ENTRAR AUTOMATICAMENTE
        const btnEntrar = document.querySelector('.btn-login');
        if (btnEntrar) {
            btnEntrar.click();
        }
    }
});

/**
 * VERIFICA SE O USUÁRIO ESTÁ LOGADO
 * USADO NAS PÁGINAS PROTEGIDAS (LIGHTBOARD)
 */
function verificarLogin() {
    if (sessionStorage.getItem('usuarioLogado') !== 'true') {
        // SE NÃO ESTIVER LOGADO, MANDA DE VOLTA PARA O LOGIN
        window.location.href = 'index.html';
    }
}

// PROTEÇÃO CONTRA CACHE DO NAVEGADOR AO VOLTAR PÁGINA
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        verificarLogin();
    }
});

// Verifica login automaticamente se estiver no LIGHTBOARD
if (window.location.pathname.includes('lightboard.html')) {
    verificarLogin();
}

