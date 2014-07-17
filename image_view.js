<html>
<script src="image_view.js"></script>
<script>

var Lj=["1b1","17b8","27b4","37b3","47a2","67a8","79a1","90b6","102b5","115a2",
		"128a3","140b6","155b2","168a2","181b8","197a7","212a5","224b1","238a8",
		"251a8","264a5","278a1","290a1","302b2"];
var Ls=["1b1","20b7","33b6","47a3","63a1","88b2","105a6","121b6","138a7",
		"155b3","173a7","192a6","213b5","231a4","248b2","269b3","289b3","306b1",
		"325a2","343a2","361a3"];

var volpage2realpage=function(input){
	//var volpage=document.getElementById("volpage").value;
	var side=input.substr(input.length-2,1);

	if(side.indexOf("a")>-1){
		var num=input.substr(0,input.length-2);
		var realpage=num*2-1;
		//document.getElementById("line").value=line;
	}
	if(side.indexOf("b")>-1){
		var num=input.substr(0,input.length-2);
		var realpage=num*2;
		//document.getElementById("line").value=line;
	}
	return realpage;
}

var volpage2line=function(){
	var volpage=document.getElementById("volpage").value;
	var line=volpage2line_process(volpage);
	document.getElementById("line").value=line;

}

var volpage2line_process=function(input){ 
	//var volpage=document.getElementById("volpage").value;
	var online=input.substr(input.length-1);
	online=parseInt(online);
	var line=(volpage2realpage(input)-1)*8+online;
	//document.getElementById("line").value=line;
	line=parseInt(line);
	return line;

}

var realpage2volpage=function(input){
	var side=input%2;
	
	if(side==1){
		var volpage=input/2-0.5+1+"a";
		//document.getElementById("volpage").value=line;
	}
	if(side==0){
		var volpage=input/2+"b";
		//document.getElementById("volpage").value=line;
	}
	return volpage;

}

var line2volpage=function(){
	var line=document.getElementById("line").value;
	volpage=line2volpage_process(line); ///////////////加var?
	document.getElementById("volpage").value=volpage;

}

var line2volpage_process=function(input){
	var online=input%8;
	var volpage=(input-online)/8+1;
	var volpage=realpage2volpage(volpage)+online;

	if(volpage.indexOf("a0")>-1){
		volpage=volpage.replace(/a0/g, "" );
		volpage=volpage-1;
		volpage=volpage+"b8"
	}
	if(volpage.indexOf("b0")>-1){
		volpage=volpage.replace(/b0/g, "" );
		volpage=volpage+"a8"
	}

	return volpage;

}

var findrange=function(input,searchpage){
	//var find=document.getElementById("find").value;
	
	for(var i in input){
		i=parseInt(i);
		var min=volpage2line_process(input[i]);
		var max=volpage2line_process(input[i+1]);

		if(searchpage>=min&&searchpage<=max){
			//document.getElementById("range").innerHTML=(input[i]+" ~ "+input[i+1]);
			return (input[i]+"~"+input[i+1])
		}
	}
}

var findrange_Lj=function(){
	var find=document.getElementById("find_Lj").value;
	document.getElementById("range_Lj").innerHTML=findrange(Lj,find);
}

var findrange_Ls=function(){
	var find=document.getElementById("find_Ls").value;
	document.getElementById("range_Ls").innerHTML=findrange(Ls,find);
}

var find_corres=function(input1,input2,line,section){
	
	//var range=findrange(input,line).split("~");
	//var range_min=range[0];
	//var range_max=volpage2line_process(range[1]);
	//var range=range_max-range_min+1;
	//return range;
	section=parseInt(section);
	var range1=input1[section+1]-input1[section];
	var range2=input2[section+1]-input2[section];
	var location=line-input1[section];
	var corres=(location*(range2/range1)+input2[section]).toFixed(0);
	return corres;

}

var findcorres_fromLj=function(){
	var volpage=document.getElementById("find_Lj").value;
	volpage=volpage.split(".");
	volpage=volpage[1];
	var line=volpage2line_process(volpage);
	var range=findrange(Lj,line).split("~");
	for (var i in Lj){
		if (Lj[i]==range[0]){
			var section=i;
		}
	}
	var range_Lj=find_corres(line_Lj,line_Ls,line,section);
	range=line2volpage_process(range_Lj);
	document.getElementById("findcorres_Lj").innerHTML=range;

	//return range;
}

var findcorres_fromLs=function(input){
	//var volpage=document.getElementById("find_Ls").value;
	volpage=input.split(".");
	volpage=volpage[1];
	var line=volpage2line_process(volpage);
	var range=findrange(Ls,line).split("~");
	for (var i in Ls){
		if (Ls[i]==range[0]){
			var section=i;
		}
	}
	var range_Ls=find_corres(line_Ls,line_Lj,line,section);
	range=line2volpage_process(range_Ls);
	document.getElementById("findcorres_Ls").innerHTML=range;
	return range;
}


var line_Lj=[];
	for(var i in Lj){
		line_Lj[i]=volpage2line_process(Lj[i]);
	}
var line_Ls=[];
	for(var i in Ls){
		line_Ls[i]=volpage2line_process(Ls[i]);
	}



</script>
<P ALIGN=CENTER>
Lj:<input id="find_Lj" value= "1.1a2" ></input>
<span id="range_Lj"></span>
<button onclick="image_Lijang()">search image</button>
Find correspond line to Ls: 
<button onclick="findcorres_fromLj()">find</button>
<span id="findcorres_Lj"></span><br/>
Ls:<input id="find_Ls" value= "1.2b2" ></input>
<span id="range_Ls"></span>
<button onclick="image_Lhasa()">search image</button>
Find correspond line to Lj: 
<button onclick="findcorres_fromLs()">find</button>
<span id="findcorres_Ls"></span><br/></P>
<P ALIGN=CENTER>
<button onclick="prevpage_Lijang()">previous page</button>
<span id="page_Lj"></span>
<button onclick="nextpage_Lijang()">next page</button>
<IMG id="image_Lj" style="width:100%"></IMG>
<button onclick="prevpage_Lhasa()">previous page</button>
<span id="page_Ls"></span>
<button onclick="nextpage_Lhasa()">next page</button>
<IMG id="image_Ls" style="width:100%"></IMG></P>


</html>





