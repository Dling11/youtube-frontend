import styled from "styled-components";
import iconLogo from "../img/Bart1.png";
import haker from "../img/2.png";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 13px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={haker} />
      <Details>
        <Name>
          HakerMode <Date>4 day ago</Date>
        </Name>
        <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit 
          placerat himenaeos, justo diam molestie feugiat interdum nulla 
          in ut risus, congue sollicitudin pharetra erat proin etiam habitasse massa.
        </Text>
      </Details>
    </Container>
  )
}

export default Comment