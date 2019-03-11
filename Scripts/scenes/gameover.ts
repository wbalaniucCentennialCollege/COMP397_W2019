module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameOverLabel: objects.Label;
        private quitButton: objects.Button;

        // Constructor
        constructor() {
            super();

            this.Start();
        }
        // Methods
        // Button Event Handlers
        private quitButtonClick():void {
            managers.Game.currentScene = config.Scene.START;
        }


        public Start():void {
            this.background = new objects.Background();
            this.gameOverLabel = new objects.Label("Game Over", "40px", "Consolas", "#FFFFFF", 320, 240, true);
            this.quitButton = new objects.Button("QuitButton", 320, 340);
            this.Main();
        }

        public Update(): void {
            
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.quitButton);
            this.quitButton.on("click", this.quitButtonClick);
        }
    }
}