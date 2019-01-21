module objects {            // module = namespace
    export class Label extends createjs.Text {    // Export = public
        // Variables
        // Constructor
        constructor(
            labelString:string, 
            fontSize:string, 
            fontFamily:string, 
            fontColour:string,
            x:number = 0,
            y:number = 0,
            isCentered: boolean = false) {

            super(labelString, fontSize + " " + fontFamily, fontColour); // Creates a default Text objects

            if(isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }

            this.x = x;
            this.y = y;
        }
        // Methods / Functions
    }
}