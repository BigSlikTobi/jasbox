import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import myLittlePony from '../images/mylittlepony.jpeg';

let SearchForm = (props) => {
  let [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    let searchTerm = "my little Pony";
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };
  
  return (

    <div>
      
      <Form onSubmit={handleSearch} id="searchForm" >
        
      <button type="submit" onClick={handleInputChange}>
        <div>
      {searchTerm.trim() == '' &&
      <Card style={{ width: '16rem' }}>
        <img className="card-image-link" 
        src={myLittlePony} alt=""
        name = "my little pony"
        />
        </Card>
        }
        </div>
      </button>
      </Form>
      
    </div>
  );

};

export default SearchForm;
