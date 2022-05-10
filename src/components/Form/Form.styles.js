import styled from "styled-components";

export const Wrapper = styled.div`
  &.container {
    display: grid;
    place-items: center;
    min-block-size: 100vh;
    background-color: var(--bodyBackgroundColor);
  }

  &.grid {
    inline-size: 90%;
    margin-inline: auto;
    max-inline-size: 20rem;
  }

  .form {
    display: grid;
    gap: var(--formGap);
  }

  .form input[type="text"],
  .form input[type="submit"] {
    inline-size: 100%;
  }

  .form__field {
    display: flex;
  }

  .form__input {
    flex: 1;
  }

  .form__icon {
    block-size: 1em;
    display: inline-block;
    fill: var(--iconFill);
    inline-size: 1em;
    vertical-align: middle;
  }

  .login {
    color: var(--loginColor);
  }

  .login label,
  .login input[type="text"],
  .login input[type="submit"] {
    border-radius: var(--loginBorderRadus);
    padding: 1rem;
  }

  .login label {
    background-color: var(--loginLabelBackgroundColor);
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-inline: 1.25rem;
  }

  .login input[type="text"] {
    background-color: var(--loginInputBackgroundColor);
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .login input[type="text"]:focus,
  .login input[type="text"]:hover {
    background-color: var(--loginInputHoverBackgroundColor);
  }

  .login input[type="submit"] {
    background-color: var(--loginSubmitBackgroundColor);
    color: var(--loginSubmitColor);
    font-weight: 700;
    text-transform: uppercase;
  }

  .login input[type="submit"]:focus,
  .login input[type="submit"]:hover {
    background-color: var(--loginSubmitHoverBackgroundColor);
  }
`;
