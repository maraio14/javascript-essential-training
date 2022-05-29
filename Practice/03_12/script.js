/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Refrigerator from "./Refrigerator.js";

const refrigerator = new Refrigerator(
    "Samsung",
    "beige",
    2,
    170,
    251,
    true
);
console.log("The refrigerator: ", refrigerator);