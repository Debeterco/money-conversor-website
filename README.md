# 💱 Conversor de Moedas KMS

![GitHub Repo Size](https://img.shields.io/github/repo-size/Debeterco/money-conversor-website)
![GitHub language count](https://img.shields.io/github/languages/count/Debeterco/money-conversor-website)
![GitHub last commit](https://img.shields.io/github/last-commit/Debeterco/money-conversor-website)
![Theme](https://img.shields.io/badge/Theme-Dark%2FLight-orange)

---

## 📌 Sobre o Projeto

Para facilitar o acompanhamento em **tempo real** do valor de câmbio atualizado de todas as moedas do mundo e converter seus valores para o **Real Brasileiro (BRL)**, nosso grupo desenvolveu este software.  

O programa permite que o usuário monitore dados de cotações de forma prática, auxiliando decisões financeiras como compra e venda de moedas.

O projeto também **analisa requisitos funcionais, não funcionais e regras de negócio** para implementar um conversor de moedas eficiente e intuitivo.

---

## 🎬 Demonstração

💻 Acesse a demonstração ao vivo: [Abrir Conversor de Moedas](https://debeterco.github.io/money-conversor-website/)

---

# Requisitos do Sistema de Conversão de Moedas

## 🧩 Requisitos Funcionais (RF)
Descrevem o que o sistema deve fazer, ou seja, suas funcionalidades principais.

| ID | Descrição do Requisito Funcional |
| :--- | :--- |
| **RF01** | O sistema deve permitir a conversão de uma moeda para outra em tempo real, utilizando taxas de câmbio obtidas de uma API confiável e atualizada periodicamente. |
| **RF02** | O sistema deve permitir ao usuário selecionar a moeda de origem e a moeda de destino para conversão. |
| **RF03** | O sistema deve permitir ao usuário inserir o valor que deseja converter. |
| **RF04** | O sistema deve exibir o valor convertido de forma clara e precisa logo após a conversão da API. |
| **RF05** | O sistema deve fornecer uma lista de moedas disponíveis para conversão, como USD, EUR, BRL, JPY, etc. |
| **RF06** | O sistema deve permitir a visualização da taxa de câmbio utilizada para a conversão. |
| **RF07** | O sistema deve permitir ao usuário realizar conversões múltiplas seguidas sem necessidade de reconfiguração. |

## ⚙️ Requisitos Não Funcionais (RNF)
Definem restrições e qualidades esperadas no funcionamento do sistema.

| ID | Descrição do Requisito Não Funcional | Categoria |
| :--- | :--- | :--- |
| **RNF01** | O sistema deve ser acessível via navegador web (interface online). | Usabilidade/Acessibilidade |
| **RNF02** | O sistema deve ter interface responsiva para uso em dispositivos móveis (tablets e celulares) e desktops. | Usabilidade |
| **RNF03** | O sistema deve efetuar backup automático dos dados a cada 24 horas. | Segurança/Confiabilidade |
| **RNF04** | O tempo de resposta do sistema não deve ultrapassar 5 segundos em operações de conversão. | Performance |
| **RNF05** | O sistema deve manter 85% de disponibilidade mensal. | Confiabilidade |
| **RNF06** | O sistema deve fornecer mensagens de erro claras e orientativas para o usuário. | Usabilidade/Confiabilidade |
| **RNF07** | O sistema deve armazenar dados de conversão em banco de dados relacional seguro (ex: MySQL ou PostgreSQL). | Segurança/Tecnologia |
| **RNF08** | O sistema deve ter uma interface simples e intuitiva para usuários iniciantes. | Usabilidade |
| **RNF09** | O sistema deve ter o modo escuro e modo claro. | Usabilidade/Estética |
| **RNF10** | O sistema deve permitir suporte multilíngue (ex: português e inglês) para atender usuários de diferentes culturas e regiões. | Internacionalização |

## Regras de Negócio (RN)

As Regras de Negócio (RN) são diretrizes essenciais que definem, orientam e restringem o comportamento do sistema para garantir que ele opere de acordo com as políticas, a lógica e os padrões de qualidade definidos para o serviço. Elas detalham como as funcionalidades devem ser implementadas e quais restrições devem ser aplicadas, abrangendo desde a integridade e precisão dos dados de câmbio até a usabilidade e segurança da plataforma.

A tabela a seguir apresenta as Regras de Negócio cruciais para o sistema de conversão de moedas:

| ID | Categoria | Regra | Descrição Resumida | Prioridade | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RN001** | Dados | Fonte de Dados | Usar apenas APIs de fontes financeiras confiáveis. | Alta | C |
| **RN002** | Dados | Atualização de Taxas | Atualizar taxas em tempo real. | Alta | C |
| **RN003** | Dados | Moedas Suportadas | Manter uma lista de moedas suportadas que seja gerenciável pelo admin. | Média | C |
| **RN004** | Dados | Falha de Conexão (Fallback) | Em caso de falha da API, avisar o usuário. | Alta | C |
| **RN005** | Cálculo | Precisão Decimal | Arredondar resultado conforme as casas decimais da moeda de destino. | Alta | C |
| **RN006** | Interface | Formatação de Valores | Formatar valores com símbolo e separadores (ex: R$1.000,00). | Média | C |
| **RN007** | Interface | Validação de Valor | Permitir apenas números positivos na entrada; direcionar para inválidos. | Alta | C |
| **RN008** | Interface | Validação de Moedas | Impedir conversão entre moedas iguais. | Média | C |
| **RN009** | Interface | Moedas Padrão | Pré-selecionar moedas padrão ao iniciar (ex: BRL -> USD). | Baixa | C |
| **RN010** | Segurança | Limites de API | Implementar limite de requisições (rate limiting) para a API pública. | Alta | C |
| **RN011** | Interface | Inversão Rápida | Oferecer botão para inverter rapidamente as moedas de origem/destino. | Média | C |

---

## 🛠 Tecnologias Utilizadas

- **HTML5** – Estrutura da página  
- **CSS3** – Estilo, tema Dark/Light, responsividade  
- **JavaScript** – Lógica de conversão e multilínguas  
- **API de Câmbio** – Para obter taxas de câmbio atualizadas  

---

## ⚙ Funcionalidades

- Conversão de moedas em tempo real   
- Tema Dark/Light com alternância dinâmica  
- Interface responsiva para dispositivos móveis

---

## 📁 Estrutura do Projeto

/money-conversor-website/
│
├── index.html # Página inicial
├── conversor.html # Página de conversão de moedas
├── style.css # Estilo e tema Dark/Light
├── script.js # Lógica da conversão
└── theme.js # Lógica do tema


---

## 🚀 Como Usar

1. Clone o repositório:  
```bash
git clone https://github.com/Debeterco/money-conversor-website.git

    Abra index.html no navegador.

    Navegue até conversor.html e teste a conversão de moedas.

    Alterne o tema Dark/Light desejado usando os controles no cabeçalho.

📄 Licença

Este projeto está sob a licença MIT – consulte o arquivo LICENSE
para mais detalhes.

👨‍💻 Desenvolvedores

    Cristian Sabini

    Igor José Munczeski

    João Vitor Kasteller Debeterco

    Victor Kostetzer

✨ Observações

Este projeto foi desenvolvido como estudo de caso em Boas Práticas de Desenvolvimento de Software, combinando análise de requisitos, regras de negócio e implementação prática para entregar uma ferramenta funcional para usuários finais.
