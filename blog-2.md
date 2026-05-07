# TypeScript Generics

## Introduction
In typescript sometimes we work with some types of functions,classes that may take different types of inptus. For different data types we may need to write same functions or classes multiple times. To solve this issue we use Generic. Generic solves both type-safety and code duplication issue.

### Without generics problem:
```ts
const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayWithTuple = (param1: number, param2: string) => [
  param1,
  param2,
];

```
In this code we have to write two separate functions because the parameter datatype is different.

### Solution with generics
A Generic is a type parameter a placeholder that gets replaced with the actual type when a function,class is used. In TypeScript,generics are declared using angle brackets,like <T>. By convention, T usually means Type.

```ts
const createArrayWithTuple = <T, U>(param1: T, param2: U): [T, U] => {
  return [param1, param2];
};

```

With generics we only write one function for both of the cases which also ensures the type safety. We can combine generics with keyof operator.We can also use generic with Intefaces.

```ts
const getProperty = <T,K extends keyof T>(obj:T,key:K)=>{
    return obj[key];
}
```
This function ensures type safety because K extends keyof T means the key must be one of the valid keys of the object T.

## Conclusion

TypeScript Generics helps us to write reusable, flexible, type-safe code. generics are especially useful for API responses,reusable utility functions, form handling, data tables, and component libraries. They help us build flexible code that still remains strictly typed.