let displayValue = "";

function appendToDisplay(value) {
    // Se l'operatore è "-" e il display non contiene ancora nessun numero o l'ultimo carattere è un operatore
    if (value === "-" && (displayValue === "" || ['+', '-', '*', '/'].includes(displayValue[displayValue.length - 1]))) {
        // Consenti l'inserimento di "-"
        displayValue += value;
    } else if (['+', '*', '/'].includes(value) && displayValue === "") {
        // Se l'operatore è diverso da "-" e il display è vuoto, mostra un messaggio di errore
        alert("Inserisci prima un numero!");
        return; // Interrompe l'esecuzione della funzione se l'operatore è premuto senza un numero precedente
    } else {
        // Aggiunge il valore al display
        displayValue += value;
    }

    // Verifica se l'ultimo carattere inserito è un operatore
    if (['+', '-', '*', '/'].includes(displayValue[displayValue.length - 1])) {
        // Se sì, sostituisci il precedente operatore con quello nuovo
        displayValue = displayValue.slice(0, -1) + value;
    }

    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(displayValue); // Usare eval() è rischioso, cerchiamo un'alternativa
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Operazione non valida");
        }
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Errore nell'operazione!");
        clearDisplay();
    }
}
