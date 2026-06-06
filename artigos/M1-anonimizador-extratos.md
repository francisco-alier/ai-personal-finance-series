# Como Pôr a IA a Auditar os Teus Gastos (Sem Dar Cabo da Tua Privacidade)

**Rubrica:** O Meu Co-Piloto Financeiro (Mês 1)  
**Autor:** Francisco Nogueira

---

### 1. O espião que tens no bolso.

Já sentiste aquela sensação desconfortável de que o teu telemóvel está a ouvir as tuas conversas? Falas com um amigo sobre uma viagem ou de um par de ténis novos e, minutos depois, abres as redes sociais e és inundado com anúncios exatamente sobre esse tema? 

A privacidade na era digital parece uma batalha perdida. Mas se nos anúncios o preço que pagamos é a paciência, nas finanças pessoais a falta de cuidado com os nossos dados pode entregar toda a nossa vida de mão beijada.

**E se pudesses tirar apenas 15 minutos do teu domingo para encontrar 50€, 100€ ou mais no teu extrato bancário?** Sem precisares de preencher folhas de Excel complexas e sem perderes a tarde a fazer contas de cabeça. Atualmente podemos sumarizar a nossa informação bancária de forma simples com recurso a ferramentas de Inteligência Artificial (IA).

Podes usar o ChatGPT, o Gemini, o Claude ou outra IA como um auditor financeiro pessoal e gratuito que analisa os teus gastos em segundos. Eu trabalho com IA todos os dias e apesar de ainda gostar de fazer as minhas análises manuais, a verdade é que a IA é muito mais rápida e por vezes consegue identificar detalhes que nos escapam. De facto, há pouco tempo um amigo perguntou-me: *'Isto serve mesmo para ajudar uma família real a poupar?'*

A minha resposta foi simples: funciona, e muito bem. Mas há um erro crítico que a maioria das pessoas comete: *entregar* a sua vida financeira às grandes tecnológicas.

O erro crítico: **Descarregares o PDF do extrato da tua conta bancária (Caixa, Millennium, ActivoBank, Santander...) e arrastá-lo diretamente para a janela do ChatGPT.**

Ao fazeres isto, estás a partilhar com terceiros o teu nome, NIF, IBAN, morada, o nome da tua empresa e o histórico completo de tudo o que consomes, desde a farmácia até ao supermercado. É o equivalente digital a deixares a chave de casa espetada na fechadura pelo lado de fora. 

A Inteligência Artificial pode ser o teu melhor co-piloto financeiro, mas não precisas de abdicar da tua privacidade para tirar partido dela. A solução é simples: colocar o robô a trabalhar para ti, mas sem mostrares toda a tua informação.

---

### 2. Como anonimizar o extrato bancário

Para resolver este problema, podemos sempre retirar manualmente a informação que não queremos que a IA veja... mas ninguém tem tempo para isso. Por isso, desenvolvi esta solução rápida, gratuita e muito simples que podem experimentar aqui. É uma ferramenta de anonimização que funciona diretamente no teu navegador de internet.

Sei o que podes estar a pensar: *'Então vens falar-me de privacidade e queres que eu cole o meu extrato num site que não conheço?'*

Aqui está o segredo: esta ferramenta funciona através de **processamento 100% local**

O que significa isto em linguagem simples?
* **Nenhum dado sai do teu dispositivo:** A ferramenta não envia informações para servidores externos, não tem bases de dados e não guarda nada. O teu extrato é limpo no teu próprio computador ou telemóvel.
* **Funciona offline após o carregamento:** Uma vez que a página esteja carregada no teu navegador, todo o processo de anonimização corre localmente no teu dispositivo sem necessitar de qualquer ligação ativa à internet.

De facto, a melhor forma de confirmares a segurança é testá-la tu mesmo:

#### O Teste de Segurança em 4 Passos:

1. [**Acede à ferramenta**](https://francisco-alier.github.io/ai-personal-finance-series/) enquanto estás online para carregar a aplicação no teu navegador.
2. **Desliga a tua ligação à Internet** (desliga o Wi-Fi do computador ou ativa o 'Modo de Voo' no telemóvel) — a página continuará totalmente funcional na memória do teu browser.
3. **Cola as linhas do teu extrato** bancário na caixa de texto.
4. **Clica em "Anonimizar Dados"** (ou "Anonymize Data" se estiver em inglês).

Vais ver que a ferramenta funciona instantaneamente e apresenta o resultado na hora, mesmo sem qualquer ligação à internet. Isto é a prova de que nenhum dado financeiro ou pessoal é enviado para servidores externos.

O script corre localmente e substitui toda a informação sensível:
* O teu **IBAN** é substituído por `[IBAN_ANONIMIZADO]`.
* O teu **NIF** passa a `[NIF_ANONIMIZADO]`.
* Os **nomes próprios** (João, Maria, Silva...) transformam-se em `[NOME_ANONIMIZADO]`.
* Os nomes dos **bancos** mudam para `[BANCO_ANONIMIZADO]`.

Os nomes de grandes superfícies e marcas conhecidas (como Continente, Auchan, Pingo Doce, Worten, Galp ou Netflix) mantêm-se visíveis. Porquê? Porque a IA precisa de saber a natureza do gasto para fazer uma categorização correta. No entanto, qualquer rasto que te possa identificar a ti ou a contas específicas é totalmente anonimizado.

Quando terminar, basta clicares em **"Copiar Resultado"** (ou "Copy Result"), voltar a ligar a internet e avançar para o passo seguinte. Tens agora um extrato 100% anónimo e seguro para entregar à IA.

**Dica para melhores resultados (Formato Tabela):** No painel de resultados do anonimizador, podes optar por copiar os teus dados em formato de **Tabela** (usando a linguagem *Markdown*). Recomendamos que utilizes esta opção! Fornecer os dados estruturados numa tabela com colunas de `Data | Descrição | Valor` facilita o trabalho de leitura do modelo de IA, reduz drasticamente a probabilidade de erros matemáticos ("alucinações") e melhora a precisão global do diagnóstico financeiro.

**Nota:** A ferramenta nao é infalivel e podem alguns nomes nao ser anonimizados corretamente, pelo que é importante reveres o resultado antes de o copiares.

---

### 3. Como colocar a IA a trabalhar para ti

Agora que os teus dados estão limpos e seguros, é hora de ativar o teu analista financeiro virtual. Abre o ChatGPT (ou qualquer outra IA) e cola o prompt que encontras abaixo, substituindo a parte final pelo texto anonimizado que acabaste de copiar:

```text
Actua como um consultor financeiro familiar rigoroso e especialista em orçamentos domésticos. 

Analisa os dados fornecidos no final deste prompt e apresenta o teu relatório estruturado exatamente com as seguintes secções:

### 1. Estatísticas Gerais de Consumo
* Valor Total Gasto (€)
* Valor Médio por Transação (€)
* Maior Transação Individual (€)
* Menor Transação Individual (€)

### 2. Top 5 Maiores e Menores Gastos
* Lista as 5 transações de maior valor (excluindo salários ou transferências de entrada).
* Lista as 5 transações de menor valor.

### 3. Tabela de Orçamento (Regra 50/30/20)
Apresenta uma pequena tabela markdown com as colunas: Categoria | Valor Total (€) | Percentagem (%) | Referência Ideal (50/30/20)
Distribui os gastos pelas categorias: Necessidades Essenciais (50%), Desejos/Lazer (30%) e Poupança/Investimento/Dívida (20%).

### 4. Diagnóstico e Plano de Ação
* Identifica potenciais "gastos micro".
* Apresenta 3 conselhos práticos e realistas para cortar despesas e aumentar a taxa de poupança em 10% no próximo mês.

---
Dados Financeiros Anonimizados para Análise:
[COLA AQUI OS TEUS DADOS ANONIMIZADOS]
```

Em poucos segundos, o teu extrato transforma-se num diagnóstico completo, ultrassimplificado e com sugestões de poupança feitas à medida da tua realidade de consumo. 

Quais as vantagens desta abordagem? Deixo alguns pontos que, a meu haver, sao uma grande mais valida de criar prompts para ajuda financeira:

**1. Versatilidade Total** : As aplicações financeiras normais prendem-te a categorias rígidas e regras pré-definidas. Com um prompt, és tu quem dita as regras. Se hoje queres analisar os teus gastos com base na regra 50/30/20, usas este prompt. Se amanhã quiseres caçar subscrições esquecidas ou focar-te apenas em cortar nos jantares fora, basta mudares uma linha na tua instrução.
**2. Ação Imediata e Prática** : A grande mais-valia é que ela não se limita a fazer o diagnóstico do passado; ela sugere próximos passos práticos e acionáveis. Em vez de te deixar apenas a olhar para o desvio, dá-te conselhos do que podes fazer no dia seguinte para melhorar a tua saude financeira.
**3. Customização e Interatividade** : Podes interagir com o teu diagnóstico de forma natural. Se discordares de uma categoria, basta escreveres: "Ajusta o gasto X para Necessidades". Se achares o supermercado muito caro, podes pedir: "Dá-me ideias práticas de planeamento de refeições para poupar nesta categoria".

---

### 4. O que a IA pode e não pode fazer - para não te esqueceres

Atualmente trabalho diariamente com IA desenvolvendo diversas automatizações e ferramentas que simplificam a vida de muita gente no dia-a-dia mas devo deixar um aviso importante para que não cries expectativas erradas. A IA é uma ferramenta fantástica, mas não é mágica. Deixo algumas notas para que tomes melhor partido desta:

* **Não conhece o teu contexto:** Se a ferramenta de privacidade ocultou o nome de um restaurante de bairro muito específico (como `[RESTAURANTE_LOCAL]`), a IA não saberá se foi um almoço de trabalho (necessidade) ou um jantar de luxo com amigos (lazer). Se vires uma má categorização, basta escreveres na conversa: *'Ajusta o restaurante local para a categoria Lazer'* e ela atualiza o orçamento imediatamente - até um certo ponto, pois por vezes não consegue "entender" o que queremos, por isso é bom revermos os dados sugeridos e corrigirmos o que acharmos necessário.

* **A decisão final é sempre tua:** A IA ajuda-te a ver padrões invisíveis a olho nu e a sugerir cortes, mas a responsabilidade de cancelar subscrições ou reduzir despesas supérfluas é tua. Ela é o teu co-piloto, mas és tu quem vai ao volante - e deve sempre ser assim especialmente quando falamos de dinheiro.

* **Não é perfeito:** Por vezes a IA pode errar na categorização dos gastos, por isso é bom revermos os dados sugeridos e corrigirmos o que acharmos necessário. É o chamado de alucinações.

Ao seguires este método simples, consegues aliar o melhor de dois mundos: utilizas a tecnologia para poupar horas de trabalho manual e encontrar dinheiro esquecido, mantendo a tua privacidade e segurança financeira totalmente invioláveis.

Este foi o primeiro artigo da série sobre IA para Finanças Pessoais. Espero que este guia te tenha sido útil! No próximo mês, trazemos mais dicas práticas para dominares o teu co-piloto financeiro.

---

### ⚠️ Aviso de Responsabilidade (Disclaimer) ⚠️

O uso desta ferramenta e do guia associado é feito por tua inteira conta e risco. Embora o processo de anonimização seja executado localmente no teu navegador para garantir a segurança, não nos responsabilizamos por eventuais falhas, omissões na limpeza de dados, ou qualquer fuga de privacidade após partilhares a informação com serviços externos de Inteligência Artificial. Utiliza com critério e valida sempre o resultado final antes de o submeteres.

---

### Glossário

*   **Prompt:** A instrução ou comando de texto que escreves para direcionar a Inteligência Artificial (como o ChatGPT, o Claude ou o Gemini) a realizar uma tarefa específica (neste caso, a auditoria do teu orçamento).
*   **Processamento Local:** Refere-se a operações de código que correm inteiramente dentro do teu próprio dispositivo (computador ou telemóvel), sem enviar dados para a internet ou para servidores externos. É por isso que o anonimizador funciona sem rede.
*   **Alucinações (de IA):** O fenómeno em que os modelos de Inteligência Artificial cometem erros de forma convincente, como inventar ou categorizar incorretamente um gasto no extrato.
*   **Markdown:** Uma linguagem de marcação leve com sintaxe de formatação de texto simples. No contexto desta ferramenta, é utilizada para organizar as transações bancárias numa tabela limpa com colunas, o que facilita muito a leitura e interpretação por parte da IA.

---

