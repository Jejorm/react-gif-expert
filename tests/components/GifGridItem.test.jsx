import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe( 'Pruebas en <GifGridItem />', () => {

    const title = 'New Title'
    const url = 'https://gifimage.jpg'

    test( 'Debe hacer match con el snapshot', () => {

        const { container } = render( <GifGridItem title={ title } url={ url } /> )

        expect( container ).toMatchSnapshot()
    } )

    test( 'Debe mostrar la imagen con el URL y ALT indicado', () => {

        render( <GifGridItem title={ title } url={ url } /> )

        const { src, alt } = screen.getByRole( 'img' )

        expect( src ).toContain( url )
        expect( alt ).toBe( title )
    } )

    test( 'Debe mostrar el título en el componente', () => {

        render( <GifGridItem title={ title } url={ url } /> )

        expect( screen.getByText( title ) ).toBeTruthy()
    } )
} )