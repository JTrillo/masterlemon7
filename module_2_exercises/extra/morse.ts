const createMorseTransmitter = () => ({
    morseAlphabet: {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
    },
    timeout(points:number, isOn:Boolean):Promise<number>{
        this.writer(isOn);
        return new Promise(resolve => setTimeout(resolve, points*1000));
    },
    writer(isOn:Boolean):void{
        let print = isOn ? 'Encendido' : 'Apagado';
        console.log(print);
    },
    async sendMessage(message:String){
        let characters = message.split("");
        for(let i=0; i<characters.length; i++){
            if(characters[i] === ' '){
                await this.timeout(7, false);
            }else{
                let morseCharArray = this.morseAlphabet[characters[i].toLowerCase()].split("");
                console.log(`La letra ${characters[i]} en morse`, morseCharArray);
                for(let j=0; j<morseCharArray.length; j++){
                    if(morseCharArray[j] === "."){
                        await this.timeout(1, true);
                    }else{
                        await this.timeout(3, true);
                    }
                    if(j === morseCharArray.length - 1){
                        await this.timeout(3, false);
                    }else{
                        await this.timeout(1, false);
                    }
                }
            }
        }
        console.log(this.message);
    },
    callbackEndMessage(message:String):void{
        this.message = message;
    }
});

let morseTransmitter = createMorseTransmitter();
morseTransmitter.callbackEndMessage("FIN DEL MENSAJE");
morseTransmitter.sendMessage("CHAOS");