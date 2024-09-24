import React from 'react';


const userrpt = () => {
    // useEffect(() => {
    //   $('#t').DataTable();
    // }, []);
    return (
        <>

            <div>
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Users Report</h4>
                            </div>
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
                                <div className="table-responsive">
                                    <table id="t" className="table table-bordered table-striped custom-table datatable mb-0">
                                        <thead>
                                            <tr style={{ backgroundColor: "#009efb" }}>
                                                <th>User ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Password</th>
                                                <th>OTP</th>
                                                <th>Email Verified</th>
                                                <th>Mobile Verified</th>
                                                <th>Parent User ID</th>
                                                <th>Referral Code</th>
                                                <th>Status</th>
                                                <th>Is Admin</th>
                                                <th>Created At</th>
                                                <th>Updated At</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Sample data row, replace or loop through your data here */}
                                            <tr>
                                                <td>No Data Here</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default userrpt;