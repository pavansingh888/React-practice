//What react basically does -  take a function , we return HTML from that Function. and react will render it.
//Advantage of above is - Now we have programming capabilities in HTML which we didn't had.
import Tea from "./Tea"

function App() {
  return (
    <>  
    <h1>React learning</h1>
  <Tea/>
  </>

  );
}
//Since above problem was so common in react, we can write empty html tag as well - this is called Fragment in react.

export default App;
