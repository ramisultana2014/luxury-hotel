import { Link } from "react-router-dom";
import Wrapper from "../assets/wrapper/PageNotFound";
import logo from "../assets/images/logo.png";
function PageNotFound({ errorMessage }: { errorMessage?: string }) {
  return (
    <Wrapper>
      <div className="box">
        <div>
          <img src={logo} alt="lancatster" />
        </div>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <p> we are sorry , the page you are looking for could not be found</p>
        )}

        <Link to="/">Home Page</Link>
      </div>
    </Wrapper>
  );
}

export default PageNotFound;
