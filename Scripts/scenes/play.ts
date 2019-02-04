module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;
        // private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }
        // Methods
        public Start(): void {
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            // this.enemy = new objects.Enemy(this.assetManager);

            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 10;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }

            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update();
            // this.enemy.Update();
            // For-each loop
            this.enemies.forEach(enemy => {
                enemy.Update();
            });
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);

            this.enemies.forEach(enemy => {
                this.addChild(enemy);
            });
        }
    }
}