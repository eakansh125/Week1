
console.log("----------FUNCTIONS EASY----------")

//1
const power = (a,b) => Math.pow(a,b)

console.log(`Ans 1: ${power(4,5)}`)

//2

const areaOfHexagon = a => (3*Math.sqrt(3)/2)*a*a

console.log(`Ans 2: ${areaOfHexagon(10)}`)

//3

const noOfWords = a => {
    var c = 0;
    for(let i=0;i<a.length;i++)
    {
        if(a[i]===' ')
            c++
    }
    console.log(`Ans 3: Number of words: ${c+1}`)
}

noOfWords("We are neogrammers")

//4
const findMin = (...n) => {
    var min = n[0]
    n.map(num => {
        if(num < min)
            min = num
    })
    console.log(`Ans 4: Minimun: ${min}`)
}

findMin(4,5,6,2)

//5
const findMax = (...n) => {
    var max = n[0]
    n.map(num => {
        if(num > max)
            max = num
    })
    console.log(`Ans 5: Maximun: ${max}`)
}

findMax(4,5,6,2)

//6

const typeOfTriangle = (a,b,c) => {
    if((a === b) && (b === c))
        console.log("Ans 6: Equilateral")
    else if((a !== b) && (b !== c) && (a !== c))
        console.log("Ans 6: Scalene")
    else
        console.log("Ans 6: Isosceles")
        
}

typeOfTriangle(60,60,60)

console.log("----------FUNCTIONS MEDIUM----------")

//1

const arrayLength = (...n) => {
    var l=0;
    n.map(num => {
        l++;
    })
    console.log(`Ans 1: Length: ${l}`)
}

arrayLength(1,2,3,4,5,7,7,7,7)

//2

const indexOf = (a, b) => {
    for(var i=0;i<a.length;i++)
    {
        if(a[i] === b)
            break;
    }
    console.log(`Ans 2: Index: ${i+1}`)
}

indexOf([1,3,5,5,4,8],3)

//3

const replace = (a,b,c) => {
    for(var i=0;i<a.length;i++)
    {
        if(a[i] === b)
            a[i] = c
    }
    console.log(`Ans 3: New array: ${a}`)
}

replace([1,2,5,7,8,5,5,5,5] , 5, 10)

//4

const mergeArray = (a,b) => {
    for(var i=0;i<b.length;i++)
    {
        a.push(b[i])
    }
    console.log(`Ans 4: New array: ${a}`)
}

mergeArray([1,2,3],[4,5,6])

//5

const charAt = (a,b) => console.log(`Ans 5: ${a[b]}`)

charAt("What's up?",7)


//6

const minDate = (a,b) => {

}

console.log("----------FUNCTIONS ADVANCED----------")
//1

const encodeString = (a,b) => {
    var str = ''
    for(var i=0;i<a.length;i++)
    {
        str = str + a[i] + b
    }
    console.log(`Ans 1: Encoded: ${str}`)
}

encodeString("neogcamp",2)

//2

const toSentenceCase = a => {
    a = ' ' + a;
    var str = ''
    for(var i=1;i<a.length;i++)
    {
        if(a[i-1] === ' ')
        {
            str = str + a[i].toUpperCase()
        }
        else
        {
            str = str + a[i]
        }
            
    }
    console.log(`Ans 2: Encoded: ${str}`)
}

toSentenceCase("we are neogrammers")

for(var i=0;i<5;i++)
{
    var str = ''
    for(var j=0;j<=i;j++)
    {
        str = str + '*'
    }
    console.log(str)
    console.log('\n')
}











