import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       r: false,
        size: 500,
        pictures:[],
        url:'',
        id: 1
    };
  }

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/photos").then(
    res => res.json()
  ).then(
   data =>  {const pictures = data.filter(pic => pic.id<5);  this.setState({pictures:pictures,r:true,url:pictures[0].url})}
  )

}
n(){
  const pid = this.state.id+1
  const purl = this.state.pictures[pid-1].url
  this.setState({url:purl,id:pid})
}
l(){
  const pid = this.state.id-1
  const purl = this.state.pictures[pid-1].url
  this.setState({url:purl,id:pid})
}
  render() {
   if(this.state.r)
  {  
   
  return (<div className="flex">
   <button onClick = {this.n.bind(this)}>N</button> 
    <img src= {this.state.url} ></img>
    <button onClick = {this.l.bind(this)}>L</button>
    </div>
    )

}
  else
  return <div></div>
    
}

}

export default App;


