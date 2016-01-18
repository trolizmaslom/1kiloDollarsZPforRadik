(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
// symbols:

(lib.crownG = function() {
	this.initialize(img.crownG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,428,341);


(lib.squareG = function() {
	this.initialize(img.squareG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,428,341);


(lib.СимGвол8 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.crownG();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,428,341);


(lib.СимGвол7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.squareG();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,428,341);


(lib.СимGвол5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,51,0)","#FFFF66","rgba(255,255,102,0)"],[0,0.482,1],-30.5,0,30.5,0).s().p("AkwRyMAAAgjjIJhAAMAAAAjjg");
	this.shape.setTransform(30.5,45.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-68.2,61,227.8);


(lib.СимGвол4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEF7","#FCFB8A"],[0,0.51],0,0,0,0,0,12.9).s().p("AAAA4IhGAzIAchSIhGgyIBXAAIAZhSIAaBTIBXAAIhGAxIAaBTg");
	this.shape.setTransform(11.4,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.7,21.6);


(lib.СимGвол3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEF7","#FCFB8A"],[0,0.51],0,0,0,0,0,12.9).s().p("AAAA4IhGAzIAchSIhGgyIBXAAIAZhSIAaBTIBXAAIhGAxIAaBTg");
	this.shape.setTransform(11.4,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.7,21.6);


(lib.СимGвол2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEF7","#FCFB8A"],[0,0.51],0,0,0,0,0,12.9).s().p("AAAA4IhGAzIAchSIhGgyIBXAAIAZhSIAaBTIBXAAIhGAxIAaBTg");
	this.shape.setTransform(11.4,10.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.7,21.6);


(lib.СимGвол6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.СимGвол5();
	this.instance.setTransform(30.5,159.5,1,1,-69.4,0,0,30.5,159.5);
	this.instance.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:45.6,rotation:-52.7,x:-60,y:90.5},0).wait(1).to({rotation:-38.4,x:-40.2,y:70.2},0).wait(1).to({rotation:-26.3,x:-19.9,y:57.4},0).wait(1).to({rotation:-16.2,x:-1.1,y:50.1},0).wait(1).to({rotation:-7.6,x:15.5,y:46.6},0).wait(1).to({rotation:-0.3,x:30,y:45.6},0).wait(1).to({rotation:6.1,x:42.7,y:46.3},0).wait(1).to({rotation:11.8,x:53.9,y:48.1},0).wait(1).to({rotation:17.1,x:64,y:50.7},0).wait(1).to({rotation:22.1,x:73.3,y:53.9},0).wait(1).to({rotation:26.8,x:81.9,y:57.8},0).wait(1).to({rotation:31.3,x:89.7,y:62.2},0).wait(1).to({rotation:35.5,x:96.6,y:66.7},0).wait(1).to({rotation:39.3,x:102.7,y:71.4},0).wait(1).to({rotation:42.9,x:108.1,y:76.2},0).wait(1).to({rotation:46.3,x:112.8,y:80.7},0).wait(1).to({rotation:49.3,x:116.9,y:85.3},0).wait(1).to({rotation:52.2,x:120.4,y:89.6},0).wait(1).to({rotation:54.7,x:123.5,y:93.7},0).wait(1).to({rotation:57.1,x:126.1,y:97.6},0).wait(1).to({rotation:59.3,x:128.4,y:101.3},0).wait(1).to({rotation:61.2,x:130.4,y:104.7},0).wait(1).to({rotation:63,x:132,y:107.8},0).wait(1).to({rotation:64.6,x:133.4,y:110.7},0).wait(1).to({rotation:66.1,x:134.6,y:113.4},0).wait(1).to({rotation:67.4,x:135.7,y:115.7},0).wait(1).to({rotation:68.6,x:136.6,y:117.9},0).wait(1).to({rotation:69.7,x:137.3,y:119.9},0).wait(1).to({regX:30.6,regY:159.5,rotation:70.6,x:30.5,y:159.5},0).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.4,51,234.7,137.1);


(lib.СимGвол1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// СимGвол 4
	this.instance = new lib.СимGвол4();
	this.instance.setTransform(73.1,60.3,1.273,1.273,0,0,0,11.3,10.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(1).to({y:48.8,alpha:0.243},0).wait(1).to({y:41.2,alpha:0.403},0).wait(1).to({y:35.9,alpha:0.513},0).wait(1).to({y:31.9,alpha:0.597},0).wait(1).to({y:28.5,alpha:0.67},0).wait(1).to({y:25.3,alpha:0.738},0).wait(1).to({y:22.4,alpha:0.797},0).wait(1).to({y:20.1,alpha:0.847},0).wait(1).to({y:18.1,alpha:0.888},0).wait(1).to({y:16.6,alpha:0.921},0).wait(1).to({y:15.3,alpha:0.947},0).wait(1).to({y:14.3,alpha:0.969},0).wait(1).to({y:13.5,alpha:0.986},0).wait(1).to({y:12.8,alpha:1},0).wait(1).to({y:13.9},0).wait(1).to({y:14.5},0).wait(1).to({y:14.9},0).wait(1).to({y:15.2},0).wait(1).to({y:15.3},0).wait(3).to({scaleX:1.54,scaleY:1.54,x:80.4,y:15.9},5,cjs.Ease.get(-1)).to({scaleX:1.27,scaleY:1.27,x:73.1,y:15.3},5,cjs.Ease.get(1)).wait(4).to({y:15.2},0).wait(1).to({y:14.9},0).wait(1).to({y:14.5},0).wait(1).to({y:13.9},0).wait(1).to({y:12.8},0).wait(1).to({y:13.4,alpha:0.988},0).wait(1).to({y:14.1,alpha:0.973},0).wait(1).to({y:15.1,alpha:0.952},0).wait(1).to({y:16.3,alpha:0.926},0).wait(1).to({y:17.9,alpha:0.892},0).wait(1).to({y:19.9,alpha:0.85},0).wait(1).to({y:22.4,alpha:0.798},0).wait(1).to({y:25.4,alpha:0.735},0).wait(1).to({y:28.8,alpha:0.664},0).wait(1).to({y:32.5,alpha:0.585},0).wait(1).to({y:37,alpha:0.49},0).wait(1).to({y:42.8,alpha:0.369},0).wait(1).to({y:50.4,alpha:0.208},0).wait(1).to({y:60.3,alpha:0},0).to({_off:true},1).wait(11));

	// СимGвол 3
	this.instance_1 = new lib.СимGвол3();
	this.instance_1.setTransform(38.5,55.3,1.273,1.273,0,0,0,11.3,10.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({y:43.8,alpha:0.243},0).wait(1).to({y:36.2,alpha:0.403},0).wait(1).to({y:30.9,alpha:0.513},0).wait(1).to({y:26.9,alpha:0.597},0).wait(1).to({y:23.5,alpha:0.67},0).wait(1).to({y:20.3,alpha:0.738},0).wait(1).to({y:17.4,alpha:0.797},0).wait(1).to({y:15.1,alpha:0.847},0).wait(1).to({y:13.2,alpha:0.888},0).wait(1).to({y:11.6,alpha:0.921},0).wait(1).to({y:10.3,alpha:0.947},0).wait(1).to({y:9.3,alpha:0.969},0).wait(1).to({y:8.5,alpha:0.986},0).wait(1).to({y:7.8,alpha:1},0).wait(1).to({y:9},0).wait(1).to({y:9.5},0).wait(1).to({y:9.9},0).wait(1).to({y:10.2},0).wait(1).to({y:10.3},0).wait(10).to({scaleX:1.54,scaleY:1.54,y:9.8},5,cjs.Ease.get(-1)).to({scaleX:1.27,scaleY:1.27,y:10.3},5,cjs.Ease.get(1)).wait(10).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.6},0).wait(1).to({y:8.9},0).wait(1).to({y:7.8},0).wait(1).to({y:8.4,alpha:0.988},0).wait(1).to({y:9.1,alpha:0.973},0).wait(1).to({y:10.1,alpha:0.952},0).wait(1).to({y:11.4,alpha:0.926},0).wait(1).to({y:13,alpha:0.892},0).wait(1).to({y:14.9,alpha:0.85},0).wait(1).to({y:17.4,alpha:0.798},0).wait(1).to({y:20.4,alpha:0.735},0).wait(1).to({y:23.8,alpha:0.664},0).wait(1).to({y:27.5,alpha:0.585},0).wait(1).to({y:32,alpha:0.49},0).wait(1).to({y:37.8,alpha:0.369},0).wait(1).to({y:45.4,alpha:0.208},0).wait(1).to({y:55.3,alpha:0},0).to({_off:true},1).wait(5));

	// СимGвол 2
	this.instance_2 = new lib.СимGвол2();
	this.instance_2.setTransform(4,60.3,1.273,1.273,0,0,0,11.3,10.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:48.8,alpha:0.243},0).wait(1).to({y:41.2,alpha:0.403},0).wait(1).to({y:35.9,alpha:0.513},0).wait(1).to({y:31.9,alpha:0.597},0).wait(1).to({y:28.5,alpha:0.67},0).wait(1).to({y:25.3,alpha:0.738},0).wait(1).to({y:22.4,alpha:0.797},0).wait(1).to({y:20.1,alpha:0.847},0).wait(1).to({y:18.1,alpha:0.888},0).wait(1).to({y:16.6,alpha:0.921},0).wait(1).to({y:15.3,alpha:0.947},0).wait(1).to({y:14.3,alpha:0.969},0).wait(1).to({y:13.5,alpha:0.986},0).wait(1).to({y:12.8,alpha:1},0).wait(1).to({y:13.9},0).wait(1).to({y:14.5},0).wait(1).to({y:14.9},0).wait(1).to({y:15.2},0).wait(1).to({y:15.3},0).wait(15).to({scaleX:1.54,scaleY:1.54,x:-3.4,y:15.9},5,cjs.Ease.get(-1)).to({scaleX:1.27,scaleY:1.27,x:4,y:15.3},5,cjs.Ease.get(1)).wait(15).to({y:15.2},0).wait(1).to({y:14.9},0).wait(1).to({y:14.5},0).wait(1).to({y:13.9},0).wait(1).to({y:12.8},0).wait(1).to({y:13.4,alpha:0.988},0).wait(1).to({y:14.1,alpha:0.973},0).wait(1).to({y:15.1,alpha:0.952},0).wait(1).to({y:16.3,alpha:0.926},0).wait(1).to({y:17.9,alpha:0.892},0).wait(1).to({y:19.9,alpha:0.85},0).wait(1).to({y:22.4,alpha:0.798},0).wait(1).to({y:25.4,alpha:0.735},0).wait(1).to({y:28.8,alpha:0.664},0).wait(1).to({y:32.5,alpha:0.585},0).wait(1).to({y:37,alpha:0.49},0).wait(1).to({y:42.8,alpha:0.369},0).wait(1).to({y:50.4,alpha:0.208},0).wait(1).to({y:60.3,alpha:0},0).wait(1));

	// Слой 2
	this.instance_3 = new lib.СимGвол7();
	this.instance_3.setTransform(39,9,1,1,0,0,0,214,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:0.4},0).wait(1).to({rotation:1,y:8.9},0).wait(1).to({rotation:1.8,x:38.9,y:8.8},0).wait(1).to({rotation:2.7,y:8.7},0).wait(1).to({rotation:3.8,x:38.8,y:8.6},0).wait(1).to({rotation:5.2,x:38.7,y:8.5},0).wait(1).to({rotation:6.8,x:38.6,y:8.4},0).wait(1).to({rotation:8.8,x:38.5,y:8.1},0).wait(1).to({rotation:11.1,x:38.3,y:7.9},0).wait(1).to({rotation:13.9,x:38.1,y:7.6},0).wait(1).to({rotation:17.2,x:37.8,y:7.3},0).wait(1).to({rotation:21,x:37.6,y:6.9},0).wait(1).to({rotation:25.5,x:37.3,y:6.5},0).wait(1).to({rotation:30.7,x:37,y:6},0).wait(1).to({rotation:36.7,x:36.5,y:5.4},0).wait(1).to({rotation:43.2,x:36.1,y:4.7},0).wait(1).to({rotation:50.6,x:35.6,y:4},0).wait(1).to({rotation:59.3,x:34.9,y:3.1},0).wait(1).to({rotation:70.1,x:34.2,y:2.1},0).wait(1).to({rotation:84.4,x:33.3,y:0.7},0).wait(1).to({rotation:104.1,x:31.9,y:-1.2},0).wait(1).to({rotation:132,x:30,y:-4},0).wait(1).to({rotation:143.7,x:31.5,y:-4.1},0).wait(1).to({rotation:155.4,x:32.8},0).wait(1).to({rotation:167.1,x:34.3,y:-4},0).wait(1).to({rotation:178.7,x:35.7},0).wait(1).to({rotation:190.4,x:37.3,y:-4.1},0).wait(1).to({rotation:202.1,x:38.7},0).wait(1).to({rotation:213.8,x:40.2,y:-4},0).wait(1).to({rotation:237.5,x:39.9,y:-1.9},0).wait(1).to({rotation:257.1,x:39.8,y:-0.2},0).wait(1).to({rotation:272.8,x:39.7,y:1.2},0).wait(1).to({rotation:285.2,x:39.6,y:2.3},0).wait(1).to({rotation:295.2,y:3.2},0).wait(1).to({rotation:303.6,x:39.5,y:3.9},0).wait(1).to({rotation:310.8,x:39.4,y:4.6},0).wait(1).to({rotation:317.3,y:5.1},0).wait(1).to({rotation:323.2,x:39.3,y:5.7},0).wait(1).to({rotation:328.4,y:6.2},0).wait(1).to({rotation:332.9,y:6.6},0).wait(1).to({rotation:336.9,x:39.2,y:6.9},0).wait(1).to({rotation:340.5,y:7.3},0).wait(1).to({rotation:343.6,y:7.5},0).wait(1).to({rotation:346.3,y:7.8},0).wait(1).to({rotation:348.8,x:39.1,y:8},0).wait(1).to({rotation:350.9,x:39.2,y:8.1},0).wait(1).to({rotation:352.9,x:39.1,y:8.4},0).wait(1).to({rotation:354.6,y:8.5},0).wait(1).to({rotation:356.1,x:39,y:8.6},0).wait(1).to({rotation:357.5,x:39.1,y:8.8},0).wait(1).to({rotation:358.8,y:8.9},0).wait(1).to({rotation:360,x:39,y:9},0).wait(5).to({scaleX:1,scaleY:1,x:39.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:39},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:39.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:39},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:39.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:39},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:39.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:39},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:39.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:39},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:39.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:39},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-161.5,428,341);


// stage content:



(lib.guaranteed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aw2FnIiFm5QTjpASUI8Ih9HKQxRoHwkH6g");
	mask.setTransform(213.4,237.5);

	// Слой 5
	this.instance = new lib.СимGвол6();
	this.instance.setTransform(213,297.3,1,1,0,0,0,30.5,79.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.СимGвол8();
	this.instance_1.setTransform(214,169.5,1,1,0,0,0,214,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.СимGвол1();
	this.instance_2.setTransform(214,171.5,1,1,0,0,0,38.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(214,169.5,428.5,341.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;