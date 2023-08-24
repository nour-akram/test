import React ,{Component}from "react";
import axios from "axios";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Posts from "./Components/Posts/Posts";
class App extends Component{
   state={
    posts:[],
   }
   componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
      this.setState({
        posts:response.data,
      })
    })

   }
   render(){
    return(
        <BrowserRouter>
          <Header/>
          <Posts posts={this.state.posts}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<Posts/>}/>
          </Routes>
        </BrowserRouter>
    )
   }
}
export default App;