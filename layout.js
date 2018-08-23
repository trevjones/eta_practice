import React, {Component} from 'react';

//Image imports
import banner from './img/eta_banner_v2.svg';
import tFrame from './img/eta_frame_top.jpg';
import bFrame from './img/eta_frame_bot.jpg';
import goButton from './img/go_bttn.jpg';
import jumpTo from './img/jump_to_v2.jpg';
import ftCornerLeft from './img/tFrame_corner.jpg';
import prevButton from './img/prev_button.jpg';
import nextButton from './img/next_button.jpg';
import prevButtonH from './img/prev_button_hover.jpg';
import nextButtonH from './img/next_button_hover.jpg';
import tFrameRight from './img/tFrame_Rcorner.jpg';
import frame_edgeBot from './img/frame_edge_bot.jpg';
import frame_edgeTop from './img/frame_edge_top.jpg'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        };
    }

    render() {
        return (
            <div>
                <h1><img src={banner} width={"100%"}/></h1>
                <div class="layout">
                    <p class="intro">OUTLAST YOUR TOMBSTONE. OUTLAST THE PYRAMIDS. <br />LET YOUR WORDS PERPETUATE THROUGH ALL OF TIME. <b class="emphasis"><u>ETHROUGHTHEAGES</u></b> UTILIZES BLOCKCHAIN TECHNOLOGY
                        TO SUBMIT YOUR WORDS ANONYMOUSLY TO A DECENTRALIZED LEDGER SUPPORTED BY THE ETHEREUM NETWORK.</p>
                    <p class="intro"><b>METAMASK</b> PLUGIN IS REQUIRED TO INTERACT WITH THE DAPP AND SUBMIT AN ENTRY. A FEE OF E0.001, AS WELL
                        AS GAS, WILL BE REQUIRED IN ORDER TO DETER SPAM AND ABUSE.</p>

                    <div class="frame">
                        <img src={jumpTo} height={"181px"}/>
                        <div class="frame">
                            <div class="form">
                                <img src={frame_edgeTop} />
                                <input type={"text"} font-size="36pt" size={"4"} maxLength="4" />
                                <img src={frame_edgeBot}  />
                            </div>
                        </div>
                        <img src={goButton} height={"181px"}/>
                        <img src={prevButton} height={"181px"}/>
                        <div class="frame">
                            <div className="form">
                                <img src={frame_edgeTop}/>
                                <div class="pageNum">11</div>
                                <img src={frame_edgeBot}/>
                            </div>
                        </div>
                        <img src={nextButton} height={"181px"} />
                        <img src={tFrameRight} height={"181px"} />
                    </div>
                    <img src={bFrame} width={"100%"}/>
                </div>
            </div>
        );
    }
}
export default App;