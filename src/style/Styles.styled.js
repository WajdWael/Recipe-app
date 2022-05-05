import styled from 'styled-components';
import { motion } from 'framer-motion';

// CSS
// Styled component
export const Wrapper = styled.div`
    margin: 4rem 0rem;
`
export const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    @media (max-width: 576px) {
        width: 280px;
    }

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-content: center;
    }
`
export const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

// nav link category page
export const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;

    @media (max-width: 576px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        margin: 2rem 3rem;
        align-items: center;
    }
`
// cuisine page
export const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`
export const Card2 = styled.div`
    img{
        border-radius: 2rem;
        width: 100%;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`
// search page
export const FromStyle = styled.form`
    margin: 0rem 5rem;
    display: flex;
    justify-content: center;

    @media (max-width: 488px) {
        margin: 0rem 1rem;
    }

    div{
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border:none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`