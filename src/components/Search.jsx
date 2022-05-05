import {FromStyle} from '../style/Styles.styled'
import { useState } from "react";
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

export default function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    };

    return (
        <FromStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            </div>
        </FromStyle>
    )
}
