var canvas, stage, exportRoot, exportRoot2;

function init() {
    canvas = document.getElementById("spin");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);

     console.log(lib.properties);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
    exportRoot = new lib.spin();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}



function init2() {
    canvas2 = document.getElementById("web");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad2);
    loader.addEventListener("complete", handleComplete2);
    loader.loadManifest(lib.properties.manifest);
}

function handleComplete2(evt) {
    exportRoot2 = new lib.web();

    stage = new createjs.Stage(canvas2);
    stage.addChild(exportRoot2);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    console.log(lib);
}
function handleFileLoad2(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}


function init3() {
    canvas3 = document.getElementById("identety");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad3);
    loader.addEventListener("complete", handleComplete3);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad3(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete3(evt) {
    exportRoot = new lib.identety();

    stage = new createjs.Stage(canvas3);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function init4() {
    canvas4 = document.getElementById("header_en");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad4);
    loader.addEventListener("complete", handleComplete4);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad4(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete4(evt) {
    exportRoot = new lib.header_en();

    stage = new createjs.Stage(canvas4);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function init5() {
    canvas5 = document.getElementById("header_ru");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad5);
    loader.addEventListener("complete", handleComplete5);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad5(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete5(evt) {
    exportRoot = new lib.header_ru();

    stage = new createjs.Stage(canvas5);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}



$(document).ready(function(){
    init();
    init2();
    init3();
    init4();
    init5();
});

$(window).load(function(){

});

$(window).resize(function(){

});