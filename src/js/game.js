import Goblin from './goblin.js';
import Score from './score.js';

class Game {
    constructor() {
        this.goblin = new Goblin();
        this.score = new Score();
        this.goblinVisible = false; // Статус видимости гоблина
        this.init();
    }

    // Инициализация игры
    init() {
        this.startListening();
        this.spawnGoblin(); // Начинаем с появления первого гоблина
    }

    // Начать слушать клики по гоблину
    startListening() {
        this.goblin.element.addEventListener('click', () => {
            if (this.goblinVisible) {
                this.score.increase();
                this.goblin.disappear(); // скрыть гоблина при попадании
                this.goblinVisible = false; // обновляем статус видимости
                this.spawnGoblin(); // показать нового гоблина
            }
        });
    }

    // Метод для появления гоблина
    spawnGoblin() {
        this.goblin.appear();
        this.goblinVisible = true; // обновляем статус видимости

        // Таймер, чтобы скрыть гоблина через 1 секунду
        setTimeout(() => {
            if (this.goblinVisible) {
                this.goblin.disappear(); // скрыть гоблина, если не кликнули
                this.score.miss(); // увеличиваем счетчик пропусков
                this.goblinVisible = false; // обновляем статус видимости
            }
        }, 1000); // 1000 мс = 1 секунда
    }
}

new Game();
