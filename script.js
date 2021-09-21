
function validateform(){  
    var name=document.myform.name.value;  
    var Mobile=document.myform.Mobile.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(Mobile.length<10 || Mobile.length>10){  
      alert("Not a valid Mobile number");  
      return false;  
      }  
    }  