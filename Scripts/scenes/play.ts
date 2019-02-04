module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        public Start(): void {
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);

            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update();
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
        }
    }
}