let javascriptFlashCards =

    [
    {"Term":"array", "Definition": "an object used to store multiple values in a single variable", "Example": "let array = [1, 2, 3, 4, 5]"},
    {"Term":"array.length", "Definition": "sets or returns the number of elements in an array"},
    {"Term":"concat()", "Definition": "joins two or more arrays, and returns a copy of the joined arrays", "Example": "let array3 = array1.concat(array2)"},
    {"Term":"filter()", "Definition": "creates a new array with every element in an array that pass a test", "Example": "array.filter(function())"},
    {"Term":"findIndex()", "Definition": "returns the index of the first element in an array that pass a test", "Example": "array.findIndex(function())"},
    {"Term":"forEach()", "Definition": "calls a function for each array element", "Example": "array.forEach(function())"},
    {"Term":"indexOf", "Definition": "search the array for an element and returns its position", "Example": "array.indexOf(item)"},
    {"Term":"join()", "Definition": "joins all elements of an array into a string", "Example": "array.join(separator)"},
    {"Term":"map()", "Definition": "creates a new array with the result of calling a function for each array element", "Example": "array.map(function())"},
    {"Term":"pop()", "Definition": "removes the last element of an array, and returns that element", "Example": "array.pop()"},
    {"Term":"push()", "Definition": "adds new elements to the end of an array, and returns the new length", "Example": "array.push(items)"},
    {"Term":"reverse()", "Definition": "reverses the order of the elements in an array", "Example": "array.reverse()"},
    {"Term":"slice()", "Definition": "selects a part of an array, and returns the new array", "Example": "array.slice(start, end)"},
    {"Term":"splice()", "Definition": "adds/Removes elements from an array", "Example": "array.splice(index)"},
    {"Term":"boolean()", "Definition": "function used to find out if an expression is true", "Example": "boolean(10 > 9)  // returns true"},
    {"Term":"+", "Definition": "used for addition OR to concatenate strings", "Example": "x = y + 2 OR text3 = text1 + text2"},
    {"Term":"+=", "Definition": "used to add value to a variable OR to concatenate strings", "Example": "x += y OR text1 += text2"},
    {"Term":"-", "Definition": "used for subtraction", "Example": "x = y - 2"},
    {"Term":"*", "Definition": "used for multiplication", "Example": "x = y * 2"},
    {"Term":"/", "Definition": "used for division", "Example": "x = y / 2"},
    {"Term":"%", "Definition": "modulus(division remainder)", "Example": " x - y % 2"},
    {"Term":"==", "Definition": "equals to", "Example": "x == y"},
    {"Term":"!=", "Definition": "not equal", "Example": "x != y"},
    {"Term":">", "Definition": "greater than", "Example": "x > y"},
    {"Term":"<", "Definition": "less than", "Example": "x < y"},
    {"Term":">=", "Definition": "greater than or equal to", "Example": "x >= y"},
    {"Term":"<=", "Definition": "less than or equal to", "Example": "x <= y"},
    {"Term":"&&", "Definition": "and", "Example": "x < 10 && y > 1"},
    {"Term":"break", "Definition": "exits a switch or a loop"},
    {"Term":"for", "Definition": "loops through a block of code a number of times", "Example": "for (i = 0; i < 5; i++)"},
    {"Term":"while", "Definition": "loops through a block of code while a specified condition is true"},
    {"Term":"function", "Definition": "declares a function", "Example": "myFunction()"},
    {"Term":"if", "Definition": "used to specify a block of code to be executed if a specified condition is true", "Example": "if (condition)"},
    {"Term":"else if", "Definition": "used to specify a new condition to test if the first condition is false", "Example": "else if (condition2)"},
    {"Term":"else", "Definition": "used to specify a block of code to be executed if the same condition is false"},
    {"Term":"let", "Definition": "declares a variable", "Example": "let name = 'John'"},
    {"Term":"return", "Definition": "stops the execution of a function and returns a value from that function", "Example": "return x + y"},
    {"Term":"split()", "Definition": "splits a string into an array of substrings", "Example": "string.split(separator)"},
    {"Term":"toLowerCase()", "Definition": "converts a string to lowercase letters", "Example": "string.toLowerCase()"},
    {"Term":"toUpperCase()", "Definition": "converts a string to uppercase letters", "Example": "string.toUpperCase()"},
    {"Term":"toString()", "Definition": "returns the value of a string object", "Example": "object.toString()"},
    {"Term":"console.log()", "Definition": "outputs a message to the console", "Example": "console.log('Hello World')"},
    {"Term":"addEventListener", "Definition": "attaches an event handler to the document", "Example": "document.addEventListener('click', function(){})"},
    {"Term":"createElement()", "Definition": "creates an Element node", "Example": "var btn = document.createElement('BUTTON')"},
    {"Term":"getElementById()", "Definition": "returns the element that has the ID attribute with the specified value", "Example": "document.getElementById('demo')"},
    {"Term":"getElementsByClassName()", "Definition": "returns a NodeList containing all elements with the specified class name", "Example": "var x = document.getElementsByClassName('example')"},
    {"Term":"getElementsByName()", "Definition": "returns a NodeList containing all elements with a specified name", "Example": "var x = document.getElementsByName('name')"},
    {"Term":"getElementsByTagName()", "Definition": "returns a NodeList containing all elements with the specified tag name", "Example": "var x = document.getElementsByTagName('LI')"},
    {"Term":"querySelector()", "Definition": "returns the first element that matches a specified CSS selector(s) in the document", "Example": "document.querySelector('.example')"},
    {"Term":"querySelectorAll()", "Definition": "returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document", "Example": "var x = document.querySelectorAll('.example')"},
    {"Term":"appendChild()", "Definition": "adds a new child node, to an element, as the last child node", "Example": "node.appendChild(node)"},
    {"Term":"innerHTML", "Definition": "sets or returns the content of an element", "Example": "infoUL.innerHTML = 'Paragraph changed!'"}
    ]