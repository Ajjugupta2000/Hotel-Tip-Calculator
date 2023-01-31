document.getElementById("calculate").onclick=function()
	  {
	  var bill=document.getElementById("bill").value;
	  var tip=document.getElementById("tip").value;
	  var people=document.getElementById("people").value;
	  if(bill<=0 || people< 1 || tip=="")
	    {
		 alert("Please fill Empty Space or Enter Valid Number");
		}
	  else
	    {
		  var perhead=bill/people;
		  perhead=Math.round(perhead);
		  if(tip=="15%-outstanding")
		{
		  document.getElementById("tipamount").innerHTML="<strong>Tip Amount is - </strong>"+(perhead/100*15)+" Rs.";
		}
		else if(tip=="10%-Good")
		{
		  document.getElementById("tipamount").innerHTML="<strong>Tip Amount is - </strong>"+(perhead/100*15)+" Rs.";
		}
		     else
			 {
			   document.getElementById("tipamount").innerHTML="<strong>Tip Amount is - </strong>"+(perhead/100*15)+" Rs.";
			 }
	    }
		}