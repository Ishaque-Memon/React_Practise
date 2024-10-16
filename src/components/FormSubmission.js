import React, {useState} from 'react'
// import PropTypes from 'prop-types'


export default function FormSubmission(props) {
    const handleUpClick = () =>{
        // alert("Thank You");
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    //    setText("You have clicked on handleUpClick")
    if(text === ''){
            
        props.showAlert("No Text Found!  to convert in Uppercase", "danger")
    }else{

        props.showAlert("Text Converted to Uppercase", "success")
    }
    
    }
    const handleLoClick = () =>{
        // alert("Thank You");
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        //    setText("You have clicked on handleUpClick")handleClearClick
        if(text === ''){
            
            props.showAlert("No Text Found!  to convert in Lowercase", "danger")
        }else{
    
            props.showAlert("Text Converted to Lowercase", "success")
        }
        
        
    }
    const handleClearClick = () =>{
        // alert("Thank You");
        // console.log("Uppercase was Clicked" + text);
        let newText = '';
        setText(newText)
        //    setText("You have clicked on handleUpClick")
        if(text === ''){
            
            props.showAlert("Already Empty", "danger")
        }else{

            props.showAlert("Text Cleard", "success")
        }
        
        
    }
    const handleScClick = () =>{
        // alert("Thank You");
        // console.log("Uppercase was Clicked" + text);
        let newText = text[0].toUpperCase() + text.slice(1)
        setText(newText)
        //    setText("You have clicked on handleUpClick")
        props.showAlert("Text Converted into Sentence form", "success")
        
        
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        if(text === ''){
        props.showAlert("First, write something in textbox!", "danger")    
        }else{
            props.showAlert("Speaking...", "success")
        }
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('')
    // text = "new text" //Wrong way to change the state
    // setText("new Text"); //Correct way to change the state
    
    return (
    <>
    <div className="container">

    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control " value={text} onChange={handleOnChange} id="TextBox" rows="3" 
    style={
        {
            backgroundColor: props.mode==='light'?'white':'rgb(237, 78, 103)',
            color: props.mode==='light'?'black':'white'

    } 
    } ></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleScClick}>Sentence case</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
        
        <div className="container my-2">
            <h2>Your Summary is</h2>
            <p>words {text === '' ? text[0] : text.split(" ").length} and Characters {text.length}</p>
            {/* <p>words {text.split(" ").length-1 } words and {1000-text.length-1} </p> */}

            <p>You will read words in {0.008 * text.split(" ").length} minutes </p>

        <h3>Preview Text</h3>
        <p>{text.length>0?text:'Write anything in above textbox, to preview it here'}</p>
        
    




        </div>
    </>
  )
}

// FormSubmission.propTypes = {
//     heading: PropTypes.string
// }