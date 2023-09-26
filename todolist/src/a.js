import { useState, useEffect } from "react";
import './a.css'



function TODOLIST() {
  
  function getingDataFromLocalStorage() {
    let dataFromLS = localStorage.getItem("data");
    if (dataFromLS) return JSON.parse(dataFromLS);
    else {
      return [];
    }
  } 
  const [data, updateData] = useState(getingDataFromLocalStorage);
  const [name,updateName] = useState("")
  const [father,updatefather] = useState("")
  const [task,updatetask] = useState("")


   useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);


  const NameChangeHandler =  (e) => {
   updateName(e.target.value)
  }
  const FatherChangeHandler =  (e) => {
    updatefather(e.target.value)
  }
  const TaskChangeHandler =  (e) => {
    updatetask(e.target.value)
  }

  const addData = (e) => {
    e.preventDefault();
    updateData([...data,{name,father,task}])
    console.log(data)
    // localStorage.setItem('dataKey', JSON.stringify(data));

  }

  const removeData = (i) => {

    updateData(data.filter((x) => x.name !== i));

    // updateData(data.filter((x) => x.name === i));


    
    // let currentObj = data.find(x=>x.name === i)
    // console.log(currentObj) it give obect

    // let newArr = data.filter( x=> x.name !== i );
    // console.log(newArr) its give data in form of array


    // steps:
    // use the filter function, that returns array.
    // filter -> array -> iterate
    // name === i return an array, have an object (name === i)
    // name !== i return an array, have all object except name === i
    


    // let arr = data.filter(x => x.name === i)
    // console.log(arr)

    // console.log(i);
    // updateData(data.filter((x) => x.name !== i));
};

  return(<div>
  <form className="container" onSubmit={addData} >
    <div className="simple Task">
    <label id="name">NAME</label>
    <input type="text" placeholder="Enter Your Name" id="name" value={name} onChange={NameChangeHandler}></input>
    </div>

    <div className="simple Task">
    <label id="father">FATHER NAME</label>
    <input type="text" placeholder="Enter Your Father Name" value={father} id="father" onChange={FatherChangeHandler}></input>
    </div>
    
    <div className="simple Task">
    <label id="task">TASK</label>
    <input type='text'  placeholder="Enter your Today Task" value={task} id="task" onChange={TaskChangeHandler}></input>
    </div>

    <button type='submit'>Submit</button>
  </form>

    {data.map((x,index)=>(
      <div className="entries-container">
      <p
        key={index}
          >
        <span>name = {" "}{x.name}</span> <span>{" "} father = {" "}{x.father} </span> <span>{" "} task = {" "}{x.task} </span> -{index}
        <span><button onClick={()=> removeData(x.name)}>Remove</button></span>
      </p>
      </div>
    ))}

  </div>)
}

export default TODOLIST