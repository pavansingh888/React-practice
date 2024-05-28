import Tea from "./Tea"

function App() {
  const username = "Pavan made tea"
//{username} use this to treat variable in HTML below.
//#Interview - {username}  this is known as Evaluated expression , it won't accept JS code inside it. it will just accept the evaluated value of JS, only.
  return (
    <>
      <Tea/>  
    <h1>Tea and Coffee {username}</h1>
    <p>test paragraph</p>
    </>
)
}
//Since above problem was so common in react, we can write empty html tag as well - this is called Fragment in react.
export default App

/*
In summary, named exports are useful when you want to export multiple values and import them with their specific names, while default exports are
handy for exporting a single value and giving it a custom name when importing. The choice between the two depends on the structure and requirements of your codebase.

Import:
import Title from "./Title.jsx";
Default Export:
export default Title;
Named Export:
export { Title };
import { Title } from "./Title.jsx";

Writing Markup in JSX
1. Return a single root element 
To return multiple elements from a component, wrap them with a single parent tag.

2. Close all the tags -->
JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>. Internally bable looks for closing tags to convert JSX to JS.

3. camelCase all most of the things! 
JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead, named after the corresponding DOM property.

fragment - <> </> used
- to combine multiple components/multiple children into a single entity.
- To avoid creating extra node to group/combine elements and children we can use react fragments.

{} --> Allows to write pure JS in our code. including function calls
JSX attributes inside quotes are passed as strings.
work inside the JSX tag content or immediately after = in attributes.
{{ and }} is not special syntax: it’s a JavaScript object tucked inside JSX curly braces.
*/