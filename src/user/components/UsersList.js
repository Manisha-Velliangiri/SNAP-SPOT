import React from "react";

import UsersItem from "./UsersItem";
import Card from "../../shared/components/UIElements/Card";
import './UsersList.css';


// 2 posssible branches here 
    //1--> if no users present ==> then display no users present
    //2--> if 1 or more present ==> display the list of users 
const UsersList = props =>{
   if(props.items.length === 0){
    return  <div className="center">
      <Card>
      <h2>No users found!</h2>
      </Card>
    </div>
   }
   
// for the else condition,
//to display array of items into output, we need to map them.
// react will not display vanilla js
   return (
    <ul className="users-list">
    {
       props.items.map(user =>(
           //here, i map every useritem to user and expect an id 
           <UsersItem key={user.id} 
           id={user.id} 
           image={user.image}
           name={user.name}
           placeCount={user.places}
           />
       ))
    }
  </ul>
   )


};

export default UsersList;