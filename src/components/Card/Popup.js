import { Form, Button } from "react-bootstrap"


import {useContext, useState} from 'react';



const AddForm = () =>{

   // const {addLocation} = useContext(App);

    const [newLocation, setNewLocation] = useState({
        location:""
    });

    const onInputChange = (e) => {
        setNewLocation({...newLocation,[e.target.location]: e.target.value})
    }

    const {location} = newLocation;

    const handleSubmit = (e) => {
       e.preventDefault();
      //addLocation(location);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Location *"
                    name="location"
                    value={location}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Location
            </Button>
        </Form>

     )
}

export default AddForm;