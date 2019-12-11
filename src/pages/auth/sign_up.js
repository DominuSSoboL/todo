import React from 'react';

const SignUp = () => (
  <div className="container">
    <div className="row">
      <div className="col-6 offset-3">

        <div className="main-card">
          <form>
            <p>
              <input type="text" placeholder="Name"/>
            </p>
            <p>
              <input type="text" placeholder="Last Name"/>
            </p>
            <p>
              <input type="text" placeholder="Email"/>
            </p>
            <p>
              <idnput type="num" placeholder="Pass"/>
            </p>
            <button type="submit">
              Registration
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
);

export default SignUp;
