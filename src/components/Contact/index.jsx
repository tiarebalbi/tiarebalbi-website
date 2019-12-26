import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Flag, { FlagGroup } from '@atlaskit/flag';
import EditorSuccessIcon from '@atlaskit/icon/glyph/editor/success';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import { colors } from '@atlaskit/theme';
import Spinner from '@atlaskit/spinner';
import { DotWrapper, RectangleWrapper, SquareWrapper, Wrapper } from './__styles__';

const Contact = ({ theme }) => {
  const { handleSubmit, register, errors, reset } = useForm();
  const [completed, setCompleted] = useState(false);
  const [request, setRequest] = useState(false);

  const onSubmit = values => {
    setRequest(true);
    fetch('https://f0ylf1sk9h.execute-api.us-east-1.amazonaws.com/Prod/submitForm', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    }).then(() => {
      reset();
      setCompleted(true);
      setRequest(false);
      setTimeout(() => setCompleted(false), 3000);
    });
  };

  return (
    <Wrapper>
      <h1>Contact</h1>

      <div>
        <p>Fell free to contact me and say hi!</p>
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
            <textarea
              ref={register({
                required: 'The message is required',
              })}
              placeholder="Your message here..."
              name="message"
            />
          </label>
          <button disabled={request} type="submit">
            {!request && 'Send Message'}
            {request && <Spinner invertColor={theme === 'dark'} size="small" />}
          </button>
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
      <DotWrapper theme={theme} />
      <SquareWrapper theme={theme} />
      <RectangleWrapper />
    </Wrapper>
  );
};

export default Contact;
