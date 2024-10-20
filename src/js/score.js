// src/js/score.js

class Score {
  constructor() {
      this.points = 0;
      this.missed = 0;
      this.scoreElement = document.createElement('div');
      this.scoreElement.className = 'score'; // добавьте нужные стили
      document.body.appendChild(this.scoreElement);
      this.updateScore();
  }

  // Увеличить счет
  increase() {
      this.points++;
      this.updateScore();
  }

  // Увеличить количество пропусков
  miss() {
      this.missed++;
      this.updateScore();
      if (this.missed >= 5) {
          this.endGame(); // Вызов метода завершения игры
      }
  }

  // Обновить отображение счета
  updateScore() {
      this.scoreElement.innerText = `Очки: ${this.points} Пропуски: ${this.missed}`;
  }

  // Метод для завершения игры
  endGame() {
      alert(`Игра окончена! Ваш счет: ${this.points}`);
      this.reset(); // Сброс счета
      // Здесь можно добавить логику для перезапуска игры, если это необходимо
  }

  // Сбросить счет
  reset() {
      this.points = 0;
      this.missed = 0;
      this.updateScore();
  }
}

export default Score;
