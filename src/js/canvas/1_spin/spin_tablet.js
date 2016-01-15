(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 215,
	height: 235,
	fps: 35,
	color: "#C70000",
	manifest: [
		{src:"images/button.png", id:"button"},
		{src:"images/comp_bottom.png", id:"comp_bottom"},
		{src:"images/finger.png", id:"finger"},
		{src:"images/lines.png", id:"lines"},
		{src:"images/lines2.png", id:"lines2"},
		{src:"images/screen.png", id:"screen"},
		{src:"images/slot.png", id:"slot"},
		{src:"images/square.png", id:"square"},
		{src:"images/square2.png", id:"square2"}
	]
};



// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,37);


(lib.comp_bottom = function() {
	this.initialize(img.comp_bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,40);


(lib.finger = function() {
	this.initialize(img.finger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,58);


(lib.lines = function() {
	this.initialize(img.lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,23);


(lib.lines2 = function() {
	this.initialize(img.lines2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,23);


(lib.screen = function() {
	this.initialize(img.screen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,127);


(lib.slot = function() {
	this.initialize(img.slot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,275);


(lib.square = function() {
	this.initialize(img.square);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,29);


(lib.square2 = function() {
	this.initialize(img.square2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,24);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0504").s().p("AgyCMQgJgEgGgEQgGgDgHgHQgGgFgBgFQAAgEACgIQAJgUAMgYIAagvQAPgYAOgUIAdguIhGAJQgIABgHgCQgHgBgIgHIgWgeQgFgHABgDQACgDAGgCQARgEAOgCIBwgKQAKAAAHADQAGACAGAJIANAPIAKAOQAGAIAAAIQAAAHgHAIQgOASgWAfIgjAyQgSAcgOAaQgRAdgLAWQgDAGgDAAIgBABQgEAAgGgDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-14.3,21.1,28.6);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.button();
	this.instance.setTransform(-68,-18.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-18.3,136,37);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.finger();
	this.instance.setTransform(-20.1,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.1,-29,40,58);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.slot();
	this.instance.setTransform(-126,-137.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126,-137.5,252,275);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#420504").ss(1,1,1).p("AktmoIJbAAIAANRIpbAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#420505").s().p("AAHAeIAAg6IAYAAQAHAAAGACQAGACAFADQAKAIAAANQAAAHgDAFQgCAHgGADQgIAIgPAAgAAYAQIAHAAIAHgBIAFgEQADgCAAgCIABgHIAAAAIgBgFQAAgDgDgBIgFgEIgHgBIgHAAgAgPAeIgEgLIgXAAIgEALIgSAAIAag7IAQAAIAXA7gAglAGIANAAIgGgPg");
	this.shape_1.setTransform(-20.1,-35.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.2,-43.5,62.5,87);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.square2();
	this.instance.setTransform(-12.6,-11.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.6,-11.7,25,24);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.lines2();
	this.instance.setTransform(-23,-11.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-11.5,46,23);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.square();
	this.instance.setTransform(-37.2,-14.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.2,-14.4,75,29);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.lines();
	this.instance.setTransform(-37.2,-11.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.2,-11.6,75,23);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#420505").s().p("Av7AzIAAgFQADgnAfgaQAhgfAwAAIcRAAQAwAAAiAfQAeAaADAnIAAAFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.1,-5.2,204.1,10.4);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.screen();
	this.instance.setTransform(-102.1,-63.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.1,-63.4,204,127);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.comp_bottom();
	this.instance.setTransform(-125.1,-19.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.1,-19.9,250,40);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.slot();
	this.instance.setTransform(-126,-137.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126,-137.5,252,275);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.slot();
	this.instance.setTransform(-126,-137.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126,-137.5,252,275);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(0,45.7);

	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(0,-52.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0504").s().p("AAuQ/IhUhwIAABwIg4AAIAAjKIA0AAIBSBrIAAhrIA3AAIAADKgAAuA4IhUhvIAABvIg4AAIAAjJIA0AAIBSBrIAAhrIA3AAIAADJgAAut0IhUhwIAABwIg4AAIAAjKIA0AAIBSBrIAAhrIA3AAIAADKg");
	this.shape.setTransform(1,0);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-108.8,21.1,217.6);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(0,45.8);

	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(0,-52.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0504").s().p("AgbQ/IAAjKIA3AAIAADKgAgbA4IAAjJIA3AAIAADJgAgbt0IAAjKIA3AAIAADKg");
	this.shape.setTransform(0.6,0);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-108.8,21.1,217.6);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(2.2,45.7);

	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(2.2,-52.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B0504").s().p("AAoRAIgoh0IgnB0IgxAAIhEjMIA8AAIAjB1IAnh1IAuAAIAnB1IAjh1IA7AAIhEDMgAAoA4IgohyIgnByIgxAAIhEjJIA8AAIAjB1IAnh1IAuAAIAnB1IAjh1IA7AAIhEDJgAAotzIgoh0IgnB0IgxAAIhEjMIA8AAIAjB1IAnh1IAuAAIAnB1IAjh1IA7AAIhEDMg");

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.7,-108.8,31.5,217.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwaE+IAAojQPZivRcCvIAAIjQwSiXwjCXg");
	mask.setTransform(-2.5,2.6);

	// Символ 23
	this.instance = new lib.Символ23();
	this.instance.setTransform(72.7,-43.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:-48.8},0).wait(1).to({y:-52.5},0).wait(1).to({y:-55},0).wait(1).to({y:-56.9},0).wait(1).to({y:-58.3},0).wait(1).to({y:-59.4},0).wait(1).to({y:-60.3},0).wait(1).to({y:-61},0).wait(1).to({y:-61.6},0).wait(1).to({y:-62.1},0).wait(1).to({y:-62.6},0).wait(1).to({y:-63},0).wait(1).to({y:-63.4},0).wait(1).to({y:-63.7},0).to({y:17.6},10,cjs.Ease.get(-1)).to({y:98.8},10,cjs.Ease.get(1)).wait(63));

	// Символ 22
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(-2.3,-47.7);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({y:-52.8},0).wait(1).to({y:-56.5},0).wait(1).to({y:-59},0).wait(1).to({y:-60.9},0).wait(1).to({y:-62.3},0).wait(1).to({y:-63.4},0).wait(1).to({y:-64.3},0).wait(1).to({y:-65},0).wait(1).to({y:-65.6},0).wait(1).to({y:-66.1},0).wait(1).to({y:-66.6},0).wait(1).to({y:-67},0).wait(1).to({y:-67.4},0).wait(1).to({y:-67.7},0).to({y:13.6},10,cjs.Ease.get(-1)).to({y:94.8},10,cjs.Ease.get(1)).wait(70));

	// Символ 21
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(-76.7,-43.6);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-48.8},0).wait(1).to({y:-52.5},0).wait(1).to({y:-55},0).wait(1).to({y:-56.8},0).wait(1).to({y:-58.3},0).wait(1).to({y:-59.4},0).wait(1).to({y:-60.2},0).wait(1).to({y:-61},0).wait(1).to({y:-61.6},0).wait(1).to({y:-62.1},0).wait(1).to({y:-62.5},0).wait(1).to({y:-62.9},0).wait(1).to({y:-63.3},0).wait(1).to({y:-63.6},0).to({y:17.6},10,cjs.Ease.get(-1)).to({y:98.9},10,cjs.Ease.get(1)).wait(76));

	// Слой 9
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(114.1,84.3,0.652,0.652,0,0,0,0,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).wait(1).to({regX:-0.1,regY:-0.1,x:93.5,y:83,alpha:0.294},0).wait(1).to({x:80.4,y:82.2,alpha:0.481},0).wait(1).to({x:71.7,y:81.7,alpha:0.606},0).wait(1).to({x:65.4,y:81.4,alpha:0.695},0).wait(1).to({x:60.5,y:81.1,alpha:0.766},0).wait(1).to({x:56.5,y:80.9,alpha:0.822},0).wait(1).to({x:53.3,y:80.7,alpha:0.868},0).wait(1).to({x:50.8,y:80.5,alpha:0.904},0).wait(1).to({x:48.7,y:80.4,alpha:0.933},0).wait(1).to({x:47.2,y:80.3,alpha:0.956},0).wait(1).to({x:46,alpha:0.973},0).wait(1).to({x:45.1,y:80.2,alpha:0.985},0).wait(1).to({x:44.5,alpha:0.994},0).wait(1).to({x:44.2,alpha:0.998},0).wait(1).to({regX:0,regY:0.1,x:44.1,y:80.3,alpha:1},0).wait(3).to({scaleX:0.57,scaleY:0.57,x:38.7,y:79.4},6,cjs.Ease.get(-1)).to({scaleX:0.65,scaleY:0.65,x:44.1,y:80.3},6,cjs.Ease.get(1)).wait(26));

	// Слой 10
	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(-1.5,65.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({scaleX:0.88,scaleY:0.88,y:66.6},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:65.8},6,cjs.Ease.get(1)).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-29.2,175.8,113.6);


(lib.Символ15копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(-8.4,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({alpha:0},17).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1UYvMAAAgxeMAqpAAAMAAAAxegAuiPoIYkAAIAAndI4kAAgAGiE9IGIAAIAAmGImIAAgAwQE5IFZAAIAAlzIlZAAgAkpEDIFpAAIAAlqIlpAAg");
	var mask_graphics_92 = new cjs.Graphics().p("A1UYvMAAAgxeMAqpAAAMAAAAxegAuiPoIYkAAIAAndI4kAAgAGiE9IGIAAIAAmGImIAAgAwQE5IFZAAIAAlzIlZAAgAkpEDIFpAAIAAlqIlpAAg");
	var mask_graphics_109 = new cjs.Graphics().p("A1UYvMAAAgxeMAqpAAAMAAAAxegAuiPoIYkAAIAAndI4kAAgAGiE9IGIAAIAAmGImIAAgAwQE5IFZAAIAAlzIlZAAgAkpEDIFpAAIAAlqIlpAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:5.1,y:13.3}).wait(92).to({graphics:mask_graphics_92,x:5.1,y:13.3}).wait(17).to({graphics:mask_graphics_109,x:5.1,y:13.3}).wait(1));

	// Слой 1
	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(-126,-137.5);

	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.alpha = 0;

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},92).to({state:[{t:this.instance_3}]},17).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92).to({_off:false},0).to({_off:true,alpha:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-137.5,252,275);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 17
	this.instance = new lib.Символ15();
	this.instance.setTransform(48.5,-10,0.198,0.198);
	this.instance._off = true;

	this.instance_1 = new lib.Символ15копия();
	this.instance_1.setTransform(-0.3,-6.2,1.004,1.004);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},78).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},109).to({state:[]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:35,y:-9},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:26.6,y:-8.3},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:21,y:-7.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:16.9,y:-7.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:13.7,y:-7.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:11.1,y:-7.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:8.9,y:-7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:7.2,y:-6.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:5.7,y:-6.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:4.6,y:-6.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:3.6,y:-6.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:2.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:2.1,y:-6.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:0.7,y:-6.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:0.3},0).wait(1).to({scaleX:1,scaleY:1,x:0},0).to({_off:true},1).wait(114));

	// Слой 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al9H4IAAvwIL7AAIAAPwg");
	mask.setTransform(49,-10.5);

	// Слой 13
	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(48.5,-10,0.198,0.198);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(62).to({_off:false},0).to({alpha:1},15).to({_off:true},1).wait(133));

	// Слой 6
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(48.5,84);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).wait(1).to({y:42.1},0).wait(1).to({y:27.1},0).wait(1).to({y:17.2},0).wait(1).to({y:9.3},0).wait(1).to({y:2.5},0).wait(1).to({y:-2.8},0).wait(1).to({y:-6.8},0).wait(1).to({y:-9.8},0).wait(1).to({y:-12.1},0).wait(1).to({y:-13.7},0).wait(1).to({y:-14.8},0).wait(1).to({y:-15.5},0).wait(1).to({y:-15.9},0).wait(1).to({y:-16},0).wait(16).to({alpha:0.465},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.082},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(126));

	// Слой 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AoEIIIAAwPIQJAAIAAQPg");
	mask_1.setTransform(-41,-17);

	// Символ 12
	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(-123.3,14.8);
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.2,x:-76.4,y:15},0).wait(1).to({x:-60.2},0).wait(1).to({x:-49.4},0).wait(1).to({x:-40.5},0).wait(1).to({x:-33.6},0).wait(1).to({x:-28.6},0).wait(1).to({x:-24.9},0).wait(1).to({x:-22.4},0).wait(1).to({x:-20.7},0).wait(1).to({x:-19.7},0).wait(1).to({x:-19.1},0).wait(1).to({regX:0,regY:0,x:-18.8,y:14.8},0).wait(30).to({alpha:0},5).to({_off:true},1).wait(128));

	// Символ 11
	this.instance_5 = new lib.Символ11();
	this.instance_5.setTransform(-162.4,14.6);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},0).wait(1).to({x:-115.4},0).wait(1).to({x:-99.2},0).wait(1).to({x:-88.4},0).wait(1).to({x:-79.5},0).wait(1).to({x:-72.6},0).wait(1).to({x:-67.6},0).wait(1).to({x:-63.9},0).wait(1).to({x:-61.4},0).wait(1).to({x:-59.7},0).wait(1).to({x:-58.7},0).wait(1).to({x:-58.1},0).wait(1).to({x:-57.9},0).wait(27).to({alpha:0},5).to({_off:true},1).wait(128));

	// Символ 10
	this.instance_6 = new lib.Символ10();
	this.instance_6.setTransform(-148.2,-16.1);
	this.instance_6._off = true;

	this.instance_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).wait(1).to({regX:0.2,regY:0.1,x:-100.9,y:-16},0).wait(1).to({x:-84.7},0).wait(1).to({x:-73.9},0).wait(1).to({x:-65},0).wait(1).to({x:-58.1},0).wait(1).to({x:-53.1},0).wait(1).to({x:-49.4},0).wait(1).to({x:-46.9},0).wait(1).to({x:-45.2},0).wait(1).to({x:-44.2},0).wait(1).to({x:-43.6},0).wait(1).to({regX:0,regY:0,x:-43.7,y:-16.1},0).wait(33).to({alpha:0},5).to({_off:true},1).wait(128));

	// Символ 9
	this.instance_7 = new lib.Символ9();
	this.instance_7.setTransform(-148.2,-46.6);
	this.instance_7._off = true;

	this.instance_7.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.1,x:-100.9,y:-46.7},0).wait(1).to({x:-84.7},0).wait(1).to({x:-73.9},0).wait(1).to({x:-65},0).wait(1).to({x:-58.1},0).wait(1).to({x:-53.1},0).wait(1).to({x:-49.4},0).wait(1).to({x:-46.9},0).wait(1).to({x:-45.2},0).wait(1).to({x:-44.2},0).wait(1).to({x:-43.6},0).wait(1).to({regX:0,regY:0,x:-43.7,y:-46.6},0).wait(36).to({alpha:0},5).to({_off:true},1).wait(128));

	// Слой 5
	this.instance_8 = new lib.Символ8();
	this.instance_8.setTransform(0,59.9,1,3.039);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({scaleY:1,y:49.3},1).wait(1).to({y:26},0).wait(1).to({y:8},0).wait(1).to({y:-5.9},0).wait(1).to({y:-17},0).wait(1).to({y:-26.1},0).wait(1).to({y:-33.9},0).wait(1).to({y:-40.8},0).wait(1).to({y:-47},0).wait(1).to({y:-52.3},0).wait(1).to({y:-56.8},0).wait(1).to({y:-60.8},0).wait(1).to({y:-64.1},0).wait(1).to({y:-67.1},0).wait(1).to({y:-69.6},0).wait(1).to({y:-71.8},0).wait(1).to({y:-73.7},0).wait(1).to({y:-75.4},0).wait(1).to({y:-76.9},0).wait(1).to({y:-78.2},0).wait(48).to({alpha:0},5).to({_off:true},1).wait(128));

	// Символ 4
	this.instance_9 = new lib.Символ7();
	this.instance_9.setTransform(0,62.9,1,0.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).wait(2).to({regX:-0.1,scaleY:0.35,x:-0.1,y:47.8},0).wait(1).to({scaleY:0.46,y:36.1},0).wait(1).to({scaleY:0.55,y:27},0).wait(1).to({scaleY:0.62,y:19.8},0).wait(1).to({scaleY:0.67,y:13.9},0).wait(1).to({scaleY:0.72,y:8.9},0).wait(1).to({scaleY:0.77,y:4.4},0).wait(1).to({scaleY:0.8,y:0.4},0).wait(1).to({scaleY:0.84,y:-3},0).wait(1).to({scaleY:0.87,y:-6},0).wait(1).to({scaleY:0.89,y:-8.5},0).wait(1).to({scaleY:0.91,y:-10.7},0).wait(1).to({scaleY:0.93,y:-12.6},0).wait(1).to({scaleY:0.95,y:-14.3},0).wait(1).to({scaleY:0.96,y:-15.7},0).wait(1).to({scaleY:0.97,y:-16.9},0).wait(1).to({scaleY:0.98,y:-18},0).wait(1).to({scaleY:0.99,y:-19},0).wait(1).to({regX:0,scaleY:1,x:0,y:-19.9},0).wait(48).to({alpha:0},5).to({_off:true},1).wait(128));

	// Символ 5
	this.instance_10 = new lib.Символ5();
	this.instance_10.setTransform(0,63.4);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},9).wait(68).to({alpha:0},5).to({_off:true},1).wait(128));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.1,43.5,250,40);


// stage content:



(lib.spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Режим изоляции
	this.instance = new lib.Символ6();
	this.instance.setTransform(108.1,122.3,0.839,0.839);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.7,181.9,209.8,128);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;