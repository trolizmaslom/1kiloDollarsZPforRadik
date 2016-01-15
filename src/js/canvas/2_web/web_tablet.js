(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 217,
	height: 230,
	fps: 35,
	color: "#BB0000",
	manifest: [
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.png", id:"img4"}
	]
};



// symbols:



(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,152);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,65);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,29);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,92);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0505").s().p("AIgTKMAAAgmKIxHAAIAAgIIRHAAIAAgBIAIAAMAAAAmTg");
	this.shape.setTransform(55.3,122.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110.5,245.3);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0505").s().p("Aj1BCIAAgNIFVAAIAAANgAj1AGIAAgLIHrAAIAAALgAj1g0IAAgNIHrAAIAAANg");
	this.shape.setTransform(24.6,6.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,13.3);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0505").s().p("AhTALIAAgVICnAAIAAAVg");
	this.shape.setTransform(8.5,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.9,2.3);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0505").s().p("AhTALIAAgVICnAAIAAAVg");
	this.shape.setTransform(8.5,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.9,2.3);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,244,92);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0505").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2.1,2.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.1,4.1);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0505").s().p("Ak9BZIABgBIAAgBIA8ivIH8ABIBCCoIAAAIgAkyBRIJlAAIg8igInyAAg");
	this.shape.setTransform(31.8,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.6,17.8);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,29);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,152);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.img2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142,65);


(lib.Symbol = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0505").s().p("AhTALIAAgVICnAAIAAAVg");
	this.shape.setTransform(8.5,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.9,2.3);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(112.6,6.6,1,1,0,0,0,24.6,6.6);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(24.6,6.6,1,1,0,0,0,24.6,6.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,13.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// -
	this.instance = new lib.Symbol();
	this.instance.setTransform(268.2,40,1,1,0,0,0,8.4,1.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(1).to({regY:1.1,x:256.4,y:39.9,alpha:0.295},0).wait(1).to({x:248.4,alpha:0.493},0).wait(1).to({x:243.1,alpha:0.626},0).wait(1).to({x:239.1,alpha:0.726},0).wait(1).to({x:236,alpha:0.804},0).wait(1).to({x:233.6,alpha:0.865},0).wait(1).to({x:231.7,alpha:0.912},0).wait(1).to({x:230.2,alpha:0.949},0).wait(1).to({x:229.1,alpha:0.977},0).wait(1).to({regY:1.2,x:228.2,y:40,alpha:1},0).wait(36).to({alpha:0},15).wait(1));

	// Символ 9
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(268.2,35,1,1,0,0,0,8.4,1.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(1).to({regY:1.1,x:256.4,y:34.9,alpha:0.295},0).wait(1).to({x:248.4,alpha:0.493},0).wait(1).to({x:243.1,alpha:0.626},0).wait(1).to({x:239.1,alpha:0.726},0).wait(1).to({x:236,alpha:0.804},0).wait(1).to({x:233.6,alpha:0.865},0).wait(1).to({x:231.7,alpha:0.912},0).wait(1).to({x:230.2,alpha:0.949},0).wait(1).to({x:229.1,alpha:0.977},0).wait(1).to({regY:1.2,x:228.2,y:35,alpha:1},0).wait(41).to({alpha:0},15).wait(1));

	// Символ 8
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(268.2,30,1,1,0,0,0,8.4,1.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(1).to({regY:1.1,x:256.4,y:29.9,alpha:0.295},0).wait(1).to({x:248.4,alpha:0.493},0).wait(1).to({x:243.1,alpha:0.626},0).wait(1).to({x:239.1,alpha:0.726},0).wait(1).to({x:236,alpha:0.804},0).wait(1).to({x:233.6,alpha:0.865},0).wait(1).to({x:231.7,alpha:0.912},0).wait(1).to({x:230.2,alpha:0.949},0).wait(1).to({x:229.1,alpha:0.977},0).wait(1).to({regY:1.2,x:228.2,y:30,alpha:1},0).wait(46).to({alpha:0},15).wait(1));

	// Символ 6 - копия: 2
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(56.1,9.9,0.195,0.195,0,0,0,2,2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:9.8},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:56},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:56.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:56},0).wait(1).to({scaleX:1,scaleY:1,x:56.1},0).wait(52).to({alpha:0},15).wait(1));

	// Символ 6 - копия
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(49.1,9.9,0.195,0.195,0,0,0,2,2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:9.8},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:49},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:49.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:49},0).wait(1).to({scaleX:1,scaleY:1,x:49.1},0).wait(56).to({alpha:0},15).wait(1));

	// Символ 6
	this.instance_5 = new lib.Символ6();
	this.instance_5.setTransform(42.1,9.9,0.268,0.268,0,0,0,2,2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:9.8},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:42},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:42.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:42},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:1,scaleY:1,x:42.1},0).wait(60).to({alpha:0},15).wait(1));

	// Символ 4
	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(74.8,17.1,0.079,0.079,0,0,0,31.8,8.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:80.6,y:15.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:84.8,y:14.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:88,y:13.4},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:90.6,y:12.7},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:92.7,y:12.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:94.5,y:11.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:96.1,y:11.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:97.5,y:10.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:98.7,y:10.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:99.7,y:10.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:100.5,y:9.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:101.3,y:9.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:101.9,y:9.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:102.4,y:9.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:102.8,y:9.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:103.2,y:9.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:103.6,y:9.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:103.9,y:9},0).wait(1).to({scaleX:1,scaleY:1,x:104.1,y:8.9},0).wait(60).to({alpha:0},15).wait(1));

	// Символ 4
	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(8.8,17.2,0.072,0.072,0,0,0,31.8,9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).wait(1).to({regY:8.9,scaleX:0.25,scaleY:0.25,x:14.6,y:15.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:18.9,y:14.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:22.1,y:13.4},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:24.7,y:12.7},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:26.8,y:12},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:28.6,y:11.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:30.2,y:11.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:31.6,y:10.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:32.8,y:10.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:33.8,y:10.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:34.7,y:9.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:35.4,y:9.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:36.1,y:9.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:36.6,y:9.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:37,y:9.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:37.4,y:9.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:37.7,y:9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:38,y:8.9},0).wait(1).to({scaleX:1,scaleY:1,x:38.3},0).wait(73).to({alpha:0},15).wait(1));

	// Символ 3
	this.instance_8 = new lib.Символ3();
	this.instance_8.setTransform(279,144.6,0.767,0.767,0,0,0,41.1,14.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).wait(1).to({regX:41,regY:14.5,x:245.6,y:144.4,alpha:0.32},0).wait(1).to({x:223.5,alpha:0.533},0).wait(1).to({x:207.8,alpha:0.683},0).wait(1).to({x:196.5,alpha:0.792},0).wait(1).to({x:188.2,alpha:0.872},0).wait(1).to({x:182.9,alpha:0.923},0).wait(1).to({x:179.5,alpha:0.955},0).wait(1).to({x:177,alpha:0.979},0).wait(1).to({regX:41.1,regY:14.8,x:175,y:144.6,alpha:1},0).to({x:191},4).wait(55).to({alpha:0},15).wait(1));

	// Символ 2
	this.instance_9 = new lib.Символ2();
	this.instance_9.setTransform(15.9,154.3,1,1,-45,0,0,47.8,76);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).wait(1).to({regX:48,rotation:-31.3,x:25.8,y:139.5,alpha:0.305},0).wait(1).to({rotation:-24.1,x:30.9,y:131.9,alpha:0.465},0).wait(1).to({rotation:-19.5,x:34.2,y:126.9,alpha:0.568},0).wait(1).to({rotation:-15.7,x:36.9,y:123,alpha:0.652},0).wait(1).to({rotation:-12,x:39.5,y:119.1,alpha:0.732},0).wait(1).to({rotation:-8.9,x:41.7,y:115.8,alpha:0.801},0).wait(1).to({rotation:-6.4,x:43.5,y:113.1,alpha:0.858},0).wait(1).to({rotation:-4.4,x:44.9,y:111,alpha:0.903},0).wait(1).to({rotation:-2.8,x:46,y:109.3,alpha:0.938},0).wait(1).to({rotation:-1.6,x:46.9,y:108,alpha:0.965},0).wait(1).to({rotation:-0.7,x:47.6,y:107.1,alpha:0.985},0).wait(1).to({regX:47.8,regY:75.9,rotation:0,x:47.8,y:106.3,alpha:1},0).wait(68).to({alpha:0},15).wait(1));

	// Символ 1
	this.instance_10 = new lib.Символ1();
	this.instance_10.setTransform(157.7,126.5,1,1,0,0,0,71.2,32.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(28).to({_off:false},0).wait(1).to({regX:71,x:157.5,y:115.9,alpha:0.253},0).wait(1).to({y:108.6,alpha:0.429},0).wait(1).to({y:103.4,alpha:0.555},0).wait(1).to({y:99.3,alpha:0.653},0).wait(1).to({y:95.8,alpha:0.736},0).wait(1).to({y:92.9,alpha:0.807},0).wait(1).to({y:90.5,alpha:0.864},0).wait(1).to({y:88.6,alpha:0.911},0).wait(1).to({y:87,alpha:0.948},0).wait(1).to({y:85.8,alpha:0.977},0).wait(1).to({regX:71.2,x:157.7,y:84.9,alpha:1},0).to({y:94.5},4).wait(30).to({scaleX:1.12,scaleY:1.12},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(14).to({alpha:0},15).wait(1));

	// Слой 13
	this.instance_11 = new lib.Символ14();
	this.instance_11.setTransform(129.5,242.5,1,1,0,0,0,68.6,6.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(33).to({_off:false},0).wait(1).to({y:237.2,alpha:0.33},0).wait(1).to({y:234.6,alpha:0.493},0).wait(1).to({y:232.8,alpha:0.602},0).wait(1).to({y:231.3,alpha:0.7},0).wait(1).to({y:229.8,alpha:0.79},0).wait(1).to({y:228.7,alpha:0.858},0).wait(1).to({y:227.9,alpha:0.907},0).wait(1).to({y:227.4,alpha:0.944},0).wait(1).to({y:226.9,alpha:0.974},0).wait(1).to({y:226.5,alpha:1},0).wait(57).to({alpha:0},15).wait(1));

	// Символ 7
	this.instance_12 = new lib.Символ7();
	this.instance_12.setTransform(126.9,217,1,1,0,0,0,121.9,45.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({alpha:1},15).wait(76).to({alpha:0},15).wait(1));

	// Слой 19
	this.instance_13 = new lib.Символ15();
	this.instance_13.setTransform(193.5,139.6,1,1,0,0,0,55.2,122.6);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},20).wait(80).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138.3,17,110.5,245.3);


// stage content:



(lib.web = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.instance = new lib.Символ10();
	this.instance.setTransform(107,114.8,0.854,0.854,0,0,0,124.4,131.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(227.4,132.1,94.4,209.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;