import { Wrapper } from "./PageNotFound.styles";

const PageNotFound = () => {
  return (
    <Wrapper className="container">
      <h2 className="not-found">404 NOT FOUND</h2>
      <div className="wrapper">
        <div className="wrapper_content col1">
          <img
            className="wrapper_content-img"
            src="/Scarecrow.png"
            alt="Scarecrow"
          />
        </div>
        <div className="wrapper_content col2">
          <h2 className="wrapper_content-text heading">
            I have bad news for you
          </h2>
          <p className="wrapper_content-text para">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className="btn btn-secondary" type="button">
            Back to homepage
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default PageNotFound;
