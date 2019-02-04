module objects {
    export class Background extends createjs.Bitmap {
        // Variables
        private speedY : number;

        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("background"));

            this.Start();
        }
        // Methods / Function
        public Start():void {
            this.speedY = 5;
            this.Reset();
        }

        public Update():void {
            // Move our background
            this.Move();
            // Check bounds
            this.CheckBounds();
        }

        private Reset():void {
            this.y = -1440;
        }

        private Move():void {
            this.y += this.speedY;
        }

        private CheckBounds():void {
            if(this.y >= 0) {
                this.Reset();
            }
        }
    }
}