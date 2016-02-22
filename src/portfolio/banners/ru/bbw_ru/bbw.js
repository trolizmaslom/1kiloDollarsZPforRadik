(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFF00",
	manifest: [
		{src:"images/a1.png", id:"a1"},
		{src:"images/a123.png", id:"a123"},
		{src:"images/a2.png", id:"a2"},
		{src:"images/a3.png", id:"a3"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/but.png", id:"but"},
		{src:"images/ear.png", id:"ear"},
		{src:"images/frame.png", id:"frame"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/head.png", id:"head"}
	]
};



// symbols:



(lib.a1 = function() {
	this.initialize(img.a1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,216);


(lib.a123 = function() {
	this.initialize(img.a123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,45);


(lib.a2 = function() {
	this.initialize(img.a2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,215);


(lib.a3 = function() {
	this.initialize(img.a3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,216);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.but = function() {
	this.initialize(img.but);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,93);


(lib.ear = function() {
	this.initialize(img.ear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,58);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,303);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,30);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,191);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AomBiQgJgHgGgKQgGgKgCgNIAsgNQACALAIAGQAHAHAKAAQAHAAAEgDQAFgCADgEIAEgIIACgJIgBgLQgBgFgDgDQgDgEgFgCQgFgDgIAAIgQAAIAAgkIAQAAQAKAAAHgGQAIgFAAgOIgCgHIgDgHQgCgDgFgCQgEgCgGAAQgLAAgHAHQgHAGgDAKIgqgQQAHgXASgPQASgOAdAAQAfAAASAQQASAQAAAdIgBAMIgEANQgCAHgGAGQgFAGgIAEIAAABQAIACAFAEQAFAFADAGIAFAPIABAPQAAASgGANQgFANgKAIQgKAIgNAEQgNAEgPAAQgdAAgTgPgAGvBvIAAjcIAuAAIAABTIAcAAQASAAANAFQANAFAJAJQAIAHAEANQAEAMAAAPQAAASgFANQgFANgJAJQgJAJgNAFQgNAEgQAAgAHdBEIAaAAQANAAAGgHQAGgIAAgMQAAgOgGgGQgHgGgMAAIgaAAgAE6BvIAAiyIgvAAIAAgqICNAAIAAAqIgwAAIAACygADVBvIgLgtIg1AAIgMAtIgxAAIBBjcIAuAAIBADcgADAAZIgQhLIgBAAIgPBLIAgAAgAg5BvIAAjcIBFAAQAPAAANAEQAOAEAJAIQAKAJAFANQAFAOAAASQAAAQgFANQgEALgJAJQgJAKgNAFQgNAFgQAAIgZAAIAABRgAgLgLIAXAAQAKAAAIgHQAIgGAAgQQAAgOgHgGQgHgHgMAAIgXAAgAjiBvIAAjcIB9AAIAAAqIhPAAIAAApIAdAAQARAAANAFQANAFAJAJQAIAHAEANQAFAMAAAPQAAASgFANQgFAOgJAIQgKAJgNAFQgMAEgQAAgAi0BEIAaAAQANAAAGgHQAGgHAAgNQAAgOgGgGQgHgGgMAAIgaAAgAkmBvIgLgtIg1AAIgMAtIgxAAIBAjcIAuAAIBADcgAk8AZIgPhLIgCAAIgPBLIAgAAg");
	this.shape.setTransform(57.5,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115,22.7);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AomBiQgJgHgGgKQgGgKgCgNIAsgNQACALAIAGQAHAHAKAAQAHAAAEgDQAFgCADgEIAEgIIACgJIgBgLQgBgFgDgDQgDgEgFgCQgFgDgIAAIgQAAIAAgkIAQAAQAKAAAHgGQAIgFAAgOIgCgHIgDgHQgCgDgFgCQgEgCgGAAQgLAAgHAHQgHAGgDAKIgqgQQAHgXASgPQASgOAdAAQAfAAASAQQASAQAAAdIgBAMIgEANQgCAHgGAGQgFAGgIAEIAAABQAIACAFAEQAFAFADAGIAFAPIABAPQAAASgGANQgFANgKAIQgKAIgNAEQgNAEgPAAQgdAAgTgPgAGvBvIAAjcIAuAAIAABTIAcAAQASAAANAFQANAFAJAJQAIAHAEANQAEAMAAAPQAAASgFANQgFANgJAJQgJAJgNAFQgNAEgQAAgAHdBEIAaAAQANAAAGgHQAGgIAAgMQAAgOgGgGQgHgGgMAAIgaAAgAE6BvIAAiyIgvAAIAAgqICNAAIAAAqIgwAAIAACygADVBvIgLgtIg1AAIgMAtIgxAAIBBjcIAuAAIBADcgADAAZIgQhLIgBAAIgPBLIAgAAgAg5BvIAAjcIBFAAQAPAAANAEQAOAEAJAIQAKAJAFANQAFAOAAASQAAAQgFANQgEALgJAJQgJAKgNAFQgNAFgQAAIgZAAIAABRgAgLgLIAXAAQAKAAAIgHQAIgGAAgQQAAgOgHgGQgHgHgMAAIgXAAgAjiBvIAAjcIB9AAIAAAqIhPAAIAAApIAdAAQARAAANAFQANAFAJAJQAIAHAEANQAFAMAAAPQAAASgFANQgFAOgJAIQgKAJgNAFQgMAEgQAAgAi0BEIAaAAQANAAAGgHQAGgHAAgNQAAgOgGgGQgHgGgMAAIgaAAgAkmBvIgLgtIg1AAIgMAtIgxAAIBAjcIAuAAIBADcgAk8AZIgPhLIgCAAIgPBLIAgAAg");
	this.shape.setTransform(57.5,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115,22.7);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("AylINIAAwZMAlKAAAIAAQZg");
	this.shape.setTransform(119,52.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("ABBMTIhzjYIgCABIAADXIhTAAIAAmMIBJAAIBzDWIACAAIAAjWIBSAAIAAGMgAgnDGIAAmLIBQAAIAAGLgAA0mGIgyjQIgCAAIgzDQIhLAAIhUmNIBbAAIAlDfIACAAIAyjfIA+AAIAzDhIACAAIAkjhIBaAAIhUGNg");
	this.shape.setTransform(21.1,78.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.2,157.6);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("ABBMTIhzjYIgCABIAADXIhTAAIAAmMIBJAAIBzDWIACAAIAAjWIBSAAIAAGMgAgnDGIAAmLIBQAAIAAGLgAA0mGIgyjQIgCAAIgzDQIhLAAIhUmNIBbAAIAlDfIACAAIAyjfIA+AAIAzDhIACAAIAkjhIBaAAIhUGNg");
	this.shape.setTransform(21.1,78.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.2,157.6);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-16.2,0,16.3).s().p("A2rCnIAAlNMAtXAAAIAAFNg");
	this.shape.setTransform(145.2,145.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,16.3,0,-16.2).s().p("A2rCnIAAlNMAtXAAAIAAFNg");
	this.shape_1.setTransform(145.3,16.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,290.5,162.3);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10.5,2,0,3).p("A1xnbMArjAAAIAAO3MgrjAAAg");
	this.shape.setTransform(139.5,47.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.2,-5.2,289.4,105.8);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(10.5,2,0,3).p("A1xnbMArjAAAIAAO3MgrjAAAg");
	this.shape.setTransform(139.5,47.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.2,-5.2,289.4,105.8);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.71)").s().p("EgzYAY6MAAAgx0MBmxAAAMAAAAx0g");
	this.shape.setTransform(329,159.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,658,319);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a3();
	this.instance.setTransform(-37.5,-324);

	this.instance_1 = new lib.a3();
	this.instance_1.setTransform(-37.5,-108);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.a3, null, new cjs.Matrix2D(1,0,0,1,-37.5,-108)).s().p("Al2Q3MAAAghuILtAAMAAAAhug");
	this.shape.setTransform(0,-432);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-540,75,648);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a2();
	this.instance.setTransform(-37,-322.5);

	this.instance_1 = new lib.a2();
	this.instance_1.setTransform(-37,-107.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.a2, null, new cjs.Matrix2D(1,0,0,1,-37,-34.8)).s().p("AlwFcIAAq3ILhAAIAAK3g");
	this.shape.setTransform(0,-501.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.a2, null, new cjs.Matrix2D(1,0,0,1,-37,-179.7)).s().p("AlwFgIAAq/ILhAAIAAK/g");
	this.shape_1.setTransform(0,-431.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.a2, null, new cjs.Matrix2D(1,0,0,1,-37,-106.9)).s().p("AlwF0IAArnILhAAIAALng");
	this.shape_2.setTransform(0,-358.7);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37,-536.1,74,643.6);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a1();
	this.instance.setTransform(-37,-539.1);

	this.instance_1 = new lib.a1();
	this.instance_1.setTransform(-37,-323);

	this.instance_2 = new lib.a1();
	this.instance_2.setTransform(-37,-108);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37,-539.1,74,647.1);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.frame();
	this.instance.setTransform(-166.5,-151.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-166.5,-151.5,333,303);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-29,-15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-15,58,30);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F150C").s().p("AikAJID/iTIBKCCIj/CTg");
	this.shape.setTransform(0,-0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,-14.4,33.2,27.8);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ear();
	this.instance.setTransform(-16.5,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-29,33,58);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ2_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.head, null, new cjs.Matrix2D(1,0,0,1,-97,-95.5)).s().p("AvJO6IAA90IDrAAQAHAJAPADQASAEA6ACQCnABBzAaIDxABQAFACAOADIB8AAQAFACAOACIMlABQAOAFAfAAQAmAAAPgNQAMgJAAgSQgBgLgGgKIANAAIAAd0g");
	this.shape.setTransform(97,95.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,194,191);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a123();
	this.instance.setTransform(-320,-22.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-22.5,640,45);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.a123();
	this.instance.setTransform(-320,-22.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-22.5,640,45);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ35();
	this.instance.setTransform(57.5,11.3,1,1,0,0,0,57.5,11.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7).to({alpha:0},7).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(57.5,11.3,1,1,0,0,0,57.5,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,22.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 23
	this.instance = new lib.Символ23();
	this.instance.setTransform(21.1,78.8,1,1,0,0,0,21.1,78.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).wait(21).to({alpha:1},9).wait(1));

	// Символ 22
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(487.2,78.8,1,1,0,0,0,21.1,78.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({alpha:1},10).wait(1).to({alpha:0},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,508.3,157.6);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(109.3,42.6,1,1,0,0,0,57.5,11.3);

	// Слой 1
	this.instance_1 = new lib.but();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,218,93);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ18();
	this.instance.setTransform(139.5,47.6,1,1,0,0,0,139.5,47.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(139.5,47.6,1,1,0,0,0,139.5,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,292.9,109.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_115 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(115).call(this.frame_115).wait(1));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AxcQwMAAAghfMAi5AAAMAAAAhfg");
	var mask_graphics_18 = new cjs.Graphics().p("AxcQwMAAAghfMAi5AAAMAAAAhfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-13.1,y:31.9}).wait(18).to({graphics:mask_graphics_18,x:-13.1,y:31.9}).wait(98));

	// Слой 4
	this.instance = new lib.Символ14();
	this.instance.setTransform(60,32.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-216,y:-183.5},0).wait(17).to({regY:0,y:32.5},0).wait(1).to({regY:-216,y:-183.5},0).wait(17).to({regY:0,y:32.5},0).wait(1).to({regY:-216,y:-182.6},0).wait(1).to({y:-179.6},0).wait(1).to({y:-174.7},0).wait(1).to({y:-167.7},0).wait(1).to({y:-158.9},0).wait(1).to({y:-148},0).wait(1).to({y:-135.2},0).wait(1).to({y:-120.3},0).wait(1).to({regY:0,y:112.5},0).to({y:461.7},15).wait(1).to({y:112.5},0).to({y:461.7},15).wait(1).to({y:112.5},0).to({y:461.7},15).wait(1).to({y:112.5},0).to({y:345.3},10).wait(1).to({regY:-216,y:147.9},0).wait(1).to({y:164.9},0).wait(1).to({y:180.2},0).wait(1).to({y:194},0).wait(1).to({y:206.1},0).wait(1).to({y:216.6},0).wait(1).to({y:225.5},0).wait(1).to({y:232.8},0).wait(1).to({y:238.4},0).wait(1).to({y:242.5},0).wait(1).to({y:244.9},0).wait(1).to({regY:0,y:461.7},0).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(-13.5,33.5);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:-214.3,y:-180.8},0).wait(17).to({regY:0,y:33.5},0).wait(1).to({regY:-214.3,y:-180.8},0).wait(8).to({regY:0,y:33.5},0).wait(1).to({regY:-214.3,y:-179.9},0).wait(1).to({y:-176.9},0).wait(1).to({y:-172},0).wait(1).to({y:-165},0).wait(1).to({y:-156.2},0).wait(1).to({y:-145.3},0).wait(1).to({y:-132.5},0).wait(1).to({y:-117.6},0).wait(1).to({regY:0,y:113.5},0).to({y:462.7},15).wait(1).to({y:113.5},0).to({y:462.7},15).wait(1).to({y:113.5},0).to({y:462.7},15).wait(1).to({y:113.5},0).to({y:346.3},10).wait(1).to({regY:-214.3,y:150.6},0).wait(1).to({y:167.6},0).wait(1).to({y:182.9},0).wait(1).to({y:196.7},0).wait(1).to({y:208.8},0).wait(1).to({y:219.3},0).wait(1).to({y:228.2},0).wait(1).to({y:235.5},0).wait(1).to({y:241.1},0).wait(1).to({y:245.2},0).wait(1).to({y:247.6},0).wait(1).to({regY:0,y:462.7},0).wait(10));

	// Слой 2
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(-87.5,33.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:-215.6,y:-182.1},0).wait(17).to({regY:0,y:33.5},0).wait(1).to({regY:-215.6,y:-181.1},0).wait(1).to({y:-178.1},0).wait(1).to({y:-173.2},0).wait(1).to({y:-166.3},0).wait(1).to({y:-157.4},0).wait(1).to({y:-146.5},0).wait(1).to({regY:-215.5,y:-133.6},0).wait(1).to({y:-118.8},0).wait(1).to({regY:0,y:113.5},0).to({y:462.8},15).wait(1).to({y:113.5},0).to({y:462.8},15).wait(1).to({y:113.5},0).to({y:462.8},15).wait(1).to({y:113.5},0).to({y:346.4},10).wait(1).to({regY:-215.6,y:149.3},0).wait(1).to({y:166.3},0).wait(1).to({y:181.7},0).wait(1).to({y:195.4},0).wait(1).to({y:207.5},0).wait(1).to({y:218.1},0).wait(1).to({y:226.9},0).wait(1).to({y:234.2},0).wait(1).to({y:239.9},0).wait(1).to({y:243.9},0).wait(1).to({y:246.3},0).wait(1).to({regY:0,y:462.8},0).wait(19));

	// Слой 1
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(-0.5,0,0.997,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.5,-151.5,332,303);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(-213.5,-8.5,1,1,0,-15,165);

	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(-40,-7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-245.4,-30.5,234.4,44);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhtAXQAAgsAgghQAhggAsAAQAuAAAgAgQAcAcAEAjIggAHQgjAJgiALQghANgfAQQgSAKgQAMQgUgcAAgkg");

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(-10.1,-12.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({x:-2.3,y:-1.4},4).to({x:-10.1,y:-12.9},4).to({x:-2.3,y:-1.4},4).to({x:-8.8,y:-14.1},4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-8.7,17.5,9.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.42,x:9.5},4).to({scaleX:1,x:0},4).to({scaleX:0.42,x:9.5},4).to({scaleX:1,x:0},4).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-29,33,58);


(lib.копияСимвол6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag1AtIgBgNQAAggAXgXQAYgYAgAAQAQAAAOAGIgBA/IgPAOIgEAFIgEABIgPAGg");
	mask.setTransform(-0.5,-1);

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(-10.1,-12.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({x:-2.3,y:-1.4},4).to({x:-10.1,y:-12.9},4).to({x:-2.3,y:-1.4},4).to({x:-8.8,y:-14.1},4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.8,11.2,6.3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(11));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(109,46.5,1,1,0,0,0,109,46.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:46.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:46.5},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:109.1,y:46.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:46.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:109,y:46.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:46.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:109.1,y:46.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:46.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:109},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:109.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:46.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:46.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:109},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:46.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:109.1,y:46.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:46.6},0).wait(1).to({scaleX:1,scaleY:1,x:109,y:46.5},0).wait(1).to({scaleX:1,scaleY:1,y:46.6},0).wait(1).to({scaleX:1,scaleY:1,y:46.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ3 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.копияСимвол6();
	this.instance.setTransform(0.2,87.8);

	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(41.2,73.5);

	// Слой 2
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(44.5,15.5);

	// Слой 1
	this.instance_3 = new lib.Символ2_1();
	this.instance_3.setTransform(57,95.5,1,1,0,0,0,97,95.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-13.5,194,204.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AYPL7QgNgNAAgSQAAgRANgNQAMgMASAAQASAAAMAMQAMANAAARQAAASgMANQgMAMgSAAQgSAAgMgMg");
	var mask_graphics_1 = new cjs.Graphics().p("Am/SxQnxnxAArAQAAq/HxnxQHwnxLAAAQLAAAHxHxQHyHxAAK/QAALAnyHxQnxHxrAAAQrAAAnwnxg");
	var mask_graphics_2 = new cjs.Graphics().p("Az3aUQq5q5AAvbQAAvaK5q5QK5q5PaAAQPbAAK5K5QK5K5AAPaQAAPbq5K5Qq5K5vbAAQvaAAq5q5g");
	var mask_graphics_3 = new cjs.Graphics().p("A8FfIQs4s4AAyQQAAyPM4s4QM5s5SOAAQSQAAM4M5QM5M4AASPQAASQs5M4Qs4M5yQAAQyOAAs5s5g");
	var mask_graphics_4 = new cjs.Graphics().p("EgiPAivQuYuYAA0XQAA0WOYuYQOYuYUVAAQUYAAOYOYQOYOYAAUWQAAUXuYOYQuYOY0YAAQ0VAAuYuYg");
	var mask_graphics_5 = new cjs.Graphics().p("EglTAlUQvdvcAA14QAA13PdvcQPcvdV3AAQV4AAPcPdQPdPcAAV3QAAV4vdPcQvcPd14AAQ13AAvcvdg");
	var mask_graphics_6 = new cjs.Graphics().p("EgnKAnLQwNwOAA29QAA28QNwOQQOwNW8AAQW9AAQOQNQQNQOAAW8QAAW9wNQOQwOQN29AAQ28AAwOwNg");
	var mask_graphics_7 = new cjs.Graphics().p("EgofAogQwxwxAA3vQAA3uQxwxQQxwxXuAAQXvAAQxQxQQxQxAAXuQAAXvwxQxQwxQx3vAAQ3uAAwxwxg");
	var mask_graphics_8 = new cjs.Graphics().p("EgpeApfQxKxLAA4UQAA4TRKxLQRLxKYTAAQYUAARLRKQRKRLAAYTQAAYUxKRLQxLRK4UAAQ4TAAxLxKg");
	var mask_graphics_9 = new cjs.Graphics().p("EgqLAqMQxdxdAA4vQAA4uRdxdQRdxdYuAAQYvAARdRdQRdRdAAYuQAAYvxdRdQxdRd4vAAQ4uAAxdxdg");
	var mask_graphics_10 = new cjs.Graphics().p("EgqsAqtQxrxrAA5CQAA5BRrxrQRrxrZBAAQZCAARrRrQRrRrAAZBQAAZCxrRrQxrRr5CAAQ5BAAxrxrg");
	var mask_graphics_11 = new cjs.Graphics().p("EgrEArFQx1x1AA5QQAA5PR1x1QR1x1ZPAAQZQAAR1R1QR1R1AAZPQAAZQx1R1Qx1R15QAAQ5PAAx1x1g");
	var mask_graphics_213 = new cjs.Graphics().p("EgrEArFQx1x1AA5QQAA5PR1x1QR1x1ZPAAQZQAAR1R1QR1R1AAZPQAAZQx1R1Qx1R15QAAQ5PAAx1x1g");
	var mask_graphics_214 = new cjs.Graphics().p("Egq6Aq7QxxxxAA5KQAA5JRxxxQRxxxZJAAQZKAARxRxQRxRxAAZJQAAZKxxRxQxxRx5KAAQ5JAAxxxxg");
	var mask_graphics_215 = new cjs.Graphics().p("EgqcAqdQxkxlAA44QAA43RkxlQRlxkY3AAQY4AARlRkQRkRlAAY3QAAY4xkRlQxlRk44AAQ43AAxlxkg");
	var mask_graphics_216 = new cjs.Graphics().p("EgplApmQxNxOAA4YQAA4XRNxOQROxNYXAAQYYAARORNQRNROAAYXQAAYYxNROQxORN4YAAQ4XAAxOxNg");
	var mask_graphics_217 = new cjs.Graphics().p("EgoPAoQQwrwqAA3mQAA3lQrwqQQqwrXlAAQXmAAQqQrQQrQqAAXlQAAXmwrQqQwqQr3mAAQ3lAAwqwrg");
	var mask_graphics_218 = new cjs.Graphics().p("EgmSAmTQv2v3AA2cQAA2bP2v3QP3v2WbAAQWcAAP3P2QP2P3AAWbQAAWcv2P3Qv3P22cAAQ2bAAv3v2g");
	var mask_graphics_219 = new cjs.Graphics().p("EgjVAjYQuqupAA0vQAA0uOqupQOpupUtAAQUwAAOpOpQOpOpAAUuQAAUvupOpQupOp0wAAQ0tAAupupg");
	var mask_graphics_220 = new cjs.Graphics().p("A73fAQs2s1AAyLQAAyKM2s1QM1s1SJAAQSMAAM1M1QM1M1AASKQAASLs1M1Qs1M1yMAAQyJAAs1s1g");
	var mask_graphics_221 = new cjs.Graphics().p("AxpZBQqXqXAAuqQAAupKXqXQKWqXOpAAQOrAAKXKXQKWKXAAOpQAAOqqWKXQqXKXurAAQupAAqWqXg");
	var mask_graphics_222 = new cjs.Graphics().p("AijQhQmsmsAApfQAApdGsmsQGrmtJeAAQJfAAGtGtQGsGsAAJdQAAJfmsGsQmtGtpfAAQpeAAmrmtg");
	var mask_graphics_223 = new cjs.Graphics().p("AYPL7QgNgNAAgSQAAgRANgNQAMgMASAAQASAAAMAMQAMANAAARQAAASgMANQgMAMgSAAQgSAAgMgMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:162.4,y:77.6}).wait(1).to({graphics:mask_graphics_1,x:245.2,y:150.9}).wait(1).to({graphics:mask_graphics_2,x:279.4,y:150.9}).wait(1).to({graphics:mask_graphics_3,x:301.1,y:150.9}).wait(1).to({graphics:mask_graphics_4,x:317.5,y:150.9}).wait(1).to({graphics:mask_graphics_5,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_6,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_7,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_8,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_9,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_10,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_11,x:320.6,y:150.9}).wait(202).to({graphics:mask_graphics_213,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_214,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_215,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_216,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_217,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_218,x:320.6,y:150.9}).wait(1).to({graphics:mask_graphics_219,x:320.4,y:150.9}).wait(1).to({graphics:mask_graphics_220,x:300.6,y:150.9}).wait(1).to({graphics:mask_graphics_221,x:273.5,y:150.9}).wait(1).to({graphics:mask_graphics_222,x:233.5,y:148.6}).wait(1).to({graphics:mask_graphics_223,x:162.4,y:77.6}).wait(2));

	// Слой 10
	this.instance = new lib.Символ21();
	this.instance.setTransform(314.9,135.9,1,1,0,0,0,254.2,78.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(141).to({_off:false},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.78},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.893},0).wait(1).to({alpha:0.927},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:1},0).wait(72));

	// Слой 9
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(320,356.1,1,1,0,0,0,109,46.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(141).to({_off:false},0).wait(1).to({y:310.6},0).wait(1).to({y:284.2},0).wait(1).to({y:270.3},0).wait(1).to({y:261.1},0).wait(1).to({y:255.2},0).wait(1).to({y:251.5},0).wait(1).to({y:249.1},0).wait(1).to({y:247.4},0).wait(1).to({y:246.1},0).to({y:266.1},3).wait(72));

	// Слой 7
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(316.3,162.6,1,1,0,0,0,139.5,47.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(141).to({_off:false},0).to({alpha:1},12).wait(72));

	// Слой 8
	this.instance_3 = new lib.Символ19();
	this.instance_3.setTransform(316.1,162.6,1,1,0,0,0,145.2,81.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(141).to({_off:false},0).to({alpha:1},12).wait(72));

	// Слой 3 - копия
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(274,285.5);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({y:299},8).to({y:300.5},6).wait(100).to({regX:-128.2,regY:-8.5,x:79.4,y:292,alpha:0.752},0).wait(1).to({x:32.3,alpha:0.577},0).wait(1).to({x:-2.4,alpha:0.447},0).wait(1).to({x:-28.9,alpha:0.348},0).wait(1).to({x:-49.7,alpha:0.27},0).wait(1).to({x:-66.6,alpha:0.207},0).wait(1).to({x:-80.1,alpha:0.157},0).wait(1).to({x:-90.6,alpha:0.118},0).wait(1).to({x:-98.8,alpha:0.087},0).wait(1).to({x:-105.3,alpha:0.063},0).wait(1).to({x:-110.5,alpha:0.044},0).wait(1).to({x:-114.8,alpha:0.027},0).wait(1).to({x:-118.7,alpha:0.013},0).wait(1).to({regX:0,regY:0,x:6,y:300.5,alpha:0},0).wait(84));

	// Слой 3
	this.instance_5 = new lib.a123();
	this.instance_5.setTransform(0,260);

	this.instance_6 = new lib.Анимация1("synched",0);
	this.instance_6.setTransform(320,282.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.Анимация2("synched",0);
	this.instance_7.setTransform(320,282.5);

	this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},127).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},83).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(127).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(84));

	// Слой 2
	this.instance_8 = new lib.Символ3();
	this.instance_8.setTransform(187,403.9,1,1,0,0,0,97,95.5);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21).to({_off:false},0).to({y:292.1},7,cjs.Ease.get(-1)).to({y:198.9},8,cjs.Ease.get(1)).wait(92).to({regX:57,regY:88.7,x:80.6,y:192.1,alpha:0.752},0).wait(1).to({x:33.6,alpha:0.577},0).wait(1).to({x:-1.2,alpha:0.447},0).wait(1).to({x:-27.6,alpha:0.348},0).wait(1).to({x:-48.5,alpha:0.27},0).wait(1).to({x:-65.4,alpha:0.207},0).wait(1).to({x:-78.9,alpha:0.157},0).wait(1).to({x:-89.4,alpha:0.118},0).wait(1).to({x:-97.6,alpha:0.087},0).wait(1).to({x:-104,alpha:0.063},0).wait(1).to({x:-109.2,alpha:0.044},0).wait(1).to({x:-113.6,alpha:0.027},0).wait(1).to({x:-117.4,alpha:0.013},0).wait(1).to({regX:97,regY:95.5,x:-81,y:198.9,alpha:0},0).wait(84));

	// Слой 2
	this.instance_9 = new lib.Символ10();
	this.instance_9.setTransform(544.5,151.5);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-0.5,x:524.9},0).wait(1).to({x:509.8},0).wait(1).to({x:498.3},0).wait(1).to({x:489.5},0).wait(1).to({x:482.6},0).wait(1).to({x:476.8},0).wait(1).to({x:472},0).wait(1).to({x:468.1},0).wait(1).to({x:464.8},0).wait(1).to({x:462},0).wait(1).to({x:459.8},0).wait(1).to({x:457.9},0).wait(1).to({x:456.4},0).wait(1).to({x:455.1},0).wait(1).to({regX:0,x:454.5},0).to({x:474.5},3).wait(110).to({regX:-0.5,scaleX:1.05,scaleY:1.05,x:438.8,y:144.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:413.9,y:139.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:395.5,y:135.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:381.5,y:133},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:370.4,y:130.7},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:361.4,y:128.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:354.3,y:127.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:348.7,y:126.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:344.4,y:125.5},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:341,y:124.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:338.2,y:124.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:335.9,y:123.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:333.9,y:123.4},0).wait(1).to({regX:0,scaleX:1.19,scaleY:1.19,x:332.6,y:123.1},0).wait(82).to({_off:true},1).wait(1));

	// Слой 6
	this.instance_10 = new lib.Символ15();
	this.instance_10.setTransform(318.9,151.6,1,1,0,0,0,328.9,159.5);
	this.instance_10.alpha = 0;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(128).to({regX:329,x:319,alpha:0.248},0).wait(1).to({alpha:0.423},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.843},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.937},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.987},0).wait(1).to({regX:328.9,x:318.9,alpha:1},0).wait(84));

	// Слой 3
	this.instance_11 = new lib.Символ9();
	this.instance_11.setTransform(274,315.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:309},6,cjs.Ease.get(-1)).to({y:285.5},8,cjs.Ease.get(-1)).to({_off:true},1).wait(210));

	// Слой 1
	this.instance_12 = new lib.Символ2();
	this.instance_12.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316.3,146.6,8.5,8.5);


// stage content:
(lib.bbw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.btn2.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseout", qwe);
		
		function qwe()
		{
			_this.btn2.gotoAndPlay(12);
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndStop(210);
		}	
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(210);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.btn1 = new lib.Символ30();
	this.btn1.setTransform(320,260.6,1,0.99,0,0,0,119,52.5);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.Символ30(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

	// Слой 3
	this.btn2 = new lib.Символ29();
	this.btn2.setTransform(211,219.6);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(1));

	// Слой 1
	this.main = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(310,-204.6,720,686);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;