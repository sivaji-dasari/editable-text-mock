import {Component} from 'react'
import styled from 'styled-components'

class EditableTextInput extends Component {
  state = {text: '', isEditable: true}

  userInput = event => {
    this.setState({text: event.target.value})
  }

  saveInPut = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  editInPut = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InnerContainer>
            {isEditable ? (
              <Input value={text} onChange={this.userInput} type="text" />
            ) : (
              <InlineText>{text}</InlineText>
            )}

            {isEditable ? (
              <Button onClick={this.saveInPut}>Save</Button>
            ) : (
              <Button onClick={this.editInPut}>Edit</Button>
            )}
          </InnerContainer>
        </Container>
      </MainContainer>
    )
  }
}
const MainContainer = styled.div`
  background-color: #f5d0fc;
  height: 100vh;
  padding: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  height: 250px;
  width: 450px;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
`
const Heading = styled.h1`
  text-align: center;
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

const Input = styled.input``

const Button = styled.button`
  background-color: #d946ef;
  height: 36px;
  width: 70px;
  color: white;
  border-radius: 2px;
  margin-left: 10px;
  border-width: 0px;
  cursor: pointer;
  outline: none;
`
const InlineText = styled.p`
  margin-top: 2px;
`

export default EditableTextInput
