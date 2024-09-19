import React from 'react';


const settingsjoining = () => {
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
        <h4 className="page-title">Settings Joining</h4>
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
          <table id="t" className="table table-border table-striped custom-table datatable mb-0">
            <thead>
              <tr style={{backgroundColor: "#009efb"}}>
                <th>SI_No</th>
                <th>Joining</th>
                <th>No_Of_Direct</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  No Data Here
                  {/* <img
                    width={28}
                    height={28}
                    src="assets/img/user.jpg"
                    className="rounded-circle m-r-5"
                    alt=""
                  />{" "}
                  Jennifer Robinson */}
                </td>
                {/* <td>35</td>
                <td>1545 Dorsey Ln NE, Leland, NC, 28451</td>
                <td>(207) 808 8863</td>
                <td>jenniferrobinson@example.com</td>
                <td className="text-right">
                  <div className="dropdown dropdown-action">
                    <a
                      href="#"
                      className="action-icon dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="edit-patient.html">
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#delete_patient"
                      >
                        <i className="fa fa-trash-o m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                </td> */}
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

export default settingsjoining;