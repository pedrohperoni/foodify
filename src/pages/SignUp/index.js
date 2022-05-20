import {
  AuthPageContainer,
  Button,
  Form,
  FormContainer,
  Input,
  TitleContainer,
  FormWarning,
} from "../../components/AuthComponents";
import Header from "../../components/Header";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api.js";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value.toLowerCase());
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value.toLowerCase())) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      email,
      password,
      confirmPassword,
      name,
    };
    console.log(data);
    const promise = api.signUp(data);
    promise.then((response) => {
      navigate("/login");
    });
    promise.catch((error) => {
      alert(`Erro ${error.response.status} ${error.response.statusText}`);
    });
  }

  return (
    <>
      <Header page="auth" />
      <AuthPageContainer>
        <TitleContainer>
          <h1>Join Foodify today!</h1>
          <p>Register your account</p>
        </TitleContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              value={email}
              type="email"
              name="email"
              onChange={handleEmailChange}
              required
            />
            {/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.toLowerCase()) ||
            email === "" ? (
              ""
            ) : (
              <FormWarning>Insira um e-mail num formato válido!</FormWarning>
            )}
            <Input
              type="text"
              name="name"
              placeholder="Display Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {password.length > 3 || password.length === 0 ? (
              ""
            ) : (
              <FormWarning>Sua senha deve ter mais de 3 carcteres!</FormWarning>
            )}
            <Input
              type="password"
              name="confirmPassword"
              placeholder="ConfirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {password === confirmPassword || confirmPassword.length === 0 ? (
              ""
            ) : (
              <FormWarning>As senhas devem ser iguais!</FormWarning>
            )}
            <Button
              enabled={
                emailValidation &&
                password === confirmPassword &&
                password.length > 3 &&
                name
              }
              type="button"
              onClick={handleSubmit}
            >
              Create a new Account <BsArrowRight size="2em" />
            </Button>
            <p>
              Already a member? <Link to="/login">Log in</Link>
            </p>
          </Form>
        </FormContainer>
      </AuthPageContainer>
    </>
  );
}
