function numberGenerator() {
  let attempts = 10;
  let numberRandom = Math.floor(Math.random() * 100) + 1;

  function guess() {
    let userNumber = prompt("Угадай число от 1 до 100:");

    if (userNumber === null) {
      alert("Игра окончена.");
      return;
    }
    const parsNumber = parseInt(userNumber);

    if (isNaN(parsNumber)) {
      alert("Введите число!");
      guess();
    }
    if (parsNumber > numberRandom) {
      attempts--;
      if (attempts === 0) {
        const playAgain = confirm(
          "Загаданное число меньше, попытки закончились. Хотите сыграть еще?"
        );
        if (playAgain) {
          numberGenerator();
        } else {
          alert("Игра окончена");
        }
        return;
      }
      alert(`Загаданное число меньше, осталось попыток ${attempts}`);
      guess();
    } else if (parsNumber < numberRandom) {
      attempts--;
      if (attempts === 0) {
        const playAgain = confirm(
          "Загаданное число больше, попытки закончились. Хотите сыграть еще?"
        );
        if (playAgain) {
          numberGenerator();
        } else {
          alert("Игра окончена");
        }
        return;
      }
      alert(`Загаданное число больше, осталось попыток ${attempts}`);
      guess();
    } else {
      const playAgain = confirm(
        "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
      );
      if (playAgain) {
        guess();
      } else {
        alert("Игра окончена");
      }
    }
  }

  guess();
}

numberGenerator();
