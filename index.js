
const StrArray = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const StrArrayReverse = StrArray.split("").reverse().join('');

function shifr() {

    let text = (document.getElementById('textShifr').value).toLowerCase();
    let number = Number(document.getElementById('numberShifr').value);

    let newText = '';
    let index = 0;

    if (isNaN(number)) {

        document.getElementById('shifr').innerHTML = 'Вы ввели неверный шаг сдвига';

    }
    else {

        if (number >= 0) {

            for (let i = 0; i < text.length; ++i) {

                let a = text[i];

                for (let k = 0; k < StrArray.length; ++k) {

                    if (a == StrArray[k]) index = (k + number) % 33;

                }

                newText += StrArray[index];

            }

        }
        else {

            for (let i = 0; i < text.length; ++i) {

                let a = text[i];

                for (let k = 0; k < StrArrayReverse.length; ++k) {

                    if (a == StrArrayReverse[k]) index = (k + Math.abs(number)) % 33;

                }

                newText += StrArrayReverse[index];

            }

        }

        document.getElementById('shifr').innerHTML = newText;

    }

}

function deshifr() {

    let text = (document.getElementById('textDeshifr').value).toLowerCase();
    let number = Number(document.getElementById('numberShifr').value);

    let newText = '';
    let index = 0;

    if (isNaN(number)) {

        document.getElementById('deshifr').innerHTML = 'Вы ввели неверный шаг сдвига';

    }
    else {

        if (number <= 0) {

            for (let i = 0; i < text.length; ++i) {

                let a = text[i];

                for (let k = 0; k < StrArray.length; ++k) {

                    if (a == StrArray[k]) index = (k - number) % 33;

                }

                newText += StrArray[index];

            }

        }
        else {

            for (let i = 0; i < text.length; ++i) {

                let a = text[i];

                for (let k = 0; k < StrArrayReverse.length; ++k) {

                    if (a == StrArrayReverse[k]) index = (k + Math.abs(number)) % 33;

                }

                newText += StrArrayReverse[index];

            }

        }

        document.getElementById('deshifr').innerHTML = newText;

    }

}