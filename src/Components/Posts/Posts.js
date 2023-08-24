import React from "react";
function Posts(props){
     return(
    <>
     Posts {props.posts ? props.posts[0].title : ""}
    </>
   )
}
export default Posts;