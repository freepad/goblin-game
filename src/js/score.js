export default class Score {
    constructor() {
        this.score = 0;
        this.missed = 0;
        this.scoreDisplay = document.getElementById('score-display');
        this.updateDisplay();
    }

    // Увеличить счет
    increase() {
        this.score++;
        this.updateDisplay();
    }

    // Увеличить пропуски
    miss() {
        this.missed++;
        this.updateDisplay();
    }

    // Обновить отображение счета
    updateDisplay() {
        this.scoreDisplay.innerHTML = `Счет: ${this.score} | Пропущено: ${this.missed}`;
    }
}
