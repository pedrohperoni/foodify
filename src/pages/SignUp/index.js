import {
  AuthPageContainer,
  Button,
  Form,
  FormContainer,
  Input,
  TitleContainer,
} from "../../components/AuthComponents";
import Header from "../../components/Header";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <Header page="auth" />
      <AuthPageContainer>
        <TitleContainer>
          <h1>Join Foodify today!</h1>
          <p>Register your account</p>
        </TitleContainer>
        <FormContainer>
          <Form>
            <Input placeholder="Email"></Input>
            <Input placeholder="Password"></Input>
            <Input placeholder="Confirm Password"></Input>
            <Button>
              Create a new Account <BsArrowRight size="2em" />
            </Button>
            <p>Already a member?<Link to="/login"> Log in</Link></p>
          </Form>
        </FormContainer>
      </AuthPageContainer>
    </>
  );
}
