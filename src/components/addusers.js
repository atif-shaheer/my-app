import React from 'react';


const deduct = () => {
  return (
    <>

      <div>
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              {/* <div className="col-sm-4 col-3">
        <h4 className="page-title">New Deposit</h4>
      </div> */}
              {/* <div className="col-sm-8 col-9 text-right m-b-20">
        <a
          href="add-patient.html"
          className="btn btn btn-primary btn-rounded float-right"
        >
          <i className="fa fa-plus" /> Add Patient
        </a>
      </div> */}
            </div>
            <div className="row">
  <div className="col-md-12">
    <div className="card-box">
      <h4 className="card-title">Add New User</h4>
      <form action="#">
        <div className="form-group row">
          {/* Column 1 */}
          <div className="col-md-4">
            <label className="col-form-label">Name<span style={{ color: "red" }}>*</span></label>
            <input type="text" className="form-control" placeholder="Name" required />
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <label className="col-form-label">Email<span style={{ color: "red" }}>*</span></label>
            <input type="email" className="form-control" placeholder="Email" required />
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <label className="col-form-label">Mobile<span style={{ color: "red" }}>*</span></label>
            <input type="text" className="form-control" placeholder="Mobile" required />
          </div>

          {/* Column 4 */}
          <div className="col-md-4">
            <label className="col-form-label">Password<span style={{ color: "red" }}>*</span></label>
            <input type="password" className="form-control" placeholder="Password" required />
          </div>
        </div>

        <div className="form-group row">
          {/* Column 1 */}
          <div className="col-md-4">
            <label className="col-form-label">OTP<span style={{ color: "red" }}>*</span></label>
            <input type="text" className="form-control" placeholder="OTP" required />
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <label className="col-form-label">Email Verified<span style={{ color: "red" }}>*</span></label>
            <select className="form-control" required>
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <label className="col-form-label">Mobile Verified<span style={{ color: "red" }}>*</span></label>
            <select className="form-control" required>
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* Column 4 */}
          <div className="col-md-4">
            <label className="col-form-label">Parent User ID<span style={{ color: "red" }}>*</span></label>
            <input type="text" className="form-control" placeholder="Parent User ID" required />
          </div>
        </div>

        <div className="form-group row">
          {/* Column 1 */}
          <div className="col-md-4">
            <label className="col-form-label">Referral Code<span style={{ color: "red" }}>*</span></label>
            <input type="text" className="form-control" placeholder="Referral Code" required />
          </div>
        </div>

        <div className="text-right">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

          </div>
        </div>

      </div>

    </>
  );
};

export default deduct;