function factorial(num){
    fact = 1 
    if(num<0)return("It's Negative Number")
        for(i=1;i<=num;i++){
      fact = fact* i 
        }return fact
} console.log(factorial(5));
