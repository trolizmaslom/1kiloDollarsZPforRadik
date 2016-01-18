(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
// symbols:



(lib.buttonT = function() {
	this.initialize(img.buttonT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,41);


(lib.plateT = function() {
	this.initialize(img.plateT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,325);


(lib.Симсвол10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.buttonT();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,41);


(lib.Симсвол8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AgVB9IASoLIAIAAIAQIEIABAAIgBAtIAAAAIAAAAIgRDrIgJABg");
	this.shape.setTransform(2.2,39.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.5,79.9);


(lib.Симсвол2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDB0").s().p("AgFGzIgDjLQgIgDgDgIQgEgJADgIQADgKAJgEIALpxIAEABIgBJvIABABQAKADAEAJQAEAIgEAJQgDAJgJAEIgEABIgGDLg");
	this.shape.setTransform(2.3,43.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,87.3);


(lib.Симсвол12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Симсвол8();
	this.instance.setTransform(0,13.9,1,1,0,0,0,2.2,53.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},1200).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-39.9,4.5,79.9);


(lib.Симсвол11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Симсвол2();
	this.instance.setTransform(0,21.5,1,1,0,0,0,2.3,65.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-43.6,4.6,87.3);


(lib.Симсвол3 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Симсвол10();
	this.instance.setTransform(86.4,-25.5,1,1,0,0,0,22.5,20.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(63.9,-46,45,41);


// stage content:
(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.instance = new lib.Симсвол12();
	this.instance.setTransform(159.4,169.2);

	this.instance_1 = new lib.Симсвол11();
	this.instance_1.setTransform(159.6,161.6);

	this.instance_2 = new lib.Симсвол3();
	this.instance_2.setTransform(159.9,161.3,1,1,0,0,0,2.3,43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.plateT();
	this.instance_3.setTransform(9,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168,183,300,325);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;