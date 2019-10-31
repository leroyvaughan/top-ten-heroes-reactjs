import React, { Component } from 'react';
import Coverflow from 'react-coverflow-mod';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';


const Title = styled.h1.attrs({
    className: 'h1',
})``

const Blurb = styled.div`
    display: flex;
    justify-content: center;    
`

const Label = styled.label`
    color: #383838;
    margin: 5px;
`

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Legend = styled.p`
    background-color: #383838;
    color: #fffdfd;
    font-size: 11px;
    padding-bottom: 2px;
    text-align: center;
`

const P = styled.p`
    color: #fff;
    font-size: 12px;
    font-style: italic;
    margin: 0px;
`

const Center = styled.p`
    color: #383838;
    position: relative;
    text-align: center;
`

//#########################  FOR MY HERO UPDATE PAGE   #########################

// const Update = styled.div`
//     color: #ef9b0f;
//     cursor: pointer;
// `

// class UpdateHero extends Component {
//     updateUser = event => {
//         event.preventDefault()

//         window.location.href = `/hero/update/${this.props.id}`;
//     }

//     render() {
//         return <Update onClick={this.updateUser}>Update</Update>
//     }
// }

//#########################  FOR MY HERO UPDATE PAGE   #########################







class HeroesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heroes: [],
            isLoading: false,
            showCoverflow: false
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        let response = await fetch('/api/heroes');
        let data = await response.json();

        if (!data.error) {
            this.setState({
                heroes: data.data,
                isLoading: false,
                showCoverflow: true,
                doTransitions: true
            });
        }

    }

    render() {
        const { heroes } = this.state;

        if (!this.state.showCoverflow) {
            return (
                <Wrapper>
                    <Title>Heroes not loaded!</Title>
                </Wrapper>
            )
        }


        return (
            <Wrapper>
                <CSSTransition
                    in={this.state.doTransitions}
                    timeout={0}
                    classNames="coverflow-transition"
                    unmountOnExit
                    appear
                >
                    <Coverflow
                        id="coverflow"
                        width={450}
                        height={300}
                        displayQuantityOfSide={2}
                        navigation={false}
                        enableHeading={false}
                        infiniteScroll={true}   //not working...
                        clickable={true}
                        active={4}
                    >

                        {
                            heroes.map((hero, ix) => {
                                let imgSrc = "/img/" + hero.image;
                                let url = "/hero/display/" + hero.rank;
                                let alt = hero.name + " is my #" + hero.rank + " hero!";

                                return <div
                                    key={ix}
                                    data-action={url}
                                    className="heroImg">
                                    <img
                                        key={ix}
                                        src={imgSrc}
                                        title={alt}
                                        alt={alt}
                                        style={{ display: 'block', width: '100%' }}
                                    />
                                    <Legend>{hero.name}</Legend>
                                </div>
                            })
                        }

                    </Coverflow>
                </CSSTransition>

                <Blurb>
                    <div>
                        <CSSTransition
                            in={this.state.doTransitions}
                            timeout={300}
                            classNames="text-transition"
                            unmountOnExit
                            appear>
                            <P>It appears that NodeJs and ReactJs are like Peanut Butter and Jelly.</P>
                        </CSSTransition>

                        <CSSTransition
                            in={this.state.doTransitions}
                            timeout={700}
                            classNames="text-transition"
                            unmountOnExit
                            appear>
                            <P>So, because I know NodeJs pretty well, I decided to do some ReactJs...</P>
                        </CSSTransition>

                        <CSSTransition
                            in={this.state.doTransitions}
                            timeout={1000}
                            classNames="text-transition"
                            unmountOnExit
                            appear>
                            <Center>After all, who doesn't like PBnJ?</Center>
                        </CSSTransition>

                    </div>
                </Blurb >

                <CSSTransition
                    in={this.state.doTransitions}
                    timeout={1221}
                    classNames="text-transition"
                    unmountOnExit
                    appear>
                    <div>
                        <Label>view the code on github:</Label>
                        <Link
                            to="https://github.com/leroyvaughan/top-ten-heroes-reactjs">here</Link>
                    </div>
                </CSSTransition>


            </Wrapper >
        )
    }
}


export default HeroesList