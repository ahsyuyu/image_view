﻿var image_Lhasa=function(){
	var volpage=document.getElementById("find_Ls").value;

	image_Ls.src="Lhasa image/001/"+idtoimagefilename(volpage)+".png";
	document.getElementById("page_Ls").innerHTML=volpage;
}

var image_Lijang=function(){
	var volpage=document.getElementById("find_Lj").value;
	
	image_Lj.src="Lijang image/001/"+idtoimagefilename(volpage)+".jpg";
	document.getElementById("page_Lj").innerHTML=volpage;
}
var idtoimagefilename=function(p){
	var realname=p.split(".");
	realname[0]='00'+realname[0];
	realname[0]=realname[0].substr(realname[0].length-3); //要取幾位就減多少
	var process=realname[1].substr(realname[1].length-1);
	if (process.indexOf("a") || process.indexOf("b") <-1 ){
		realname[1]=realname[1].substr(0,realname[1].length-1);
	}
	realname[1]='00'+realname[1];
	realname[1]=realname[1].substr(realname[1].length-4);
	p=realname.join("-");
	return p;
}

var nextpage_Lhasa=function(){
	var page=document.getElementById("page_Ls").innerHTML;
	//document.getElementById("page").value=page;
	var side=page.substr(page.length-1);
	var turn="a";

	if(side.indexOf(turn)>-1){
		var next=page.substr(0,page.length-1);
		next=page.replace(/a/g, "b");
	} else{
		var num=page.split(".");
		var next=num[1].substr(0,num[1].length-1)
		next=next.replace(/b/g, "");
		next=parseInt(next);
		num[1]=next+1;
		next=num.join(".");
		next=next+"a";
	}
	image_Ls.src="Lhasa image/001/"+idtoimagefilename(next)+".png";
	document.getElementById("page_Ls").innerHTML=next;
}

var prevpage_Lhasa=function(){

	var page=document.getElementById("page_Ls").innerHTML;
	var side=page.substr(page.length-1);
	var turn="a";

	if(side.indexOf(turn)>-1){
		var next=page.substr(0,page.length-1);
		next=page.replace(/a/g, "");
		var num=next.split(".");
		num[1]--;
		next=num.join(".");
		next=next+"b";
	} else{
		var next=page.substr(0,page.length-1);
		next=page.replace(/b/g, "a");
		
	}
	image_Ls.src="Lhasa image/001/"+idtoimagefilename(next)+".png";
	document.getElementById("page_Ls").innerHTML=next;
}

var nextpage_Lijang=function(){

	var volpage=document.getElementById("page_Lj").innerHTML;
	var side=volpage.substr(volpage.length-1);
	var turn="a";

	if(side.indexOf(turn)>-1){
		var next=volpage.replace(/a/g, "b");
	} else{
		next=volpage.replace(/b/g, "");
		var num=next.split(".");
		num[1]++;
		next=num.join(".");
		next=next+"a";
	}
	image_Lj.src="Lijang image/001/"+idtoimagefilename(next)+".jpg";
	document.getElementById("page_Lj").innerHTML=next;

}

var prevpage_Lijang=function(){

	var volpage=document.getElementById("page_Lj").innerHTML;
	var side=volpage.substr(volpage.length-1);
	var turn="a";

	if(side.indexOf(turn)>-1){
		var next=volpage.replace(/a/g, "");
		var num=next.split(".");
		num[1]--;
		next=num.join(".");
		next=next+"b";
	} else{
		next=volpage.replace(/b/g, "a");
		
	}
	image_Lj.src="Lijang image/001/"+idtoimagefilename(next)+".jpg";
	document.getElementById("page_Lj").innerHTML=next;

}




/*<P ALIGN=CENTER>
<input id="input_Lhasa" value="1.1b"></input>
<input id="input_Lhasa2" value="1.1"></input>

<input id="input_Lijang" value="1.1a"></input>
<input id="input_Lijang2" value="1.1"></input>

<P ALIGN=CENTER>

<button onclick="prevpage_Lhasa()">Lhasa前一頁</button>
<span id="page_Ls"></span>
<button onclick="nextpage_Lhasa()">Lhasa下一頁</button>
<button onclick="prevpage_Lijang()">Lijang前一頁</button>
<span id="page_Lj"></span>
<button onclick="nextpage_Lijang()">Lijang下一頁</button></P>
<IMG id="image1" style="width:100%"></IMG>
<IMG id="image2" style="width:100%"></IMG>
*/

