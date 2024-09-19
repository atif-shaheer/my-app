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
  <div className="col-md-6">
    <div className="card-box">
      <h4 className="card-title">New Deduction</h4>
      <form action="#">
        <div className="form-group row">
          <label className="col-md-3 col-form-label">User ID<span style={{color:"red"}}>*</span></label>
          <div className="col-md-9">
            <input type="text" className="form-control" placeholder='User ID' required />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-3 col-form-label">Amount<span style={{color:"red"}}>*</span></label>
          <div className="col-md-9">
            <input type="text" className="form-control" placeholder='Amount' required />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-3 col-form-label">Remarks<span style={{color:"red"}}>*</span></label>
          <div className="col-md-9">
            <input type="text" className="form-control" placeholder='Remarks' required />
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