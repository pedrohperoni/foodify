import {
  AuthPageContainer,
  Form,
  FormContainer,
  Input,
} from "../../components/AuthComponents";
import Header from "../../components/Header";

export default function Login() {
  return (
    <>
      <Header />
      <AuthPageContainer>
        <FormContainer>
          <Form>
            <Input></Input>
          </Form>
        </FormContainer>
      </AuthPageContainer>
    </>
  );
}
