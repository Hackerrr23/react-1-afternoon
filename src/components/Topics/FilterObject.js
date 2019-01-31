import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            unfilteredArray : [
                                {name: "yusef", age: 21, gender: "male", loves: "soccer"},
            {                   name: "mohamed", age: 20, gender: "female", type: "funny"}, 
                                {name: "jose", age: 32, gender: "dumb", cool: "yes"}     
                            ],
            userInput : "",
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({
            userInput: val
        })
    }

   handleClick(prop){
       var people = this.state.unfilteredArray
       var filteredArray = []

       for( var i=0;i<people.length;i++){
           if(people[i].hasOwnProperty(prop)){
               filteredArray.push(people[i])
           }
       }
       this.setState({
           filteredArray:filteredArray
       })
   }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> FIlter </h4>
        <span className="puzzleText"> Original :{JSON.stringify(this.state.unfilteredArray,null,10)} </span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
        <button className="confirmationButton" onClick={() => this.handleClick(this.state.userInput)}> Filter Object </button>
        <h2><span className="resultsBox"> New: {JSON.stringify(this.state.filteredArray,null,10)}  </span> </h2>   
     </div>
    )
  }
}