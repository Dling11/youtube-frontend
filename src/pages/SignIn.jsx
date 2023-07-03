import styled from 'styled-components';

// Container || wrapper
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px); // if you are wondering why do some calc cause I am a nerd.. joke navbar heigth 56px
  color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
  box-shadow: 1px 1px 10px 1px rgba(80, 80, 80, 0.204);
`
// Tittle | Buttons | Inputs
const Title = styled.h1`
  font-size: 20px;
`;
const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
  outline: none;
  
  &:active {
    background-color: ${({ theme }) => theme.Soft};
  }
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};

  &:hover {
    animation: pulse 1s infinite;     // COOL interface :)
    transition: .3s;
  }

  @keyframes pulse {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(.9);
  }
    100% {
    transform: scale(1);
  }
}
`;
const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
`;
const Links = styled.div`
  margin-left: 50px;
  cursor: pointer;
`;
const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  return (
    <Container>

      <Wrapper>
        <Title> Sign in </Title>
        <SubTitle> Login to be Hacked...! </SubTitle>
        <Input
          placeholder="username"
        />
        <Input
          type="password"
          placeholder="password"
        />
        <Button> Sign In </Button>
        {/* Dont have a account */}
        <Title> Don't have a Account ?</Title>
        <Input
          placeholder="username"
        />
        <Input
          type="password"
          placeholder="email"
        />
        <Button> Sign Up </Button>
      </Wrapper>
      {/* More Links */}
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>

    </Container>
  )
}

export default SignIn