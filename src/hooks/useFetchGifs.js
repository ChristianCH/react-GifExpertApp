import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // El getGifs se va a ejecutar solo cuando el componente es renderizado por primera vez
    useEffect( () => { // aqui no se puedo poner async
        getGifs( category )
            .then( images => {
                // setTimeout( () => { // esto es solo para que tarde un poco
                    setState({
                        data: images,
                        loading: false
                    });
                // }, 2000);
            });
    }, [category]); 

    return state;
    
}
