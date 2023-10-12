import { useState } from 'react';
import GeneralInfoDisplay from './GeneralInfoDisplay';

function GeneralInformation() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [selectPicture, setSelectPicture] = useState(null);

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === 'profilePicture') {
      const selectedFile = files[0];
      setSelectPicture(selectedFile);
    } else if (name === 'firstName') setFirstName(value);
    else if (name === 'lastName') setLastName(value);
    else if (name === 'jobRole') setJobRole(value);
    else if (name === 'address') setAddress(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'contactNumber') setContactNumber(value);
    else if (name === 'aboutMe') setAboutMe(value);

    const selectedFile = event.target.files[0];
    setSelectPicture(selectedFile);
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="secondName"
            type="text"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobRole">Job Role</label>
          <input
            id="jobRole"
            name="jobRole"
            type="text"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="number"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="aboutMe">About Me</label>
          <textarea
            id="aboutMe"
            name="aboutMe"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="profilePicture">Upload Picture</label>
          <input
            id="profilePicture"
            name="profilePicture"
            onChange={handleChange}
            type="file"
            accept="image/*"
            required
          />
        </div>
      </form>

      <GeneralInfoDisplay
        firstName={firstName}
        lastName={lastName}
        jobRole={jobRole}
        address={address}
        email={email}
        contactNumber={contactNumber}
        aboutMe={aboutMe}
        selectPicture={selectPicture}
      />
    </div>
  );
}

export default GeneralInformation;
