function generatePass() {

    
    
    var lower_charset = "abcdefghijklmnopqrstuvwxyz"; 
    var upper_charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var special_charset="?.$@;:_^#![]{}"; 
    
    var numset="0123456789";
    
    var minLength=8; 
    
    var maxLength=128; 
    
    
    
    var length = Math.floor(Math.random() * (maxLength-minLength+1)) + minLength;
    
   
    
    var pass="";
    
    
    
    for(var i=0;i<length-5;i++){
    
    pass+=lower_charset.charAt(Math.floor(Math.random() * lower_charset.length));
    
    }
    
    
    
    for(var i=0;i<2;i++){
    
    pass+=upper_charset.charAt(Math.floor(Math.random() * upper_charset.length));
    
    }
    
    
    pass+=special_charset.charAt(Math.floor(Math.random() * special_charset.length));
    
    
    
    for(var i=0;i<1;i++){
    
    pass+=numset.charAt(Math.floor(Math.random() * numset.length));
    
    }
    
    
    
    document.getElementById("pass").innerHTML=pass;
    
    }