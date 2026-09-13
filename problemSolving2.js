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
const response = new StarPrint();
response.star(6);

// i want to add average value

//[1,2,3,5,7]
