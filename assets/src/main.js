var canvas;
var backdrop;
var elements;
var total=0;
var canvasScale = 1;
var SCALE_FACTOR = 1.2;
var check = 0;
var check2 = 0;
var check3 = 0;
var e;
var costtotal = [];
var cost;
var activeObject; 
var z;
var z1;
var decost;
var discost = [];
var wi =0;
var hi =0;
var w =0;
var h =0;
var height;
var width;
//var listed;
//var listedtotal =[];

 //เริ่มต้น zoomIn ใช้ fabric เป็นตัวช่วย - a help from Missey22 StackOverFlow
function zoomIn() {
    canvasScale = canvasScale * SCALE_FACTOR;
    var objects = canvas.getObjects(), i, scaleX, scaleY, left, top, tempScaleX, tempScaleY, tempLeft, tempTop;
    for (i in objects) {
        scaleX = objects[i].scaleX;
        scaleY = objects[i].scaleY;
        left = objects[i].left;
        top = objects[i].top;

        tempScaleX = scaleX * SCALE_FACTOR;
        tempScaleY = scaleY * SCALE_FACTOR;
        tempLeft = left * SCALE_FACTOR;
        tempTop = top * SCALE_FACTOR;

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;
        objects[i].setCoords();
    }

    canvas.renderAll();
}

//คำสั่ง zoomOut ใช้ fabric เป็นตัวช่วย a help from Missey22 StackOverFlow
function zoomOut() {
    canvasScale = canvasScale / SCALE_FACTOR;
    var objects = canvas.getObjects(), i, scaleX, scaleY, left, top, tempScaleX, tempScaleY, tempLeft, tempTop;
    for (i in objects) {
        scaleX = objects[i].scaleX;
        scaleY = objects[i].scaleY;
        left = objects[i].left;
        top = objects[i].top;

        tempScaleX = scaleX * (1 / SCALE_FACTOR);
        tempScaleY = scaleY * (1 / SCALE_FACTOR);
        tempLeft = left * (1 / SCALE_FACTOR);
        tempTop = top * (1 / SCALE_FACTOR);

        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;

        objects[i].setCoords();
    }

    canvas.renderAll();
}

//add element of zoomIn - zoomOut on DIY 
function addAllToCanvas() {
    check3 = 1;
	var i;
    for (i = 0; i < elements.length; i += 1) {
        canvas.add(elements[i]);
    }
//if(check2 == 0){   
//		check2 = 1;
//	  zoomOut();
//    zoomOut();
//    zoomOut();
//		}
}

function addElement(Max) {
    elements.push(Max); //elements.push เพิ่มข้อมูลบน elements ไปเรื่อยๆ เรียงต่อกันจนกว่าถึงตัวท้ายสุดของการเพิ่มข้อมูล
	console.log(Max); 	// เช็คบนคอลโซล ว่าถูกใช้งานไหม
	if(check3 == 0){ 	//ทริคหลอกเพื่อไม่ให้เกิดการวนซ้ำอีกรอบเมื่อเพิ่มข้อมูลขึ้นมาใหม่
    if (elements.length >= total) { //
        	addAllToCanvas();
    }
	}
	else{
		elements = [];
		elements.push(Max);
		addAllToCanvas();
		}
	}

function loadPattern(url, repeat) {
    fabric.util.loadImage(url, function (img) {
        backdrop.fill = new fabric.Pattern({
            source: img,
            repeat: repeat
        });
        console.log(img);
        canvas.renderAll();
    });
}


/* addImage ใช้ในการนำรูปภาพทำ Scaling, Rotation, shadowIntensity */
function addImage(url, x, y, scale, rotation, shadowIntensity,id) {
    fabric.Image.fromURL(url, function (oImg) {
        oImg.lockScalingX = true;
		oImg.lockScalingY = true;
		oImg.borderColor = 'gray';
        oImg.cornerColor = 'black';
        oImg.cornerSize = 12;
        oImg.transparentCorners = true;
        oImg.left = x;
        oImg.top = y;
        oImg.scale(scale);
        oImg.setShadow({
            color: 'rgba(0,0,0,0.3)',
            offsetX: shadowIntensity,
            offsetY: shadowIntensity,
            blur: shadowIntensity * 6
        });
        oImg.angle = rotation || 0;
        oImg.id = id;
        addElement(oImg);
		console.log('addImage is worked');

    });
}

function addRect(r, g, b, a, x, y, w, h, scale, rotation) {
    var rect = new fabric.Rect({
        width: w,
        height: h,
        left: x,
        top: y,
        angle: rotation,
        fill: 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
    });
    rect.borderColor = 'gray';
    rect.cornerColor = 'black';
    rect.cornerSize = 12;
    rect.transparentCorners = false;
    rect.setShadow({
        color: 'rgba(0,0,0,0.7)',
        offsetX: '5',
        offsetY: '5',
        blur: 30
    });
    addElement(rect);
}

function draw(width,height){
}

/*รูปวงกลม*/
function addCircle(fillColor, stroke , strokeWidth, x, y, radius) {
    var circle = new fabric.Circle({
        radius: radius,
        left: x,
        top: y,
        fill: fillColor,
        stroke: stroke,
        strokeWidth: strokeWidth
    });
    circle.borderColor = 'gray';
    circle.cornerColor = 'red';
    circle.cornerSize = 12;
    circle.transparentCorners = false;
    circle.setShadow({
        color: 'rgba(0,0,0,0.7)',
        offsetX: '1',
        offsetY: '1',
        blur: 3
    });
    addElement(circle);
}
// 182-237 ใส่สินค้าใช้บน Canvas

function addSink(){
		addImage('resources/kitchen/sink.png', 540, 150, 0.5, 180, 1);
		costtotal.push("sink");
	console.log(costtotal);

};

function addOven(){
		addImage('resources/kitchen/oven.png', 450, 300, 0.5, 90, 4);
		costtotal.push("oven");
	console.log(costtotal);
};


function addTvShelf(){
		addImage('resources/ห้องนอน/anime/ตู้วางTV.png',490,450,0.5,0,6);
		costtotal.push("tvshelf");
		console.log(costtotal);
};
function addDoubleBed(){
		addImage('resources/ห้องนอน/anime/doublebed.png',300,300,0.5,0,6);
		costtotal.push("doublebed");
		console.log(costtotal);
};

function addDoubleBed2(){
		addImage('resources/ห้องนอน/anime/doublebed2.png',490,450,0.7,0,6);
		costtotal.push("doublebed2");
		console.log(costtotal);
};

function addSinglebed1(){
		addImage('resources/ห้องนอน/anime/singlebed.png',490,450,0.5,0,6);
		costtotal.push("singlebed");
		console.log(costtotal);
};


function addSofagreen(){
		addImage('resources/ห้องนอน/anime/sofagreen.png',490,450,0.5,0,6);
		costtotal.push("sofagreen");
		console.log(costtotal);
};

function addSofared(){
		addImage('resources/ห้องนอน/anime/sofared.png',490,450,0.5,0,6);
		costtotal.push("sofared");
		console.log(costtotal);
};

function addSofagray(){
		addImage('resources/ห้องนอน/anime/sofagray.png',490,450,0.6,0,6);
		costtotal.push("sofagray");
		console.log(costtotal);
};

function addCounter(){
		addImage('resources/kitchen/counter.png',490,450,0.6,0,6);
		costtotal.push("counter");
		console.log(costtotal);
};

function addLongsink(){
		addImage('resources/kitchen/long sink.png',450,300,0.6,0,6);
		costtotal.push("longsink");
		console.log(costtotal);
	
}



function costing(){
		 cost = 0;
		 for (i = 0; i < costtotal.length; i += 1) {
		 if(costtotal[i] == "singlebed"){
			 cost = cost + 6000;	 
		 }
		 else if(costtotal[i] == "doublebed2"){
			  cost = cost + 15000; 
		 }
		 else if(costtotal[i] == "tvshelf"){
			  cost = cost + 3000; 
		 }
		 else if(costtotal[i] == "doublebed"){
			  cost = cost + 12000;
		 }
		 else if(costtotal[i] == "sofagreen"){
			  cost = cost + 1000;
		 }
		 else if(costtotal[i] == "sofared"){
			  cost = cost + 1200;
		 }
		 else if(costtotal[i] == "sofagray"){
			  cost = cost + 1300;
		 } 
		 else if(costtotal[i] == "counter"){
			  cost = cost + 3000;
		 }
		 else if(costtotal[i] == "sink"){
			  cost = cost + 1800;
		 }
		 else if(costtotal[i] == "longsink"){
			  cost = cost + 3300;
		 }
		 else if(costtotal[i] == "oven"){
			  cost = cost + 7000;
		 }
		 else {
			 alert (costtotal[i]+'have no cost');
		 }
	}
	
		 decost = 0;
		 for (i = 0; i < discost.length; i += 1) {
		 
		 if(discost[i] == "singlebed"){
			 decost = decost + 6000; 
		 }
		 else if(discost[i] == "doublebed2"){
			  decost = decost + 15000; 
		 }
		 else if(discost[i] == "tvshelf"){
			  decost = decost + 3000; 
		 }
		 else if(discost[i] == "doublebed"){
			  decost = decost + 12000;
		 }
		 else if(discost[i] == "sofagreen"){
			  decost = decost + 1000;
		 }
		 else if(discost[i] == "sofared"){
			  decost = decost + 1200;
		 }
		 else if(discost[i] == "sofagray"){
			  decost = decost + 1300;
		 } 
		 else if(discost[i] == "doublebed"){
			  decost = decost + 9000;
		 }
	     else if(costtotal[i] == "counter"){
			  decost = decost + 3000;
		 }
		 else if(costtotal[i] == "sink"){
			  decost = decost + 1800;
		 }
		 else if(costtotal[i] == "longsink"){
			  decost = decost + 3300;
		 }
		 else if(costtotal[i] == "oven"){
			  decost = decost + 7000;
		 }
		 else {
			 alert (discost[i]+'have no cost');
		 }
			 
			 }	 
		cost = cost - decost;
		
		
		alert('ราคารวมทั้งสิ้น '+cost + ' บาท');
};


/*รูปภาพนำเข้าวางไว้บนตำแหน่งของ canvas */
function loadRest() {
    addCircle('#d0d', '#faf', 3, 1250, 600, 100);
    addImage('resources/stoel1.png', 1500, 170, 0.5, -90, 3);
    addImage('resources/stoel1.png', 1500, 245, 0.5, -90, 3);
    addImage('resources/stoel1.png', 1500, 320, 0.5, -90, 3);
    addImage('resources/stoel1.png', 1345, 170, 0.5, 90, 3);

    addImage('resources/stoel1.png', 1345, 245, 0.5, 90, 3);
    addImage('resources/stoel1.png', 1345, 320, 0.5, 90, 3);
    addImage('resources/hoekbank.png', 1240, 760, 0.5, 5, 4);
    addImage('resources/bed.png', 530, 700, 0.5, 90, 3);
    addImage('resources/keukenwasbak.png', 1000, 130, 0.5, 180, 3);

    addImage('resources/fornuis.png', 940, 280, 0.5, 90, 4);
    addImage('resources/bank.png', 1150, 480, 0.5, 130, 3);
    addImage('resources/douche.png', 540, 150, 0.5, 180, 1);
    addImage('resources/koelkast.png', 1150, 130, 0.5, 180, 4);
    addImage('resources/tv.png', 1500, 500, 0.5, -93, 4);

    addImage('resources/stoel3.png', 820, 850, 0.5, 6);
    addImage('resources/computer.png', 820, 780, 0.5, 180, 5);
    addImage('resources/plant.png', 1500, 800, 0.5, 2);
    addImage('resources/wc.png', 850, 150, 0.5, -90, 3);
    addImage('resources/badwasbak.png', 860, 270, 0.5, 4);

    addImage('resources/luie1.png', 960, 550, 0.5, -90, 5);
    addImage('resources/luie2.png', 1480, 700, 0.5, -80, 5);
    addRect(156, 68, 4, 1, 1420, 250, 100, 240, 1, 180);
    addRect(176, 176, 156, 1, 300, 200, 60, 60, 1, 180);
    addRect(136, 176, 156, 1, 370, 230, 60, 60, 1, 80);
	addImage('resources/bed1.jpg',490, 450, 0.5, 90,3);
	addImage('resources/BackGround/Brown5x5.png',490,450,0.5,90,3);
	
	
}

function onload() {
    canvas = new fabric.Canvas('c');
    canvas.selection = false;
    elements = [];
    backdrop = new fabric.Rect({
        width: 5000,
        height: 4000,
        left: 500,
        top: 500,
        angle: 0
    });

    backdrop.set('selectable', false);
    loadPattern('/resources/grid.png', 'repeat');
    canvas.add(backdrop);

//    fabric.Image.fromURL('resources/sonman2.svg', function (oImg) {
//        oImg.set('selectable', false);
//        oImg.scale(6.5);
//        oImg.left = 900;
//        oImg.top = 500;
//      addElement(oImg);
//       //loadRest();
//    });

}

// function deleteObject() {
// 	canvas.getActiveObject().remove();
// 	discost.push(z1[0]);
// 	console.log(discost);

// }
	
if(check == 0){
	console.log('work')
	onload();
	check = 1;
}

canvas.on('object:selected', function(e) { 
	activeObject = e.target; 
	z = activeObject._element.currentSrc.split('/');
	z1 = z[z.length-1].split('.')
	console.log ('เลือก '+z1[0])
	
});


window.addRect2 = function(width,height){
	var rect = new fabric.Rect({
		left: 100,
		top: 100,
		fill: 'gray',
		stroke: 'black',
		strokeWidth: 5,
		width: 250,
		height: 250,
	});
		canvas.add(rect);
//		console.log(rect.width, rect.height);
		width = rect.width;
		height = rect.height;
	    var shows = document.getElementById("show");
	displayDimension();

	rect.on('modified',function(){
		displayDimension();
	})
	
	rect.on('scaling', function(){
		displayDimension();
	})
    
	function displayDimension(wid){
		width = parseInt(rect.width * rect.scaleX);
		height = parseInt(rect.height * rect.scaleY);
		shows.innerHTML = "Width: " + width + "cm and Height :" + height + "cm";
		var model = document.getElementById("wid").value = width;
		var model2 = document.getElementById("hei").value = height;
	}
}

window.addRect3 = function(width,height){
	var rect = new fabric.Rect({
		left: 100,
		top: 100,
		fill: 'brown',
		stroke: 'black',
		strokeWidth: 5,
		width: 250,
		height: 250,
	});
		canvas.add(rect);
//		console.log(rect.width, rect.height);
		width = rect.width;
		height = rect.height;
	    var shows = document.getElementById("show");

	displayDimension();

	rect.on('modified',function(){
		displayDimension();
	})
	
	rect.on('scaling', function(){
		displayDimension();
	})
    
	function displayDimension(){
		width = parseInt(rect.width * rect.scaleX);
		height = parseInt(rect.height * rect.scaleY);
		shows.innerHTML = "Width: " + width + "cm and Height :" + height + "cm"; 
		return width;
	}
}

function convertToImagen() { 
  document.getElementById('c');
  canvas.deactivateAll().renderAll();  
  window.open(canvas.toDataURL('png'));
  
}


var outputcanvas = document.getElementById('canvasout');
//Save Function

// function save() {
// 	canvas = document.getElementById("c");
// 	var dataURL = canvas.todataURL('image/png');
// 	var newtab = window.open(dataURL, 'image');
// 	alert('fuck');
// }

function rect(wi,hi){
	var wei = document.getElementById('width').value;
	var hei = document.getElementById('height').value;
}

 
//myImage.addEventListener('onclick', function(){
//	console.log('Width is :', this.naturalWidth);
//	console.log('Height is :', this.natralHeight);
//}); addImage();

// ทำไม่ได้ไอชิบหาย
//function update(wid, hei){
//	"use strict";
//	var x = 50;
//	var y = 50;
//	var box = document.createElement("box");
//	box.style.wid = "50%";
//	box.style.hei = "50%";
//	box.wid = window.innerWid;
//	box.hei = window.innerHei;
//	box.style.left = 0;
//	box.style.top = 0;
//	box.style.zIndex 100000;
//	document.body.appendChild(canvas);
//	var context = canvas.getContext("2d");
//	context.rect(x, y, wid, hei);
//  context.fillStyle = "black solid 4px";
//  context.fill();
//};
//
//function draw(){
//var wid = document.getElementById('sideA').value;
//var hei = document.getElementById('sideB').value;
//	update(wid, hei);
//}
//
//function getwihi(){  	//ยังทำไม่ได้ Dynamic react-ะ ติดเหี้ยไรก็ไม่รู้
//	var wi = document.getElementById('sideA').value;
//	var hi = document.getElementById('sideB').value;
//	 



//}
