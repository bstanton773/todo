import React from 'react';
import Nav from './components/Nav';
import ToDo from './components/ToDo';

export default function App(props) {
    return (
        <>
            <Nav />
            <div className="container">
                <ToDo />
            </div>
        </>
    )
}
