function numberGenerator() {
  let numberRandom = Math.floor(Math.random() * 100) + 1;

  function guess() {
    let userNumber = prompt("Угадай число от 1 до 100:");

    if (userNumber === null) {
      alert("Игра окончена.");
      return;
    }

    userNumber = Number(userNumber);

    if (isNaN(userNumber)) {
      alert("Введите число!");
      guess();
    } else if (userNumber === numberRandom) {
      alert("Поздравляю, Вы угадали!!!");
    } else if (userNumber < numberRandom) {
      alert("Загаданное число больше");
      guess();
    } else {
      alert("Загаданное число меньше");
      guess();
    }
  }

  guess();
}

numberGenerator();
