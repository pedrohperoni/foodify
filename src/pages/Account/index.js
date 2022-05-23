import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth.js";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "../../components/AccountSettingsComponents";
import {
  Button,
  Form,
  Input,
  TitleContainer,
} from "../../components/AuthComponents";
import { BsArrowRight } from "react-icons/bs";

export default function Account() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    if (parseInt(id) !== parseInt(user.userId)) {
      navigate("/");
    }
  }, []);

  function handleSubmit() {
    alert("Feature Under Construction");
  }

  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <h1>Hello, {user.name}</h1>
          <p>Here you can edit your account!</p>
        </TitleContainer>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Description" />
          <Input placeholder="PhotoUrl" />
          <Input placeholder="BackgroundUrl" />
          <Button enabled={true} onClick={handleSubmit}>
            Save Changes <BsArrowRight size="2em" />
          </Button>
        </Form>
      </Container>
    </>
  );
}
