/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
/**
 * Create a Backpack object.
 */

const refrigerator = {
  name: "Samsung",
  color: "beige",
  doors: 15,
  volume: {
    frige: 150,
    freezer: 200,
  },
  doorOpen: false,
};

console.log("The refrigerator object:", refrigerator);
console.log("Frige volume:", refrigerator.volume.frige, "freezer volume:", refrigerator.volume.freezer);
