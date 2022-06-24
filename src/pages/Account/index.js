import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth.js";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [description, setDescription] = useState();
  const [name, setName] = useState();
  const [photoURL, setPhotoURL] = useState();
  const [backgroundURL, setBackgroundURL] = useState();

  useEffect(() => {
    if (parseInt(id) !== parseInt(user.userId)) {
      navigate("/");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      name: name,
      description: description,
      photoURL: photoURL,
      backgroundURL: backgroundURL,
    };
    console.log(userData);

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
          <Input
            type="text"
            name="name"
            placeholder="Display Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="text"
            name="Description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Input
            type="text"
            name="PhotoURL"
            placeholder="PhotoURL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
          <Input
            type="text"
            name="BackgroundURL"
            placeholder="BackgroundURL"
            value={backgroundURL}
            onChange={(e) => setBackgroundURL(e.target.value)}
            required
          />
          <Button enabled={true} onClick={handleSubmit}>
            Save Changes <BsArrowRight size="2em" />
          </Button>
        </Form>
      </Container>
    </>
  );
}
