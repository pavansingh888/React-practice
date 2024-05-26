import React from 'react'; //core foundational library
import ReactDOM from 'react-dom/client'; //Its an implementation on web, just like React native for mobile app.
//above 2 lib. are used for DOM manipualtion of Web.
import App from './App';

//Inside website we have dom. But react makes DOM of its own known as VIRTUAL DOM. Inside React DOm there is a method createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
//taking strict mode of react. Its a property of react.
//rendering App. But app is not a HTML tag. that is the power of JSX that react gives. that means we can render HTML elements with help of JS. And JSX will almost look like HTML.
//<React.StrictMode> this safe mode of react is specific to development to do some optimisation
root.render(
    <App /> 
);

