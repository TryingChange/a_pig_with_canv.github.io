const canvas =document.getElementById('emoji');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(250,250,140,0,2*Math.PI);
ctx.fillStyle = "DarkSalmon";
ctx.strokeStyle = "DarkSalmon";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(180,220,20,0,2*Math.PI);
ctx.fillStyle = "Black";
ctx.strokeStyle = "Black";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(320,220,20,0,2*Math.PI);
ctx.fillStyle = "Black";
ctx.strokeStyle = "Black";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth = "4";
ctx.rect(190, 260, 120, 65);
ctx.fillStyle = "HotPink";
ctx.strokeStyle = "HotPink";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(220,295,15,0,2*Math.PI);
ctx.fillStyle = "SaddleBrown";
ctx.strokeStyle = "SaddleBrown";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(280,295,15,0,2*Math.PI);
ctx.fillStyle = "SaddleBrown";
ctx.strokeStyle = "SaddleBrown";
ctx.stroke();
ctx.fill();

ctx.beginPath();
       //  x   y
ctx.moveTo(95,92);
ctx.lineTo(200,120);
ctx.lineTo(120,200);
ctx.lineTo(95,90);
ctx.fillStyle = "DarkSalmon";
ctx.strokeStyle = "DarkSalmon";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(395,90);
ctx.lineTo(375,190);
ctx.lineTo(290,120);
ctx.lineTo(395,92);
ctx.fillStyle = "DarkSalmon";
ctx.strokeStyle = "DarkSalmon";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(115,110);
ctx.lineTo(170,130);
ctx.lineTo(130,170);
ctx.moveTo(115,110);
ctx.fillStyle = "HotPink";
ctx.strokeStyle = "HotPink";
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(380,110);
ctx.lineTo(365,160);
ctx.lineTo(330,125);
ctx.lineTo(380,110);
ctx.fillStyle = "HotPink";
ctx.strokeStyle = "HotPink";
ctx.stroke();
ctx.fill();