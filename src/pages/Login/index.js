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
import { BsArrowRight } from "react-icons/bs";


export default function Login() {
  return (
    <>
      <Header />
      <AuthPageContainer>
      <TitleContainer>
         <h1>Login to Your Account</h1>
         <p>Share your favourite dishes with the world!</p>
      </TitleContainer>
        <FormContainer>
          <Form>
            <Input placeholder="Brand / Influencer"></Input>
            <Input placeholder="Brand / Influencer"></Input>
            <Button>Login to your account <BsArrowRight /></Button>
          </Form>
        </FormContainer>
        <span>/</span>
        <FormContainer>
          <Form>
            <GradientButton>Sign in</GradientButton>
            <GradientButton>Sign in with google</GradientButton>
            <GradientButton>Sign in with google</GradientButton>
          </Form>
        </FormContainer>
      </AuthPageContainer>
    </>
  );
}
