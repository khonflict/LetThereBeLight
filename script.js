 const img = document.querySelector('img') 
 const btn = document.querySelector('button')

 let c = 0;
    function light(){
      if(c==0){
        document.getElementById('img').src = "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png";
        document.getElementById("button").innerText = "Press Me";
        c=1;
      }
      else if(c==1){
        document.getElementById("img").src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
        document.getElementById("button").innerText = "Press Me";
        c=0;
      }
    }