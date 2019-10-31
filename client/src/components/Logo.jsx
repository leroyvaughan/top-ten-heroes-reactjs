import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import logo from '../logo.svg';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
    position: relative;
    z-index: 100;
`

class Logo extends Component {
    render() {
        return (

            <CSSTransition
                in={true}
                timeout={0}
                classNames="logo-transition"
                unmountOnExit
                appear>

                <Wrapper href="/">
                    <img src={logo} width="50" height="50" alt="Live Running App" />
                </Wrapper>

            </ CSSTransition>
        )
    }
}

export default Logo