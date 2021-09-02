import React from "react";
import { FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";

function SearchBar(props) {
    console.log(props);
    return (
        <InputGroup className="border-0 shadow rounded">
            <InputGroup.Text className="floating-addon" id="basic-addon2"><FaSearch /></InputGroup.Text>
            <FormControl className="with-floating-addon" aria-describedby="basic-addon2" type="text" placeholder="Type here.." />
        </InputGroup>
    );
}

export default SearchBar;