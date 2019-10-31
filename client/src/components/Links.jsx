import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

// import styled from 'styled-components'


// const Collapse = styled.div.attrs({
//     className: 'collpase navbar-collapse',
// })``

// const List = styled.div.attrs({
//     className: 'navbar-nav mr-auto',
// })``

// const Item = styled.div.attrs({
//     className: 'collpase navbar-collapse',
// })``

const NavLink = styled.a.attrs({
    className: "navbar-brand",
    id: "appTitle",
    href: "/",
})`
    position: relative;
    z-index: 0;
`


class Links extends Component {
    render() {
        return (
            <React.Fragment>

                <CSSTransition
                    in={true}
                    timeout={0}
                    classNames="siteTitle-transition"
                    unmountOnExit
                    appear>

                    <NavLink>
                        My Top Ten Heroes List
                    </NavLink>

                </CSSTransition>
                {/* <Collapse>
                    <List>
                        <Item>
                            <Link to="/heroes/list" className="nav-link">
                                Top Ten List
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/hero/create" className="nav-link">
                                Create Hero
                            </Link>
                        </Item>
                    </List>
                </Collapse> */}
            </React.Fragment>
        )
    }
}

export default Links