function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}

function Move(obj, json,fun)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		for(var attr in json)
		{
			var iCur=0;
		var okstop=true;
		if(attr=='opacity')
		{
			iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
		}
		else
		{
			iCur=parseInt(getStyle(obj, attr));
		}
		
		var iSpeed=(json[attr]-iCur)/8;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		/*
		if(iCur==json[attr])
		{
			clearInterval(obj.timer);
                        fun();
		}*/
		if(iCur!=json[attr])
		{
			okstop=false;
			}
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		if(okstop)
		{
			clearInterval(obj.timer);
               if(fun)
			   {
				   fun();
				   }
			}
	   }
	}, 30)
}