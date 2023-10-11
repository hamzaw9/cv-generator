function GeneralInformation() {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" required />
        </div>

        <div className="form-group">
          <label htmlFor="secondName">Second Name</label>
          <input id="secondName" type="text" required />
        </div>

        <div className="form-group">
          <label htmlFor="jobRole">Job Role</label>
          <input id="jobRole" type="text" required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input id="address" type="text" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input id="contactNumber" type="number" required />
        </div>

        <div className="form-group">
          <label htmlFor="aboutMe">About Me</label>
          <textarea id="aboutMe" required />
        </div>
      </form>
    </div>
  );
}

export default GeneralInformation;
