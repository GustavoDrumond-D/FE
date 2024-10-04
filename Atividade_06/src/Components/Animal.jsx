import React from 'react';

function Animal(props) {
    return <li>I am a {props.species}</li>;
}

function Zoo() {
    const animals = [
        {id: 1, species: 'Lion'},
        {id: 2, species: 'Elephant'},
        {id: 3, species: 'Giraffe'}
    ];
    
    return (
        <>
            <h1>Welcome to the Zoo!</h1>
            <ul>
                {animals.map((animal) => <Animal key={animal.id} species={animal.species} />)}
            </ul>
        </>
    );
}

export default Zoo;
