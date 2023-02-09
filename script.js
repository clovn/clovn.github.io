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