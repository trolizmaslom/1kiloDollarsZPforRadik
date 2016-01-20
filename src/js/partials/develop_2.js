var canvas, stage, exportRoot, exportRoot2;

function init() {
    var doc = $('html').attr('lang');

    if (doc=='ru'){
       canvas5 = document.getElementById("header_ru");
    }
    else{
        canvas4 = document.getElementById("header_en");
    }
    canvas = document.getElementById("spin");
    canvas2 = document.getElementById("web");
    canvas3 = document.getElementById("identety");
    canvas6 = document.getElementById("cards");
    canvas7 = document.getElementById("clock");
    canvas8 = document.getElementById("guaranteed");
    images = images||{};


    var loader = new createjs.LoadQueue(false);
    if (doc=='ru'){
       loader.addEventListener("complete", handleComplete5);
    }
    else{
        loader.addEventListener("complete", handleComplete4);
    }
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("complete", handleComplete2);
    loader.addEventListener("complete", handleComplete3);
    loader.addEventListener("complete", handleComplete6);
    loader.addEventListener("complete", handleComplete7);
    loader.addEventListener("complete", handleComplete8);
    loader.loadManifest(lib.properties.manifest);
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

function handleComplete2(evt) {
    exportRoot2 = new lib.web();

    stage = new createjs.Stage(canvas2);
    stage.addChild(exportRoot2);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function handleComplete3(evt) {
    exportRoot = new lib.identety();

    stage = new createjs.Stage(canvas3);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function handleComplete4(evt) {
    exportRoot = new lib.header_en();

    stage = new createjs.Stage(canvas4);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function handleComplete5(evt) {
    exportRoot = new lib.header_ru();

    stage = new createjs.Stage(canvas5);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function handleComplete6(evt) {
    exportRoot = new lib.cards();

    stage = new createjs.Stage(canvas6);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function handleComplete7(evt) {
    exportRoot = new lib.clock();

    stage = new createjs.Stage(canvas7);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function handleComplete8(evt) {
    exportRoot = new lib.guaranteed();

    stage = new createjs.Stage(canvas8);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}


$(document).ready(function(){
    init();
});

$(window).load(function(){

});

$(window).resize(function(){

});