"use strict";(self.webpackChunkremedios_documentacao=self.webpackChunkremedios_documentacao||[]).push([[5143],{5538:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>t,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=a(4848),d=a(8453);const n={},r="DadosDetalhamentoRemedio",i={id:"Dados de opera\xe7\xe3o/DadosDetalhamentoRemedio",title:"DadosDetalhamentoRemedio",description:"Vis\xe3o Geral:",source:"@site/docs/Dados de opera\xe7\xe3o/DadosDetalhamentoRemedio.md",sourceDirName:"Dados de opera\xe7\xe3o",slug:"/Dados de opera\xe7\xe3o/DadosDetalhamentoRemedio",permalink:"/remedios-documentacao/docs/Dados de opera\xe7\xe3o/DadosDetalhamentoRemedio",draft:!1,unlisted:!1,editUrl:"https://github.com/sprintcampus/remedios-documentacao/tree/main/docs/Dados de opera\xe7\xe3o/DadosDetalhamentoRemedio.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DadosCadastroRemedio",permalink:"/remedios-documentacao/docs/Dados de opera\xe7\xe3o/DadosCadastroRemedio"},next:{title:"DadosListagemRemedios",permalink:"/remedios-documentacao/docs/Dados de opera\xe7\xe3o/DadosListagemRemedios"}},t={},l=[{value:"Vis\xe3o Geral:",id:"vis\xe3o-geral",level:2},{value:"Estrutura do Record:",id:"estrutura-do-record",level:2},{value:"Construtor:",id:"construtor",level:2},{value:"Uso:",id:"uso",level:2},{value:"Exemplo de JSON para Resposta de Detalhamento:",id:"exemplo-de-json-para-resposta-de-detalhamento",level:2},{value:"Considera\xe7\xf5es de Design:",id:"considera\xe7\xf5es-de-design",level:2},{value:"Seguran\xe7a:",id:"seguran\xe7a",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"dadosdetalhamentoremedio",children:"DadosDetalhamentoRemedio"}),"\n",(0,s.jsx)(o.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral:"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"'DadosDetalhamentoRemedio'"})," \xe9 um DTO (Data Transfer Object) utilizado para fornecer uma vis\xe3o detalhada das informa\xe7\xf5es de um rem\xe9dio. Este record \xe9 essencial para opera\xe7\xf5es que requerem um completo detalhamento do estado de um rem\xe9dio, como visualiza\xe7\xf5es ou atualiza\xe7\xf5es detalhadas."]}),"\n",(0,s.jsx)(o.h2,{id:"estrutura-do-record",children:"Estrutura do Record:"}),"\n",(0,s.jsx)(o.p,{children:"Este record encapsula os seguintes dados de um rem\xe9dio:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"id ('Long')"}),": Identificador \xfanico do rem\xe9dio."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"nome ('String')"}),": Nome do rem\xe9dio."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"via ('Via')"}),": Via de administra\xe7\xe3o do rem\xe9dio (nasal, oral, vemosa, intramuscular, retal)."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"lote ('String')"}),": N\xfamero de lote do rem\xe9dio."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"quantidade ('int')"}),": Quantidade dispon\xedvel do rem\xe9dio."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"validade ('LocalDate')"}),": Data de validade do rem\xe9dio."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"laboratorio ('Laboratorio')"}),": Laborat\xf3rio que fabrica o rem\xe9dio."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"ativo ('boolean')"}),": Estado do rem\xe9dio, indicando se est\xe1 ativo ou inativo."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"construtor",children:"Construtor:"}),"\n",(0,s.jsxs)(o.p,{children:["O construtor de ",(0,s.jsx)(o.strong,{children:"'DadosDetalhamentoRemedio'"})," recebe um objeto ",(0,s.jsx)(o.strong,{children:"'Remedio'"})," e mapeia seus atributos para o record. Isso facilita a cria\xe7\xe3o do DTO a partir de uma entidade ",(0,s.jsx)(o.strong,{children:"'Remedio'"}),", simplificando a transfer\xeancia de dados entre as camadas de persist\xeancia e a camada de apresenta\xe7\xe3o."]}),"\n",(0,s.jsx)(o.h2,{id:"uso",children:"Uso:"}),"\n",(0,s.jsx)(o.p,{children:"Este DTO \xe9 amplamente utilizado nas seguintes situa\xe7\xf5es:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Ao retornar os detalhes de um rem\xe9dio espec\xedfico em uma solicita\xe7\xe3o de API."}),"\n",(0,s.jsx)(o.li,{children:"Em processos de log\xedstica que necessitam informa\xe7\xf5es detalhadas para opera\xe7\xf5es como auditoria, controle de estoque, e verifica\xe7\xe3o de validade."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-de-json-para-resposta-de-detalhamento",children:"Exemplo de JSON para Resposta de Detalhamento:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-JSON",children:'\n{\n  "id": 1,\n  "nome": "Ibuprofeno",\n  "via": "ORAL",\n  "lote": "B1234C",\n  "quantidade": 150,\n  "validade": "2025-09-15",\n  "laboratorio": {\n    "id": 2,\n    "nome": "Laborat\xf3rio Exemplo"\n  },\n  "ativo": true\n}\n\n'})}),"\n",(0,s.jsx)(o.h2,{id:"considera\xe7\xf5es-de-design",children:"Considera\xe7\xf5es de Design:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Integridade"}),": As informa\xe7\xf5es do rem\xe9dio s\xe3o diretamente mapeadas do objeto ",(0,s.jsx)(o.strong,{children:"'Remedio'"}),", garantindo que os dados sejam representados com precis\xe3o e consist\xeancia."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Versatilidade"}),": A presen\xe7a do construtor facilita a integra\xe7\xe3o com a camada de servi\xe7o, permitindo transformar facilmente as entidades do banco de dados em objetos de transfer\xeancia de dados."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"seguran\xe7a",children:"Seguran\xe7a:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"\xc9 recomend\xe1vel garantir que os detalhes dos rem\xe9dios sejam acessados apenas por usu\xe1rios autorizados, especialmente em ambientes onde informa\xe7\xf5es sens\xedveis como lotes e quantidades s\xe3o manipuladas."}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,o,a)=>{a.d(o,{R:()=>r,x:()=>i});var s=a(6540);const d={},n=s.createContext(d);function r(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);