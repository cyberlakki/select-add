var arr =[]
        var quan=[]
        const arr2=[
            {name:"Apple" , price:20},
            {name:"Bannana" , price:25},
            {name:"Orange" , price:30},
            {name:"Grapes" , price:35}
        ]
        function price(){
           var p= document.getElementById("menu").value
           document.getElementById("warn").innerHTML=""
           if(p=="Apple"){
               document.getElementById("prices").value="20rs/kg"
           }
           if(p=="Bannana"){
               document.getElementById("prices").value="25rs/kg"
           }
           if(p=="Oranges"){
               document.getElementById("prices").value="30rs/kg"
           }
           if(p=="Grapes"){
               document.getElementById("prices").value="40rs/kg"
           }
        }
        
        function addItem(){
            if(document.getElementById("menu").value==""){
                document.getElementById("warn").innerHTML="<b>Please Select item first</b>"
            }
            else{
            document.getElementById("qty").defaultValue="1"
            arr.push(document.getElementById("menu").value)
            quan.push(document.getElementById("qty").value)
            table()
            }
        }
        function table(){
            if(arr.length>0){
            var t = '<table border="1" width"600"><tr> <th>Index</th> <th>Name</th> <th>Price</th> <th>Quantity</th> <th>Total</th> <th>Remove</th> </tr>'

            arr.forEach(function(x,i){
                t+=`<tr><th>${i+1}</th><th>${x}</th><th>${priceTag(x)}</th><th>${quan[i]+"Kg" }</th> <th>${priceTag(x)*parseInt(quan[i])}</th><th><button onclick="remove(${i})">Remove</button></th></tr>`
                document.getElementById("msg").innerHTML=t
            })
        }
        else(
            document.getElementById('msg').innerHTML=''
        )
        }
        function priceTag(x){
            if (x =="Apple"){ 
                return 20;
            }
            if (x =="Bannana"){
                return 25;
            }
            if (x =="Orange"){
                return 30;
            }
            if (x =="Grapes"){
                return 35;
            }
            }
            function remove(value){
                arr.splice(value,1)
                quan.splice(value,1)
                table()
            }
        function removeall(){

            arr=[]
            quan=[]
            document.getElementById("msg").innerHTML=""
        }
