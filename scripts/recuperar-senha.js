// LISTA DE E-MAILS QUE FUNCIONAM NA DEMONSTRAÇÃO
const emailsCadastrados = [
    'usuario@learninghub.com',
    'aluno@learninghub.com',
    'demo@learninghub.com'
];

// FUNÇÃO CHAMADA AO CLICAR NO BOTÃO ENVIAR, VERIFICA SE O E-MAIL É VÁLIDO E ESTÁ NA LISTA //
function recuperarSenha() {
    // PEGA O E-MAIL DIGITADO (REMOVE ESPAÇOS E DEIXA MINÚSCULO)
    const email = document.getElementById('email-recuperar').value.trim().toLowerCase();

    // VERIFICA SE O CAMPO ESTÁ VAZIO
    if (!email) {
        mostrarMensagem('Por favor, digite seu e-mail.', 'erro');
        return;
    }

    // VERIFICA SE O FORMATO DO E-MAIL PARECE VÁLIDO (TEM @ E .)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(email)) {
        mostrarMensagem('Por favor, digite um e-mail válido.', 'erro');
        return;
    }

    // VERIFICA SE O E-MAIL ESTÁ NA LISTA DE CADASTRADOS
    if (!emailsCadastrados.includes(email)) {
        mostrarMensagem('E-mail não encontrado. Tente: usuario@learninghub.com', 'erro');
        return;
    }

    // SE CHEGOU AQUI, TUDO CERTO - MOSTRA MENSAGEM DE SUCESSO
    mostrarMensagem('Instruções enviadas para ' + email, 'sucesso');
    // LIMPA O CAMPO PARA NOVA TENTATIVA
    document.getElementById('email-recuperar').value = '';
}

// MOSTRA MENSAGEM DE SUCESSO OU ERRO NA TELA. A MENSAGEM FICA VISÍVEL ATÉ O USUÁRIO ENVIAR OUTRO E-MAIL
function mostrarMensagem(texto, tipo) {
    // REMOVE MENSAGEM ANTERIOR SE EXISTIR
    const msgAnterior = document.querySelector('.mensagem-feedback');
    if (msgAnterior) {
        msgAnterior.remove();
    }

    // CRIA NOVA MENSAGEM
    const container = document.getElementById('recuperar-area');
    const mensagem = document.createElement('div');
    mensagem.className = 'mensagem-feedback ' + tipo; // SUCESSO OU ERRO
    mensagem.textContent = texto;
    container.appendChild(mensagem);
}

// PERMITE PRESSIONAR ENTER NO CAMPO DE E-MAIL
document.addEventListener('DOMContentLoaded', function() {
    const inputEmail = document.getElementById('email-recuperar');
    if (inputEmail) {
        inputEmail.addEventListener('keypress', function(e) {
            // SE APERTAR ENTER, CLICA NO BOTÃO
            if (e.key === 'Enter') {
                recuperarSenha();
            }
        });
    }
});

