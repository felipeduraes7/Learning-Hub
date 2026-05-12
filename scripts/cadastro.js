// FUNÇÃO CHAMADA AO CLICAR NO BOTÃO CADASTRAR VERIFICA SE OS CAMPOS ESTÃO PREENCHIDOS E SE AS SENHAS COINCIDEM //
function finalizarCadastro() {
    // PEGA OS VALORES DIGITADOS NOS CAMPOS
    var email = document.getElementById('email-cadastro').value.trim();
    var senha = document.getElementById('senha-cadastro').value;
    var confirmar = document.getElementById('confirmar-senha').value;

    // VERIFICA SE TODOS OS CAMPOS FORAM PREENCHIDOS
    if (!email || !senha || !confirmar) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // VERIFICA SE AS SENHAS DIGITADAS SÃO IGUAIS
    if (senha !== confirmar) {
        alert('As senhas não coincidem. Digite novamente.');
    // LIMPA OS CAMPOS DE SENHA PARA O USUÁRIO TENTAR DE NOVO
        document.getElementById('senha-cadastro').value = '';
        document.getElementById('confirmar-senha').value = '';
        document.getElementById('senha-cadastro').focus();
        return;
    }

    // VERIFICA SE O E-MAIL PARECE VÁLIDO (CONTÉM @ E .)
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Por favor, digite um e-mail válido.');
        return;
    }

    // SE TUDO ESTIVER CERTO, MOSTRA MENSAGEM DE SUCESSO
    alert('Cadastro realizado com sucesso! Bem-vindo ao Learning Hub.');
    
    // REDIRECIONA PARA A TELA DE LOGIN
    window.location.href = 'index.html';
}

// PERMITE PRESSIONAR ENTER PARA CADASTRAR
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        var btnCadastrar = document.querySelector('.btn-login');
        if (btnCadastrar) {
            btnCadastrar.click();
        }
    }
});

