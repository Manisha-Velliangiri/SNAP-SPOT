import React from "react";
import UsersItem from "./UsersItem";
import Card from "../../shared/components/UIElements/Card";
import './UsersList.css';

// 2 possible branches here 
// 1 --> if no users present ==> then display no users present
// 2 --> if 1 or more present ==> display the list of users 
const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found!</h2>
        </Card>
      </div>
    );
  }

  // For the else condition, to display array of items into output, we need to map them.
  return (
    <ul className="users-list">
      {
        props.items.map(user => (
          // Here, I map every user item to a user and expect an id 
          <UsersItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        ))
      }
    </ul>
  );
};

// Sample list of 10 users
const USERS = [
  {
    id: 'u1',
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    places: 3
  },
  {
    id: 'u2',
    name: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    places: 5
  },
  {
    id: 'u3',
    name: 'Michael Johnson',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    places: 7
  },
  {
    id: 'u4',
    name: 'Emily Davis',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    places: 2
  },
  {
    id: 'u5',
    name: 'David Brown',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
    places: 8
  },
  
  {
    id: 'u7',
    name: 'Lucas Green',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    places: 6
  },
  {
    id: 'u8',
    name: 'Olivia Miller',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
    places: 9
  },
  {
    id: 'u9',
    name: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    places: 1
  },
  {
    id: 'u10',
    name: 'Ella King',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    places: 5
  }
];

// Example usage in an App component
const App = () => {
  return <UsersList items={USERS} />;
};

export default App;
