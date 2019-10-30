import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
    classname: 'container',
})`
    display: flex;
    justify-content: center;
`

const Text = styled.div`
    color: #b3aeae;
    font-size: 14px;
    font-style: italic;
    padding: 0 0 4px;
`

class Blurb extends Component {
    render() {
        return (
            <React.Fragment >
                <Container>
                    <Text>
                        Created with ReactJs and React-coverflow-mod with NodeJs!
                </Text>
                </Container>
            </React.Fragment>
        )
    }
}

export default Blurb