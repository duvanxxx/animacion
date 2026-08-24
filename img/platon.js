(function(window) {
mc_platon_instancia_1 = function() {
	this.initialize();
}
mc_platon_instancia_1._SpriteSheet = new createjs.SpriteSheet({images: ["platon.png"], frames: [[0,0,792,792,0,91.9,392.2],[792,0,792,792,0,91.9,392.2],[1584,0,792,792,0,91.9,392.2],[2376,0,792,792,0,91.9,392.2],[3168,0,792,792,0,91.9,392.2],[0,792,792,792,0,91.9,392.2],[792,792,792,792,0,91.9,392.2],[1584,792,792,792,0,91.9,392.2],[2376,792,792,792,0,91.9,392.2],[3168,792,792,792,0,91.9,392.2],[0,1584,792,792,0,91.9,392.2],[792,1584,792,792,0,91.9,392.2],[1584,1584,792,792,0,91.9,392.2],[2376,1584,792,792,0,91.9,392.2],[3168,1584,792,792,0,91.9,392.2],[0,2376,792,792,0,91.9,392.2],[792,2376,792,792,0,91.9,392.2],[1584,2376,792,792,0,91.9,392.2],[2376,2376,792,792,0,91.9,392.2],[3168,2376,792,792,0,91.9,392.2],[0,3168,792,792,0,91.9,392.2],[792,3168,792,792,0,91.9,392.2],[1584,3168,792,792,0,91.9,392.2],[0,0,792,792,0,91.9,392.2]]});
var mc_platon_instancia_1_p = mc_platon_instancia_1.prototype = new createjs.Sprite();
mc_platon_instancia_1_p.Sprite_initialize = mc_platon_instancia_1_p.initialize;
mc_platon_instancia_1_p.initialize = function() {
	this.Sprite_initialize(mc_platon_instancia_1._SpriteSheet);
	this.paused = false;
}
window.mc_platon_instancia_1 = mc_platon_instancia_1;
}(window));

