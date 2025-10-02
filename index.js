
// Creating a Set
    // const letters = new Set(['k', 'i', 'r', 'k', 'i', 'i']);
    // console.log(letters);

    // Collection of unique values
    // Disregards duplicate elements

/*
    Set Methods

    add()
    - add elements in a set
    Example:
    chars.add('a');
    chars.add('b');
    console.log(chars);


    size
    - return the number of elements of a set
    Example:
    const letters = new Set(['k', 'i', 'r', 'k', 'i', 'i']);
    let setSize = letters.size; 
    console.log(setSize); // 3

    
    has()
    - returns true if a specified value exists in a set.
    Example:
    const letters = new Set(['k', 'i', 'r', 'k', 'i', 'i']);
    console.log(letters.has('k')); // true
    console.log(letters.has('K')); // false


    forEach()
    - method invokes a function for each Set element:
    Example:
    const num = new Set([1, 2, 3, 4, 5]);
    num.forEach((arr, index, element) => {
        console.log(element * 2);
    });


    values()
    - method returns an Iterator object with the values in a Sets
    Example:
    // Non-iterable data
    const nums = new Set([1, 2, 3, 4]);

    const iterator = nums.values(); // return an iterable data
    console.log(iterator); // {a, b, c, d}

    let sum = 0;

    for (const num of iterator) {
        sum += num;
    }
    console.log(sum);


    keys()
    - method returns an Iterator object with the values in a Set
    Example:
    const nums = new Set([1, 2, 3, 4]);
    const iterator = nums.keys(); // return an iterable data
    console.log(iterator); // {a, b, c, d}

    let sum = 0;

    for (const num of iterator) {
        sum += num;
    }
    console.log(sum);


    entries()
    - method returns an Iterator with [value,value] pairs from a Set
    Example:
    const letters = new Set(["a","b","c","d","e"]);
    const myIterator = letters.entries();
    console.log(myIterator);

    let text = "";
    for (const entry of myIterator) {
        console.log(entry);text += entry;
    }
    console.log(text);
*/


/*

    // Set Logic

    union()
    - method returns the union of two sets
    - returns a new set containing the elements which are in this set, or in the argument set, or in both:
    Example:
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);
    const C = A.union(B);
    console.log(C);


    intersection()
    - method returns the intersection of two sets.
    - method returns a new set containing the elements which are in this set and in the argument set
    Example:
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);

    const C = A.intersection(B);
    console.log(C);


    difference()
    - method returns the difference between two sets
    - method returns a new set containing elements which are in this set but not in the argument set
    Example:
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);

    const C = B.difference(A);
    console.log(C);


    symmetricDifference()
    - method returns the symmetric difference between to sets
    - method returns a new set containing elements which are in this set or in the argument set, but not in both
    Example:
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);

    const C = A.symmetricDifference(B);
    console.log(C);


    isSubsetOf()
    - method returns true if all elements in this set is also elements in the argument set
    Example:
    const A = new Set(['a','b','c']);
    const B = new Set(['a','b','c','d']);

    let answer = A.isSubsetOf(B);
    console.log(answer);


    isSupersetOf()
    - method returns true if all elements in the argument set are also in this set
    Example:
    const A = new Set(['a','b','c']);
    const B = new Set(['b','c','d']);

    let answer = A.isSupersetOf(B);
    console.log(answer);


    isDisjointFrom()
    - method returns true if this set has no elements in common with the argument set
    Example:
    const A = new Set(['a','b','c']);
    const B = new Set(['e','f','d']);

    let answer = A.isDisjointFrom(B);
    console.log(answer);
*/

/*
    Set WeakSet

    - A JavaScript WeakSet is a collection of values where the values must be objects
    - A WeakSet holds weak references to its values
    Example:
    let mySet = new WeakSet();

    let myObj = {
        fname: 'Kirk',
        lname: 'Villapando'
    };

    let newObj = {address: 'San Pablo City'};

    mySet.add(myObj);
    mySet.add(newObj);

    console.log(mySet);
    console.log(mySet.has(newObj));
*/


// Sample Problems

/*
1. Remove Duplicates from Array
Write a function that takes an array and returns a new array with all duplicates removed.
*/

function duplicateRemover(array) {
    const set = new Set();
    const result = [];
    for (let i = 0; i < array.length; i++) {
        set.add(array[i]);
    }
    
    for (const value of set.values()) {
        result.push(value);
    }
    
    return result;
}

console.log(duplicateRemover([1, 2, 2, 3, 4, 4, 5]));

/*
2. 2. Check if Value Exists
Create a function that checks if a specific value exists in a Set.
*/

// Given Set: {1, 2, 3, 4, 5}

function checker (value) {
    const set1 = new Set([1, 2, 3, 4, 5]);

    return set1.has(value);
}

console.log(checker(1));


/*
3. 3. Count Unique Characters
Write a function that counts the number of unique characters in a string.
*/

function uniqueChars(string) {
    const set2 = new Set();
    
    for (const char in string) {
        set2.add(string[char])
    }

    return `\'${string}\' has ${set2.size} unique characters`;
    
}
console.log(uniqueChars('Hello'));

/*
4. Union of Two Sets
Create a function that returns the union of two Sets (all elements from both Sets).
*/

function setsUnited (set1, set2) {
    const finalSet = set1.union(set2);
    return finalSet;
}

const set3 = new Set([1, 3, 5, 7]);
const set4 = new Set([2, 4, 6, 8]);

console.log(setsUnited(set3,set4));

/*
5. Intersection of Two Sets
Write a function that returns the intersection of two Sets (common elements).
*/

/*
6. Difference of Two Sets
Create a function that returns elements in Set A that are not in Set B.
*/

/*
7. Check if Subset
Write a function to check if one Set is a subset of another Set.
*/

/*
8. Find First Unique Character
Given a string, find the first character that appears only once.
*/

/*
9. Symmetric Difference
Find elements that are in either Set A or Set B, but not in both.
*/

/*
10. Find Duplicates in Array
Return all elements that appear more than once in an array.
*/

/*
11. Check if Arrays are Disjoint
Determine if two arrays have no common elements.
*/

/*
12. Convert Set to Sorted Array
Create a function that converts a Set to a sorted array.
*/

/*
13. Find Missing Numbers
Given an array of numbers from 1 to n with some missing, find all missing numbers.
*/

/*
14. Remove Vowels Tracking Uniqueness
Remove all vowels from a string and count unique consonants.
*/