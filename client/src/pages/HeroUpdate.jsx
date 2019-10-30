import React, { Component } from 'react'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    color: #fff;
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class HeroUpdate extends Component {
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

        console.log("test");
    }

    handleChangeInputName = async event => {
        const name = event.target.value;
        this.setState({ name });
    }

    handleChangeInputRank = async event => {
        const rank = event.target.validity.valid
            ? event.target.value
            : this.state.rank;

        this.setState({ rank });
    }

    handleChangeInputDescription = async event => {
        const description = event.target.validity.valid
            ? event.target.value
            : this.state.description;

        this.setState({ description });
    }

    handleChangeInputImage = async event => {
        const image = event.target.validity.valid
            ? event.target.value
            : this.state.image;

        this.setState({ image });
    }

    handleChangeInputImgText = async event => {
        const imgText = event.target.validity.valid
            ? event.target.value
            : this.state.imgText;

        this.setState({ imgText });
    }



    handleUpdateHero = async () => {
        const payload = this.state;

        const options = {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        //TODO: show updated text
        await fetch('/api/hero/' + payload.rank, options)
            .then(() => {
                this.setState({
                    name: '',
                    rank: '',
                    description: '',
                    image: '',
                    imgText: ''
                });
            })
            .then(() => {
                document.location.href = "/heroes/list";
            })
            .catch((err) => {
                //TODO
                console.log("error in updateHero: " + err);
            });
    }

    componentDidMount = async () => {
        const { id } = this.state
        console.log("mount?");

        let response = await fetch("/api/hero/" + id);
        let hero = await response.json();

        this.setState({
            name: hero.data.name,
            rank: hero.data.rank,
            description: hero.data.description,
            image: hero.data.image,
            imgText: hero.data.imgText
        });
    }

    render() {
        const { name, rank, description, image, imgText } = this.state
        return (
            <Wrapper>
                <Title>Update Hero</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Rank: </Label>
                <InputText
                    type="number"
                    step="1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rank}
                    onChange={this.handleChangeInputRank}
                />

                <Label>Description: </Label>
                <InputText
                    type="text"
                    value={description}
                    onChange={this.handleChangeInputDescription}
                />

                <Label>Image: </Label>
                <InputText
                    type="text"
                    value={image}
                    onChange={this.handleChangeInputImage}
                />

                <Label>Image Text: </Label>
                <InputText
                    type="text"
                    value={imgText}
                    onChange={this.handleChangeInputImgText}
                />

                <Button onClick={this.handleUpdateHero}>Update Hero</Button>
                <CancelButton href={'/heroes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default HeroUpdate