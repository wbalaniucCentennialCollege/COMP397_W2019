module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean;
        // Constructor
        constructor() {
            super("Spaceship");
            this.Start();
        }
        // Methods / functions
        public Start():void {
            this.isDead = false;
            this.x = 300;
            this.y = 700;
        }

        public Update():void {
            this.Move();
            this.CheckBounds();
        }

        public Reset():void {}

        public Move():void {
            // this.x = objects.Game.stage.mouseX; // objects.Game.stage is a global variable
            // Keyboard controls

            if(managers.Game.keyboardManager.moveLeft) {
                this.x -= 5;
            }
            if(managers.Game.keyboardManager.moveRight) {
                this.x += 5;
            }
            if(managers.Game.keyboardManager.moveUp) {
                this.y -= 5;
            }
            if(managers.Game.keyboardManager.moveDown) {
                this.y += 5;
            }
        }

        public CheckBounds():void {
            // Check right boundary
            if(this.x >= 600 - this.halfW) {
                this.x = 600 - this.halfW;
            }

            // Check left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }

            if(this.y >=  800 - this.halfH) {
                this.y = 800 - this.halfH;
            }

            if(this.y <= 600 - this.halfH) {
                this.y = 600 - this.halfH;
            }
        }
    }
}