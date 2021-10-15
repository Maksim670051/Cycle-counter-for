
// Алфавит от А до Я и наоборот
const StrArray = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const StrArrayReverse = StrArray.split("").reverse().join('');

// Шифрование
function shifr() {

    // Получение текста для шифровния и шаг сдвига
    let text = (document.getElementById('textShifr').value).toLowerCase();
    let number = Number(document.getElementById('numberShifr').value);

    let newText = '';
    let index = 0;

    // Исключение некорректного ввода
    if (isNaN(number)) document.getElementById('shifr').innerHTML = '<p class="error">Вы ввели неверный шаг сдвига</p>';
    else {

        for (let i = 0; i < text.length; ++i) {

            let a = text[i];
            // Шифрование для положительного и отрацательного шага
            if (number >= 0){

                for (let k = 0; k < StrArray.length; ++k) if (a == StrArray[k]) index = (k + number) % 33;
                newText += StrArray[index];

            }
            else{

                for (let k = 0; k < StrArrayReverse.length; ++k) if (a == StrArrayReverse[k]) index = (k + Math.abs(number)) % 33;
                newText += StrArrayReverse[index];

            }

        }

        // Выводи результата на экран
        document.getElementById('shifr').innerHTML = newText;

    }

}

// Дешифрование
function deshifr() {

    // Получение текста для шифровния и шаг сдвига
    let text = (document.getElementById('textDeshifr').value).toLowerCase();
    let number = Number(document.getElementById('numberShifr').value);

    let newText = '';
    let index = 0;

    // Исключение некорректного ввода
    if (isNaN(number)) document.getElementById('deshifr').innerHTML = '<p class="error">Вы ввели неверный шаг сдвига</p>';
    else {

        for (let i = 0; i < text.length; ++i) {

            let a = text[i];
            // Дешифрование для положительного и отрацатльного шага
            if(number <= 0){

                for (let k = 0; k < StrArray.length; ++k) if (a == StrArray[k]) index = (k + Math.abs(number)) % 33;
                newText += StrArray[index];

            }
            else{

                for (let k = 0; k < StrArrayReverse.length; ++k) if (a == StrArrayReverse[k]) index = (k + Math.abs(number)) % 33;
                newText += StrArrayReverse[index];
                
            }

        }

        // Выводи результата на экран
        document.getElementById('deshifr').innerHTML = newText;

    }

}
