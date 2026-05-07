// Problem-1

const filterEvenNumbers = (arr: number[]):number[] =>{
    let evenArr:number[] =[];

    for(let num of arr){
        if(num%2===0){
            evenArr.push(num);
        }
    }
    return evenArr;
}

// Problem-2

const reverseString = (str:string):string =>{
    return str.split("").reverse().join("");
}

// Problem-3

type StringOrNumber= string|number;

const checkType=(param:StringOrNumber):string=>{
    if(typeof param === 'string'){
        return "String";
    }
    else{
        return "Number";
    }
}

// Problem-4

const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T,K extends keyof T>(obj:T,key:K)=>{
    return obj[key];
}

// Prolem-5
interface Book{
    title:string;
    author:string;
    publishedYear:number;
}
interface BookWithReadStatus extends Book{
  isRead:boolean;
}

const toggleReadStatus = (obj:Book):BookWithReadStatus=>{
    return {...obj, isRead: true,};
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

// Problem-6

class Person{
    constructor(public name: string, public age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade: string;
    constructor(name:string, age:number,grade: string){
        super(name,age);
        this.grade=grade;
    }
    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Problem 7

function getIntersection(arr1:number[],arr2:number[]):number[]{

    const arr: number[] = arr1.filter(num => arr2.includes(num) );
    return arr;
}
