import { Component } from "react";


export class RandomNumber extends Component{


    constructor(){
        super()
        this.state={
            number:0
        }
    }
   Numbergenerate=()=>{
    this.setState({number: Math.random()*10 })
   }
    render(){
        return(
<>
<h2 style={{textAlign:'center'}}> Random number is {this.state.number}</h2>
<button style={{marginLeft:'503px'}} onClick={this.Numbergenerate} >Generate</button>


</>

        )
    }

}