import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    suggest:[],
    search:['test','test1','teeee'],
    tags:[],
    input:''
  }
}
change = (e) => {


const value = e.target.value
if(value){
this.setState({input:value})
const arr = this.state.search.map((t) => {
  const tag = t.substring(0,value.length)
  console.log(tag)
  if(value == tag)
   return t
})
this.setState({suggest:arr})
}
}
add = (e) => {
 if(e.key === "Enter"){
let low = this.state.tags.map((t)=> t.toLowerCase())

const tag = e.target.value.toLowerCase()
let ry = false
if(tag)
if(tag.length<10)
if(this.state.tags.length<99)
if(!low.includes(tag))
{this.setState({tags:[...this.state.tags,e.target.value],input:''});
ry =true
}
 if(ry)
   e.target.value = ''
}
}
 addsug = (i) =>{
  const tag = this.state.suggest[i]
  if(this.state.tags.length<6)
if(!this.state.tags.includes(tag))
  {this.setState({tags:[...this.state.tags,tag],input:''})}
 
 }
 
delete = (i) =>{
  const newtags = [...this.state.tags]
  newtags.splice(i,1)
  this.setState({tags:newtags})
}
render(){
  return (
    <div className="tags">
      {this.state.tags.map((t,i)=>{
          return (<div className = "tag"><span>{t}</span> <button onClick = {()=>this.delete(i)}>x</button>  </div>)
})}
   <input className="input" onChange = {this.change} onKeyUp = {this.add} />
    <p>suggest: {this.state.suggest.map((t,i)=>{
      if(t)
      return <button onClick = {()=>this.addsug(i)}>{t}</button>
    })}</p>
    </div>
  )
} 

}
export default App;
