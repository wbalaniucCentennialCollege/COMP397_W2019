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
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Methods
        // Button Event Handlers
        GameOverScene.prototype.quitButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        GameOverScene.prototype.Start = function () {
            this.background = new objects.Background();
            this.gameOverLabel = new objects.Label("Game Over", "40px", "Consolas", "#FFFFFF", 320, 240, true);
            this.quitButton = new objects.Button("QuitButton", 320, 340);
            this.Main();
        };
        GameOverScene.prototype.Update = function () {
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.quitButton);
            this.quitButton.on("click", this.quitButtonClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map