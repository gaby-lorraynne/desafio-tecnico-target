const faturamentoEstados = [
    { estado: "SP", valor: 6783643 },
    { estado: "RJ", valor: 3667866 },
    { estado: "MG", valor: 2922988 },
    { estado: "ES", valor: 2716548 },
    { estado: "Outros", valor: 1984953 }
];

// Calcula o total do faturamento
const totalFaturamento = faturamentoEstados.reduce((total, estado) => {
    return total + estado.valor;
}, 0);

// Calcula o percentual de cada estado
const percentual = faturamentoEstados.map(estado => {
    const percent = (estado.valor / totalFaturamento) * 100;

    return {
        estado: estado.estado, 
        percent: percent
    };
});

console.log(`Total de Faturamento: ${totalFaturamento}`);
console.log("Percentual de representação de cada estado: ");
percentual.forEach(estado => {
    console.log(`${estado.estado}: ${estado.percent.toFixed(2)}%`); 
});
