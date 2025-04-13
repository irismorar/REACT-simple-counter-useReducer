//import { useState } from "react";
import { useReducer } from "react";
import "./App.css";

//______________________________USING USESTATE()______________________________
//export default function App() {
// const [counter, setCounter] = useState(0);
// return (
//   <>
//     <footer>
//       <h1>My Simple Counter</h1>
//     </footer>
//     <main>
//       <section>
//         {counter >= 1 && (
//           <button onClick={() => setCounter(counter - 1)}>-</button>
//         )}
//         <div className="counter">{counter}</div>
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//       </section>
//       <button
//         onClick={() => {
//           setCounter(0);
//         }}
//       >
//         RESET
//       </button>
//     </main>
//   </>
// );
//}

//______________________________USING USEREDUCER()______________________________
const initialState = { counter: 0 };

function myReducer(currentState, action) {
  const { type } = action;
  switch (type) {
    case "decrement": {
      return { counter: currentState.counter - 1 };
    }
    case "increment": {
      return { counter: currentState.counter + 1 };
    }
    case "reset": {
      return initialState;
    }
    default:
      return alert(`The ${type} type is not valid`);
  }
}

export default function App() {
  const [currentState, dispatch] = useReducer(myReducer, initialState);

  return (
    <>
      <footer>
        <h1>My Simple Counter</h1>
      </footer>
      <main>
        <section>
          {currentState.counter >= 1 && (
            <button
              onClick={() => {
                dispatch({ type: "decrement" });
              }}
            >
              -
            </button>
          )}
          <div className="counter">{currentState.counter}</div>
          <button
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            +
          </button>
        </section>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          RESET
        </button>
      </main>
    </>
  );
}
