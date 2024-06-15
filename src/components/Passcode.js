import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Passcode.css";

export default function Passcode() {
    const[passcode, setPasscode] = useState([]);
    const[access, setAccess] = useState(1234);

  const keys = [];

  for (let i = 0; i < 10; i++) {
    keys.push(i);   
  }

  let lastElement = keys.shift();
  keys.push(lastElement);
  console.log(lastElement, keys);


  const handleClick = (e) => {
    setPasscode(() => [...passcode,e])
    if(passcode.length === 4){
        if(access === Number(passcode.join(''))){
            alert('Passcode is correct');
            setPasscode([]);
        }
        else{
            alert('Passcode is incorrect');
            setPasscode([]);
        }
    }
  }

  return (
    <div className="container">
        <div className="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Passcode"
            value={passcode.join(' ')}
          />
        </div>
      <div className="number-pad">
        {keys.map((key, i) => {
          return (
            <button className={key===0 ? "zero" : "number"} key={i} onClick={() => handleClick(key)}>
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}
