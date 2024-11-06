// goblin.js
export default class Goblin {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('goblin'); // Добавление CSS класса для стилизации
        document.getElementById('game-area').appendChild(this.element); // Добавляем элемент в игровую область
    }

    // Метод для появления гоблина
    appear() {
        this.element.style.display = 'block'; // Показываем гоблина
        this.element.style.position = 'absolute'; // Устанавливаем позицию
        // Случайное размещение гоблина в пределах игрового экрана
        this.element.style.left = `${Math.random() * 90}vw`;
        this.element.style.top = `${Math.random() * 90}vh`;
    }

    // Метод для скрытия гоблина
    disappear() {
        this.element.style.display = 'none'; // Скрываем гоблина
    }
}
