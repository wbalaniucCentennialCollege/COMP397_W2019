/// <reference path="_references.ts"/>
// IIFE - Immediate Invoked Fucntion Expression
/*
    Closure
    Calls an anonympous self-executing function
    Anything in braces is in a closure. Won't go to global namespace.
*/
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest; // Basically a "struct". Placeholder for now.\
    var currentScene;
    var currentState;
    var keyboardManager;
    var textureAtlasData;
    var textureAtlas;
    textureAtlasData = {
        "images": [
            "./Assets/Sprites/textureAtlas.png"
        ],
        "frames": [
            [0, 0, 19, 19, 0, 0, 0],
            [21, 0, 34, 31, 0, 0, 0],
            [57, 0, 35, 32, 0, 0, 0],
            [94, 0, 35, 32, 0, 0, 0],
            [131, 0, 38, 32, 0, 0, 0],
            [171, 0, 38, 32, 0, 0, 0],
            [211, 0, 39, 31, 0, 0, 0],
            [0, 34, 41, 61, 0, 0, 0],
            [43, 34, 75, 60, 0, 0, 0],
            [0, 97, 190, 49, 0, 0, 0],
            [0, 148, 190, 49, 0, 0, 0],
            [0, 199, 190, 49, 0, 0, 0]
        ],
        "animations": {
            "Explosion": {
                "frames": [0, 3, 1, 2, 4, 5],
                "speed": 0.15
            },
            "BackButton": { "frames": [6] },
            "Spaceship": { "frames": [7] },
            "Enemy": { "frames": [8] },
            "PlayButton": { "frames": [9] },
            "QuitButton": { "frames": [10] },
            "StartButton": { "frames": [11] }
        },
    };
    assetManifest = [
        { id: "background", src: "./Assets/Images/SeamlessBG.png" },
        { id: "explode", src: "./Assets/Audio/explode.wav" },
        { id: "play_music", src: "./Assets/Audio/play_music.ogg" }
    ];
    function Init() {
        console.log("Initialization start");
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        assetManager = new createjs.LoadQueue(); // Creates the container used for the queue.
        assetManager.installPlugin(createjs.Sound); // Necessary to use sounds in our game. 
        assetManager.loadManifest(assetManifest); // Loads the manifest defined above
        assetManager.on("complete", Start, this); // Calls the start function when the assetManager is loaded
        // Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // Frequency of checks. Computationally expensive function. Checks every frame for every image. In menu, turn on. In game, turn off.
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyboardManager;
        // Setup global reference to asset manager
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;
        Main();
    }
    function Update() {
        //console.log(managers.Game.currentScene);
        if (currentState != managers.Game.currentScene) {
            console.log(managers.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map