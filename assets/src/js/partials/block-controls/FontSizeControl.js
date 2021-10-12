import { Button, ButtonGroup } from '@wordpress/components';

const FontSizeControl = ( { attributes, setAttributes } ) => {

    return (
        <ButtonGroup>
            <Button variant="primary">S</Button>
            <Button variant="primary">M</Button>
            <Button variant="primary">L</Button>
            <Button variant="primary">xL</Button>
        </ButtonGroup>
    )
    
} 

export default FontSizeControl;