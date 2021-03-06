var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.isExploding = false;
            _this.backgroundMusic = createjs.Sound.play("play_music");
            _this.backgroundMusic.loop = -1; // Looping forever
            _this.backgroundMusic.volume = 0.3;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            this.background = new objects.Background();
            this.player = new objects.Player();
            // this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array();
            this.enemyNum = 10;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            // Initializing the scoreboard objects
            this.scoreBoard = new managers.ScoreBoard();
            // Make scoreboard globally accessible
            managers.Game.scoreBoard = this.scoreBoard;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.background.Update();
            this.player.Update();
            // this.enemy.Update();
            // For-each loop
            this.enemies.forEach(function (enemy) {
                enemy.Update();
                _this.player.isDead = managers.Collision.Check(_this.player, enemy);
                if (_this.player.isDead && !_this.isExploding) {
                    _this.backgroundMusic.stop();
                    // Create explosion
                    _this.explosion = new objects.Explosion(_this.player.x, _this.player.y);
                    _this.explosion.on("animationend", _this.handleExplosion);
                    console.log("Creating explosion");
                    _this.addChild(_this.explosion);
                    _this.removeChild(_this.player);
                    _this.isExploding = true;
                    // managers.Game.currentScene = config.Scene.OVER;
                }
            });
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);
            this.enemies.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            this.addChild(this.scoreBoard.scoreLabel);
        };
        PlayScene.prototype.handleExplosion = function () {
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
            managers.Game.currentScene = config.Scene.OVER;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map