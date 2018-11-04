import React from 'react';

const Input = ({
  onChange,
  value,
  target,
  label
}) => {

  const handleOnChange = (e) => onChange({
      [target]: Number(e.target.value)
  })

  return (
    <div className="Input">
        <fieldset>
          <label>
            {label && <span>{label}</span>}
            <input onChange={handleOnChange} value={value || ''} type="number"/> 
          </label>
        </fieldset>
    </div>
  )
}

export default Input;
