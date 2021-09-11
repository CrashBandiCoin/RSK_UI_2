import React from 'react';
import ReactTooltip from "react-tooltip";


const Modal = (props) => {
    console.log(props.show);
    return (
        <div class="modal" style={{display: props.show ? 'block' : 'none'}}>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Connect to a wallet</h3>

                    </div>
                    <div class="modal-body">
                        <ul class="list-group">
                            <li class="rounded rounded list-group-item d-flex justify-content-start align-items-center">

                                <img src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png" class="img-fluid" alt="quixote" />
                                Metamask
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>

                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png" class="img-fluid" alt="quixote" />

                                TrustWallet
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>
                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png" class="img-fluid" alt="quixote" />

                                MathWallet
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>
                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png" class="img-fluid" alt="quixote" />

                            TokenPocket
                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png" class="img-fluid" alt="quixote" />

                                WalletConnect
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>

                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png" class="img-fluid" alt="quixote" />

                                Binance Chain Wallet
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>
                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png" class="img-fluid" alt="quixote" />
                                Safe Pall Walet
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>
                            </li>
                         </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onClick={props.close}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
