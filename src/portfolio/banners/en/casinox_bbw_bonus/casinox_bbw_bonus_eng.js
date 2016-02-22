(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/backg.jpg", id:"backg"},
		{src:"images/bbw.png", id:"bbw"},
		{src:"images/bt.png", id:"bt"},
		{src:"images/ear.png", id:"ear"},
		{src:"images/fferf4.png", id:"fferf4"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/k1.jpg", id:"k1"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/pig1.png", id:"pig1"},
		{src:"images/pig2.png", id:"pig2"},
		{src:"images/s1.png", id:"s1"},
		{src:"images/trava.png", id:"trava"}
	]
};



// symbols:



(lib.backg = function() {
	this.initialize(img.backg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,717,350);


(lib.bbw = function() {
	this.initialize(img.bbw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,75);


(lib.bt = function() {
	this.initialize(img.bt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,40);


(lib.ear = function() {
	this.initialize(img.ear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,58);


(lib.fferf4 = function() {
	this.initialize(img.fferf4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,191);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,30);


(lib.k1 = function() {
	this.initialize(img.k1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,149);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,40);


(lib.pig1 = function() {
	this.initialize(img.pig1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,82);


(lib.pig2 = function() {
	this.initialize(img.pig2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,82);


(lib.s1 = function() {
	this.initialize(img.s1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,163);


(lib.trava = function() {
	this.initialize(img.trava);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,45);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiDKgQg1gdgsg3QgWgdAAgnQAAhhAchzQAJglApAAQBKAAAuAHQBIALAvAfQAWAPASAeQASAggEAYIgVCKQgKA+gNAsQgJAYgGAIQgLALgVAAQhcAAhFgkgAAADAQhngOgugqQgMgLgGgfQgGgeAFgZQAYiBBshCQA9gnAKgIQAhgdAFgsQAJglgdgdQgcgbgpgCQgxgBgwA5QgsA1gNA8QgJAog4AMQg3ALgfgaIiGhVQgQgNgGghQgHglALgoQAkiDBthkQBuhkBxgDQBogECzA9QDEBBA+BIQAQASAQA9QATBJgKA6QgFCRh9BgQgNAKhhA+QhDAsghAlQgjAsgLAXQgVAVgSAIQgPAGgTAAIgSgBg");
	this.shape.setTransform(48.1,70.9);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiGKyQg3gegtg5QgWgdAAgoQAAhjAch2QAJgnAqAAQBMAAAvAHQBLAMAwAgQAXAPARAfQATAhgEAZIgWCNQgKA/gNAtQgJAZgHAIQgKAMgWAAQhfAAhGglgAAADFQhpgOgwgrQgMgMgHgfQgFgfAEgZQAZiFBvhEQA/gnAKgJQAigdAFguQAJgmgdgdQgdgcgqgCQgygCgyA7QgtA2gOA+QgIApg6AMQg4AMgggbIiKhXQgQgOgGghQgIgmALgpQAliHBwhmQBxhnB0gDQBrgEC4A+QDJBDA/BKQARATAQA+QAUBLgKA7QgGCViABiQgOALhjA/QhEAugjAlQgjAugLAXQgWAWgSAIQgQAGgUAAIgSgBg");
	this.shape_1.setTransform(47,69);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-3.6,98.8,145.4);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pig1();
	this.instance.setTransform(-35.5,-41);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.5,-41,71,82);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(36,8.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-389.5,-14.7,851.1,45.9);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("AmeGEIIisHIEbAAIoiMHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.5,-38.9,83.1,77.8);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pig2();
	this.instance.setTransform(-35.5,-41);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.5,-41,71,82);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGBBPIgWABIjdgGIAADCIg2AAIAAoVID6gJQAzAAArAGQArAGAgATQAfASASAkQAJARAEAXQAFAYAAAdQAAAqgKAdQgJAbgRAUQgRAVgYALQgYAMgeAFIB4DBIgBAEIg2AHgACOjXIAADtIDDAGQAnAAAigFQAhgEAZgNQAYgLAOgYQAOgZAAgqQAAgpgOgaQgOgZgYgNQgZgNghgEQgigEgnAAgAKrEMIAAoVIHAAAIgEA0ImGAAIAAC9IFdAAIgDAzIlaAAIAAC9IGKAAIgEA0gAnkEMIAAoVIHAAAIgEA0ImGAAIAAC9IFdAAIgDAzIlaAAIAAC9IGKAAIgEA0gAqeEMIAAjxImWAAIAADxIg2AAIAAoVIA2AAIAADxIGWAAIAAjxIA2AAIAAIVg");
	this.shape.setTransform(2.3,2.6,0.819,0.819);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.3,-20,185.3,45.1);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.s1();
	this.instance.setTransform(-75.5,-81.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.5,-81.5,151,163);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.k1();
	this.instance.setTransform(-75.5,-74.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.5,-74.5,151,149);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.backg();
	this.instance.setTransform(-358.5,-175);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-358.5,-175,717,350);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-95,-20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95,-20,190,40);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.trava();
	this.instance.setTransform(-320,-22.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-22.5,640,45);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-29,-15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-15,58,30);


(lib.Символ7_1 = function() {
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
	this.instance = new lib.fferf4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,194,191);


(lib.shape149 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("AkDhaIIHAAIkEC1g");
	this.shape.setTransform(0,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,8.1,52.2,18.3);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.5,-41,71,82);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(7));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(-426.6,73.4,1,1,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:-491.6,y:74.4},6).to({rotation:14.5,x:-426.6,y:73.4},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471.2,24.8,89.3,97.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(7));

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:67},6).to({x:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-41,71,82);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ20();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.5,-38.9,83.1,77.8);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(0.3,-0.6,0.371,0.371);
	this.instance.shadow = new cjs.Shadow("#000000",0,0,0);

	this.instance_1 = new lib.bt();
	this.instance_1.setTransform(-54,-20);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54,-20,108,40);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,0,0.083,0.083);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1.11,scaleY:1},3).to({scaleX:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(0,0.1,1,1,0,0,0,48.1,70.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.5,-74.5,98.8,145.4);


(lib.Символ8_1 = function() {
	this.initialize();

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(95,20);

	// Слой 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(95,19.5);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-97,-22,194,44);

	// Слой 1
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(96.5,22);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-97,-22,194,44);

	this.addChild(this.instance_3,this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,191.5,42.5);


(lib.Символ5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.94,scaleY:0.94},9,cjs.Ease.get(-1)).to({scaleX:0.88,scaleY:0.88},10,cjs.Ease.get(1)).to({scaleX:0.94,scaleY:0.94},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389.5,-14.7,851.1,45.9);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhtAXQAAgsAgghQAhggAsAAQAuAAAgAgQAcAcAEAjIggAHQgjAJgiALQghANgfAQQgSAKgQAMQgUgcAAgkg");

	// Слой 2
	this.instance_1 = new lib.Символ7_1();
	this.instance_1.setTransform(-10.1,-12.9);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({x:-2.3,y:-1.4},4).to({x:-10.1,y:-12.9},4).to({x:-2.3,y:-1.4},4).to({x:-8.8,y:-14.1},4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-8.7,17.5,9.3);


(lib.Символ4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.42,x:9.5},4).to({scaleX:1,x:0},4).to({scaleX:0.42,x:9.5},4).to({scaleX:1,x:0},4).wait(52));

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
	this.instance = new lib.Символ7_1();
	this.instance.setTransform(-10.1,-12.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({x:-2.3,y:-1.4},4).to({x:-10.1,y:-12.9},4).to({x:-2.3,y:-1.4},4).to({x:-8.8,y:-14.1},4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-5.8,11.2,6.3);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(-85.3,0,1,1,0,-15,165);

	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(88.2,1.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.2,-22,234.4,44);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(-85.3,0,1,1,0,-15,165);

	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(88.2,1.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.2,-22,234.4,44);


(lib.sprite150 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape149("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,8.1,52.2,18.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:192.6,y:10},29).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-38.9,83.1,77.8);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(0,0,0.428,0.428);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.6,-31.8,42.3,62.2);


(lib.Символ2_1 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(1.1,0.1);

	// Слой 3
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(-90.1,-8.3);
	this.instance_1.alpha = 0.648;
	this.instance_1.compositeOperation = "lighter";

	this.instance_1.mask = mask;

	// Слой 1
	this.instance_2 = new lib.bbw();
	this.instance_2.setTransform(-75,-37.5);

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75,-37.5,150,75);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(6));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AIyG7QgPgEhEgIQhJgIgPgDI0dgEQk2gJhdhOQgkgfgKgtQgFgWAAg7QAAhuDFhvQCohhElhaQD6hOEag4QD/gzCagJIAAgEIG5AAQGqgrCvCzQBoBpAACeQAACggqBSQg/CAjIBsg");
	var mask_graphics_3 = new cjs.Graphics().p("A1bFLIgBgvQAAhuDFhxQCohfElhaQD6hOEag4QD/gzCagJIAAgEIG5AAQGqgrCvCzQBoBpAACcQAACUgjBSQgZADgbAGIudAEIg7AKIhfAAQh7gHgRgDI1bAAIg+ANg");
	var mask_graphics_8 = new cjs.Graphics().p("AIyG7QgPgEhEgIQhJgIgPgDI0dgEQk2gJhdhOQgkgfgKgtQgFgWAAg7QAAhuDFhvQCohhElhaQD6hOEag4QD/gzCagJIAAgEIG5AAQGqgrCvCzQBoBpAACeQAACggqBSQg/CAjIBsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-132.1,y:-27.2}).wait(3).to({graphics:mask_graphics_3,x:-132.1,y:-38.4}).wait(5).to({graphics:mask_graphics_8,x:-132.1,y:-27.2}).wait(4));

	// Слой 1
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.setTransform(-128.2,-1.5);

	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.setTransform(-128.2,-24);
	this.instance_2._off = true;

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,y:-24},3).wait(5).to({_off:false,y:-1.5},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},3).to({y:21},3).to({y:-21.7},2).to({_off:true,y:-1.5},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.4,-23.5,234.4,40.7);


(lib.Символ3_1 = function() {
	this.initialize();

	// Слой 3
	this.instance_1 = new lib.копияСимвол6();
	this.instance_1.setTransform(0.2,87.8);

	this.instance_2 = new lib.Символ6_1();
	this.instance_2.setTransform(41.2,73.5);

	// Слой 2
	this.instance_3 = new lib.Символ4_1();
	this.instance_3.setTransform(44.5,15.5);

	// Слой 1
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(57,95.5,1,1,0,0,0,97,95.5);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-13.5,194,204.6);


(lib.sprite152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		{
		    _first = true;
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		} */
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26));

	// Layer 5
	this.instance = new lib.sprite150();
	this.instance.setTransform(0.2,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:1.01,y:-42.5},2).to({scaleX:0.93,scaleY:1.08,y:-49.4},2).to({scaleX:0.83,scaleY:1.18,y:-60.8},2).to({scaleX:0.89,scaleY:1.11,x:0.1,y:-65.4},1).to({scaleX:0.94,scaleY:1.07,y:-68.6},1).to({scaleX:0.97,scaleY:1.03,x:0.2,y:-70.7},1).to({scaleX:1,scaleY:1,y:-72.6},2).to({scaleX:1,scaleY:1,y:-72.8},1).to({scaleX:1,scaleY:1,y:-72.5},1).to({scaleX:0.99,scaleY:1.01,y:-71.5},1).to({scaleX:0.97,scaleY:1.03,y:-69.6},1).to({scaleX:0.94,scaleY:1.06,y:-66.5},1).to({scaleX:0.89,scaleY:1.1,y:-62.2},1).to({scaleX:0.79,scaleY:1.2,y:-51.9},2).to({scaleX:1,scaleY:1,y:-40.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-32.8,52.2,18.2);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(4));

	// Слой 1
	this.instance = new lib.Символ3_1();
	this.instance.setTransform(24,4.1,0.6,0.6,0,0,0,97,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1.3},1).to({y:132.1},2).to({y:4.1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.1,-61.3,116.4,122.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.5,regY:-0.8,scaleX:1,scaleY:1,x:-0.5,y:-0.8},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:-0.9},0).wait(1).to({regX:0,regY:0,scaleX:1.13,scaleY:1.13,x:0,y:0},0).wait(1).to({regX:-0.5,regY:-0.8,scaleX:1.15,scaleY:1.15,x:-0.6,y:-0.9},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:-1},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({regX:0,regY:0,scaleX:1.26,scaleY:1.26,x:0,y:0},0).wait(1).to({regX:-0.5,regY:-0.8,scaleX:1.26,scaleY:1.26,x:-0.6,y:-1},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:-0.9},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({regX:0,regY:0,scaleX:1.13,scaleY:1.13,x:0,y:0},0).wait(1).to({regX:-0.5,regY:-0.8,scaleX:1.11,scaleY:1.11,x:-0.5,y:-0.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:-0.8},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-31.8,42.3,62.2);


(lib.копияСимвол16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(-1,41.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(5));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(3.7,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-18.5},5).wait(1));

	// Символ 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(21, 15, -4, 25))];
	this.instance_2.cache(-77,-76,155,153);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-74.5,157,155);


(lib.д = function() {
	this.initialize();

	// Layer 1
	this.arrow = new lib.sprite152();
	this.arrow.setTransform(7.4,20.4,0.127,0.191);

	this.addChild(this.arrow);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.1,14.2,6.6,3.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(79.2,72.5);

	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(75.5,74.5);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(21, 15, -4, 25))];
	this.instance_1.cache(-77,-76,155,153);

	this.instance_2 = new lib.копияСимвол16();
	this.instance_2.setTransform(75.5,74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,153);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(6));

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(-1,41.5);
	this.instance.shadow = new cjs.Shadow("#000000",0,0,3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(4).to({y:46.5,alpha:0},5).wait(1));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(3.7,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-18.5},5).to({y:-2},5).wait(1));

	// Символ 6
	this.instance_2 = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-74.5,157,155);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.setTransform(4.6,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-31},5).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(-1,33.5);
	this.instance_1.shadow = new cjs.Shadow("#000000",0,0,3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(5));

	// Слой 1
	this.instance_2 = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-81.5,157,169);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(80.1,75.5);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(75.5,81.5);

	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(75.5,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,167);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(79.2,72.5);

	this.instance_1 = new lib.k1();

	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(75.5,74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,149);


// stage content:



(lib.casinox_bbw_bonus_eng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		  bodyStyle.margin = 0;
		  bodyStyle.padding = 0;
		  
		
		
		document.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
			this.wolf.gotoAndPlay(1);
			this.hand.gotoAndPlay(1);
			this.pig.gotoAndPlay(1);
			this.pig2.gotoAndPlay(1);
		}
		
		
		document.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
			this.wolf.gotoAndPlay(4);
			this.hand.gotoAndPlay(7);
			this.pig.gotoAndPlay(7);
			this.pig2.gotoAndPlay(7);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.instance = new lib.д();
	this.instance.setTransform(498.2,281.6,2.744,2.744,0,179.4,-0.6,7.2,15.7);

	this.instance_1 = new lib.д();
	this.instance_1.setTransform(323,281.3,2.744,2.744,0,179.4,-0.6,7.2,15.7);

	this.instance_2 = new lib.д();
	this.instance_2.setTransform(146.2,283.1,2.744,2.744,0,179.4,-0.6,7.2,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 11
	this.instance_3 = new lib.Символ5_1();
	this.instance_3.setTransform(321,101.9,0.419,0.419);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ8_1();
	this.instance_4.setTransform(320,42.5,1,1,0,0,0,95,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.Символ24();
	this.instance_5.setTransform(321.6,210.6,1,1,0,0,0,75.5,81.5);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 3
	this.instance_6 = new lib.Символ2_1();
	this.instance_6.setTransform(536,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 7
	this.hand = new lib.Символ9_1();
	this.hand.setTransform(219.8,137.1,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// Слой 15
	this.instance_7 = new lib.Символ1();
	this.instance_7.setTransform(320,282.4,1.004,1.004);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 10
	this.pig2 = new lib.Символ22();
	this.pig2.setTransform(364.1,241.6,0.82,0.82);

	this.pig = new lib.Символ25();
	this.pig.setTransform(605.9,185.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pig},{t:this.pig2}]}).wait(1));

	// Слой 13
	this.instance_8 = new lib.Символ23();
	this.instance_8.setTransform(144.5,206.6,1,1,0,0,0,75.5,74.5);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 14
	this.wolf = new lib.Символ28();
	this.wolf.setTransform(124.6,80.9);

	this.timeline.addTween(cjs.Tween.get(this.wolf).wait(1));

	// Слой 1
	this.instance_9 = new lib.Символ29();
	this.instance_9.setTransform(494.1,206.6,1,1,0,0,0,75.5,74.5);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 5
	this.instance_10 = new lib.Символ4();
	this.instance_10.setTransform(319.9,156.9,0.896,0.896);
	this.instance_10.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-13, 8, -28, 0))];
	this.instance_10.cache(-360,-177,721,354);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(318.6,147.3,646,322.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;