function change_input(file){
    if(file){
        let input_buttons = document.getElementById("buttons")
        console.log('chfakdka')
        let input_file = document.createElement('input')
        input_file.setAttribute('type', 'file')
        input_file.setAttribute('onchange', 'change_input(this.value)')
        input_file.setAttribute('accept', 'image/png, image/jpeg, image/jpg')
        input_file.setAttribute('class', 'file-choice')
        input_buttons.append(input_file)
    } else {
        let input_buttons = document.getElementById('buttons')
        input_buttons.removeChild(input_buttons.lastChild)
    }
}

let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.showAlert(`Добро пожаловать, @${tg.WebAppUser.username}.`);

tg.expand(); //расширяем на все окно  

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры 