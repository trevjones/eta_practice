import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Image imports
import banner from './img/eta_banner_v2.svg';
import tFrame from './img/eta_frame_top.jpg';
import bFrame from './img/eta_frame_bot.jpg';
import goButton from './img/go_bttn.jpg';
import jumpTo from './img/jump_to_v2.jpg';
import ftCornerLeft from './img/tFrame_corner.jpg';
import prevButton from './img/prev_button.jpg';
import nextButton from './img/next_button.jpg';
import tFrameRight from './img/tFrame_Rcorner.jpg';

//Set image const
const layout =
    <div>
        <h1><img src={banner} width={"100%"}/></h1>
            <div class="layout">
                <p class="intro">LET YOUR WORDS PERPETUATE THROUGH ALL OF TIME. <b class="emphasis"><u>ETHROUGHTHEAGES</u></b> UTILIZES BLOCKCHAIN TECHNOLOGY
                TO SUBMIT YOUR WORDS ANONYMOUSLY TO A DECENTRALIZED LEDGER SUPPORTED BY THE ETHEREUM NETWORK.</p>
                <p class="intro"><b>METAMASK</b> PLUGIN IS REQUIRED TO INTERACT WITH THE DAPP AND SUBMIT AN ENTRY. A FEE OF E0.001, AS WELL
                AS GAS, WILL BE REQUIRED IN ORDER TO DETER SPAM AND ABUSE.</p>

                <div class="frame">
                    <img src={jumpTo} height={"181px"}/>
                    <div class="frame">

                            <input type={"text"} size={"4"} maxlength="4"/>

                    </div>
                    <img src={goButton} height={"181px"}/>
                    <img src={prevButton} height={"181px"}/>
                    <div class="frame">
                        0
                    </div>
                    <img src={nextButton} height={"181px"} />
                    <img src={tFrameRight} height={"181px"} />
                </div>
                <img src={bFrame} width={"100%"}/>
            </div>


    </div>;


//Render images
ReactDOM.render(layout, document.getElementById('root'));
