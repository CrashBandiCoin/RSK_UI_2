import React from 'react';

const Modal = (props) => {
    console.log(props.show);
    return (
        <div>
            <div className="modal-fluid"
                style={{display: props.show ? 'block' : 'none'}}>
                <h2>test</h2>
                <button className="btn btn-primary rounded-pill"type="button" onClick={props.close}>close</button>
            </div>
        </div>
    )
}

export default Modal;
