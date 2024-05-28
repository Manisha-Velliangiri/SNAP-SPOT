import React from "react";
import {Link} from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UsersItem.css';


const UsersItem = props =>{

     return (
        <li className="users-item">
           
            <Card className="users-item__content">
            <Link to={`/${props.id}/places`}>
               <div className="users-item__image">
                  <Avatar image={props.image} alt={props.name}/>
               </div>

               <div className="users-item__info">
                   <h2>{props.name}</h2>
                   <h3>{props.placeCount} {props.placeCount ===1 ? 'Place':' Places'}</h3>
               </div>
            </Link>
         </Card>
        
        
        </li>

     );

};

export default UsersItem;