import styled from 'styled-components';
import bartIcon from "../img/Bart1.png";
import { Link } from 'react-router-dom';
import one from "../img/1.jpg";

// container 
const Container = styled.div`
  /* width: ${(props) => props.type !== "sm" && "360px"}; */
  width: ${(props) => props.type === "sm" ? "400px" : "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")}; // don't be compuse if used at the "home" because as u remembr /==>
  cursor: pointer;           //==> There is no "type" then used 45px, while at the "/video" > "recommendation" type is declared then used "10px"
  display: ${(props) => props.type === "sm" && "flex"}; //basically emphasizing that if "sm" then small
  gap: 10px;
`                         // ===> or if you dislike this kind of method you can always create a component in render another one lel
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  /* margin-top: 16px; */
  gap: 12px;
  flex-basis: 50%;
`;
// img | desc | name
const Image = styled.img`
  width: 100%;
  height: ${(props) => props.type === "sm" ? "130px" : "202px"}; //202
  background-color: #6d6d6dbc;
  flex-basis: 50%;
  /* flex: 1; */
`
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"}; // I just realized that, this will be ignore if doesn't meet props => "&&"
`;
const Texts = styled.div`
  flex-basis: 100%;
`;
const Title = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link 
      to="/video/test"
    >
      <Container
        type={type}   // In styled component we can pass props, and use it as a logic | control the functionality of your app
      >
        <Image 
          type={type}
          src={one}
        />
        <Details
          type={type}
        >
          <ChannelImage 
            type={type}
            src={bartIcon}
          />
            <Texts>
              <Title> First Video </Title>
              <ChannelName> Dling's Channel </ChannelName>
              <Info>23,004,645 views • 1 day ago</Info>
            </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card