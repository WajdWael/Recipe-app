import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { List } from '../style/Styles.styled';
import  styled  from 'styled-components';

export default function Category() {
    return (
        <List>
            {/* icon 1  to={'/cuisine/Italian'} */}
            <div className='center'>
                <Slink to={'/cuisine/Italian'}>
                    <FaPizzaSlice />
                    <h4>Italian</h4>
                </Slink>
            </div>

            {/* icon 2  to={'/cuisine/American'}*/}
            <div  className='center'>
                <Slink to={'/cuisine/American'}>
                    <FaHamburger />
                    <h4>American</h4>
                </Slink>
            </div>

            {/* icon 3  to={'/cuisine/Thai'} */}
            <div className='center'>
                <Slink to={'/cuisine/Thai'}>
                    <GiNoodles />
                    <h4>Thai</h4>
                </Slink>
            </div>

            {/* icon 4  to={'/cuisine/Japanese'}*/}
            <div className="center">
                <Slink to={'/cuisine/Japanese'}>
                    <GiChopsticks />
                    <h4>Japanese</h4>
                </Slink>
            </div>

        </List>
    )
}

export const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(.8);

    @media (max-width: 576px) {
        margin: 0;
    }

    h4{
        color: #fff;
        font-size: .8rem;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }

        h4{
            color: white;
            font-size: 0.8rem;
        }
    }
`
