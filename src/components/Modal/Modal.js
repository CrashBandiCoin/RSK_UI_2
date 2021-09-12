import React from 'react';
import ReactTooltip from "react-tooltip";

import Metamask from './icons/MetaMask.js';
import MathWallet from './icons/MathWallet.js';
import SafePalWallet from './icons/SafePalWallet.js';
import TokenPocket from './icons/TokenPocket.js';
import TrustWallet from './icons/TrustWallet.js';
import WalletConnect from './icons/WalletConnect.js';
import BinanceChain from './icons/BinanceChain.js';


const Modal = (props) => {
    console.log(props.show);
    return (
        <div class="modal" style={{display: props.show ? 'block' : 'none'}}>
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Connect to a wallet</h3>
                        <a onClick={props.close}><i className="far fa-times-circle"></i></a>
                    </div>
                    <div class="modal-body">
                        <ul class="list-group">
                            <li class="rounded rounded list-group-item d-flex justify-content-start align-items-center">
                                <Metamask />

                                Metamask
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>

                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <TrustWallet />
                                TrustWallet
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>
                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <MathWallet />
                                MathWallet
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>
                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <TokenPocket />
                                TokenPocket
                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <WalletConnect />
                                WalletConnect
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>

                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <BinanceChain />
                                Binance Chain Wallet
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>
                            </li>
                            <li class="rounded list-group-item d-flex  justify-content-start align-items-center">
                                <SafePalWallet />
                                Safe Pall Walet
                                <i data-tip='see documentation at https://docs.metamask.io/guide/#why-metamask' data-event='click focus' className="fas fa-info-circle" />
                                <ReactTooltip clickable={true} data-event='click' data-event-off='dblclick'/>
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
