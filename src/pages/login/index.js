import React,{ useState } from 'react';
export default () => {
    const [count,setCount] = useState(0);
    return(
        <h1>
            Login
            {count} 
            <button onClick={() => setCount(count+1)}>+1</button>
        </h1>
    )
}