var num,msg;
function message(){
    
    //inputs from id

    const num=document.getElementById("num").value;
    const msg=document.getElementById("msg").value;
    
    //string concatination
    
    try{
        window.open("https://wa.me/"+ num + "?text=" + msg).focus();
    }
    catch{
        window.location.assign("https://wa.me/"+ num + "?text=" + msg);
    }
}