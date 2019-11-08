import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';



const Wrapper = styled.div.attrs({
    id: "heroDisplay",
})`
    padding: 42px;
    position: absolute;
`

const Title = styled.h1.attrs({
    className: 'h1',
})`
    color: #856404;
`


const HeroName = styled.div`
    font-size: 26px;
    color: #71b3fd;
`

const HeroDescription = styled.div`
    color: #fff;
`
const HeroImg = styled.img`
    border-radius: 4px;
    margin: 21px 0;
    max-width: 90%;
    position: relative;
`

const ImgText = styled.div`
    color: #fff;
`



class HeroDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            rank: '',
            description: '',
            image: '',
            imgText: ''
        }

    }



    componentDidMount = async () => {
        const { id } = this.state

        let response = await fetch("/api/hero/" + id);
        let hero = await response.json();

        this.setState({
            name: hero.data.name,
            rank: hero.data.rank,
            description: hero.data.description,
            image: hero.data.image,
            imgText: hero.data.imgText,
            doTransitions: true
        });
    }

    render() {
        const { name, rank, description, image, imgText } = this.state
        let img = "/img/" + image;

        return (
            <Wrapper>

                <CSSTransition
                    in={this.state.doTransitions}
                    timeout={0}
                    classNames="title-transition"
                    unmountOnExit
                    appear
                >
                    <Title>My #{rank} hero!</Title>
                </CSSTransition>


                <CSSTransition
                    in={this.state.doTransitions}
                    timeout={400}
                    classNames="name-transition"
                    unmountOnExit
                    appear
                >
                    <HeroName>- {name}</HeroName>
                </CSSTransition>


                <CSSTransition
                    in={this.state.doTransitions}
                    timeout={700}
                    classNames="desc-transition"
                    unmountOnExit
                    appear
                >
                    <HeroDescription>{description}</HeroDescription>
                </CSSTransition>


                <CSSTransition
                    in={this.state.doTransitions}
                    timeout={600}
                    classNames="img-transition"
                    unmountOnExit
                    appear
                >
                    <HeroImg
                        src={img}
                        alt=""
                        title={name}
                    />
                </CSSTransition>

                <ImgText>{imgText}</ImgText>
            </Wrapper>
        )
    }
}

export default HeroDisplay