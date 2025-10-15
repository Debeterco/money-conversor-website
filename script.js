const selectDe = document.getElementById('de');
const selectPara = document.getElementById('para');
const inputValor = document.getElementById('valor');
const form = document.getElementById('form');
const resultadoDiv = document.getElementById('resultado');

// Carregar moedas
async function CarregarMoedas() {
    try {
        const res = await fetch('https://v6.exchangerate-api.com/v6/2c8023e165a447d1fe1e4487/latest/USD');
        const data = await res.json();
        const moedas = data.conversion_rates;

        for (const codigo in moedas) {
            const option1 = new Option(codigo, codigo);
            const option2 = new Option(codigo, codigo);

            selectDe.appendChild(option1);
            selectPara.appendChild(option2);
        }

        selectDe.value = 'BRL';
        selectPara.value = 'USD';
    } catch (error) {
        console.error('Erro ao carregar moedas:', error);
    }
}

// Converter moedas
async function ConverterMoeda(event) {
    event.preventDefault();

    const de = selectDe.value;
    const para = selectPara.value;
    const valor = parseFloat(inputValor.value);

    if (!valor || valor <= 0) {
        resultadoDiv.textContent = 'Digite um valor válido.';
        return;
    }

    if (de === para) {
        resultadoDiv.textContent = 'Selecione moedas diferentes.';
        return;
    }

    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/2c8023e165a447d1fe1e4487/pair/${de}/${para}/${valor}`);
        const data = await res.json();

        if (data.result === "success") {
            const convertido = data.conversion_result.toFixed(2);
            resultadoDiv.innerHTML = `<strong>${valor} ${de}</strong> = <strong>${convertido} ${para}</strong>`;
        } else {
            resultadoDiv.textContent = 'Erro ao converter moeda.';
        }
    } catch (error) {
        console.error('Erro ao converter moeda:', error);
        resultadoDiv.textContent = 'Erro na requisição.';
    }
}

document.addEventListener('DOMContentLoaded', CarregarMoedas);
form.addEventListener('submit', ConverterMoeda);
