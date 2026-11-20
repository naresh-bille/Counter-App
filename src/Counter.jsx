import { Component } from "react"


export  class Counter extends Component{
  
    constructor(){
        super()

        this.state={
            count :0
        }
    }
  counting(){
    this.setState({count:this.state.count+1})
  }


  Decrementing(){
    this.setState({count: this.state.count-1})
  }

    render(){
        return(
<>

<h2 style={{textAlign:'center'}}>Count is {this.state.count}</h2>

 < button onClick={()=>this.counting()}>Increment</button>
  <button onClick={()=>this.Decrementing()}>Decrement</button>
  

</>


        )
    }
 }