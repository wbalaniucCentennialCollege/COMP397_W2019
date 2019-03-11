module objects {
    export class Explosion extends objects.GameObject {
        // Variables
        private explosionSFX: createjs.AbstractSoundInstance;
        // Constructor
        constructor(x: number, y: number) {
            super("Explosion");

            this.x = x;
            this.y = y;

            this.scaleX *= 2;
            this.scaleY *= 2;

            this.explosionSFX = createjs.Sound.play("explode");
            this.explosionSFX.volume = 1;
        }
        // Methods
        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBounds():void {}
    }
}