// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
let b = ""
for (let i = 1; i <= 5; i++)
    console.log(b += ':)')

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)

x = ""
function smile(stroka, numberOfRows) {
    for (let i = 1; i <= numberOfRows; i++) {
        console.log(x += stroka)
    }
}
smile(";)", 4)