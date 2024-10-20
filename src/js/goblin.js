class Goblin {
  constructor(container) {
      this.element = document.createElement('div');
      this.element.className = 'goblin';
      container.appendChild(this.element); // Добавляем гоблина в контейнер
      this.isVisible = false; // Статус видимости
  }

  // Показать гоблина в случайной позиции внутри контейнера
  appear() {
      const x = Math.random() * (this.element.parentNode.clientWidth - 100); 
      const y = Math.random() * (this.element.parentNode.clientHeight - 100);
      this.element.style.left = `${x}px`;
      this.element.style.top = `${y}px`;
      this.element.style.display = 'block';
      this.isVisible = true; // Обновляем статус видимости

      setTimeout(() => {
          this.disappear();
      }, 1000); // Исчезает через 1 секунду
  }

  // Скрыть гоблина
  disappear() {
      this.element.style.display = 'none';
      this.isVisible = false; // Обновляем статус видимости
  }

  // Удалить элемент гоблина из DOM
  remove() {
      this.element.remove();
  }
}

export default Goblin;