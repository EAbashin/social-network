const Contacts = (props) => {
    return (
        <div>
            {
                (
                    props.contacts.github ||
                    props.contacts.vk ||
                    props.contacts.facebook ||
                    props.contacts.instagram ||
                    props.contacts.twitter ||
                    props.contacts.website ||
                    props.contacts.youtube ||
                    props.contacts.mainLink
                ) ? <div><b>Contacts:</b></div> : ''
            }
            <ul>
                {
                    Object.keys(props.contacts).map(key => {
                        return props.contacts[key] ?
                            <li key={key}><b>{key}: </b>{props.contacts[key]}</li> : ''
                    })
                }
            </ul>
        </div>
    )
};

export default Contacts;
