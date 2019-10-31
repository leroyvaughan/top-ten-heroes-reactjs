import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';


const Container = styled.div.attrs({
    classname: 'container',
})`
    display: flex;
    height: 48px;
    justify-content: center;
`
const PosAbs = styled.div`
    position:absolute;
`

const Text = styled.div`
    color: #b3aeae;
    font-size: 14px;
    font-style: italic;
    padding: 12px 0;
    position: relative;
    z-index: 0;
`

class Blurb extends Component {
    constructor(props) {
        super(props)

        this.state = {
            doTransitions: true
        };
    }


    render() {
        return (
            <React.Fragment>
                <Container>
                    <PosAbs>
                        <CSSTransition
                            in={this.state.doTransitions}
                            timeout={0}
                            classNames="subnav-transition"
                            unmountOnExit
                            appear>
                            <Text>
                                Created with ReactJs and React-coverflow-mod with NodeJs!
                        </Text>
                        </CSSTransition>
                    </PosAbs>
                </Container>
            </React.Fragment>
        )
    }
}

export default Blurb