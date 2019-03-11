module objects {
    export abstract class Scene extends createjs.Container {
        // Variables
        public assetManager;

        // Constructors
        constructor() {
            super();

            this.assetManager = managers.Game.assetManager;
        }
        // Methods
        public Start():void {

        }

        // Going to be called from the game's update function. Think of this as the game loop
        public Update():void {
            
        }

        public Main(): void {

        }
    }
}