class form{
constructor(){
this.input = createInput("Name");
this.button = createButton('play');
this.greeting = createElement('h2');
this.title = createElement('h2');
this.greeting = createElement('h3')
}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
}
display(){


    this.title = createElement("h1");
    this.title.html("jet battle");
    this.title.position(600,600);
    this.input("Name");
    this.button("play");
    this.input.position(500,540);
    this.button.position(450,500);

    button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
        var name = input.value();
        playerCount++;
        player.update(name);
        player.updateCount(playerCount);
        this.greeting.html("hello"+player.name);
        this.greeting.position(700,700);
    })
}
}
