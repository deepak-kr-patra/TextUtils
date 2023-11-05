import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted text to uppercase", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted text to lowercase", "success")
    }

    const clearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("text cleared", "success")
    }

    const copyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("text copied", "success")
    }

    const clearExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        newText = newText.join(" ");
        setText(newText);
        props.showAlert("extra spaces removed", "success")
    }

    const speakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("text is being spoken", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // function countWords(text) {
    //     let words = 0

    //     let countableSpaces = 0
    //     let spaceAtLast = false
    //     for (let index = 0; index < text.length; index++) {
    //         const element = text[index]
    //         if (element === " " && spaceAtLast === false) {
    //             countableSpaces++
    //             spaceAtLast = true
    //         }
    //         else if (element === " " && spaceAtLast === true) {
    //             spaceAtLast = true
    //         }
    //         else {
    //             spaceAtLast = false
    //         }
    //     }
    //     words = countableSpaces + 1

    //     if (text[text.length - 1] === " ") {
    //         words--
    //     }
    //     if (text.length === 0) {
    //         words = 0
    //     }

    //     return words
    // }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{ color: `${props.mode === "light" ? "black" : "white"}` }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="boxText" rows="8" placeholder={`${props.mode === "light" ? "Enter text here" : ""}`} style={{ backgroundColor: `${props.mode === "light" ? "white" : "#13466e"}`, color: `${props.mode === "light" ? "black" : "white"}` }}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={clearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={copyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={clearExtraSpaces}>Clear Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={speakClick}>Text Speaker</button>
            </div>
            <div className="container my-3" style={{ color: `${props.mode === "light" ? "black" : "white"}` }}>
                <h1>Text summary</h1>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <h2>Peview</h2>
                <p>{text.length > 0 ? text : "No text to preiview!"}</p>
            </div>
        </>
    )
}
