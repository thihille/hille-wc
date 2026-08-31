# hille-wc
### Projeto Front-end Web Components - Lit Element

O intuito deste projeto é desenvolver front-end no formato de Web Components, para estudos da Stack Lit Element e distribuição desses componentes em Outros projetos que utilizam outras stacks desenvolvido por mim.

## 🎯 Como startei o projeto
- Instalação da Lib (<https://lit.dev/docs/getting-started/>)
    - Foi instalado via `npm init @open-wc` - https://open-wc.org/docs/development/generator/
    - Escolhido `Application` das opções abaixo:
        - Web Component: ``Para uma estrutura de um único Componente Web``
        - Application: ``Para uma estrutura de aplicação inicial, com mais de um Componente Web``
    - Comitado na branch: <b><i>feature/initial-commit</i></b>

### O que foi commitado em `feature/initial-commit` abaixo:
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />

### 📂 Estrutura de pastas do Projeto

`.husky/` → Scripts de git hooks (ex.: rodar lint ou testes antes de um commit/push).

`.storybook/` → Configuração do Storybook, usado para documentar e visualizar seus componentes isoladamente.

`.vscode/` → Configurações específicas do VS Code (extensões, formatação, etc.).

`assets/` → Pasta para imagens, ícones ou outros recursos estáticos.

`node_modules/` → Dependências instaladas via npm.

`src/` → Onde ficam os componentes principais em Lit Element.<br />
<i>Aqui você vai criar seus webcomponents `<hello-world>`, `<contador-click>`, `<mv-hille>` etc.</i>

`stories/` → Arquivos de exemplo para o Storybook, mostrando como usar cada componente.

`test/` → Testes automatizados com web-test-runner para validar comportamento dos componentes.

### 📄 Arquivos principais

`.editorconfig` → Define padrões de edição (indentação, charset, etc.).

`.gitignore` → Lista arquivos/pastas que não devem ser versionados no Git.

`custom-elements.json` → Metadata dos seus Web Components (nome da tag, propriedades, eventos).
<br /><i>Usado por ferramentas como VS Code e Storybook para autocompletar e documentar.</i>

`index.html` → Página demo inicial para testar seus componentes diretamente no navegador.

`LICENSE` → Licença do projeto (ex.: MIT).

`package.json / package-lock.json` → Configuração de dependências, scripts e metadados do projeto.

`README.md` → Documentação inicial do projeto (objetivos, instruções de uso).

`rollup.config.js` → Configuração do Rollup para gerar bundles otimizados para produção.

`tsconfig.json` → Configuração do TypeScript (mesmo que você use JS, pode estar preparado para TS).

`web-dev-server.config.js` → Configuração do servidor de desenvolvimento (hot reload, etc.).

`web-test-runner.config.js` → Configuração dos testes automatizados.

<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<br />

### 📚 Para desenvolvimento, seguir as boas práticas
- Comece pela criação do componente primeiro
- Em seguida, siga pelo storybook para documentar componente, props, eventos
- Siga pelos testes unitários
- Padronize a formatação com Lint e Prettier antes de commitar
- Quando o componente estiver estável e funcional, configure o Rollup para gerar os bundles otimizados
- É essencial que esses bundles sejam leves para carregamento principalmente em cenários webview








### Próximos passos:
- Estudos da documentação da Stack Lit;
- Primeiros passos para iniciar um componente;
- Estudos de caso em uso:
    - Custom elements;
    - Design system no contexto do web components;
    - Otimização dos bundles na geração de build do projeto;
    - Chamando uma api internamente em um WC;
    - Chamando um componente do tipo (dumb component) passando props
    - Testes usando skeleton no primeiro carregamento;
    - Testes reativos ao trocar conteúdo dinamicamente no componente em dumb components;
    - Testes reativos síncronos trocando conteúdo para skeleton enquanto chama API e aguarda response;
    - Testes reativos assincronos trocando conteúdo para skeleton enquanto retorna response da API;
    - Uso em outros projetos front-end (Angular, React, Vanilla);
        - https://github.com/thihille/nubiahille (ReactJS + NextJS)
        - https://github.com/thihille/colegio-pietra-oficial-web (ReactJS + NextJS)
        - https://github.com/thihille/gambaleborges-adv (Angular v20)
        - https://github.com/thihille/oed-ciencias-6a-dtmc6001 (Vanilla)
- Estudos de monitoração com Datadog (Se tiver uma versão Freetier)
- Estudos com fullstory (Se tiver uma versão Freetier)

<b>Para finalizar:</b>
- Documentar o uso do Lit Element.
- Documentar os ganhos em utilizar Lit Element.
- Organizar todos os estudos em um documento que possa abrir em outros lugares ou exportar para apresentar.