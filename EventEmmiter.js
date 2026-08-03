//event module
//event class uses -on() as listener and emit () as event trial

// const EventEmmiter = require ('events');
// const event = new EventEmmiter();
//button:click and mouse over events 
class Button extends EventEmmiter{
    click(){
        console.log("/ncall button click event");
        this.emit("click");
    }
    mouseover(){
        console.log("");
        this.emit("mouseover");
    }

    console button = New Button();
    click(){
        
    }
}