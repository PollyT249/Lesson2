// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// let num = -3;
// if (num > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
// let message = true;
// if (message === true) {
//   console.log("true");
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
// function processNumber(value) {
//   let result;

//   switch (true) {
//     case (value > 10):
//       result = value - 5;
//       break;
//     case (value < 10):
//       result = value + 5;
//       break;
//     default:
//       result = value; // якщо значення точно 10, нічого не робимо
//   }

//   console.log(`Input: ${value}, Result: ${result}`);
// }

// // Перевіримо на варіантах 1, 10, 13
// processNumber(1);   // Output: 6
// processNumber(10);  // Output: 10
// processNumber(13);  // Output: 8

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const input = prompt("Введіть число від 1 до 12:");
// const monthNumber = Number(input);
// let monthName;

// switch (monthNumber) {
//   case 1:
//     monthName = "Січень";
//     break;
//   case 2:
//     monthName = "Лютий";
//     break;
//   case 3:
//     monthName = "Березень";
//     break;
//   case 4:
//     monthName = "Квітень";
//     break;
//   case 5:
//     monthName = "Травень";
//     break;
//   case 6:
//     monthName = "Червень";
//     break;
//   case 7:
//     monthName = "Липень";
//     break;
//   case 8:
//     monthName = "Серпень";
//     break;
//   case 9:
//     monthName = "Вересень";
//     break;
//   case 10:
//     monthName = "Жовтень";
//     break;
//   case 11:
//     monthName = "Листопад";
//     break;
//   case 12:
//     monthName = "Грудень";
//     break;
//   default:
//     monthName = "Невірне число. Введіть від 1 до 12.";
// }

// alert(monthName);

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
