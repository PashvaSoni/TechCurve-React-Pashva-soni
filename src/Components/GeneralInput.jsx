import React from 'react'

const GeneralInput = (props) => {
    switch (props.inputType) {
        case "text":
            return (<div className='GeneralInput'>
                <label style={props.labelStyle}>
                    {props.inputTitle} :
                    <input value={props.inputValue} onChange={props.customChangeFunction} style={props.inputStyle} maxLength={props.maxLength} required={props.required} disabled={props.disable} name={props.inputName} placeholder={props.holder} type={props.inputType} />
                </label>
                <p style={{ display: props.error ? "block" : "none", color:'red', fontSize:'10px' }}>{props.errorMessage}</p>
            </div>)
        case "number":
            return (<div className='GeneralInput'>
                <label style={props.labelStyle}>
                    {props.inputTitle} :
                    <input value={props.inputValue} onChange={props.customChangeFunction} style={props.inputStyle} maxLength={props.maxLength} required={props.required} disabled={props.disable} name={props.inputName} placeholder={props.holder} type={props.inputType} />
                </label>
                <p style={{ display: props.error ? "block" : "none" }}>{props.errorMessage}</p>
            </div>)
        case "select":
            return <label style={props.labelStyle}>
                {props.inputTitle} :
                <select onChange={props.customChangeFunction}>
                    {props.options.map((item, index) => {
                        return <option key={index}>{item}</option>
                    })}
                </select>
            </label>
        case "radio":
            return (<div className='GeneralInput'>
                <label style={props.labelStyle}>
                    {props.inputTitle} :
                    <input value={props.inputValue} style={props.inputStyle} onChange={props.customChangeFunction} required={props.required} disabled={props.disable} defaultChecked={props.default} name={props.inputName} type={"radio"} />
                </label>
                <p style={{ display: props.error ? "block" : "none" }}>{props.errorMessage}</p>
            </div>)
        case "checkbox":
            return <label>
                    {props.inputTitle} : 
                    <input onChange={props.customChangeFunction} name={props.inputName} defaultChecked={props.default} value={props.inputValue} type={'checkbox'} />
                </label>
        case "password":
            return (<div className='GeneralInput'>
                <label style={props.labelStyle}>
                    {props.inputTitle} :
                    <input value={props.inputValue} onChange={props.customChangeFunction} style={props.inputStyle} maxLength={props.maxLength} required={props.required} disabled={props.disable} name={props.inputName} placeholder={props.holder} type={props.inputType} />
                </label>
                <p style={{ display: props.error ? "block" : "none" }}>{props.errorMessage}</p>
            </div>)
        case "currency":
            return <select>
                <option>INR</option>
                <option>USD</option>
            </select>
        default:
            return <input name={props.inputName} type='text' />
    }
}

export default GeneralInput