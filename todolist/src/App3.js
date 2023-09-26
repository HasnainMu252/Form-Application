import { useEffect, useState } from "react"


const App3 = () =>  {

    const [text,setText] = useState('')
    const [name,setname] = useState('hasnain')
    function changeHandler(e){
        console.log(text)

        setText(e.target.value)

    }
    
    // useEffect(()=>{
    //     console.log('ellowdsdfnsdjj') //first variation
    // })
    // useEffect(()=>{
    //     console.log('ellowdsdfnsdjj') //second variation
    // },[]) 

    //  useEffect(()=>{
    //     console.log('hellow world') //third variation
    // },[name]) 

     useEffect(()=>{
        console.log('hellow world') //4th variation

        return ( 
            console.log('hi')
        )
    },[name]) 

    



        return(<div className="App">
            <input type="text" onChange={changeHandler}></input>
        </div>)

}

export default App3