 var marks = Array(6)

 var marks = new Array(20,30,40,27,10)

 var marks = [20,30,40,50,60]

 console.log(marks[2])

 marks[3] = 13

 console.log(marks)
 console.log(marks.length)//5

 marks.push(67)
 console.log(marks)
 marks.pop()

 console.log(marks)

 marks.unshift(23)
 console.log(marks)

console.log(marks.indexOf(40))  

console.log(marks.includes(120))

console.log(marks.slice(2,5))
var sum = 0
for(let i =0;i<marks.length;i++){

   //console.log(marks[i])
   
   sum = sum + marks[i]
    
}

console.log(sum)

//reduce filter map 
var total = marks.reduce((sum, totalMarks)=>sum + totalMarks,0)

console.log(total)

var scores = [20,30,40,50,60,70,81]

//create new array with even numbers and multiply with 3 and sum them

//for accumalating use reduce 

//for filter use filter based on condition 
var evens = []
for(let i =0;i<scores.length;i++){

    if(scores[i] %2==0){
        evens.push(scores[i])
         
    }

  
}  console.log(evens)

let newFilterEven = scores.filter(score=>score%2==0)
console.log(newFilterEven)


//map
var maped = newFilterEven.map(score=>score*3)
console.log(maped)
var sum = maped.reduce((sum,val)=>sum+val,0)
console.log(sum)