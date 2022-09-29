/*
    50) Write a function which takes the height and width of a rectangle as
        parameters. Find out the area of that rectangle and print the result
*/

function rectangleArea(height, width) {
    const area = height * width;

    return area;
}

const myHomeArea = rectangleArea(300, 600);
console.log(myHomeArea);