(function(window) {
luz_instancia_1 = function() {
	this.initialize();
}
luz_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["luz.png"], frames: [[0,0,107,125,0,0,0],[107,0,107,125,0,0,0]]});
var luz_instancia_1_p = luz_instancia_1.prototype = new createjs.Sprite();
luz_instancia_1_p.Sprite_initialize = luz_instancia_1_p.initialize;
luz_instancia_1_p.initialize = function() {
	this.Sprite_initialize(luz_instancia_1._SpriteSheet);
	this.paused = false;
}
window.luz_instancia_1 = luz_instancia_1;
}(window));

