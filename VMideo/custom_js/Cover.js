

window.onload=function()
{
	var MBtn=document.getElementById('musicBtn');
	var VBtn=document.getElementById('videoBtn');
	var MDiv=document.getElementById('topDiv');
	var VDiv=document.getElementById('bottomDiv');
	var Mh2=document.getElementById('musich2');
	
	var timer=null;
	MBtn.onclick=function()
	{
		clearTimeout(timer);
		Mh2.style.color="white";
		Move(MDiv,{width:0});
		Move(VDiv,{width:0});
		
		timer=setTimeout(function()
		{
			//在自身跳转页面
			window.location.href="MusicMain.html";
		},1500);
	}
	VBtn.onclick=function()
	{
		clearTimeout(timer);
		Mh2.style.color="white";
		Move(MDiv,{width:0});
		Move(VDiv,{width:0});
		
		timer=setTimeout(function()
		{
			//在自身跳转页面
			window.location.href="VideoMain.html";
		},1500);
	}
}
