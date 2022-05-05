import styled from 'styled-components';
import {GiKnifeFork} from "react-icons/gi"
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <NavStyles
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <GiKnifeFork />
            <Logo to={"/"}>deliciousss</Logo>
        </NavStyles>
    )
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`;

const NavStyles = styled(motion.div)`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg{
        font-size: 2rem;
    }
`