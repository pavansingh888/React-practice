import { useState,useEffect } from "react";

//1.Designing cutomHooks
function useCurrencyInfo(currency){
    //what's the hook we use when a component's life cycle event is triggered. - useEffect
    const [data,setData] =useState({})
    useEffect(()=>{
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])
    //data- problem
    //setData- no data access will be there
    //[data, setData] - correct to some extent but how will we have access to 'currency' in our customHook?
    //so we return ony data from above method - useCurrencyInfo
    return data
}

export default useCurrencyInfo //here in custom hook we designed a functionality and returned the method itself same as useState.