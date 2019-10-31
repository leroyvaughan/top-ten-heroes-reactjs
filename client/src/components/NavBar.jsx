import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Links from './Links';
import Blurb from './Blurb';

const Container = styled.div.attrs({
    className: 'container',
})`
    overflow: hidden;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
    position: relative;
    z-index: 100;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
                <Blurb />
            </Container>

        )
    }
}

export default NavBar