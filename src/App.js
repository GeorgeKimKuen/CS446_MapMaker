import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import Menu from "./components/Menu";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./App.css";
import * as ReactDOM from 'react-dom/client';
import Lobby from './components/Lobby';

function App() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const rootRef = useRef(null);
    const reactDOM = require('react-dom/client');
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);

    // Initialization when the component
    // mounts for the first time
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const root = reactDOM.createRoot(
          document.getElementById('root')
        );
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
        rootRef.current = root;
    }, [lineColor, lineOpacity, lineWidth]);

    // Function for starting the drawing
    const startDrawing = (e) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(
          e.nativeEvent.offsetX,
          e.nativeEvent.offsetY
        );
        setIsDrawing(true);
    };

    // Function for ending the drawing
    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };

    const eraseDrawing = () => {
      ctxRef.current.clearRect(0, 0, 1920, 1080);
    };

    const placePiece = () => {

      const element = <Draggable><div className="piece"></div></Draggable>;
      rootRef.current.render(element);
    };

    const draw = (e) => {
      if (!isDrawing) {
        return;
      }
      ctxRef.current.lineTo(
        e.nativeEvent.offsetX,
        e.nativeEvent.offsetY
      );

      ctxRef.current.stroke();
    };

    const [lobby, setlobby] = useState(false)
    const [loading, setloading] = useState(false)

    useEffect(()=>{
      setTimeout(()=> {
        setlobby(true);

      }, 0);
    },[]);

    return (
        <div className="App">
          <div id="content" class="solid">
            <div className="draw-area">

            <h1>Map Maker</h1>
              <Popup trigger={<button>About Application</button>} position="right center">
                <div>Map Maker is a prototype application to help play games online with friends.</div>
              </Popup>

              <Lobby trigger={lobby} setTrigger ={setlobby}></Lobby>

              <Menu
                setLineColor={setLineColor}
                setLineWidth={setLineWidth}
                setLineOpacity={setLineOpacity}
                eraseDrawing={eraseDrawing}
                placePiece={placePiece}
              />
              <canvas
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                ref={canvasRef}
                width={`1920px`}
                height={`930px`}
              />
            </div>
          </div>
        </div>
    );
}

export default App;
