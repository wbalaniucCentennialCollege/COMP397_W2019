module objects {
    export class Button extends objects.GameObject {
        // Variables
        // Constructor
        constructor(imageString:string, x:number = 0, y:number = 0) {
            // super(imageString);
            super(imageString);   // Actual loaded object is of type BLOB

            this.x = x;
            this.y = y;

            // Setup event handlers
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
            // this.on("mouseclick", this.mouseClick);
        }
        // Methods
        private mouseOver():void {
            this.alpha = 0.7;
        }

        private mouseOut():void {
            this.alpha = 1.0;
        }
    }
}