(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 550,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/medo_medo_atlas_.png", id:"medo_medo_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"medo_medo_atlas_", frames: [[1054,1404,525,700],[0,2106,525,700],[3162,1404,525,700],[527,2106,525,700],[2108,1404,525,700],[2635,0,525,700],[0,0,525,700],[2635,1404,525,700],[3162,0,525,700],[0,702,525,700],[1581,0,525,700],[1581,1404,525,700],[2108,0,525,700],[527,0,525,700],[1054,0,525,700],[527,702,525,700],[1054,702,525,700],[1581,702,525,700],[2108,702,525,700],[2635,702,525,700],[3162,702,525,700],[0,1404,525,700],[527,1404,525,700]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.belly_beige = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.belly_black = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.belly_brown = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.belly_peach = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.belly_white = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.black = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.brown = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ears_brown = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ears_grey = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ears_rosa = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ears_white = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eye_blue = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eye_brown = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eye_green = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.light_brown = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.shirt_black = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.shirt_blue = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.shirt_green = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.shirt_pink = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.shirt_red = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.shirt_white = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.shirt_yellow = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.white = function() {
	this.spriteSheet = ss["medo_medo_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.white_fur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACbAAQAAA/guAuQguAug/AAQg/AAgtguQguguAAg/QAAg/AugtQAtguA/AAQA/AAAuAuQAuAtAAA/g");
	this.shape.setTransform(15.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape_1.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,33,33);


(lib.soft_fur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE7732").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.shirt_yellow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD428").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.shirt_white_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACWAAQAAA9gsAtQgtAsg9AAQg8AAgtgsQgsgtAAg9QAAg8AsgtQAtgsA8AAQA9AAAtAsQAsAtAAA8g");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoBpQgsgsgBg9QABg9AsgrQArgsA9gBQA9ABAsAsQAtArgBA9QABA9gtAsQgsAtg9gBQg9ABgrgtg");
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,32);


(lib.shirt_red_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F03F40").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.shirt_pink_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D154D4").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.shirt_green_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61CF4D").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.shirt_blue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4FAAD1").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.shirt_black_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.eye_green_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2DCC74").s().p("AhsBtQgugtAAhAQAAgZAJgXQALghAagbQAtguA/AAQBAAAAtAuQAaAbAMAhQAIAXgBAZQAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.eye_brown_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB6039").s().p("AhsBtQgugtAAhAQAAgZAJgXQALghAagbQAtguA/AAQBAAAAtAuQAaAbAMAhQAIAXgBAZQAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.eye_blue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30AECF").s().p("AhsBtQgugtAAhAQAAgZAJgXQALghAagbQAtguA/AAQBAAAAtAuQAaAbAMAhQAIAXgBAZQAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.ear_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACaAAQAABAgtAtQgtAthAAAQg+AAgugtQgtgtAAhAQAAg+AtguQAugtA+AAQBAAAAtAtQAtAuAAA+g");
	this.shape.setTransform(15.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsBtQgtguAAg/QAAg/AtgtQAtgtA/AAQA/AAAuAtQAtAtAAA/QAAA/gtAuQguAtg/AAQg/AAgtgtg");
	this.shape_1.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32.9,32.9);


(lib.ear_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE7568").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.ear_brown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A16033").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.ear_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.brown_fur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C2D17").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.black_fur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.bally_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACWAAQAAA9gsAtQgtAsg9AAQgSAAgRgEQgngKgfgeQgSgSgKgVQgQgfAAgkQAAgjAQgfQAKgVASgSQAsgsA9AAQA9AAAtAsQAkAlAGAxQACAKAAAJg");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjCSQgngKgfgfQgRgRgLgVQgQgfAAgkQAAgjAQgfQALgUARgSQAsgsA9gBQA9ABAsAsQAkAkAHAxQABAKAAAJQABA9gtAsQgsAtg9gBQgSAAgRgDg");
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,32);


(lib.bally_peach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF5B40").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.bally_brown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#723110").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.bally_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.bally_beige = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2AB50").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.shirt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.shirt_white.addEventListener("click", playGoTo.bind(this));
		function playGoTo() {
			this.gotoAndStop("5");
			isPlaying = false;
		}
		
		this.shirt_black.addEventListener("click", playGoTo_2.bind(this));
		function playGoTo_2() {
			this.gotoAndStop("0");
			isPlaying = false;
		}
		
		this.shirt_blue.addEventListener("click", playGoTo_3.bind(this));
		function playGoTo_3() {
			this.gotoAndStop("1");
			isPlaying = false;
		}
		
		this.shirt_green.addEventListener("click", playGoTo_4.bind(this));
		function playGoTo_4() {
			this.gotoAndStop("2");
			isPlaying = false;
		}
		
		this.shirt_pink.addEventListener("click", playGoTo_5.bind(this));
		function playGoTo_5() {
			this.gotoAndStop("3");
			isPlaying = false;
		}
		
		this.shirt_red.addEventListener("click", playGoTo_6.bind(this));
		function playGoTo_6() {
			this.gotoAndStop("4");
			isPlaying = false;
		}
		
		this.shirt_yellow.addEventListener("click", playGoTo_7.bind(this));
		function playGoTo_7() {
			this.gotoAndStop("6");
			isPlaying = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// actiona
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBVQABgtAAgrIgBhAIg2ABIAAgSICBAAIAAASQgagBgcAAIAABAIABBYg");
	this.shape.setTransform(551,163.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAnBWQgNgmgGgMQgHgQgKgEQgFgEgTAAIgUAAQAAArACAfIgYAAQACgpAAgvQAAgvgCgjIASAAIAPAAIAVgBQA3AAAAAoQAAAhggAMIAAABQAOAEAJAQQAIANATA0gAgqhCIABA/IAPAAQAyAAAAghQAAgfgoAAQgQAAgKABg");
	this.shape_1.setTransform(536.8,163.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBVQACgqAAguQAAgvgCgiIAXAAQgCAkAAAtQAAAuACAqg");
	this.shape_2.setTransform(524.1,163.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAmBVIABhRIhNAAIABBRIgZAAIAChYQAAgsgCglIAZAAIgBBJIBNAAIgBhJIAYAAQgCAkAAAtQAAAvACApg");
	this.shape_3.setTransform(511.5,163.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag2BTIAEgVQAWAIAUAAQArAAAAgZQAAgNgLgJQgJgGgUgLQgYgIgKgJQgNgNAAgSQAAgUANgMQAQgOAZAAQAfAAAMAEIgDAVQgUgGgWAAQghAAAAAXQAAALAKAHQAHAFATAJQAZALALAHQAQAPAAAVQABAxhCAAQgZAAgTgGg");
	this.shape_4.setTransform(495.8,163.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(7));

	// buttons
	this.shirt_yellow = new lib.shirt_yellow_1();
	this.shirt_yellow.parent = this;
	this.shirt_yellow.setTransform(567.4,234.5,1,1,0,0,0,16,16);
	new cjs.ButtonHelper(this.shirt_yellow, 0, 1, 1);

	this.shirt_red = new lib.shirt_red_1();
	this.shirt_red.parent = this;
	this.shirt_red.setTransform(523.5,234.5,1,1,0,0,0,16,16);
	new cjs.ButtonHelper(this.shirt_red, 0, 1, 1);

	this.shirt_pink = new lib.shirt_pink_1();
	this.shirt_pink.parent = this;
	this.shirt_pink.setTransform(478.5,234.5,1,1,0,0,0,16,16);
	new cjs.ButtonHelper(this.shirt_pink, 0, 1, 1);

	this.shirt_green = new lib.shirt_green_1();
	this.shirt_green.parent = this;
	this.shirt_green.setTransform(590.9,195,1,1,0,0,0,16,16);
	new cjs.ButtonHelper(this.shirt_green, 0, 1, 1);

	this.shirt_blue = new lib.shirt_blue_1();
	this.shirt_blue.parent = this;
	this.shirt_blue.setTransform(546.4,195,1,1,0,0,0,16,16);
	new cjs.ButtonHelper(this.shirt_blue, 0, 1, 1);

	this.shirt_black = new lib.shirt_black_1();
	this.shirt_black.parent = this;
	this.shirt_black.setTransform(501,195,1,1,0,0,0,16,16);
	new cjs.ButtonHelper(this.shirt_black, 0, 1, 1);

	this.shirt_white = new lib.shirt_white_1();
	this.shirt_white.parent = this;
	this.shirt_white.setTransform(454.5,194.5,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.shirt_white, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shirt_white},{t:this.shirt_black},{t:this.shirt_blue},{t:this.shirt_green},{t:this.shirt_pink},{t:this.shirt_red},{t:this.shirt_yellow}]}).wait(7));

	// Layer 1
	this.instance = new lib.shirt_black();
	this.instance.parent = this;

	this.instance_1 = new lib.shirt_blue();
	this.instance_1.parent = this;

	this.instance_2 = new lib.shirt_green();
	this.instance_2.parent = this;

	this.instance_3 = new lib.shirt_pink();
	this.instance_3.parent = this;

	this.instance_4 = new lib.shirt_red();
	this.instance_4.parent = this;

	this.instance_5 = new lib.shirt_white();
	this.instance_5.parent = this;

	this.instance_6 = new lib.shirt_yellow();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.9,700);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.eye_blue.addEventListener("click", playGoTo.bind(this));
		function playGoTo() {
			this.gotoAndStop("0");
			isPlaying = false;
		}
		
		this.eye_brown.addEventListener("click", playGoTo_2.bind(this));
		function playGoTo_2() {
			this.gotoAndStop("1");
			isPlaying = false;
		}
		
		this.eye_green.addEventListener("click", playGoTo_3.bind(this));
		function playGoTo_3() {
			this.gotoAndStop("2");
			isPlaying = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// actiona
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2BTIAEgVQAWAIAUAAQArAAAAgZQAAgNgLgJQgJgGgUgLQgYgIgKgJQgNgNAAgSQAAgUANgMQAQgOAZAAQAgAAALAEIgDAVQgUgGgWAAQghAAAAAXQAAALAKAHQAHAFATAJQAZALALAHQAQAPAAAVQABAxhCAAQgZAAgTgGg");
	this.shape.setTransform(545.3,361);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0BVQACgpAAgvQAAgugCgjIBhAAIgBATQgkgBgmAAIABA3QAgAAAcgCIAAASIg8gBIABA/QApAAAogCIgBAUg");
	this.shape_1.setTransform(532.2,360.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNBVQACgbAAgdQAAgQgPgaQgJgQgUgdQgPgXAAgDIAbAAQAAADAXAnQAVAmAAALIABAAQAAgLAWgmQAVglAAgFIAaAAQAAAEgQAYQgXAhgHAMQgQAaAAAOIABA4g");
	this.shape_2.setTransform(516.9,360.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0BVQABgpAAgvQAAgugBgjIBhAAIgBATQgkgBgmAAIABA3QAgAAAcgCIAAASIg8gBIABA/QApAAAogCIgBAUg");
	this.shape_3.setTransform(503.3,360.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	// buttons
	this.eye_green = new lib.eye_green_1();
	this.eye_green.parent = this;
	this.eye_green.setTransform(567.9,389.5,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.eye_green, 0, 1, 1);

	this.eye_brown = new lib.eye_brown_1();
	this.eye_brown.parent = this;
	this.eye_brown.setTransform(523.4,389.5,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.eye_brown, 0, 1, 1);

	this.eye_blue = new lib.eye_blue_1();
	this.eye_blue.parent = this;
	this.eye_blue.setTransform(478,389.5,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.eye_blue, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eye_blue},{t:this.eye_brown},{t:this.eye_green}]}).wait(3));

	// Layer 1
	this.instance = new lib.eye_blue();
	this.instance.parent = this;

	this.instance_1 = new lib.eye_brown();
	this.instance_1.parent = this;

	this.instance_2 = new lib.eye_green();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,583.4,700);


(lib.ears = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.ear_white.addEventListener("click", playGoTo.bind(this));
		function playGoTo() {
			this.gotoAndStop("3");
			isPlaying = false;
		}
		
		this.ear_brown.addEventListener("click", playGoTo_2.bind(this));
		function playGoTo_2() {
			this.gotoAndStop("0");
			isPlaying = false;
		}
		
		this.ear_black.addEventListener("click", playGoTo_3.bind(this));
		function playGoTo_3() {
			this.gotoAndStop("1");
			isPlaying = false;
		}
		
		this.ear_pink.addEventListener("click", playGoTo_4.bind(this));
		function playGoTo_4() {
			this.gotoAndStop("2");
			isPlaying = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// actiona
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2BTIAEgVQAWAIAUAAQArAAAAgZQAAgNgMgJQgIgGgUgLQgYgIgKgJQgNgNAAgSQAAgUANgMQAPgOAaAAQAfAAANAEIgEAVQgUgGgWAAQghAAABAXQgBALAKAHQAHAFATAJQAZALALAHQAQAPABAVQgBAxhCAAQgYAAgTgGg");
	this.shape.setTransform(548.4,546.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAnBWQgNgmgFgMQgIgQgJgEQgGgEgTAAIgUAAQAAArACAfIgZAAQACgpAAgvQAAgvgCgjIATAAIAPAAIAUgBQA4AAABAoQAAAhghAMIAAABQAPAEAJAQQAHANAUA0gAgqhCIABA/IAPAAQAyAAAAghQAAgfgpAAQgPAAgKABg");
	this.shape_1.setTransform(534.1,546.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA1BVQAAgJgQguIhKAAQgRAuAAAJIgaAAQAAgFAihPQAihNAAgIIAcAAQAAAHAhBNQAgBOAAAHgAggAMIA/AAQgfhLAAgFIAAAAQAAAEggBMg");
	this.shape_2.setTransform(516.8,546.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0BVQABgpABgvQgBgugBgjIBiAAIgBATQglgBgnAAIABA3QAiAAAbgCIAAASIg9gBIABA/QAqAAAogCIgBAUg");
	this.shape_3.setTransform(502.3,546.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// buttons
	this.ear_pink = new lib.ear_pink();
	this.ear_pink.parent = this;
	this.ear_pink.setTransform(591,577.5,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.ear_pink, 0, 1, 1);

	this.ear_black = new lib.ear_black();
	this.ear_black.parent = this;
	this.ear_black.setTransform(546.5,577.5,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.ear_black, 0, 1, 1);

	this.ear_brown = new lib.ear_brown();
	this.ear_brown.parent = this;
	this.ear_brown.setTransform(501,577.5,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.ear_brown, 0, 1, 1);

	this.ear_white = new lib.ear_white();
	this.ear_white.parent = this;
	this.ear_white.setTransform(454.6,577,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.ear_white, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ear_white},{t:this.ear_brown},{t:this.ear_black},{t:this.ear_pink}]}).wait(4));

	// Layer 1
	this.instance = new lib.ears_brown();
	this.instance.parent = this;

	this.instance_1 = new lib.ears_grey();
	this.instance_1.parent = this;

	this.instance_2 = new lib.ears_rosa();
	this.instance_2.parent = this;

	this.instance_3 = new lib.ears_white();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.5,700);


(lib.belly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.bally_beige.addEventListener("click", playGoTo.bind(this));
		function playGoTo() {
			this.gotoAndStop("0");
			isPlaying = false;
		}
		
		this.bally_black.addEventListener("click", playGoTo_2.bind(this));
		function playGoTo_2() {
			this.gotoAndStop("1");
			isPlaying = false;
		}
		
		this.bally_brown.addEventListener("click", playGoTo_3.bind(this));
		function playGoTo_3() {
			this.gotoAndStop("2");
			isPlaying = false;
		}
		
		this.bally_peach.addEventListener("click", playGoTo_4.bind(this));
		function playGoTo_4() {
			this.gotoAndStop("3");
			isPlaying = false;
		}
		
		this.bally_white.addEventListener("click", playGoTo_5.bind(this));
		function playGoTo_5() {
			this.gotoAndStop("4");
			isPlaying = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// actiona
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBVQACgbAAgdQAAgQgPgaQgJgQgUgdQgPgXAAgDIAbAAQAAADAXAnQAVAmAAALIABAAQAAgLAWgmQAVglAAgFIAaAAQAAAEgQAYQgXAhgHAMQgQAaAAAOIABA4g");
	this.shape.setTransform(553.3,431.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgzBVQACggAAg4QAAgxgCggIAZAAQgCAaAAA3IgBBGIBRgBIgBATg");
	this.shape_1.setTransform(540.4,431.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgzBVQACggAAg4QAAgxgCggIAZAAQgCAaAAA3IgBBGIBRgBIgBATg");
	this.shape_2.setTransform(527.2,431.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0BVQABgpAAgvQAAgugBgjIBiAAIgBATQglgBgnAAIABA3QAiAAAbgCIAAASIg9gBIABA/QArAAAngCIgBAUg");
	this.shape_3.setTransform(513.3,431.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag6BVQABgpAAgvQAAgugBgjIAPAAIATgBIAUAAQA1AAAAAmQAAAdgaAKIAAABQAkAHAAAhQABAZgWAOQgVAOgkAAIgngBgAglAEQABAjABAbQAFACAMAAQAeAAANgJQANgHAAgRQAAggg4AAIgTABgAgmhCQABAJAAAtIAPAAQAYAAALgGQANgHAAgQQABgbgjAAQgTAAgLACg");
	this.shape_4.setTransform(498.1,431.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(5));

	// buttons
	this.bally_beige = new lib.bally_beige();
	this.bally_beige.parent = this;
	this.bally_beige.setTransform(479.1,463,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.bally_beige, 0, 1, 1);

	this.bally_black = new lib.bally_black();
	this.bally_black.parent = this;
	this.bally_black.setTransform(522.6,463,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.bally_black, 0, 1, 1);

	this.bally_brown = new lib.bally_brown();
	this.bally_brown.parent = this;
	this.bally_brown.setTransform(568.1,463,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.bally_brown, 0, 1, 1);

	this.bally_peach = new lib.bally_peach();
	this.bally_peach.parent = this;
	this.bally_peach.setTransform(501.1,499.5,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.bally_peach, 0, 1, 1);

	this.bally_white = new lib.bally_white();
	this.bally_white.parent = this;
	this.bally_white.setTransform(547.9,501,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.bally_white, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bally_white},{t:this.bally_peach},{t:this.bally_brown},{t:this.bally_black},{t:this.bally_beige}]}).wait(5));

	// Layer 1
	this.instance = new lib.belly_beige();
	this.instance.parent = this;

	this.instance_1 = new lib.belly_black();
	this.instance_1.parent = this;

	this.instance_2 = new lib.belly_brown();
	this.instance_2.parent = this;

	this.instance_3 = new lib.belly_peach();
	this.instance_3.parent = this;

	this.instance_4 = new lib.belly_white();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,583.6,700);


(lib.BASE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.white_fur.addEventListener("click", playGoTo.bind(this));
		function playGoTo() {
			this.gotoAndStop("0");
			isPlaying = false;
		}
		
		this.soft_fur.addEventListener("click", playGoTo_2.bind(this));
		function playGoTo_2() {
			this.gotoAndStop("1");
			isPlaying = false;
		}
		
		this.brown_fur.addEventListener("click", playGoTo_3.bind(this));
		function playGoTo_3() {
			this.gotoAndStop("2");
			isPlaying = false;
		}
		
		this.black_fur.addEventListener("click", playGoTo_4.bind(this));
		function playGoTo_4() {
			this.gotoAndStop("3");
			isPlaying = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// ACTIONA
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAnBWQgNgmgGgMQgHgQgJgEQgGgEgTAAIgUAAQAAArACAfIgYAAQABgpAAgvQAAgvgBgjIASAAIAPAAIAVgBQA3AAAAAoQABAhghAMIAAABQAPAEAIAQQAIANATA0gAgqhCIABA/IAPAAQAyAAAAghQAAgfgpAAQgOAAgLABg");
	this.shape.setTransform(540.6,284.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBSQgNgGgJgKQgIgLgEgQQgEgRAAgWIAAgnIgBgvIAZAAIgBBPQAAAUACAPQACAOAGAKQAGAKAIADQAJAEAMAAQAOAAAIgEQAJgEAGgIQAFgKADgOQACgPAAgVIAAgiIgCgtIAZAAIgBAuIAAAoQAABXhFAAQgRAAgNgFg");
	this.shape_1.setTransform(522.3,284.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxBVQABgpAAgvQAAgugBgjIBjAAIgBATQgjgBgrAAQACAWAAAmQAdAAAdgBIAAARIg6gBQAAA0ACAYg");
	this.shape_2.setTransform(507.5,284.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// BUTTONS
	this.black_fur = new lib.black_fur();
	this.black_fur.parent = this;
	this.black_fur.setTransform(591,315,1,1,0,0,0,16,16);
	new cjs.ButtonHelper(this.black_fur, 0, 1, 1);

	this.brown_fur = new lib.brown_fur();
	this.brown_fur.parent = this;
	this.brown_fur.setTransform(546.5,315,1,1,0,0,0,16,16);
	new cjs.ButtonHelper(this.brown_fur, 0, 1, 1);

	this.soft_fur = new lib.soft_fur();
	this.soft_fur.parent = this;
	this.soft_fur.setTransform(501,315,1,1,0,0,0,16,16);
	new cjs.ButtonHelper(this.soft_fur, 0, 1, 1);

	this.white_fur = new lib.white_fur();
	this.white_fur.parent = this;
	this.white_fur.setTransform(454.5,314.5,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.white_fur, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.white_fur},{t:this.soft_fur},{t:this.brown_fur},{t:this.black_fur}]}).wait(4));

	// Layer 1
	this.instance = new lib.white();
	this.instance.parent = this;

	this.instance_1 = new lib.light_brown();
	this.instance_1.parent = this;

	this.instance_2 = new lib.brown();
	this.instance_2.parent = this;

	this.instance_3 = new lib.black();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,607,700);


// stage content:
(lib.medo_medo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shirt
	this.instance = new lib.shirt();
	this.instance.parent = this;
	this.instance.setTransform(182.5,350,1,1,0,0,0,262.5,350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ears
	this.instance_1 = new lib.ears();
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.5,350,1,1,0,0,0,262.5,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// belly
	this.instance_2 = new lib.belly();
	this.instance_2.parent = this;
	this.instance_2.setTransform(182.5,350,1,1,0,0,0,262.5,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// eyes
	this.instance_3 = new lib.eyes();
	this.instance_3.parent = this;
	this.instance_3.setTransform(182.5,350,1,1,0,0,0,262.5,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// BASE
	this.instance_4 = new lib.BASE();
	this.instance_4.parent = this;
	this.instance_4.setTransform(182.5,350,1,1,0,0,0,262.5,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(195,350,607,700);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;