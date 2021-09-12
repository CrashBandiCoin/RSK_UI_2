import React from 'react';
import ReactTooltip from "react-tooltip";

import Metamask from './icons/MetaMask.js';
import TrustWallet from './icons/TrustWallet.js';


const ModalBlockChain = (props) => {
    return (
        <div class="modal" style={{display: props.show ? 'block' : 'none'}}>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Choose BlockChain</h3>
                        <a onClick={props.close}><i className="far fa-times-circle"></i></a>
                    </div>
                    <div class="modal-body">
                        <ul class="list-group">
                            <li class="rounded rounded list-group-item d-flex justify-content-start align-items-center">
                                <Metamask />

                                RSK BlockChain
                                <i data-tip='see documentation at https://www.rsk.co/' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>

                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <TrustWallet />
                                Binance Smart Chain
                                <i data-tip='see documentation at https://academy.binance.com/fr/articles/an-introduction-to-binance-smart-chain-bsc' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBlockChain;
