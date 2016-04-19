window.onload = function() {
    
    var btn = document.getElementsByClassName("btn");
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function(e) {
            var txt = document.getElementById("txt");
            var m, n;
            m = txt.value;
            n = m + e.target.innerHTML;
            txt.value=n;
        });
    };
    var equal = document.getElementById("equal");
    equal.addEventListener("click", function(){
        
        var sum = document.getElementById("txt").value;
        var a = eval(sum);
        txt.value = a;
        
    });
    var max = document.getElementById("max");
    max.addEventListener("click", function(){
       
        var s = txt.value.split(".");
        var t = 0;
        for(var i=0; i<s.length; i++){
            if(parseInt(s[i])>t){
               t= parseInt(s[i]);
            };
             };
        txt.value = t;
    });
    
      var middle = document.getElementById("middle");
    middle.addEventListener("click", function(){
       
        var s = txt.value.split(".");
        var sum = 0;
        t = 0;
        for(var i=0; i<s.length; i++){
           t++
            sum= sum +parseInt(s[i]);
             };
        txt.value = sum/t;
    });
};