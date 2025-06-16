import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpperCaseClick = () => {
        console.log('Uppercase button clicked');
        //to convert the text to uppercase, we can use the toUpperCase() method
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCaseClick = () => {
        console.log('Lowercase button clicked');
        //to convert the text to lowercase, we can use the toLowerCase() method
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearText = () => {
        console.log('Clear button clicked');
        //to clear the text, we can set the text to an empty string
        let newText = '';
        setText(newText);
    }

    const handleCopyText = () => {
        console.log('Copy button clicked');
        //to copy the text to clipboard, we can use the navigator.clipboard.writeText() method
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
        setTimeout(() => {
            props.showAlert(null);
        }, 1000);
    }

    const handleExtraSpaces = () => {
        console.log('Remove Extra Spaces button clicked');
        //to remove extra spaces from the text, we can use the replace() method with a regular expression
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    //we get an event object when the textarea value changes
    //the event object contains information about the event that occurred
    //in this case, we are interested in the target property of the event object
    //the target property contains the element that triggered the event
    const handleOnChange = (event) => {
        console.log('Text changed');
        //to get the value of the textarea, we can use event.target.value
        setText(event.target.value);
    }

    //useState is a hook that allows you to add state to a functional component
    //it returns an array with two elements, the first is the current state and the second is a function to update the state
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* onChange is an event handler that is called when the value of the textarea changes */}
                    <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} 
                    style={{backgroundColor : props.mode==='dark'?'grey':'white' , color : props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to Uppecase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p> {text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters </p>
                <p> {0.008 * text.trim().split(/\s+/).filter(word => word.length > 0).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
            </div>
        </>

    )
}
