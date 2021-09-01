import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { testSignIn, testSignOut, testSignUp } from '../../firebase';
import { useRouter } from 'next/router';
import { PageHeader, PageLinks } from '../products';
import CustomLink from '../../components/Common/CustomLink';
import { LinkItem } from '../products/[id]';
import Button from '../../components/Common/Button';

//styled components
const LoginPageWrapper = styled.section`
  padding-bottom: 10rem;
  @media screen and (min-width: 768px) {
    padding-bottom: 2rem;
  }
`;
const LoginFormWrapper = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 90%;
`;
const InputComboWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 80%;
`;
const InputLable = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  font-style: italic;
`;
const FormInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.5rem;
  color: var(--clr-primary-4);
  text-align: center;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  &:focus {
    outline: none;
  }
`;

const loginpage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();
  return (
    <LoginPageWrapper>
      <Head>
        <title>Login</title>
      </Head>
      <PageHeader>
        <div>
          <PageLinks>
            <CustomLink href='/' as='/'>
              <LinkItem>Home</LinkItem>
            </CustomLink>
            / Login
          </PageLinks>
        </div>
      </PageHeader>
      <LoginFormWrapper>
        <LoginForm>
          <InputComboWrapper>
            <InputLable htmlFor='email'>Email</InputLable>
            <FormInput
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputComboWrapper>
          <InputComboWrapper>
            <InputLable htmlFor='password'>Password</InputLable>
            <FormInput
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputComboWrapper>
          <Button
            href='/'
            as='/'
            onClick={() => {
              testSignIn(email, password);
            }}
          >
            Sign In
          </Button>
          <h3 style={{ textAlign: 'center' }}>
            Dont have an account? Sign Up instead
          </h3>
          <Button
            href='/'
            as='/'
            onClick={() => {
              testSignUp(email, password);
            }}
          >
            Create an account
          </Button>
          <Button
            href='/'
            as='/'
            onClick={() => {
              testSignOut();
            }}
          >
            Sign Out{' '}
          </Button>
        </LoginForm>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};

export default loginpage;
