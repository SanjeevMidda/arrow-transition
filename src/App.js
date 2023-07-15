import { useState } from "react";
import "./index.css";

function App() {
  const [rotation, setRotation] = useState(0);
  const [status, setStatus] = useState("home");

  // let moveArrow = () => {
  //   if (rotation === 270) {
  //     setRotation(0);
  //   } else {
  //     setRotation(rotation + 90);
  //   }
  // };

  // console.log(rotation);
  let arrowStyles = {
    transform: `rotate(${rotation}deg)`,
  };

  if (status === "home") {
    
  } else if (status === "about") {
  } else if (status === "contact") {
  } else if (status === "works") {
  }

  return (
    <div className="App">
      <div className="container">
        <h3 className="a" onClick={() => setRotation(rotation + 0)}>
          HOME
        </h3>
        <h3 className="b" onClick={() => setRotation(rotation + 90)}>
          WORKS
        </h3>
        <h3 className="c" style={arrowStyles}>
          ↑
        </h3>
        <h3 className="d" onClick={() => setRotation(rotation + 90)}>
          ABOUT
        </h3>
        <h3 className="e" onClick={() => setRotation(rotation + 60)}>
          CONTACT
        </h3>
      </div>

      {rotation === 0 && (
        <div className="home">
          <h1>HOME</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            quia placeat qui quasi id expedita, dolores in ipsa officiis
            ratione, cum accusantium fuga voluptas explicabo soluta vero iusto.
            Quas, aspernatur?
          </p>
        </div>
      )}
      {rotation === 30 && (
        <div className="about">
          <h1>ABOUT</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            quia placeat qui quasi id expedita, dolores in ipsa officiis
            ratione, cum accusantium fuga voluptas explicabo soluta vero iusto.
            Quas, aspernatur?
          </p>
        </div>
      )}
      {rotation === 60 && (
        <div className="contact">
          <h1>CONTACT</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            quia placeat qui quasi id expedita, dolores in ipsa officiis
            ratione, cum accusantium fuga voluptas explicabo soluta vero iusto.
            Quas, aspernatur?
          </p>
        </div>
      )}
      {rotation === 90 && (
        <div className="works">
          <h1>WORKS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            quia placeat qui quasi id expedita, dolores in ipsa officiis
            ratione, cum accusantium fuga voluptas explicabo soluta vero iusto.
            Quas, aspernatur?
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
