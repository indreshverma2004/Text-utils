import React,{useState} from 'react'
import './textform.css';

const TextForm = (props) => {

  const [text,setText]=useState('');

  const [mystyle,setMyStyle]=useState({
    color:"white",
    backgroundColor:"black",
    
  })
  const[btntext,setBtnText]=useState("Enable dark Mode");

  const toggleStyle=()=>{
    if(mystyle.color=="white"){
      setMyStyle({
        color:"black",
        backgroundColor:"white",
        border:'2px solid black',
      })
      setBtnText("Enable dark Mode")
    }else{
      setMyStyle({
        color:"white",
        backgroundColor:"black",
        border:'2px solid white',
      })
      setBtnText("Enable light Mode")
    }
  }
  
  const handleUpClick=()=>{
    // console.log("On change"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.makeAlert("Converted to Uppercase","Success");
  }

  const handleDownClick=()=>{
    // console.log("On change"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.makeAlert("Converted to lowercase","Success");
  }

  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
    // upar wala line likhne se hi andar ki value ham khud se website me change kr payenge
  }

  const handleclearClick=()=>{
    // let newText=('');
    setText(' ');
    props.makeAlert("Text is cleared","Success");
  }

  const [color, setColor] = useState('black');
    const handleChange = (event) => {
      setColor(event.target.value);
    };
  

  // setText("new Text");
  // let mystyle={
  //   color:props.mode==='dark'?'white':'black',
  //   backgroundColor:props.mode==='dark'?'black':'white',
  // }
  

  return (
    <>
    <div className="container" style={mystyle}>
        <h1>{props.heading}</h1>  
        <div className="mb-3">    
             {/* <label htmlFor="mybox" className="form-label">Example textarea</label> */}
              <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'grey':'white'}} id="mybox" rows="6" value={text} ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        {/* max-2 karne se don button ke beech gap aa jayega */}
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleclearClick}>Clear text</button>
        {/* <button className="btn btn-primary" onClick={colourtext}>Colour text</button> */}
        <div className="color-picker"style={{color:"blue"}}>
      {/* <label htmlFor="colorSelector">Choose a color:</label> */}
      {/* <select id="colorSelector" onChange={handleChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
      </select> */}
    </div>

    </div>
    <div className="container my-3" style={mystyle}>
      {/* my-3 will change  your text summary */}
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words ans {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes to read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Write something"}</p>
    </div>
    <div className="con" style={mystyle}>
    <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
    </div>
    
  </>
  )
}

export default TextForm
