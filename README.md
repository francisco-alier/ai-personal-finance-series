# 🔒 O Meu Co-Piloto Financeiro (Tua Economia)

Este repositório serve como a base de código aberto, repositório de prompts e arquivo de crónicas da rubrica mensal **"O Meu Co-Piloto Financeiro"** publicada em [Tua Economia](https://tuaeconomia.pt). 

Como especialistas em tecnologia e finanças, o nosso objetivo nesta série é desmistificar o uso de Inteligência Artificial Generativa (LLMs) nas finanças pessoais, fornecendo ferramentas seguras, transparentes e focadas na **privacidade absoluta do leitor**.

---

## 🛠️ Aplicação Local: Anonimizador Financeiro

A principal barreira para usar o ChatGPT ou o Claude como consultores financeiros familiares é a segurança: nunca devemos partilhar dados sensíveis (NIF, IBAN, Morada, Nomes) com servidores externos públicos.

Para resolver isso, desenvolvemos o **Anonimizador Financeiro local**:
*   **Acesso:** Disponível em [ia.tuaeconomia.pt](https://ia.tuaeconomia.pt) *(ou via GitHub Pages deste repositório)*.
*   **Segurança Máxima:** Construído exclusivamente em HTML e JavaScript nativo. O processamento ocorre 100% no navegador do utilizador.
*   **Prova Offline:** Podes carregar a aplicação, desligar totalmente o teu Wi-Fi (ou ativar o Modo de Voo), colar o teu extrato e clicar em "Limpar". Continuará a funcionar instantaneamente porque **nenhum dado é enviado para a internet**.

---

## 📅 Roteiro de Crónicas & Repositório de Prompts

Aqui tens acesso aos artigos completos e aos prompts exatos prontos a copiar e colar para o teu ChatGPT.

| Mês | Crónica | Prompt Exato (Copy-Paste) | Estado |
| :--- | :--- | :--- | :---: |
| **M1** | [Como pôr a IA a auditar os teus extratos bancários (Sem dar cabo da privacidade)](/artigos/M1-anonimizador-extratos.md) | [Prompt do Auditor de Gastos](/prompts/M1_auditor_orcamento.txt) | 📝 Rascunho |
| **M2** | [Prompt Engineering para Investidores: Como ler um Relatório de Contas em 5 minutos](/artigos/M2-prompt-engineering-investidores.md) | *Brevemente* | ⏳ Planeado |
| **M3** | [O Algoritmo é Racista? Os Enviesamentos Ocultos da IA no Acesso a Crédito](/artigos/M3-etica-e-bias-algoritmos.md) | *Não Aplicável (Artigo de Opinião)* | ⏳ Planeado |
| **M4** | [O Perigo das Alucinações: Porque não deves pedir conselhos de investimento ao ChatGPT](/artigos/M4-perigo-alucinacoes.md) | *Brevemente* | ⏳ Planeado |
| **M5** | [Automatizar a Poupança com Agentes de IA: O Futuro já chegou?](/artigos/M5-agentes-ia-poupanca.md) | *Brevemente* | ⏳ Planeado |
| **M6** | [O "Stress Test" da Tua Vida: Usar IA para simular cenários de crise](/artigos/M6-stress-test-financeiro.md) | *Brevemente* | ⏳ Planeado |

---

## 🚀 Como Contribuir ou Usar

Se queres melhorar as expressões regulares do anonimizador local (adicionando novas regras para bancos específicos portugueses, por exemplo), podes submeter um *Pull Request*:

1. Faz *Fork* deste repositório.
2. Cria uma *Branch* com as tuas alterações: `git checkout -b feature/melhoria-filtros`.
3. Faz *Commit* das tuas alterações: `git commit -m 'Adiciona regex para Banco X'`.
4. Envia para o repositório principal: `git push origin feature/melhoria-filtros`.

---

*Desenvolvido em parceria com a rubrica **O Meu Co-Piloto Financeiro** para [Tua Economia](https://tuaeconomia.pt).*
