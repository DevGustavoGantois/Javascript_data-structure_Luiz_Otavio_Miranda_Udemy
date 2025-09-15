//Quais quer um desses métodos pode receber valores adicionais.
class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
        //Método de instância => é referênte a instância em si e é referente aos dados da instância.
        VolumeUp() {
            this.volume += 2;
        }

        VolumeDown() {
            this.volume -= 2;
        }

        //Método estático =>
        static ChangeBattery() {
            console.log("Ok, vou trocar.")
        }

        static sum(x, y) {
            //console.log(this);
            return x + y; //O this aqui vai ser referente a classe.
        }
}

//Instânciar é quando a gente usa a palavra new e instância esse objeto:

const control1 = new RemoteControl("LG"); //Quando não uso a palavra new o contrutor não é chamado e não tenho coisas referentes a instância que é criada.
control1.VolumeUp();
control1.VolumeUp();
control1.VolumeUp();
control1.ChangeBattery();
console.log(control1);

RemoteControl.ChangeBattery()
console.log(RemoteControl.sum(2, 4));

//O método estático basicamente é uma função que está dentro de uma classe por questão de organizaão, mas poderiamos criar uma função separada e usar em uma classe também...
RemoteControl.sum();

//Os métodos estáticos não tem acesso aos dados da instância.