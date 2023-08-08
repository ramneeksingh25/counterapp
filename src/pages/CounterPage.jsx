import { useState } from "react";
import { Button } from "../components/Button"
import { Message } from "../components/Message"
export const CounterPage=()=>{
    console.log('Counter Fn call');
    //Hook(state)
    const [count,setCount] = useState(0);
    //let count=0;
    const updateCount= (val)=>{
        if(val=== '+'){
            setCount(count+1);
        }
        else{
            setCount(count-1);
        }
        console.log('Count is ',count);
    }
    return (
        <div className="container">
            <Message className="alert alert-danger" msgh2='Counter App'/>
            <Message value={count} className='alert alert-success' msgh5='Counter Value is'/>
            <Button fn={updateCount} val="+" classname="btn btn-success me-2"/>
            <Button fn={updateCount} val="-" classname="btn btn-danger" />
        </div>
    )
}