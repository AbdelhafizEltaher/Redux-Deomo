import React,{useContext} from 'react';
import { counterContext } from '../../contexts/counter';

const Counter = () => {
           var {counter,setCounter} = useContext(counterContext);
           
    return (
        <div>
            <button onClick={()=>{setCounter(--counter)}} className="btn btn-danger">-</button>
            <h1>{counter}</h1>
            <button onClick={()=>{setCounter(++counter)}} className="btn btn-success">+</button>
        </div>

    );
}

export default Counter;
