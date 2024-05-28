import React from "react";
import UsersList from "../components/UsersList";



// this page is to see the list of users
const Users =()=>{
    //dummy data for now
    const USERS=[
        {id:'u1',
        name:'Manisha',
       image:'https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
       places: 3}
    ];
    
    return <UsersList items={USERS}/>
};

export default Users;