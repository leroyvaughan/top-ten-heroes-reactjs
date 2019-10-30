import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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


class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand" id="appTitle">
                    My Top Ten Heroes
                </Link>
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