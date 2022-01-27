import {React,useState} from 'react';
import './stylesheet/TextForm.css';
import PropTypes from 'prop-types';
import Button from './Button';

export default function TextForm(props){
    const [Text,setText]=useState("Enter Text ")

    const ClickEvent=()=>{
        //console.log(Text);
        setText(Text.toUpperCase())
    }
    const ChangeText=(e)=>{
        setText(e.target.value)
    }
    const ClickLowerEvent=()=>{
        setText(Text.toLowerCase())
    }
    const TitleCase=()=>{
        let newArray = Text.toLowerCase().split(" "); 
        // for (let i = 0; i < newArray.length; i++) {
        //     mearge = mearge+' '+newArray[i].charAt(0).toUpperCase()+newArray[i].slice(1);
        // }
        for (let i = 0; i < newArray.length; i++) {
            newArray[i] = newArray[i].charAt(0).toUpperCase()+newArray[i].slice(1);
        }
        //console.log(newArray.join(" "));
        setText(newArray.join(" "));
    }
    const sentenceCase=()=>{
        var low=Text.toLowerCase();
        setText(low.charAt(0).toUpperCase()+low.slice(1));
    }
    const ClearData=()=>{
        setText(" ");
    }
    return(
        <>
            <div className="container mt-3">
                <h3>{props.Header}</h3>
                <textarea className="fltTextArea" value={Text} onChange={e=>ChangeText(e)} placeholder={Text} id="exampleFormControlTextarea1 " rows="10"></textarea><br/>
                <Button onClick={ClickEvent}>UpperCase</Button>
                <Button onClick={ClickLowerEvent}>Lowercase</Button>
                <Button onClick={TitleCase}>Titlecase</Button>
                <Button onClick={sentenceCase}>sentenceCase</Button>
                <Button onClick={ClearData}>Clear Text</Button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary </h2>
                <h3>Total Word is {Text.split(" ").length} and Total Characters is {Text.length}</h3>
                <h4>{0.008 * Text.split(" ").length} Minutes To Read</h4>
                <h4>PreView</h4>
                <h5>{Text}</h5>
            </div>

        </>
    );
}
TextForm.defaultProps={Header:"set Headers here"}
TextForm.propTypes={Header:PropTypes.string.isRequired}

