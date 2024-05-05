"use strict";(self.webpackChunkremedios_documentacao=self.webpackChunkremedios_documentacao||[]).push([[8862],{292:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>t,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=a(4848),d=a(8453);const r={},n="DadosCadastroRemedio",i={id:"Dados de opera\xe7\xe3o/DadosCadastroRemedio",title:"DadosCadastroRemedio",description:"Vis\xe3o Geral:",source:"@site/docs/Dados de opera\xe7\xe3o/DadosCadastroRemedio.md",sourceDirName:"Dados de opera\xe7\xe3o",slug:"/Dados de opera\xe7\xe3o/DadosCadastroRemedio",permalink:"/remedios-documentacao/docs/Dados de opera\xe7\xe3o/DadosCadastroRemedio",draft:!1,unlisted:!1,editUrl:"https://github.com/sprintcampus/remedios-documentacao/tree/main/docs/Dados de opera\xe7\xe3o/DadosCadastroRemedio.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DadosAtualizarRemedio",permalink:"/remedios-documentacao/docs/Dados de opera\xe7\xe3o/DadosAtualizarRemedio"},next:{title:"DadosDetalhamentoRemedio",permalink:"/remedios-documentacao/docs/Dados de opera\xe7\xe3o/DadosDetalhamentoRemedio"}},t={},l=[{value:"Vis\xe3o Geral:",id:"vis\xe3o-geral",level:2},{value:"Estrutura do Record:",id:"estrutura-do-record",level:2},{value:"Valida\xe7\xf5es:",id:"valida\xe7\xf5es",level:2},{value:"Uso:",id:"uso",level:2},{value:"Exemplo de JSON para Requisi\xe7\xe3o de Cadastro:",id:"exemplo-de-json-para-requisi\xe7\xe3o-de-cadastro",level:2},{value:"Considera\xe7\xf5es de Design:",id:"considera\xe7\xf5es-de-design",level:2},{value:"Seguran\xe7a:",id:"seguran\xe7a",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"dadoscadastroremedio",children:"DadosCadastroRemedio"}),"\n",(0,s.jsx)(o.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral:"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"'DadosCadastroRemedio'"})," \xe9 um DTO (Data Transfer Object) projetado para encapsular todos os dados necess\xe1rios para o cadastro de um novo rem\xe9dio na base de dados. Este objeto \xe9 utilizado nas opera\xe7\xf5es de cadastro na camada de controle do sistema de gerenciamento de rem\xe9dios."]}),"\n",(0,s.jsx)(o.h2,{id:"estrutura-do-record",children:"Estrutura do Record:"}),"\n",(0,s.jsx)(o.p,{children:"Este record cont\xe9m os seguintes campos:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"nome ('String')"}),": Nome do rem\xe9dio. \xc9 obrigat\xf3rio e deve ter no m\xe1ximo 20 caracteres."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"via ('Via')"}),": Via de administra\xe7\xe3o do rem\xe9dio, como oral, intravenosa, etc. Utiliza a enumera\xe7\xe3o Via."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"lote ('String')"}),": N\xfamero de lote do rem\xe9dio. \xc9 um campo obrigat\xf3rio."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"quantidade ('int')"}),": Quantidade do rem\xe9dio a ser cadastrada."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"validade ('LocalDate')"}),": Data de validade do rem\xe9dio. Deve ser uma data futura."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"laboratorio ('Laboratorio')"}),": Laborat\xf3rio que fabrica o rem\xe9dio. Utiliza a entidade ",(0,s.jsx)(o.strong,{children:"'Laboratorio'"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"valida\xe7\xf5es",children:"Valida\xe7\xf5es:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Nome"}),":","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"'@NotBlank(message = \"O nome n\xe3o pode estar em branco.\")'"}),": Garante que o nome n\xe3o seja nulo ou vazio."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"'@Size(max = 20, message = \"O nome deve ter no m\xe1ximo 20 caracteres.\")'"}),": Limita o comprimento do nome a 20 caracteres."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["Lote:","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"'@NotBlank(message = \"O lote n\xe3o pode estar em branco.\")'"}),": Assegura que o lote n\xe3o seja nulo ou vazio."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["Validade:","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"'@Future(message = \"A data de validade deve ser no futuro.\")'"}),": Garante que a data de validade seja futura."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"uso",children:"Uso:"}),"\n",(0,s.jsxs)(o.p,{children:["Este DTO \xe9 empregado pelo m\xe9todo ",(0,s.jsx)(o.strong,{children:"'cadastrar'"})," no ",(0,s.jsx)(o.strong,{children:"'RemedioController'"})," para receber os dados necess\xe1rios ao registro de um novo rem\xe9dio."]}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-de-json-para-requisi\xe7\xe3o-de-cadastro",children:"Exemplo de JSON para Requisi\xe7\xe3o de Cadastro:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-JSON",children:'{\n  \n  "nome": "Ibuprofeno",\n  "via": "ORAL",\n  "lote": "A1234B",\n  "quantidade": 100,\n  "validade": "2025-12-31",\n  "laboratorio" : "LABEXEMP"\n}\n'})}),"\n",(0,s.jsx)(o.h2,{id:"considera\xe7\xf5es-de-design",children:"Considera\xe7\xf5es de Design:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Flexibilidade"}),": Este DTO \xe9 flex\xedvel e claro, simplificando o processo de cadastro ao validar os campos essenciais antes de prosseguir para a camada de servi\xe7o."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Integra\xe7\xe3o"}),": Deve ser bem integrado com as funcionalidades da camada de servi\xe7o, que cuidar\xe1 da l\xf3gica de neg\xf3cio e persist\xeancia dos dados."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"seguran\xe7a",children:"Seguran\xe7a:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"As opera\xe7\xf5es que utilizam este DTO devem garantir que apenas usu\xe1rios autorizados possam cadastrar novos rem\xe9dios, especialmente para controlar o acesso a dados sens\xedveis e opera\xe7\xf5es cr\xedticas"}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,o,a)=>{a.d(o,{R:()=>n,x:()=>i});var s=a(6540);const d={},r=s.createContext(d);function n(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);