import React, { useState, ChangeEvent, InputHTMLAttributes } from 'react';

interface TextInputProps {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  classWrap?: string;
  classInput?: string;
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
}

function TextInput({ label, id, value, onChange, classInput, classWrap, ...inputProps}: TextInputProps) {
  const customClassWrap = classWrap ? `relative ${classWrap}` : 'relative'
  const customClassInput = classInput ? `peer input no-autocomplete ${classInput}` : 'peer input no-autocomplete'

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={customClassWrap}>
      <input id={id} type="text" value={value} {...inputProps} onChange={handleInputChange} className={customClassInput} />
      <label className='input-label' htmlFor={id}>{label}</label>
    </div>
  );
}

export default TextInput;
