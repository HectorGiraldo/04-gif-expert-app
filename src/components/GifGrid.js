import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({cat}) => {

    const {data:images, loading} = useFetchGifs(cat);

    console.log(loading);


    return (
        <>
            <h3 className='animate__animated animate__bounce'> { cat } </h3>

            { loading && <p className='card animate__animated animate__flash'>Loadind</p> }
            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={img.id}
                                {...img} 
                            />
                        ))
                    }
            </div>
        </>
    );
}
