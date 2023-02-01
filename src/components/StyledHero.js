import styled from "styled-components";
import defaultImg from "../images/exoticcar3.jpg";
const StyledHero = styled.header`
  min-height: 100vh;


  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  background-repeat: space;
  background-position: center;
   
background-color: black;
  display: grid;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    background-size: 100% ;
    background-repeat: no-repeat;

 }


`;

export default StyledHero;
