import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock( '../../src/hooks/useFetchGifs' )

describe( 'Pruebas en <GifGrid />', () => {

    const category = 'One Puch'

    test( 'Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue( {
            images: [],
            isLoading: true
        } )

        render( <GifGrid category={ category } /> )

        expect( screen.getByText( 'Cargando...' ) )

        expect( screen.getByText( category ) )
    } )

    test( 'Debe mostrar items cuando se cargan las imagenes useFetchGigs()', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue( {
            images: gifs,
            isLoading: false
        } )

        render( <GifGrid category={ category } /> )

        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 )
    } )
} )
