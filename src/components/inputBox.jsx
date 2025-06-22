import React from "react";

function inputBox({
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
  return (
    <div className={` bg-white p-3 rounded-lg text-sm flex ${className}}`}>
      <div className="w-1-2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          type="number"
          name=""
          id=""
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
      </div>
    </div>
  );
}

export default inputBox;
