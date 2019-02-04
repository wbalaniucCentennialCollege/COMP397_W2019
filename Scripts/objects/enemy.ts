module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "enemy");
            this.Start();
        }
        // Method / Functions
        public Start():void {
            this.x = 100;
            this.y = -50;
        }
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
        public Reset():void {}
        public Move():void {
            this.y += 2;
        }
        public CheckBounds():void {
            // Check y bounds
            if(this.y >= 800 + this.height) {
                this.y = -50;
            }
        }
    }
}