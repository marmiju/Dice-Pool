function play() {
    let number = generate_randome_number();
    let number2 = Math.round(Math.random() * 2)
    let display = document.getElementById('image');
    console.log(number)

    display.src = `./assets/dicee/${number + 1}.png`;
    let display2 = document.getElementById('image2');
    console.log(number2)
    number2 <= number ?
        display2.src = `./assets/dicee/${(number - number2) + 1}.png`
        :
        display2.src = `./assets/dicee/6.png`


}

function generate_randome_number() {
    number = Math.round(Math.random() * 5)
    return number
}
play()