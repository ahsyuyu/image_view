var image_Lijang=function(){
	var volpage=document.getElementById("find_Lj").value;
	var volpage_Lj=volpage.substr(0,volpage.length-1);
	image_Lj.src="Lijang image/001/"+idtoimagefilename(volpage_Lj)+".jpg";
	document.getElementById("page_Lj").innerHTML=volpage_Lj;
	
	var volpage_Ls=findcorres_fromLj(volpage);
	volpage_Ls=volpage_Ls.substr(0,volpage_Ls.length-1);
	image_Ls.src="Lhasa image/001/"+idtoimagefilename(volpage_Ls)+".png";
	document.getElementById("page_Ls").innerHTML=volpage_Ls;
}

var image_Lhasa=function(){
	var volpage=document.getElementById("find_Ls").value;
	var volpage_Ls=volpage.substr(0,volpage.length-1);
	image_Ls.src="Lhasa image/001/"+idtoimagefilename(volpage_Ls)+".png";
	document.getElementById("page_Ls").innerHTML=volpage_Ls;

	var volpage_Ls=findcorres_fromLs(volpage);
	var volpage_Lj=volpage_Ls.substr(0,volpage_Ls.length-1);
	var han="1.";
	var volpage_Lj=han+volpage_Lj;
	image_Lj.src="Lijang image/001/"+idtoimagefilename(volpage_Lj)+".jpg";
	document.getElementById("page_Lj").innerHTML=volpage_Lj;
}

var idtoimagefilename=function(p){  //p=沒有尾行數的volume page
	var realname=p.split(".");
	realname[0]='00'+realname[0];
	realname[0]=realname[0].substr(realname[0].length-3); //要取幾位就減多少
	//realname[1]=realname[1].substr(0,realname[1].length-1);
	realname[1]='00'+realname[1];
	realname[1]=realname[1].substr(realname[1].length-4);
	p=realname.join("-");
	return p;
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

var nextpage_Lhasa=function(){
	var page=document.getElementById("page_Ls").innerHTML;
	//document.getElementById("page").value=page;
	var side=page.substr(page.length-1);
	var turn="a";

	if(side.indexOf(turn)>-1){
		var next=page.replace(/a/g, "b");
	} else{
		next=page.replace(/b/g, "");
		var num=next.split(".");
		num[1]++;
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
		var next=page.replace(/a/g, "");
		var num=next.split(".");
		num[1]--;
		next=num.join(".");
		next=next+"b";
	} else{
		next=page.replace(/b/g, "a");
		
	}
	image_Ls.src="Lhasa image/001/"+idtoimagefilename(next)+".png";
	document.getElementById("page_Ls").innerHTML=next;
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

