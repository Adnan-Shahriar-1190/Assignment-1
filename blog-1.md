# Pick and Omit in TypeScript

## Introduction

In projects,we create one main interface that represents all the featrues of a object. But different parts of the project may need only some specific features of the object. A prduct type may have Id, Name, Price, Stock, Color. But let's say for Product summary we only need Product name,price and color. So we don't want to create a separate type for the ProductSummary. It will be a repeated task. For this we may use `Pick` and `Omit` . 

## Problem of repeating Interfaces or types

Let's we have a master `Product` type:

```ts
type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};
```

Now imagine we need different types for product summary, colorWithStorck:

```ts
type ProductSummary {
  name: string;
  price: string;
}
```

```ts
type ColorWithStock {
  stock: number;
  color?: string;
}
```
This method works but we are repeating the properties that already present in the `Product` type.


## Using `Pick`

`Pick` allows us to select any specific properties from an existing type or interface.

```ts
type ProductSummary = Pick<Product, "id" | "name" | "price">;
```
or,

```ts
type ColorWithStock = Pick<Product, "stock" | "color">;
```

So, Create a new type from `Product`, but only keep `id`, `name`, and `price`.

Now we can use this type to create a new object

```ts
const Pen: ProductSummary = {
  id: 1,
  name: "Metador Pen",
  price: 5,
};
```

## Using `Omit`

`Omit` actually does the opposite of `Pick`. We remove the features that we don't want from the object.

```ts
type ProductWithoutStock = Omit<Product, "stock" | "color">;
```

So,we are creating a new type from `Product` but we are removing the `strock` and `color` property.

Generally, We use `Omit` when we need most properties except a few.


## Concept of Keeping Code DRY

DRY means: Don't Repeat Yourself.

Without `Pick` and `Omit`, we may need to write many duplicate types and interfaces. But for using `Pick` and `Omit` we just choose or remove the properties we want to keep for the new type in a single line of code and use it to make objects.

## Conclusion

`Pick` and `Omit` are TS utility types that help us create separate versions of a master type without repeating code.

`Pick` selects only the properties we need. `Omit` removes the properties we do not need. Together, they help us keep code DRY, safer, and easier to maintain.