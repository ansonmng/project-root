import {FunctionComponent, useState} from "react";
import styled, { css }from 'styled-components';
import { useNavigate } from "react-router-dom";

import Colors from '../assets/themes/Colors';
import bgimg from '../assets/photos/bgimg.jpg';

import Input from '../components/Input';
import Button from '../components/Button';
import Header from "../components/Header";

const SignUp:FunctionComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleRouting = () => {
        navigate('/home', { replace: true });
    }

    return (
        <>
        <Header/>
        <BackgroundDiv>
            <CardDiv>
                <Title>
                    <Bullet>
                        1
                    </Bullet>
                    <h2>
                        Fill up your details
                    </h2>
                </Title>
                <FormContainer>
                    <InputDiv>
                        <h4>First Name</h4>
                        <Input css={style.inputcss} type='text' placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </InputDiv>
                    <InputDiv>
                        <h4>Last Name</h4>
                        <Input css={style.inputcss} type='text' placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </InputDiv>
                    <InputDiv>
                        <h4>Email</h4>
                        <Input css={style.inputcss} type='text' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </InputDiv>
                    <InputDiv>
                        <h4>Password</h4>
                        <Input css={style.inputcss} type='text' placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </InputDiv>
                </FormContainer>
                <Footer>
                    <Checkbox>
                    <Input css={style.check} type='checkbox' placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <h4>Agree to Terms and Conditions</h4>
                </Checkbox>
                <Button css={style.submitButton} onClick={handleRouting}>Submit </Button>
                </Footer>

            </CardDiv>
        </BackgroundDiv>
        </>
    );
}

const BackgroundDiv = styled.div`

    background-image:  url(${bgimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    overflow: hidden;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
`

const CardDiv = styled.div`

    display:flex;
    flex-direction: column;
    filter: blur(0px);
    -webkit-filter: blur(0px);
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    border-radius: 20px;
    min-width: 70%;
    height: 75%;
    margin-top: 5%;

    border-width: 0px;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 80px;
    margin-top: 50px;
    margin-left: 5%;

   h2 {
    margin: 2px !important;
    padding-left: 15px;
    
   }

`

const Bullet= styled.div`
    display: flex;
    justify-content: center;
    border-radius: 50%;
    color: ${Colors.primaryBlack};
    background-color: ${Colors.primaryPurple};
    gap: 5px;
    width: 40px;
    height: 40px;

    font-size: 32px;
    font-weight: 500;
`

const FormContainer = styled.div`
    display: flex;
    align-self: center;
    // align-items: center;
    justify-content: center;
    width: 80%;
    flex-wrap: wrap;                                                                                                                                                                                            
`
const InputDiv = styled.div`
    display: flex;
    // align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;

    h4 {
        margin: 10px !important;
        text-align: left;
    }                                                                                               
    width:50%;
`

const Footer = styled.div`
    width: 80%;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
    // align-items:center;
`

const Checkbox = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 0px;
    h4{
        margin-left: 10px;
        font-weight: 500;
    }
`

const style = {
    inputcss: css`
        width: 80%;
    `,
    check: css`
        width: 30px;
        outline: none;
        input[type="checkbox"]:focus{
            outline:0;
        }
    `,
    submitButton: css`
    align-self: center;
    margin-top: 100px;
    width: 50%;
    background-color: ${Colors.primaryBlack};
    border-radius: 50px;
    color: white;
    padding: 14px 50px;
    font-size: 24px;
    &:hover {
        transform: scale(1.1);
        color: white;
        transition: 0.3s;
    }
    `
}

export default SignUp;
