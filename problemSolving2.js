//*
//** 
//*** 


class StarPrint{

    star(n){
        
        for(let i = 0 ; i<n ; i++){
            let star = "";
            for(let j = 0; j<i; j++){
                star = star + "*";  
            }
            console.log(star); 
        }
    }
}
const res = new StarPrint();
res.star(6);