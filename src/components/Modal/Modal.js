import React from 'react';

const Modal = (props) => {
    console.log(props.show);
    return (
        <div>
            <div className="modal-wrapper back-shed"
            style={{display: props.show ? 'block' : 'none'}}>
                <div className="modal-header">
                    <h2>Modal Header</h2>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="modal-footer">
                    <p>This is Modal footer</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;
