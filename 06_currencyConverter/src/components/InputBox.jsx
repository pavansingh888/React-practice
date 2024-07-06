import React,{useId} from 'react'  //rfce -enter using react snippet extension
// useId returns a unique ID string associated with this particular useId call in this particular component.

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], //all currency options we will get from API
    selectCurrency = "usd", //by default will be usd
    amountDisable= false, //by default false means user can change the amount
    currencyDisable= false,
    className = "",
}) {
    const amountInputId  = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} //its possible that we have not passed the onAmountChange function in from parent component in that it will crash, to handle this we use && to check.
                    //although e.target.value is correct and our datatype is also number right, but JS can be notorios somtimes, it might take values in event in string format that's why its good to wrap it inside Number()
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} //current value of select field, by default usd
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}> 
                            {currency}
                        </option>
                    ))}
                        //when same value is repeated again and again, then in performance react will get hit a lot, bcz react doesn't know the element it is making again and again, whether its the same thing again and again.
                        // to stop above issue, whenever we apply loops in JSX, then we'll need to pass 'key' always
                        //Its another discussion what this 'key' can be. like 'key' can be index, but index might also have perofrmance drawbacks of its own.
                        //So, remember - if we want perfomance in loop to repeat elements.We must pass a 'key', although react won't stop us.

                        /*\Purpose of Keys:

                        Efficient Reconciliation:

                        Unique Identifier: Keys help React identify each element uniquely during updates.
                        Order Tracking: Keys track element order changes, ensuring correct updates.
                        Avoiding Unnecessary Re-renders:

                        Prevents React from re-rendering all list items when only one item has changed, enhancing performance.
                        Maintaining Component State:

                        Keys help preserve component state. Changing keys can cause React to unmount and remount components, leading to potential state loss.

                        Key Considerations:

                        Uniqueness:

                        Ensure each key is unique among siblings to prevent incorrect updates.
                        Stable Keys:

                        Avoid using indices as keys to prevent performance issues and incorrect behavior during reordering or removal of items.
                        Key Propagation:

                        Apply keys to the element returned by .map to ensure each item gets a unique key. */
                </select>
            </div>
        </div>
    );
}

export default InputBox;