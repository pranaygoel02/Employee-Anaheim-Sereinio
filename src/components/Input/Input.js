import React from 'react'

function Input({label, name, type, value, onChange, required, placeholder, checked, disabled, options, show = true}) {
  
  return (
    show && <div className='flex-col-start gap-2 flex-1'>
        <label htmlFor="name">{label}{required && '*'}</label>
        {type === 'description' ? <textarea disabled={disabled === true} required={required === true} className='input-field' placeholder={placeholder} value={value} onChange={onChange} name={name}/> : null}
        {type === 'select' ? <select onChange={onChange} value={value} className='input-field'>
            <option>Select</option>
            {options && options.map((option,index)=>(
                <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select> : 
        type !== 'description' && <input disabled={disabled === true} required={required === true} checked={checked} className={type === 'checkbox'? 'checkbox' : 'input-field'} placeholder={placeholder} type={type} value={value} onChange={onChange} name={name}/>}
    </div>
  )
}

export default Input