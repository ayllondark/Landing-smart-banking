import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import avatar1 from '../img/avatar1.svg';
import avatar2 from '../img/avatar2.svg';
import avatar3 from '../img/avatar3.svg';
import avatar4 from '../img/avatar4.svg';
import avatar5 from '../img/avatar5.svg';
import messaging from '../img/conversation.svg';
import bgCircles from '../img/circleBg.svg';


const MessagingSection = () => {
  return (
    <MessagingStyled>
        <InnerLayout>
            <div className='message-con'>
                <div className='left-items'>
                    <h2 className='secondary-heading'>
                    We support you in 5 different languages
                    </h2>
                    <p className='m-para'>
                        Lorem ipsus Lorem ipsus Lorem ipsus Lorem ipsus Lorem ipsus Lorem ipsus Lorem ipsus Lorem ipsus Lorem ipsus 
                    </p>
                    <div className='images-con'>
                        <img className='image-1' src={avatar1} alt='' />
                        <img className='image-2' src={avatar2} alt='' />
                        <img className='image-3' src={avatar3} alt='' />
                        <img className='image-4' src={avatar4} alt='' />
                        <img className='image-5' src={avatar5} alt='' />
                        <p>&nbsp; +25</p>
                    </div>
                    <img className='bgCircle' src={bgCircles} alt='' />
                </div>
                <div className='right-items'>
                    <img src={messaging} alt='' />
                    <img className='bgCircle' src={bgCircles} alt='' />
                </div>
            </div>
        </InnerLayout>

    </MessagingStyled>
  )
}

const MessagingStyled = styled.section`
    .message-con{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
          }
    }

    .left-items{
        position: relative;
        padding-right: 2rem;
        .m-para{
            padding: 1rem 0;
        }
        
        .images-con{
            display: flex;
            align-items: center;
            
            .images-2, .images-3, .images-4, .images-5{
                margin-left: -22px;
            }
        }
        .bgCircle{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }

    .right-items{
        position: relative;
        
        img{
            padding-left: 2rem;
        }

        .bgCircle{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
    }
`;

export default MessagingSection;