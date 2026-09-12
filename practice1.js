class EvenOdd{
    findNum(n){
        if(n%2 == 0){
            console.log("num is even");
        }
        else{
            console.log("num is odd");
        }
    }
}

const res = new EvenOdd();
res.findNum(1000000000000009);