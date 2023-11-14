import React from 'react';
import Search from '../../pages/Search';

const Main = (props) => {
    return (
        <main id='main' role='main'>
            <Search />
            {props.children}
        </main>
    )
}

export default Main