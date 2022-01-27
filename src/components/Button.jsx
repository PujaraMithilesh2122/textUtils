import React from 'react';

export default function Button(props){
    
    const {onClick,children}=props; //object d struct

    return(
        <>
            <button type="button" className="btn btn-primary mx-1" onClick={onClick}>{children}</button>
        </>
    );
    
    
}