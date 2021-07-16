import React from 'react';

// const Input = ({inputRef, inputName, inputType, inputClass, inputPlaceholder, inputErrors, inputLabel, rules,}) => {

//     return(
//         <div className='form__input'>
//             <input name={inputName} type={inputType}  className={`input ${inputClass}`}  placeholder={ inputPlaceholder } {...inputRef(inputLabel, { ...rules })} />
//             {inputErrors[inputLabel] && inputErrors[inputLabel].type === 'required' && <p>{inputName} is required</p>}
//             {inputErrors[inputLabel] && inputErrors[inputLabel].type === 'maxLength' && <p>{inputName} should be have maximum of {rules.maxLength} characters</p>}
//             {inputErrors[inputLabel] && inputErrors[inputLabel].type === 'min' && <p>{inputName} should be contain atleast {rules.min} characters</p>}
//             {inputErrors[inputLabel] && inputErrors[inputLabel].type === 'pattern' && <p>{inputName} is invalid</p>}
//         </div>
//     )
// }



const Input = ({ register, inputOnChange, inputName, inputType, inputClass, inputPlaceholder, inputLabel, rules, }) => {


    return (
        <div className='form__input'>
            <input
                onChange={inputOnChange}
                name={inputName}
                type={inputType}
                className={`input ${inputClass}`}
                placeholder={inputPlaceholder}
                {...register(inputLabel, { ...rules })}
            />
            {/* {inputErrors.inputLabel.type === 'required' && <p>{inputName} is required</p>} */}
            {/* {inputErrors.inputLabel.type === 'maxLength' && <p>{inputName} should be have maximum of {rules.maxLength} characters</p>} */}
            {/* {inputErrors.inputLabel.type === 'min' && <p>{inputName} should be contain atleast {rules.min} characters</p>} */}
            {/* {inputErrors.inputLabel.type === 'pattern' && <p>{inputName} is invalid</p>} */}
        </div>
    )
}

export default Input;