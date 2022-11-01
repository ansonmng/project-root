import styled from 'styled-components';
import Colors from '../assets/themes/Colors';

const Header = ():JSX.Element => {
    return (
    <header>
         <StyledHeader>
            <div style={{width: '80px', height: '20px', fontSize: '32px', alignItems:'center', justifyContent:'center', display:'flex', paddingLeft: '40px', fontWeight: '500'}}>
                IFCA
            </div>
            <StyledUl>
                <StyledLi>
                    <a href='/google.com.my'>
                        How it works
                        <Hover/>
                    </a>
                </StyledLi>
                <StyledLi>
                <a href='/google.com.my'>
                    Booking Now
                    <Hover/>
                </a>
                </StyledLi>
                <StyledLi>
                <a href='/google.com.my'>
                    Community
                    <Hover/>
                </a>
                </StyledLi>
            </StyledUl>
        </StyledHeader>
    </header>
    );
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    z-index: 10px;
`

const StyledUl = styled.ul`

    list-style: none;
    display: flex;
    align-items: center;
    gap: 3rem;

    margin: 4px !important;

`

const StyledLi = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem 0;

    a {
        text-decoration: none;
        color: ${Colors.primaryBlack};
      display: flex;
      align-items: center;
      position: relative;
      justify-content: space-around;
      font-size: 20px;

      &:hover{
        color: ${Colors.primaryPurple};
        transform: scale(1.1);
      }
    }

`

const Hover = styled.div`
    display: flex;
    width: 100%;
    border: 2px solid $color-primary;
    border-radius: 100px 100px 0 0;
    position: absolute;
    bottom: -1px;
    align-self: baseline;
    background-color: pink;
`


export default Header;
