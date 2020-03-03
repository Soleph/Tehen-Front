import Styled from 'styled-components';

export const Nav = Styled.nav`
    display: flex;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #999;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    & ul{
        display: block;
    }
    & ul li{
        display: inline;
        margin: 0px 10px;
    }& a { text-decoration: none; color: #ddd; font-weight: bold;}
    .nav-brand{
        font-size: 2rem;
        font-family: 'Oxanium', cursive;
        font-weigth: bold;
    }
`;
