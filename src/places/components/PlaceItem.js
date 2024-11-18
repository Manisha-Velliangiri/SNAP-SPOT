import React, { useState, useContext } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceItem.css';

const PlaceItem = props => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log('DELETING...');
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

// New PlaceList component to display multiple PlaceItem components
const PlaceList = () => {
  const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Beautiful Beach',
      address: '123 Ocean Ave, Beach City',
      description: 'A beautiful beach with golden sand.',
      image: 'https://images.unsplash.com/photo-1529420705456-5c7e04dd043d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with a valid image URL
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    {
      id: 'p2',
      title: 'Mountain Retreat',
      address: '456 Mountain Rd, Mountain Town',
      description: 'A peaceful retreat in the mountains.',
      image: 'https://example.com/mountain.jpg', // Replace with a valid image URL
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    {
      id: 'p3',
      title: 'City Park',
      address: '789 Park Ave, City Center',
      description: 'A lovely park in the heart of the city.',
      image: 'https://example.com/park.jpg', // Replace with a valid image URL
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    {
      id: 'p4',
      title: 'Forest Trail',
      address: '101 Forest Lane, Nature Valley',
      description: 'A scenic trail through the forest.',
      image: 'https://example.com/forest.jpg', // Replace with a valid image URL
      coordinates: { lat: 34.0522, lng: -118.2437 }
    }
  ];

  return (
    <ul className="place-list">
      {DUMMY_PLACES.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          address={place.address}
          description={place.description}
          image={place.image}
          coordinates={place.coordinates}
        />
      ))}
    </ul>
  );
};

export default PlaceList; // Exporting PlaceList for use in your main app
