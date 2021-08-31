import React from "react";
import { FormControl, InputGroup, Form } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";

function SearchBar(props) {
    console.log(props);
    return (
        <div className="w-100">
            <InputGroup className="border-0 shadow rounded">
                <InputGroup.Text id="basic-addon2"><FaSearch /></InputGroup.Text>
                <FormControl aria-describedby="basic-addon2" type="text" placeholder="Type here.." />
            </InputGroup>
        </div>
    );
}

export default SearchBar;