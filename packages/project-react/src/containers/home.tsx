import React, {FunctionComponent, useState} from "react";
import styled, { css }from 'styled-components';
import { useNavigate } from "react-router-dom";

import Colors from '../assets/themes/Colors';
import bgimg from '../assets/photos/bgimg.jpg';

import Input from '../components/Input';
import Button from '../components/Button';
import Header from "../components/Header";

const Home: FunctionComponent = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    
    let navigate = useNavigate();

    const handleRouting = () => {
        navigate('/register', { replace: true });
    }

    return (<>
        <Header/>
        <BackgroundDiv>
            <HeroDiv>
                    <TitleDiv>
                    <h1>Liv The Dream</h1>
                    <h2>With our special cosmetic</h2>
                    <p>
                    Cosmetics are defined as “items with mild action on the human body for the purpose of cleaning, beautifying, adding to the attractiveness.
                    </p>
                    </TitleDiv>
                
                     <CardDiv>
                        <FormDiv>
                        <h3>Welcome back</h3>
                        <h4>Username or Email</h4>
                        <Input type='text' placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                        <h4>Password</h4>
                        <Input type={showPass ? 'text' : 'password'} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <Button css={style.showPassword} onClick={() => {setShowPass(!showPass)}}>Show Password</Button>
                        <Button css={style.logInButton} onClick={handleRouting}>Log in </Button>
                        <div style={{display: 'flex', flexDirection: 'row', width: '70%', marginTop: '9%'}}>
                            <h4 style={{fontSize: '18px', fontWeight: '500'}}>No account yet?</h4>
                            <Button css={style.signUpButton} onClick={handleRouting}>Signup Now</Button>
                        </div>
                        </FormDiv>
                        
                    </CardDiv>
            </HeroDiv> 
        </BackgroundDiv>
        </>
    );
}

const BackgroundDiv = styled.div`

    display: flex;
    flex-direction: row;
    // align-items:center;
    justift-content: center;
    position: relative;
    width: 100vw;
    height: 70vh;
    // background-color: ${Colors.primaryWhite};
`

const CardDiv = styled.div`

    display:flex;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    border-radius: 20px;
    min-width: 560px;
    height: 75%;

    border-width: 0px;
`

const TitleDiv = styled.div`
    min-width: 80px;
    max-width: 50%;
    display:flex;
    flex-direction:column;
    text-align: left;
    color: ${Colors.primaryWhite};
    text-shadow: 5px 3px 10px rgba(0,0,0,0.33);

    h1 {
        margin: 8px !important;
        font-size: 96px;
    }
    
    h2{
        margin: 8px !important;
        font-size: 38px;
    }

    p{
        margin: 12px !important;
        font-size: 22px;
    }

`

const HeroDiv = styled.div `
    height: 80%;
    background-image:  url(${bgimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
`
const FormDiv = styled.div`
    color: ${Colors.primaryBlack};
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    margin-top: 7%;

    h3{
        font-size: 36px;
    }

    h4{
        align-self: flex-start;
        padding-left: 9%;
        font-size: 20px;
        margin: 20px !important;
    }
`

const style = {
    showPassword: css`
        align-self: flex-end;
        margin-top:2.5%;
        margin-right: 12%;
        background-color: transparent;
        font-size: 14px;
        &:hover {
                transform: scale(1.2);
                color: ${Colors.primaryPurple};
                transition: 0.3s;
        }`,

    logInButton: css`
        margin-top: 12%;
        width: 75%;
        background-color: ${Colors.primaryBlack};
        border-radius: 50px;
        color: white;
        padding: 14px 50px;
        font-size: 28px;
        &:hover {
            transform: scale(1.1);
            color: white;
            transition: 0.3s;
        }
    `,
    
    signUpButton: css`
        font-size: 20px;
        font-weight: bold;
        background-color: transparent;
        text-decoration: underline;
        margin-left: -14px;
        &:hover {
            transform: scale(1.1);
            color: ${Colors.primaryPurple};
            transition: 0.3s;
        }
    `
}


export default Home;
