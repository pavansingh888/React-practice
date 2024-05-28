/*
We make folder structured.
Fist we make the individual components.
Then we combine individual components into a new component.
Then we use that new component in our App.
This how hierarchy is built in react.

Vite react App - 
Component name Capital.
Component file can capital is good practice.
Vite will force to make component extension as .jsx
if not html is returned in file then it can be .js
*/

function Tea(){
    return (
        <h3>Tea is ready</h3>
    )
}

export default Tea