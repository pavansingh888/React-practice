//like this user context there can be loginContext, productContext, cartContext. 
import React from "react";

//1.creating a context - Its nothing but we can interpret it as global variable.
const UserContext = React.createContext() 

export default UserContext;

//we made a context, this context will give us a major thing called provider.Every Context is a provider & provides variable.So 'UserContext' is also a provider.
// we will wrap our components with this UserContext. So this UserContext will become provider.Which mean all the components inside it will have acccess to this Global UserContext and can access all states thru it.

{/* <UserContext> 
<login/>
<Card>
    <data/>
</Card>
</UserContext> */}

//till we have seen how to create context. Now we will also need to create a context provider. see UserContextProvider.jsx.
//till now it was .js because we were not returning any jsx. Now to UserContextProvider we will need to create .jsx . to put it in top level of our HTML components as shown above.