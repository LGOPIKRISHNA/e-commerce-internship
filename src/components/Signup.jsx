import React from 'react';
import styled from 'styled-components';

const Signup = () => {
  return (
    <StyledWrapper>
      <div className="container">
        {/* <div className="left">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
            alt="Signup"
            className="signup-image"
          />
        </div> */}
        <div className="right">
          <form className="form">
            <p className="title">Register</p>
            <p className="message">Signup now and get full access to our app.</p>
            <div className="flex">
              <label>
                <input className="input" type="text" placeholder required />
                <span>Firstname</span>
              </label>
              <label>
                <input className="input" type="text" placeholder required />
                <span>Lastname</span>
              </label>
            </div>
            <label>
              <input className="input" type="email" placeholder required />
              <span>Email</span>
            </label>
            <label>
              <input className="input" type="password" placeholder required />
              <span>Password</span>
            </label>
            <label>
              <input className="input" type="password" placeholder required />
              <span>Confirm password</span>
            </label>
            <button className="submit">Submit</button>
            <p className="signin">
              Already have an account? <a href="/signin">Signin</a>
            </p>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;

  .container {
    display: flex;
    width: 80%;
    max-width: 1200px;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .signup-image {
    width: 100%;
    max-width: 500px;
    object-fit: cover;
    border-radius: 10px;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    padding: 20px;
    border-radius: 20px;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    color: #00bfff;
  }

  .message, .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
  }
`;

export default Signup;
