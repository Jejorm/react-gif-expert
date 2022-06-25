import { useEffect, useState } from 'react'

import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( true )

    useEffect( () => {

        const getImages = async () => {
            const newImages = await getGifs( category )
            setImages( newImages )
            setIsLoading( false )
        }

        getImages()
    }, [] )

    return {
        images,
        isLoading
    }
}