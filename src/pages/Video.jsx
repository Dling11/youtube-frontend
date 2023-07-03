import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Comments from "../components/Comments";
import iconLogo from "../img/Bart1.png";
import styled from "styled-components";
import Card from "../components/Card";

// container
const Container = styled.div`
  display: flex;
  gap: 24px;
`
// Video Side || Left side
const Content = styled.div`
  flex: 5;
`
const VideoWrapper = styled.div`

`
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
// Bottom Area | channel area | subcribe
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Subscribe = styled.button`
  background-color: #da8428;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  transition: all .4s;
  
  &:hover {
    background-color: #ba6c1a;
  }
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin: 5px 0px 20px 0px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 13px;
`;
// Right side Video | reccomend area
const Recommendation = styled.div`
  flex: 2;
`

const Video = () => {
  return (
    <Container>
      {/* Video Content */}
      <Content>
        <VideoWrapper>
        <iframe 
          width="100%" 
          height="456" 
          src="https://www.youtube.com/embed/DHjqpvDnNGE" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; 
          picture-in-picture; 
          web-share" 
          allowfullscreen></iframe>
        </VideoWrapper>
        <Title> How to Code javascript in Bisaya Language... </Title>
        <Details>
          <Info>23,004,645 views • Sep 11, 2000</Info>
          {/* icons */}
          <Buttons>

            <Button>  {/* Thumbs up icon*/}
              <ThumbUpOutlinedIcon /> 143
            </Button>
            <Button>  {/* Thumbs-down icon*/}
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>  {/* Thumbs-down icon*/}
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>

          </Buttons>
        </Details>
        <Hr />
        {/* Channel area || sub button */}
        <Channel>
          <ChannelInfo>
            <Image src={iconLogo}/>
            <ChannelDetail>
              <ChannelName> Dling's Channel </ChannelName>
              <ChannelCounter> 654K subcribers </ChannelCounter>
              <Description> 
                Lorem ipsum dolor sit amet consectetur adipiscing elit sociis, 
                sociosqu ullamcorper litora quis ad curae convallis, fames et dui 
                sociosqu ullamcorper litora quis ad curae convallis, fames et dui 
                consequat facilisi netus diam. 
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Button</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>

      {/* Right side video bars */}
      <Recommendation>
        <Card 
          type="sm"
        />
        <Card 
          type="sm"
        />
        <Card 
          type="sm"
        />
        <Card 
          type="sm"
        />
        <Card 
          type="sm"
        />
      </Recommendation>

    </Container>
  )
}

export default Video