import styled from 'styled-components';

export const FooterArea = styled.div`
    height: 40%;
    width: 100%;
    left: 0px;
    bottom: 0px;
    border-radius: 0px;
    background: #00196E;
    position: absolute;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Image = styled.div`
    height: 114px;
    width: 114px;
    left: 52px;
    top: 28px;
    border-radius: 0px;
    position: absolute;
    left: 3.62%;
    right: 88.46%;
    top: 9.15%;
    bottom: 53.59%;
    background: url(image.png);
`;

export const Name = styled.div`
    position: absolute;
    left: 43.12%;
    right: 38.75%;
    top: 68%;
    bottom: 20.92%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;

    color: #FFFFFF;
`;

export const CopyRight = styled.div`
    position: absolute;
    left: 37.41%;
    right: 33.09%;
    top: 80%;
    bottom: 5%;

    /* Body */

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;

    color: #FFFFFF;

`;

export const Container = styled.div`
    flex-direction: column;
    justify-content: center;
    max-width: 1500px;
    margin-left: 40%;
    grid-gap: 3%;
`

export const Column = styled.div`
    flex-direction: column;
    text-align: left;
    margin-left: 0px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px,max-content));
  grid-gap: 3%;
  align-item: start;
`;

export const Heading = styled.p`
  font-size: 15px;
  font-family: 'Montserrat';
  font-weight: bold;
  margin-top: 16%;
  text-decoration: none;
  color: #FFFFFF;
`;

export const FooterLink = styled.a`
    width: 124px;
    height: 20px;
    left: 0px;
    top: 0px;

    /* Body */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02em;
    text-decoration: none;

    color: #FFFFFF;
`;