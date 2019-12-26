import * as React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { DARK_COLOR } from '../Theme';
import Flag, { FlagGroup } from '@atlaskit/flag';
import EditorSuccessIcon from '@atlaskit/icon/glyph/editor/success';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import { colors } from '@atlaskit/theme';
import { useState } from 'react';

const Wrapper = styled.div`
  min-height: 200px;
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;

  & > h1 {
    text-align: center;
    font-size: 60px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 80px;
    margin-bottom: 120px;
  }

  & > div {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
    border-radius: 18px;
    color: #6d7783;
    min-height: 300px;
    width: 65%;
    margin: auto;
    text-align: center;
    padding: 80px 50px;

    & > p {
      color: #222a41;
      margin-bottom: 50px;
      font-size: 18px;
    }

    form {
      width: 100%;
      label,
      input,
      textarea {
        width: 100%;
        display: block;
        border: none;
        margin-bottom: 30px;

        &&::placeholder {
          color: #6d7783 !important;
          font-family: 'Oxygen', sans-serif !important;
        }
      }

      input,
      textarea {
        border-bottom: #aeb7c1 1px solid;
      }

      input {
        line-height: 35px;
      }

      textarea {
        height: 100px;
      }

      button[type='submit'] {
        background: ${DARK_COLOR};
        width: 150px;
        line-height: 29px;
        padding: 10px 10px;
        border-radius: 45px;
        text-align: center;
        margin: auto;
        color: #fff;
      }
    }
  }
`;

const Contact = () => {
  const { handleSubmit, register, errors } = useForm();
  const [completed, setCompleted] = useState(false);

  const onSubmit = values => {
    console.log('Submit', values, register, errors);
    setCompleted(true);

    setTimeout(() => setCompleted(false), 8000);
  };

  return (
    <Wrapper>
      <h1>Contact</h1>

      <div>
        <p>Fell free to contact me and say hello!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input
              placeholder="Your name"
              type="text"
              ref={register({
                required: 'Your name is required',
              })}
              name="name"
            />
          </label>
          <label>
            <input
              placeholder="Your e-mail"
              type="email"
              name="email"
              ref={register({
                required: 'Your e-mail is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'invalid email address',
                },
              })}
            />
          </label>
          <label>
            <textarea placeholder="Your message here..." name="message" />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
      {(errors.email || errors.name) && (
        <FlagGroup>
          {Object.entries(errors).map(element => (
            <Flag
              appearance="error"
              icon={<ErrorIcon label="Error" secondaryColor={colors.R400} />}
              id="error"
              key="error"
              title={element[1].message}
            />
          ))}
        </FlagGroup>
      )}
      {completed && (
        <FlagGroup>
          <Flag
            appearance="success"
            icon={<EditorSuccessIcon label="success" secondaryColor={colors.G50} />}
            id="success"
            key="success"
            title="Thanks! I will get in contact with you soon!"
          />
        </FlagGroup>
      )}
    </Wrapper>
  );
};

export default Contact;
