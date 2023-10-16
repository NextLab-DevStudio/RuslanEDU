// Получаем элементы из index.html
const qrcode = document.getElementById("qrcode")  //Контейнер для QR-кода
const inptxt = document.getElementById("inptxt") //Текстовое поле
const genbutton = document.getElementById("genbutton") //Кнопка "Сгенерировать"
const downloadbutton = document.getElementById("download") //Кнопка "Скачать"

let currentValueInput //Создаем переменную для сохранения туда введенных пользователям данныч


genbutton.addEventListener("click", () => {  //Вешаем слушатель на нажатие кнопки "Сгенерировать"
    qrcode.innerHTML = "" //Очищаем контейнер QR-кода от предыдущего QR-кода (требуется при повторной генерации)

    currentValueInput = inptxt.value.trim() //Получаем данные из текстового поля, обрезая пробелы

    let qrcodeimg = QRCreator(currentValueInput); //Генерируем QR-код
    
    qrcode.append(qrcodeimg.result) //Добавляем сгенерированый QR-код в контейнер для QR-кода

    if (inptxt.value) { //Если при нажатия на кнопку "Сгенерировать" текстовое поле не пустое, то добавляем в контейнер кнопку "Скачать"
        downloadbutton.style.display = "block" //Проявляем кнопку "Скачать"
    }
    else { //Иначе, убираем кнопку "Скачать" из контейнера
        downloadbutton.style.display = "none" //Скрываем кнопку "Скачать"
    }
    downloadbutton.addEventListener("click", () => { //Вешаем слушатель на нажатие кнопки "Скачать"
        let today = `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}` //Создаем переменную с сегодняшней датой-месяцем-годом
        qrcodeimg.download(`QR-code-${today}`) //Загружаем созданный QR-код
    })

    inptxt.value = "" //Очищаем текстовое поле
    
})