# Learning Hub (LH)

## Sobre o Projeto

O **Learning Hub** é um portal de aprendizagem pessoal desenvolvido com foco em usabilidade, design moderno e acessibilidade. A plataforma oferece uma experiência fluida de navegação entre cursos, projetos, conquistas e perfil do estudante, com interface em estilo **Glassmorphism** (efeito vidro) inspirado no design da Apple.

---

## Funcionalidades

### Login & Autenticação
- **Tela de Login**: Interface limpa com efeito glass, campos de usuário e senha com placeholders claros.
- **Validação de Credenciais**: Sistema de autenticação simples com alerta visual para credenciais incorretas.
- **Limpeza Automática**: Se a senha estiver incorreta, o campo é apagado automaticamente e o foco retorna para o campo de senha, facilitando nova tentativa.
- **Recuperação de Senha**: Página dedicada para recuperação de senha com validação de e-mail e feedback visual permanente.
- **Cadastro de Novos Usuários**: Tela para criação de conta com confirmação de senha.
- **Proteção de Sessão**: Uso de `sessionStorage` para manter o usuário logado durante a navegação.
- **Logout**: Botão de sair na barra lateral que limpa a sessão e redireciona para a tela de login.

### Navegação no Lightboard
- **Menu Lateral Fixed**: Barra lateral com Glass Effect contendo acesso rápido a todas as seções.
- **Menu Superior**: Header glass com navegação contextual (Início, Sobre o LH, Ajuda).
- **Sistema de Views**: Navegação SPA-like (Single Page Application) sem recarregar a página, alternando entre diferentes conteúdos de forma fluida.

### Seções Disponíveis

#### Início (Home)
- Mensagem de boas-vindas personalizada.
- **Cards de Categorias** exibidos diretamente na tela inicial:
  - **Programação**: Lógica, algoritmos e desenvolvimento de software.
  - **Matemática**: Cálculo, álgebra linear e matemática discreta.
  - **Front End**: HTML, CSS, JavaScript e frameworks modernos.
- Cada card possui botão "Acessar" e efeito hover com elevação.

#### Projetos
- **Linha do Tempo Vertical (Timeline)**: Exposição dos projetos em formato cronológico com:
  - Linha vertical conectando os projetos.
  - Pontos coloridos em gradiente (amarelo → ciano) indicando cada marco.
  - Cards com efeito glass mostrando nome do projeto, data e descrição.
- Projetos de exemplo incluídos:
  - Site Institucional (Janeiro 2025)
  - App de Tarefas (Março 2025)
  - Dashboard Analytics (Maio 2025)

#### Conquistas
- Seção reservada para futura implementação de sistema de conquistas/badges.

#### Perfil
- Seção reservada para futura edição de informações do estudante.

### Design & Interface
- **Glassmorphism**: Efeito de vidro fosco com `backdrop-filter: blur()` em toda a interface.
- **Gradientes Suaves**: Cores quentes (amarelo) e frias (ciano) combinadas em botões e elementos de destaque.
- **Responsividade**: Grid de cards adaptativo com `auto-fill` e `minmax`.
- **Scrollbars Customizadas**: Estilo discreto e arredondado para áreas com scroll.
- **Animações Hover**: Transições suaves em cards (`translateY`, `scale`) e botões ao passar o mouse.

---

## Facilidades para o Usuário

### Facilidade de Navegação
- **Sem recarregamento**: Alternância entre views é instantânea, sem espera por carregamento de página.
- **Indicador Visual**: A view ativa é controlada via classe CSS, com transição suave.
- **Menu Sempre Visível**: Barra lateral fixa permite acesso rápido a qualquer seção a qualquer momento.

### Facilidade de Login
- **Tecla Enter**: Funciona em todos os campos de formulário (login, cadastro, recuperação).
- **Foco Automático**: Após erro de senha, o cursor já volta para o campo correto.
- **Links Diretos**: "Esqueceu a senha?" e "Criar nova conta" com acesso um-clique.

### Feedback Visual Imediato
- **Mensagens de Erro**: Alertas claros para e-mail não encontrado, formato inválido ou senha incorreta.
- **Mensagens de Sucesso**: Confirmação permanente (não desaparece sozinha) para ações como envio de e-mail de recuperação.
- **Efeitos Hover**: Cards e botões respondem ao mouse com elevação e brilho, indicando interatividade.

---

## Acessibilidade

### Estrutura HTML Semântica
- Uso correto de tags semânticas: `<header>`, `<main>`, `<aside>`, `<nav>`, `<section>`.
- Landmark regions bem definidas para leitores de tela.

### Atributos de Acessibilidade
- **Alt Text**: Todas as imagens possuem atributo `alt` descritivo.
- **Title**: Logo possui `title` com informação adicional ao passar o mouse.
- **Role**: Container de formulário cadastro possui `role="form"`.

### Navegação por Teclado
- **Enter Responsivo**: Todos os botões principais podem ser acionados via tecla Enter.
- **Foco Visível**: Foco automático retornado aos campos após erro, facilitando navegação sem mouse.

### Contraste & Legibilidade
- **Cores Escuras sobre Glass**: Texto em `#1d1d1f` (quase preto) garante legibilidade sobre fundo translúcido.
- **Labels Claras**: Placeholders com texto descritivo em todos os campos de input.
- **Tamanhos Adequados**: Botões e links com área de clique generosa (padding confortável).

---

## Estrutura de Arquivos

```
learning hub/
├── index.html                  # Tela de login principal
├── cadastro.html               # Tela de cadastro de novos usuários
├── lightboard.html             # Dashboard principal (SPA views)
├── recuperar-senha.html        # Tela de recuperação de senha
├── estilos/
│   ├── style.css               # CSS base (login, cadastro, recuperar)
│   ├── lightboard.css          # CSS do dashboard com glass effect
│   ├── cadastro.css            # Estilos específicos do cadastro
│   └── recuperar-senha.css     # Customizações da recuperação
├── scripts/
│   ├── login.js                # Autenticação + proteção de sessão
│   ├── cadastro.js             # Lógica de cadastro
│   ├── lightboard.js           # Navegação entre views
│   └── recuperar-senha.js      # Validação e e-mails de demonstração
├── imagens/
│   ├── background.png          # Plano de fundo do projeto
│   ├── logo.png                # Logo LH (barra lateral)
│   └── logomarca.png           # Logomarca (telas de login/cadastro)
└── README.md                   # Este arquivo
```

---

## Tecnologias Utilizadas

| Tecnologia | Uso |
|-----------|-----|
| **HTML5** | Estrutura semântica das páginas |
| **CSS3** | Glassmorphism, grids, animações, responsividade |
| **JavaScript Vanilla** | Autenticação, navegação SPA, validações, DOM |
| **sessionStorage API** | Persistência de sessão de login |
| **Backdrop Filter** | Efeito de vidro fosco (requer navegadores modernos) |

---

## Credenciais de Demonstração (Login)

- **Usuário**: `Userf`
- **Senha**: `Learninghub`

## E-mails de Demonstração (Recuperação)

- `usuario@learninghub.com`
- `aluno@learninghub.com`
- `demo@learninghub.com`

---

## Desenvolvido com foco em:

- ✨ **Experiência do usuário** (UX)
- 🎨 **Design moderno** e minimalista
- ♿ **Acessibilidade** e inclusão
- ⚡ **Performance** com navegação fluida
- 🔒 **Segurança básica** de sessão

---

*Learning Hub - Seu portal de aprendizagem pessoal.*

