import React from 'react'
import "./layout.css"
import { animateScroll as scroll } from 'react-scroll'

//Image imports
import banner from './img/eta_banner_v2.svg';
import bFrame from './img/eta_frame_bot.jpg';
import goButton from './img/go_bttn.jpg';
import jumpTo from './img/jump_to_v2.jpg';
import prevButton from './img/prev_button.jpg';
import nextButton from './img/next_button.jpg';
import prevButtonH from './img/prev_button_hover.jpg';
import nextButtonH from './img/next_button_hover.jpg';
import tFrameRight from './img/tFrame_Rcorner.jpg';
import frame_edgeBot from './img/frame_edge_bot.jpg';
import frame_edgeTop from './img/frame_edge_top.jpg'
import make_submission from './img/make_submission.jpg';
import submit_btn from './img/submit_btn.jpg';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1, //pages start on 1
            prevInput: 0,
            prevBtn: prevButton,
            nextBtn: nextButton
        };
        this.pageJump = this.pageJump.bind(this);
        this.checkInput = this.checkInput.bind(this);
    }

    /**************Handles BUTTON events*********
     turn == true -> previous button
     turn == false -> next button
    *********************************************/
    onHover(turn) {
        if (turn)
            this.setState({prevBtn: prevButtonH})
        else
            this.setState({nextBtn: nextButtonH})
        }
    onLeave(turn) {
        if (turn)
            this.setState({prevBtn: prevButton})
        else
            this.setState({nextBtn: nextButton})
    }

    //Handle page turns: (-1, +1)
    pageTurn(n) {
        this.setState({page: this.state.page + n})
    }
    //Handle page jump: refs.jump = page #
    pageJump(pageJumpNum) {
        this.setState({page: parseInt(this.refs.jump.value)});
    }

    /*****************Handle input field for page jump*************************
      creates max length for input of 4
      sets input to previous input if max exceeded/non digit
      sets previous input to current if valid
      TO FIX****: still permits undesired units inbetween digits after click
      ALSO: undefined when first input is non [0-9]***************************/
    checkInput(pageJumpNum) {
        const checkNum = this.refs.jump.value;
        if (checkNum.length > 4 || !(/[0-9]$/.test(checkNum)) && checkNum != '')
            this.refs.jump.value = this.prevInput;
        this.prevInput = this.refs.jump.value;
    }

    submitMsg() {
        ;
    }

    render() {
        return (
            <div>
                <h1><img src={banner} width={"100%"}/></h1>
                <div class="layout">
                    <p class="intro">OUTLAST YOUR TOMBSTONE. OUTLAST THE PYRAMIDS.
                        <br />LET YOUR WORDS PERPETUATE THROUGHOUT ALL OF TIME.
                        <br /><b class="emphasis"><u>ETHROUGHTHEAGES</u></b> UTILIZES BLOCKCHAIN TECHNOLOGY
                        TO SUBMIT YOUR WORDS ANONYMOUSLY TO A DECENTRALIZED LEDGER SUPPORTED BY THE ETHEREUM NETWORK.
                    </p>
                    <p class="intro"><a href="https://metamask.io/"><b className="oj">METAMASK</b></a> PLUGIN IS REQUIRED TO INTERACT WITH THE DAPP AND SUBMIT AN ENTRY. A FEE OF E0.001, AS WELL
                        AS GAS, WILL BE REQUIRED IN ORDER TO DISCOURAGE SPAM AND ABUSE.
                    </p>
                    <div class="layout" align="center"><img class="button" src={make_submission} onMouseDown={() => scroll.scrollToBottom()}/></div><br />
                    <div class="frame">
                        <img src={jumpTo} height={"181px"}/>
                        <div class="frame">
                            <div class="form">
                                <img src={frame_edgeTop} />
                                <input ref ="jump" type="text" pattern="[0-9]*" onChange={this.checkInput} font-size="36pt" name="pageJumpNum" />
                                <img src={frame_edgeBot}  />
                            </div>
                        </div>
                        <img class="button" src={goButton} height={"181px"}
                             onMouseUp={this.pageJump}/>
                        <img src={this.state.prevBtn} height={"181px"}
                             onMouseOver={(e) => this.onHover(true, e)}
                             onMouseLeave={(e) => this.onLeave(true, e)}
                             onMouseUp={(e) => this.pageTurn(-1, e)}/>
                        <div class="frame">
                            <div className="form">
                                <img src={frame_edgeTop}/>
                                <div class="pageNum">{this.state.page}</div>
                                <img src={frame_edgeBot}/>
                            </div>
                        </div>
                        <img src={this.state.nextBtn} height={"181px"}
                             onMouseOver={(e) => this.onHover(false, e)}
                             onMouseLeave={(e) => this.onLeave(false, e)}
                             onMouseUp={(e) => this.pageTurn(1, e)}/>
                        <img src={tFrameRight} height={"181px"} />
                    </div>
                    <div class="frame">
                    <img src={bFrame} width={"100%"}/>
                        <br /><br /><b>Submission number: #</b>
                        <br /><b>Your Address: </b>
                        <form>
                            <textarea ref="submission" name="inputSubmission" />
                        </form>
                    </div>
                </div>
                <div class="layout" align="center">
                    <img class="button" src={submit_btn} height={"42px"} onMouseUp={this.submitMsg}/>
                </div>
            </div>
        );
    }
}
export default Layout;