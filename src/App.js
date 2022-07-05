import "./App.css";

function App() {
  return (
    <div className="App container card shadow-lg p-3 mb-5 bg-body rounded mt-5 " style={{width: '26rem'}}>
      <h2 className="text-primary fs-1 fw-bold text-center my-2">
        Create account
      </h2>
      <div className="d-flex pt-1 mt-2">
        <input
          className="form-control w-50"
          type="text"
          placeholder="First Name"
          required
        />

        <input
          className="form-control ms-2 w-50"
          type="text"
          placeholder="Last Name"
          required
        />
      </div>

      <input
        className="form-control mt-2"
        type="text"
        placeholder="User name"
        required
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email adress"
        required
      />

      <input
        className="form-control mt-2"
        type="tel"
        placeholder="Phone number"
        required
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="New password"
        required
      />

      <label for="Birth" className=" mt-2">
        Date of Birth :
      </label>
      <input
        type="date"
        id="Birth"
        className="mt-2"
        value="2021-01-01"
        min="1930-01-01"
        max="2020-12-31"
        required
      />

      <div>
        <label for="" className=" mt-2">
          Gender :
        </label>
        <div className="d-flex justify-content-evenly">
          <div>
            <input type="radio" id="Male" name="gender"  />
            <label for="Male">Male</label>
          </div>
          <div>
            <input type="radio" id="Female" name="gender" />
            <label for="Female">Female</label>
          </div>
          <div>
            <input type="radio" id="Custom" name="gender" />
            <label for="Custom">Custom</label>
          </div>
        </div>
      </div>



export default App;
