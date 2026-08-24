(function(window) {
mc_chasis_instancia_1 = function() {
	this.initialize();
}
mc_chasis_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["chasis.png"], frames: [[0,0,1280,500,0,0,0]]});
var mc_chasis_instancia_1_p = mc_chasis_instancia_1.prototype = new createjs.Sprite();
mc_chasis_instancia_1_p.Sprite_initialize = mc_chasis_instancia_1_p.initialize;
mc_chasis_instancia_1_p.initialize = function() {
	this.Sprite_initialize(mc_chasis_instancia_1._SpriteSheet);
	this.paused = false;
}
window.mc_chasis_instancia_1 = mc_chasis_instancia_1;
}(window));

