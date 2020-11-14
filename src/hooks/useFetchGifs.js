import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (cat) => {
   
    const [state, setState] = useState({
        data: [],
        loading: true
    });

        useEffect( () => {
            getGifs(cat)
                .then(imgs => {
                    setState({
                        data: imgs,
                        loading: false 
                    })  
                } )
        }, [cat])

    

    return state;
}
