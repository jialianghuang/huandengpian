import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [Pic, setPic] = useState({
    picture:[],
    url:'',
    id: 1,
  })
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then(
      res=>res.json()
    ).then(
      data => {const picture = data.filter(pic => pic.id< 6); setPic({picture,url:picture[0].url,id:1})
    }
    )
  },[])
const n = () => {

  const pid = Pic.id+1
  const purl = Pic.picture[pid-1].url
  setPic({...Pic,url:purl,id:pid})

}


  if(Pic.url)
  return (<div><img src={Pic.url}></img><button onClick={n.bind(this)}>next</button></div>)
  else
  return (<div>Loading</div>)
}

export default App;
