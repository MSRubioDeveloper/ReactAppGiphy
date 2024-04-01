import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



//esto es un hook, solo es una funcion que regresa algo
export const useFetchGifs = ( category ) => {

    const [images, setImages ] = useState([]);
    const [ loading, setIsLoading ] = useState( true );



    const getImages = async( category )=>{
        const images = await  getGifs( category );
        setImages( images );
        setIsLoading( false );
    }   

    useEffect( ()=>{
       getImages(category);
    }, [])
  

    return {
        images: images,
        isLoading: loading
    }

}
