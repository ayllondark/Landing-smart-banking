import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ChartStats from "./ChartStats";
import chart from '../img/chart.svg';
import AnimatedButton from "./AnimatedButton";

function ChartSection() {
  return (
    <ChartSectionStyled>
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
              <ChartStats name={"Balance"} amount={"$4250"} />
              <ChartStats name={"Last Transaction"} amount={"$1,000"} />
              </div>
              <img src={chart} alt="" />
            </div>
          </div>
          <div className="chart-right">
            <h2 className="secondary-heading">
            Manage your finances like a pro in no time
            </h2>
            <p>
              lorem25 ipsus  lorem25 ipsus lorem25 ipsus lorem25 ipsus lorem25 ipsus ipsus lorem25 ipsus lorem25 ipsus lorem25 ipsus
            </p>
            <AnimatedButton name={'Learn More'} />
          </div>
        </div>
      </InnerLayout>
    </ChartSectionStyled>
  );
}

const ChartSectionStyled = styled.section`
    .chart-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
          grid-template-columns: repeat(1, 1fr);
        }

        .chart-left{
          width: 80%;
          @media screen and (max-width: 1347px){
            width: 100%; 
        }

            .stats{
                img{
                    box-sizing: border-box;
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display:flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }

        .chart-right{
          padding-left: 2rem;
          p{
            padding: 1.3rem 0;
          }
        }

    }
`;

export default ChartSection;
