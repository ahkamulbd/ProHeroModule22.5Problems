/*
    48) Suppose, you have an array with 8 elements. Find the smallest element of
        that array.
*/

const array = [45, 23, 89, 23, 12, 97, 13, 7];

function smallestNumber(elements) {
    let smallest = elements[0];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (smallest > element) {
            smallest = element;
        }
    }
    return smallest;
}
const gotSmallestNumber = smallestNumber(array);
console.log(gotSmallestNumber);