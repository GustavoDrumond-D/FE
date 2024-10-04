import React from 'react';

function Fruit(props) {
    return <li>I am a {props.name}</li>;
}

function FruitBasket() {
    const fruits = [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Banana'},
        {id: 3, name: 'Cherry'}
    ];
    
    return (
        <>
            <h1>What fruits are in my basket?</h1>
            <ul>
                {fruits.map((fruit) => <Fruit key={fruit.id} name={fruit.name} />)}
            </ul>
        </>
    );
}

export default FruitBasket;
