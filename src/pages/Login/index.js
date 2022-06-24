import {
  AuthPageContainer,
  Button,
  Form,
  FormContainer,
  GradientButton,
  Input,
  TitleContainer,
} from "../../components/AuthComponents";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api.js";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth.js";

import { BsGoogle, BsApple, BsArrowRight } from "react-icons/bs";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, userData, user, auth } = useAuth();

  useEffect(() => {
    if (user && auth) {
      navigate("/");
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    const promise = api.login(data);
    promise.then((response) => {
      login(response.data.token);
      userData({
        name: response.data.name,
        userId: response.data.userId,
        backgroundUrl: response.data.backgroundUrl,
        profileUrl: response.data.profileUrl,
        description: response.data.description,
        handle: response.data.handle
      });
      navigate("/");
    });
    promise.catch((error) => {
    });
  }

  return (
    <>
      <Header page="auth" />
      <AuthPageContainer>
        <TitleContainer>
          <h1>Login to Your Account</h1>
          <p>Share your favourite dishes with the world!</p>
        </TitleContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              value={email}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button onClick={handleSubmit} type="submit" enabled={true}>
              Login to your account <BsArrowRight size="2em" />
            </Button>
          </Form>
        </FormContainer>
        <span>/</span>
        <FormContainer>
          <Form>
            <Link to="/signup">
              <GradientButton> Register a new account </GradientButton>
            </Link>
            <Link to="/signup">
              <GradientButton>
                <BsGoogle size="1.4em" />
                Sign in with google
              </GradientButton>
            </Link>
            <Link to="/signup">
              <GradientButton>
                <BsApple size="1.4em" />
                Sign in with apple
              </GradientButton>
            </Link>
          </Form>
        </FormContainer>
      </AuthPageContainer>
    </>
  );
}
