// IIFE - Immediate Invoked Fucntion Expression
/*
    Closure
    Calls an anonympous self-executing function
    Anything in braces is in a closure. Won't go to global namespace.
*/
(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel: objects.Label;
    let clickableButton:objects.Button;

    function Init():void {
        console.log("Initialization start");

        Start();
    }

    function Start():void {
        console.log("Starting Application...");

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);      // Frequency of checks. Computationally expenseiv function. Checks every frame for a button push
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update():void {
        stage.update();
    }

    /* 
        BUTTON EVENT LISTENER FUNCTIONS
    */
    function clickableButtonMouseClick():void {
        helloLabel.text = "Clicked!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }

    function Main():void {
        console.log("Game Start...");

        helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        
        clickableButton = new objects.Button("./Assets/Sprites/clickablebutton.png", 320, 340);
        clickableButton.regX = clickableButton.getBounds().width * 0.5;
        clickableButton.regY = clickableButton.getBounds().height * 0.5;
        clickableButton.on("click", clickableButtonMouseClick);
        stage.addChild(clickableButton);

        /*
        clickableButton = new createjs.Bitmap("./Assets/Sprites/clickablebutton.png");
        clickableButton.regX = clickableButton.getBounds().width * 0.5;
        clickableButton.regY = clickableButton.getBounds().height * 0.5;
        clickableButton.x = 320;
        clickableButton.y = 340;
        stage.addChild(clickableButton);

        clickableButton.on("mouseover", clickableButtonMouseOver);
        clickableButton.on("mouseout", clickableButtonMouseOut);
        
        */
    }


    window.onload = Init;
})();