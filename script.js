// Generates a Pascal triangle with the specified number of lines
function generateTriangle(numLines) {
    const triangle = [[1], [1, 1]];

    // Generate the rest of the lines
    while (triangle.length < numLines) {
        const newLine = generateNextLine(triangle[triangle.length - 1]);
        triangle.push(newLine);
    }

    return triangle;
}

// Generates the next line of the Pascal triangle based on the previous line
function generateNextLine(previousLine) {
    const line = [1];

    // Generate the middle numbers of the line
    for (let i = 1; i < previousLine.length; i++) {
        line.push(previousLine[i - 1] + previousLine[i]);
    }

    line.push(1);
    return line;
}

// Get the number of lines from the user
const numLines = prompt('Enter the number of lines:')*1;

// Check if the input is a positive integer
if (!Number.isInteger(numLines) || numLines <= 0) {
    alert("Please enter a positive integer number!");
} else {
    // Generate and display the Pascal triangle
    let triangle = generateTriangle(numLines);
    if (numLines === 1){
        triangle = [[1]];
    }
    triangle.forEach((item) => {
        const spaces = " ".repeat(numLines - item.length);
        console.log(`${spaces}${item.join(" ")}`);
    })
}