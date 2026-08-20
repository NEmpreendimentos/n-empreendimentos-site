# N. Empreendimentos — Direção de design

## Abordagens consideradas

### Tema: Midnight Conversion Lab
Introdução breve: Uma landing page dark premium com contraste elétrico, composição assimétrica e sensação de laboratório digital orientado a performance.
Probabilidade: 0.07

### Tema: Editorial Signal
Introdução breve: Uma direção editorial clara, com tipografia expressiva, espaços amplos e acentos de cor como marcadores de confiança.
Probabilidade: 0.03

### Tema: Soft Commerce Atelier
Introdução breve: Um visual sofisticado e acolhedor, com superfícies claras, tons naturais e foco em narrativa de marca.
Probabilidade: 0.05

## Abordagem escolhida: Midnight Conversion Lab

### Design Movement
Neo-brutalismo refinado aplicado a interfaces SaaS premium: contraste alto, tipografia editorial, superfícies translúcidas e composição assimétrica.

### Core Principles
1. Clareza de conversão: cada seção deve conduzir naturalmente ao contato pelo WhatsApp.
2. Contraste com propósito: fundo quase preto, textos minerais e verde-lima proprietário somente para ações e sinais de sucesso.
3. Assimetria controlada: blocos deslocados, números grandes e cards em camadas para evitar aparência de template.
4. Prova visual do trabalho: mockups abstratos de sites funcionam como portfólio sem inventar depoimentos reais.

### Color Philosophy
O fundo escuro cria foco e percepção premium; o verde-lima sinaliza ação, crescimento e contato imediato; o azul-violeta aparece como energia técnica em halos e detalhes, sem dominar a interface. A cor principal da marca é o verde-lima ácido `#C8FF4A`.

### Layout Paradigm
A página usa uma trilha vertical editorial com uma coluna principal e uma coluna de anotações laterais, combinando hero assimétrico, cards sobrepostos e uma timeline vertical. A composição deve parecer uma apresentação de projeto, não um grid genérico centralizado.

### Signature Elements
- Etiquetas numéricas monoespaçadas com prefixo `N/` para marcar capítulos.
- Linha vertical de progresso com pontos de acento verde-lima.
- Mockups de navegador com bordas metálicas, ruído sutil e gráficos simplificados.

### Interaction Philosophy
Interações devem confirmar intenção e reduzir fricção. CTAs têm resposta física curta, cards elevam levemente e o FAQ abre com transição suave, mantendo o conteúdo acessível via teclado.

### Animation
Usar entradas com opacidade e deslocamento curto, sob 300ms, com easing `cubic-bezier(0.23, 1, 0.32, 1)`. O halo do hero respira lentamente apenas em telas sem preferência por redução de movimento. Hover só transforma e altera opacidade, sem animar layout.

### Typography System
Display: `Space Grotesk`, pesos 500–700, para headlines compactas e técnicas. Corpo: `DM Sans`, pesos 400–600, para leitura e CTAs. Labels: `IBM Plex Mono`, em caixa alta e tracking ampliado. Hierarquia: H1 entre 3.6rem e 6.8rem com line-height apertado; H2 entre 2.5rem e 4.5rem; corpo entre 1rem e 1.15rem.

### Brand Essence
Sites autorais que transformam atenção em oportunidade para negócios que querem parecer tão bons quanto são. Personalidade: preciso, provocador, confiável.

### Brand Voice
Headlines são diretas, com verbos e contraste. CTAs são pessoais e específicos. Microcopy elimina ansiedade e explica o próximo passo sem promessas vazias.
Exemplo 1: “Seu site pode trabalhar antes mesmo do primeiro contato.”
Exemplo 2: “Me conte o que você quer vender. Eu desenho o caminho.”

### Wordmark & Logo
Marca composta por um símbolo “N” modular, formado por duas barras diagonais interrompidas e um ponto-lima, acompanhado do wordmark “N. Empreendimentos” em Space Grotesk semibold. O símbolo deve funcionar isoladamente como favicon.

### Signature Brand Color
Verde-lima ácido `#C8FF4A`, usado como propriedade visual de ação, crescimento e movimento.

## Style Decisions
- Evitar depoimentos inventados: a seção de prova social será apresentada como espaço de avaliações reais a preencher, sem nomes ou notas fictícias.
- Usar mockups visuais criados em CSS para manter o portfólio demonstrativo e independente de assets externos.
- Manter CTA WhatsApp como ação dominante em toda a página.
