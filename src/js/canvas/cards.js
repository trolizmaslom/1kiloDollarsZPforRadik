(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
// symbols:



(lib.card2C = function() {
	this.initialize(img.card2C);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,296);


(lib.lightsC = function() {
	this.initialize(img.lightsC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,406,284);


(lib.СимCвол5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.card2C();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,269,296);


(lib.СимCвол3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.lightsC();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,406,284);


(lib.СимCвол1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.СимCвол5();
	this.instance.setTransform(202.1,129.8,1,1,24.7,0,0,134.4,148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:134.5,rotation:19,x:183.9,y:132.9},0).wait(1).to({rotation:14.7,x:170.3,y:135.2},0).wait(1).to({rotation:11.6,x:160.3,y:136.9},0).wait(1).to({rotation:9.3,x:153,y:138.1},0).wait(1).to({rotation:7.5,x:147.3,y:139.1},0).wait(1).to({rotation:6.1,x:142.9,y:139.8},0).wait(1).to({rotation:4.9,x:139.2,y:140.4},0).wait(1).to({rotation:4,x:136.2,y:140.9},0).wait(1).to({rotation:3.2,x:133.9,y:141.3},0).wait(1).to({rotation:2.6,x:131.9,y:141.7},0).wait(1).to({rotation:2.2,x:130.4,y:141.9},0).wait(1).to({rotation:1.8,x:129.2,y:142.1},0).wait(1).to({rotation:1.5,x:128.2,y:142.2},0).wait(1).to({rotation:1.2,x:127.5,y:142.4},0).wait(1).to({rotation:1.1,x:126.9},0).wait(1).to({rotation:0.9,x:126.4,y:142.6},0).wait(1).to({rotation:0.8,x:126,y:142.7},0).wait(1).to({rotation:0.7,x:125.6},0).wait(1).to({rotation:0.5,x:125.3,y:142.8},0).wait(1).to({rotation:0.4,x:125},0).wait(1).to({rotation:0.3,x:124.6,y:142.9},0).wait(1).to({rotation:0.2,x:124.3},0).wait(1).to({rotation:0.1,x:123.9,y:143},0).wait(1).to({rotation:0,x:123.5},0).wait(88).to({rotation:0.3,x:124.5,y:142.9},0).wait(1).to({rotation:0.7,x:125.7,y:142.7},0).wait(1).to({rotation:1.1,x:127.1,y:142.4},0).wait(1).to({rotation:1.7,x:128.9,y:142.2},0).wait(1).to({rotation:2.4,x:131.2,y:141.7},0).wait(1).to({rotation:3.4,x:134.2,y:141.2},0).wait(1).to({rotation:4.7,x:138.4,y:140.6},0).wait(1).to({rotation:6.7,x:144.8,y:139.5},0).wait(1).to({rotation:10.1,x:155.6,y:137.6},0).wait(1).to({rotation:15.9,x:173.9,y:134.5},0).wait(1).to({regX:134.4,rotation:24.7,x:202.1,y:129.8},0).to({scaleX:1.21,scaleY:1.21},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},11,cjs.Ease.get(1)).wait(11));

	// Слой 2 - копия: 2
	this.instance_1 = new lib.СимCвол5();
	this.instance_1.setTransform(202.4,129.5,1,1,24.5,0,0,134.4,148);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:134.5,y:129.6,alpha:0.232},0).wait(1).to({alpha:0.405},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.697},0).wait(1).to({alpha:0.754},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.838},0).wait(1).to({alpha:0.869},0).wait(1).to({alpha:0.893},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.928},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.995},0).wait(1).to({regX:134.4,y:129.5,alpha:1},0).wait(88).to({regX:134.5,y:129.6,alpha:0.988},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.902},0).wait(1).to({alpha:0.863},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.729},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.358},0).wait(1).to({regX:134.4,y:129.5,alpha:0},0).to({_off:true},1).wait(32));

	// Слой 2 - копия
	this.instance_2 = new lib.СимCвол5();
	this.instance_2.setTransform(200.9,129.5,1,1,25.8,0,0,134.5,148);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:29.9,x:219.9,y:133.9,alpha:0.232},0).wait(1).to({rotation:33.1,x:234.1,y:137.1,alpha:0.405},0).wait(1).to({rotation:35.3,x:244.5,y:139.4,alpha:0.531},0).wait(1).to({rotation:37,x:252.1,y:141.1,alpha:0.625},0).wait(1).to({rotation:38.3,x:258.1,y:142.5,alpha:0.697},0).wait(1).to({rotation:39.3,x:262.7,y:143.5,alpha:0.754},0).wait(1).to({rotation:40.1,x:266.5,y:144.4,alpha:0.8},0).wait(1).to({rotation:40.8,x:269.6,y:145.1,alpha:0.838},0).wait(1).to({rotation:41.4,x:272.1,y:145.6,alpha:0.869},0).wait(1).to({rotation:41.8,x:274.1,y:146.1,alpha:0.893},0).wait(1).to({rotation:42.2,x:275.7,y:146.5,alpha:0.913},0).wait(1).to({rotation:42.4,x:277,y:146.7,alpha:0.928},0).wait(1).to({rotation:42.7,x:278,y:147,alpha:0.94},0).wait(1).to({rotation:42.8,x:278.8,y:147.2,alpha:0.95},0).wait(1).to({rotation:43,x:279.4,y:147.3,alpha:0.957},0).wait(1).to({rotation:43.1,x:279.9,y:147.4,alpha:0.964},0).wait(1).to({rotation:43.2,x:280.4,y:147.5,alpha:0.969},0).wait(1).to({rotation:43.3,x:280.7,y:147.6,alpha:0.974},0).wait(1).to({x:281.1,y:147.7,alpha:0.978},0).wait(1).to({rotation:43.4,x:281.4,alpha:0.982},0).wait(1).to({rotation:43.5,x:281.8,y:147.8,alpha:0.986},0).wait(1).to({rotation:43.6,x:282.1,y:147.9,alpha:0.991},0).wait(1).to({x:282.4,y:148,alpha:0.995},0).wait(1).to({rotation:43.7,x:282.9,y:148.1,alpha:1},0).wait(88).to({rotation:43.5,x:281.9,y:147.9,alpha:0.988},0).wait(1).to({rotation:43.2,x:280.6,y:147.6,alpha:0.973},0).wait(1).to({rotation:42.9,x:279.1,y:147.2,alpha:0.954},0).wait(1).to({rotation:42.5,x:277.2,y:146.8,alpha:0.931},0).wait(1).to({rotation:42,x:274.9,y:146.3,alpha:0.902},0).wait(1).to({rotation:41.3,x:271.6,y:145.5,alpha:0.863},0).wait(1).to({rotation:40.3,x:267.3,y:144.5,alpha:0.81},0).wait(1).to({rotation:38.9,x:260.6,y:143,alpha:0.729},0).wait(1).to({rotation:36.4,x:249.3,y:140.5,alpha:0.591},0).wait(1).to({rotation:32.2,x:230.2,y:136.2,alpha:0.358},0).wait(1).to({rotation:25.8,x:200.9,y:129.5,alpha:0},0).to({_off:true},1).wait(32));

	// $ копия 3 copy
	this.instance_3 = new lib.СимCвол3();
	this.instance_3.setTransform(203,142,1,1,0,0,0,203,142);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({_off:false},0).to({alpha:1},3).wait(1).to({alpha:0},0).wait(1).to({alpha:1},3).wait(1).to({alpha:0},0).to({alpha:1},10).wait(26).to({alpha:0},0).to({alpha:1},3).wait(1).to({alpha:0},0).wait(1).to({alpha:1},3).wait(1).to({alpha:0},0).to({alpha:1},19).to({alpha:0},7).to({_off:true},1).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.4,-62.2,371,383.5);


// stage content:



(lib.cards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// $
	this.instance = new lib.СимCвол1();
	this.instance.setTransform(181,119,1,1,0,0,0,203,142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(174.4,33.8,371,383.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;