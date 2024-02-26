import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/reducer/counter";
   import { Form } from './components/form/form';
import { CardContainer } from "./components/card-container";

function App() {
const data = useSelector((state) => state.counter)
const dispatch = useDispatch()
console.log(data);
return (
  <>
    <h1>{data.count}</h1>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>

    <Form />
    <CardContainer />
  </>
);
}

export default App
