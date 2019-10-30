import React, { Component } from 'react';
import Coverflow from 'react-coverflow-mod';
import styled from 'styled-components';
import $ from 'jquery';


const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Legend = styled.p`
    border-bottom: 1px solid #ccc;
    color: #fffdfd;
    font-size: 11px;
    padding-bottom: 2px;
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
                showCoverflow: true
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
                <Coverflow
                    width={450}
                    height={300}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={false}
                    infiniteScroll={true}   //not working...
                    clickable={true}
                    active={5}
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


            </Wrapper>
        )
    }
}



$(function () {


    $("#root .heroImg").on("click", function () {
        console.log("test");
    })
});


export default HeroesList