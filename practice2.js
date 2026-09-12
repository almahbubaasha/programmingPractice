class AvgNum{
    findAvg(){
        let price = [2,4,6,7,10,14]; 
        let sum = 0;  
        for(let i = 0 ;i < price.length ; i++){
        //   console.log(price[i]); 
          sum = sum + price[i];
          
        } 
      console.log(sum); 
      let avg = sum/price.length;
      console.log(avg);  
    }
    
}

const res = new AvgNum();
res.findAvg();
