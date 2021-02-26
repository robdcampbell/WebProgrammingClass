import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

const SignUpModal = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <>
      <div className="account__modal">
        <div className="account__modal__body">
          <h2 className="accountModal__action">Sign Up</h2>
          {/* firebase sets localStorage tokens to verify 
          {currentUser.email} */}
          {/* {error && <Alert variant="danger">{error}</Alert>} */}

          <form className="accountModal__form" onSubmit={handleSubmit}>
            <div id="email">
              <label>Email</label>
              <input type="email" required ref={emailRef} />
            </div>

            <div id="password">
              <label>Password</label>
              <input type="password" required ref={passwordRef} />
            </div>

            <div className="accountModal__footer">
              <button disabled={loading} type="submit">
                Log In
              </button>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>

      <div className="under__account__modal">
        Have an account? <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default SignUpModal;
