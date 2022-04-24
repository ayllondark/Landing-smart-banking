import React, {useState} from 'react';
import styled from 'styled-components';
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';


const Question = ({title, description}) => {
    const [toggle, setToggle] = useState(false);

    const btnToggler = () => {
        setToggle(!toggle);
    }

  return (
    <Questionstyled>
        <div className='q-con'>
            <div className='toggle-title'>
            <h4>{title}</h4>
            <button onClick={btnToggler}>
            {toggle ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
            </button>
            </div>
            {toggle && <p>{description}</p>}
        </div>
    </Questionstyled>
  )
}

const Questionstyled = styled.div`
background-color: #fff;
margin: 1rem 0;
padding: 1rem 1rem;
border-radius: 24px;
transition: all .4s ease-in-out;
box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

p{
    transition: all .4s ease-in-out;
}

    h4{
        color: #16194f;
        transition: all .4s ease-in-out;
        font-size: 1.5rem;
    }

    .toggle-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .4s ease-in-out;

        button{
            background: transparent;
            outline: none;
            cursor: pointer;
            border: none;
        }
    }
`;

export default Question;