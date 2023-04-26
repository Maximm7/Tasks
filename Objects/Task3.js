const ladder = {
    step: 0,
    showStep: function (){
        console.log(`Вы находитесь на ступенке ${this.step}`)
    },
    up: function (){
        this.step++
    },
    down: function (){
        if (this.step === 0){
            return
        }
        this.step--
    }
}

ladder.showStep()
ladder.up()
ladder.up()
ladder.up()
ladder.showStep()
ladder.up()
ladder.up()
ladder.showStep()
ladder.down()
ladder.down()
ladder.down()
ladder.down()
ladder.down()
ladder.down()
ladder.down()
ladder.showStep()
