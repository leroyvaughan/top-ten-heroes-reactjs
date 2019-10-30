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
    className: `btn btn - danger`,
})`
margin: 15px 15px 15px 5px;
`

class HeroInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rank: '',
            description: '',
            image: '',
            imgText: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRank = async event => {
        const rank = event.target.validity.valid
            ? event.target.value
            : this.state.rank

        this.setState({ rank })
    }

    handleChangeInputDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }

    handleChangeInputImage = async event => {
        const image = event.target.value
        this.setState({ image })
    }

    handleChangeInputImgText = async event => {
        const imgText = event.target.value
        this.setState({ imgText })
    }

    handleIncludeHero = async () => {
        // const { name, rank, description, image, imgText } = this.state;
        // const payload = { name, rating, time: arrayTime }
        const payload = this.state;


        const options = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        await fetch("/api/hero/", options)
            .then(() => {
                this.state = {
                    name: '',
                    rank: '',
                    description: '',
                    image: '',
                    imgText: ''
                }
            })
            .then(() => {
                document.location.href = "/heroes/list";
            })
            .catch((err) => {
                //TODO
                console.log("error in updateHero: " + err);
            });
    }

    render() {
        const { name, rank, description, image, imgText } = this.state
        return (
            <Wrapper>
                <Title>Create Hero</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Rank: </Label>
                <InputText
                    type="number"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rank}
                    onChange={this.handleChangeInputRank}
                />

                <Label>Description: </Label>
                <textarea
                    className="form-control"
                    value={description}
                    onChange={this.handleChangeInputDescription}
                />

                <Label>Image: </Label>
                <InputText
                    type="textarea"
                    value={image}
                    onChange={this.handleChangeInputImage}
                />

                <Label>Image Text: </Label>
                <textarea
                    className="form-control"
                    value={imgText}
                    onChange={this.handleChangeInputImgText}
                />

                <Button onClick={this.handleIncludeHero}>Add Hero</Button>
                <CancelButton href={'/heroes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default HeroInsert