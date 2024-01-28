const flag =  true
if(!flag){

console.log("Condition Satisfied")

}else {

console.log("not satisfied")

}


let i =0;
while(i<10)
{
    i++;
console.log(i)
 


}

for(let k =0;k<=10;k++){

console.log(k)

}

//2 and 5 

// from 1 to 10 common multiple numbers 

console.log("***************")
let n =0;
for (let j =0;j<=100;j++){

if(j %2==0 && j % 5==0){
n++
    console.log(j)
    if(n==3){

        break
    }
}

}