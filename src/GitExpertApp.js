// rafcp

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => setCategories ( [...categories, 'Perico'] );
    // const handleAdd = () => setCategories ( state => [...state, 'Perico'] );
    
    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr/>


            
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    )
                }
            
        </>
    );
}

export default GifExpertApp;

