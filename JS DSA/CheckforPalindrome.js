function isPalindrome(num){
    let num1 = num.toString()
    let palindrom = num1.split('').reverse().join('')
    if(palindrom==num){
        return("It's a palindrome")
    }else{
        return("It's not a palindrome")
    }

}
console.log(isPalindrome("121"));
