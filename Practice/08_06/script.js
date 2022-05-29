/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const Data = {
    name: "new_object",
    val: 0,
 }


function content() {
    return `<ul>
        <li>${Data.name}</li>
        <li>${Data.val}</li>
    <ul/>`;
}
function set_new_element() { 
    const main = document.querySelector("main");
    main.append(content());
}

set_new_element();
