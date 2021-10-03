function Message({error, bgColor}) {
    const messageStyles={
        backgroundColor:bgColor
    }
    return ( <><h2 style={messageStyles}>{error}</h2></> );
}

export default Message;