import { Button, ButtonGroup, BaseControl } from '@wordpress/components';

const HeadingTagControl = ( props ) => {

    let defaultTags = ['h2','h3','h4','h5','h6'];

    let { 
        attributes, 
        setAttributes, 
        allowedTags = defaultTags,
    } = props;

    const isActive = ( value ) => {

        return ( value === attributes.headingTag ) ? true : false;

    }

    const setTag = ( value ) => {
        setAttributes( { headingTag:value } );
    }

    return (
        <BaseControl className="wsu-heading-tag-block-control" id="heading-tag" label="Heading Level" help="">
            <ButtonGroup>
                { allowedTags.includes('h1') && <Button onClick={ () => setTag( 'h1') } isPressed={ isActive('h1') } className="wsu-heading-tag-block-control__button" variant="primary"  aria-label="h1"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.81,6.75v10.5h-2v-4.5H6.43v4.5H4.49V6.75H6.43v4.34h5.43V6.75Z" /><path d="M19.51,6.75v10.5h-2V8.39H15.34V6.75Z" /></svg></Button>}
                { allowedTags.includes('h2') && <Button onClick={ () => setTag( 'h2') } isPressed={ isActive('h2') } className="wsu-heading-tag-block-control__button" variant="primary"  aria-label="h2"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.83,6.83V17.32H9.88v-4.5H4.45v4.5H2.5V6.83h2v4.33H9.88V6.83Z" /><path d="M21.5,15.68v1.64H13.76V16l4.17-4c1-1,1.2-1.59,1.2-2.17,0-1-.66-1.52-1.95-1.52a3,3,0,0,0-2.46,1.1L13.36,8.42a4.83,4.83,0,0,1,4-1.74c2.28,0,3.75,1.15,3.75,3,0,1-.29,2-1.74,3.32l-2.81,2.67Z" /></svg></Button>}
                { allowedTags.includes('h3') && <Button onClick={ () => setTag( 'h3') } isPressed={ isActive('h3') } className="wsu-heading-tag-block-control__button" variant="primary"  aria-label="h3"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9,6.68V17.17H10v-4.5H4.52v4.5H2.57V6.68H4.52V11H10V6.68Z" /><path d="M21.43,14c0,1.77-1.34,3.3-4.16,3.3a6.61,6.61,0,0,1-3.94-1.21l.84-1.52a4.84,4.84,0,0,0,3.07,1c1.4,0,2.22-.61,2.22-1.59s-.69-1.56-2.28-1.56h-1V11.15l2.39-2.84H13.84V6.68H21V8l-2.55,3C20.42,11.27,21.43,12.45,21.43,14Z" /></svg></Button>}
                { allowedTags.includes('h4') && <Button onClick={ () => setTag( 'h4') } isPressed={ isActive('h4') } className="wsu-heading-tag-block-control__button" variant="primary"  aria-label="h4"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,6.75v10.5H9v-4.5H3.57v4.5H1.62V6.75H3.57v4.34H9V6.75Z" /><path d="M22.38,14.86H20.52v2.39H18.63V14.86H12.87V13.51L18,6.75h2.09l-4.88,6.47h3.44V11.1h1.83v2.12h1.86Z" /></svg></Button>}
                { allowedTags.includes('h5') && <Button onClick={ () => setTag( 'h5') } isPressed={ isActive('h5') } className="wsu-heading-tag-block-control__button" variant="primary"  aria-label="h5"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.81,6.68V17.17h-2v-4.5H4.43v4.5H2.48V6.68H4.43V11H9.86V6.68Z" /><path d="M21.52,14c0,1.84-1.34,3.37-4.16,3.37a6.59,6.59,0,0,1-3.94-1.21l.82-1.52a4.94,4.94,0,0,0,3.09,1c1.4,0,2.22-.61,2.22-1.6s-.64-1.64-2.82-1.64H14.2l.54-5.71H20.9V8.31H16.39l-.23,2.43h1C20.27,10.74,21.52,12.09,21.52,14Z" /></svg></Button>}
                { allowedTags.includes('h6') && <Button onClick={ () => setTag( 'h6') } isPressed={ isActive('h6') } className="wsu-heading-tag-block-control__button" variant="primary"  aria-label="h6"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.44,6.75v10.5H9.49v-4.5H4.06v4.5H2.11V6.75H4.06v4.34H9.49V6.75Z" /><path d="M21.89,14c0,2.08-1.69,3.4-3.84,3.4-2.86,0-4.54-1.85-4.54-5.22,0-3.6,2.1-5.58,5.14-5.58a5.25,5.25,0,0,1,2.76.68l-.72,1.47a3.52,3.52,0,0,0-2-.51c-2,0-3.23,1.23-3.23,3.61v0a3.58,3.58,0,0,1,2.81-1.1C20.35,10.77,21.89,12,21.89,14ZM20,14.08c0-1.09-.82-1.78-2.1-1.78a1.91,1.91,0,0,0-2.13,1.8c0,1,.78,1.77,2.18,1.77A1.82,1.82,0,0,0,20,14.08Z" /></svg></Button>}
                { allowedTags.includes('div') && <Button onClick={ () => setTag( 'div') } isPressed={ isActive('div') } className="wsu-heading-tag-block-control__button" variant="primary"  aria-label="div"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.44,6.75v10.5H9.49v-4.5H4.06v4.5H2.11V6.75H4.06v4.34H9.49V6.75Z" /><path d="M21.89,14c0,2.08-1.69,3.4-3.84,3.4-2.86,0-4.54-1.85-4.54-5.22,0-3.6,2.1-5.58,5.14-5.58a5.25,5.25,0,0,1,2.76.68l-.72,1.47a3.52,3.52,0,0,0-2-.51c-2,0-3.23,1.23-3.23,3.61v0a3.58,3.58,0,0,1,2.81-1.1C20.35,10.77,21.89,12,21.89,14ZM20,14.08c0-1.09-.82-1.78-2.1-1.78a1.91,1.91,0,0,0-2.13,1.8c0,1,.78,1.77,2.18,1.77A1.82,1.82,0,0,0,20,14.08Z" /></svg></Button>}
            </ButtonGroup>
        </BaseControl>
    )
    
} 

export default HeadingTagControl;