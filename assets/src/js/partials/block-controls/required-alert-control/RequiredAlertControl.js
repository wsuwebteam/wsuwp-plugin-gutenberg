

const RequiredAlertControl = ( props ) => {

    let { attributes, onChange } = props

    return (
        <div class="wsu-gutenberg-alert-control">
            {props.children}
        </div>
    )

}

export default RequiredAlertControl;