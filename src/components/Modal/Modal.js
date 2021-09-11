import React from 'react';

const Modal = (props) => {
    console.log(props.show);
    return (
        <div>


            <div className="modal-wrapper"
                style={{
                transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.show ? true : false
            }}>
            <h2>test</h2>
            <button className="btn btn-primary rounded-pill"
            type="button" onClick={props.close}>close</button>
            </div>
        </div>
    )
}

export default Modal;
