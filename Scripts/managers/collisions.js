var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (obj1, obj2) {
            // Create 2 temporary Vec2 objects used for collision detections
            var p1 = new math.Vec2(obj1.x, obj1.y);
            var p2 = new math.Vec2(obj2.x, obj2.y);
            if (math.Vec2.Distance(p1, p2) < (obj1.halfH + obj2.halfH)) {
                if (!obj2.isColliding) {
                    // console.log("Colliding with " + obj2.name);
                    switch (obj2.name) {
                        case "enemy":
                            this.explodeSFX = createjs.Sound.play("explode");
                            this.explodeSFX.volume = 0.1;
                            objects.Game.scoreBoard.Score += 50;
                            break;
                    }
                    obj2.isColliding = true;
                }
                return true;
            }
            else {
                obj2.isColliding = false;
                return false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collisions.js.map