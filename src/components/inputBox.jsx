import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChane,
  currencyOptions = [],
  selectedCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}}`}>
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="0.00" // Placeholder text for the input
          disabled={amountDisabled} // Disable input if amountDisabled is true
          value={amount} // Controlled input for amount
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value)) // Convert to number before passing to onAmountChange
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap jsutify-end text-right ">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency} // Controlled select for currency
          onChange={(e) => onCurrencyChane && onCurrencyChane(e.target.value)} // Pass selected value to onCurrencyChane
          disabled={currencyDisabled} // Disable select if currencyDisabled is true
        >
          {currencyOptions.map(
            (
              currency // Map through currency options and create select options
            ) => (
              <option key={currency} value={currency}>
                {" "}
                // Use currency as the value
                {currency} // Display the currency name
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
