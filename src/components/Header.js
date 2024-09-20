import React from 'react';

const Header = () => {
  return (
    <>
    <header>
    <div className="main-wrapper">
  <div className="header">
    <div className="header-left">
      <a href="/" className="logo">
        {/* <img src="assets/img/logo.png" width={35} height={35} alt="" />{" "} */}
        <span>Hi Admin..!</span>
      </a>
    </div>
    <a id="toggle_btn" href="javascript:void(0);">
      <i className="fa fa-bars" />
    </a>
    <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar">
      <i className="fa fa-bars" />
    </a>
    <ul className="nav user-menu float-right">
      {/* <li className="nav-item dropdown d-none d-sm-block">
        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
          <i className="fa fa-bell-o" />{" "}
          <span className="badge badge-pill bg-danger float-right">3</span>
        </a>
        <div className="dropdown-menu notifications">
          <div className="topnav-dropdown-header">
            <span>Notifications</span>
          </div>
          <div className="drop-scroll">
            <ul className="notification-list">
              <li className="notification-message">
                <a href="activities.html">
                  <div className="media">
                    <span className="avatar">
                      <img
                        alt="John Doe"
                        src="assets/img/user.jpg"
                        className="img-fluid"
                      />
                    </span>
                    <div className="media-body">
                      <p className="noti-details">
                        <span className="noti-title">John Doe</span> added new
                        task{" "}
                        <span className="noti-title">
                          Patient appointment booking
                        </span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">4 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="media">
                    <span className="avatar">V</span>
                    <div className="media-body">
                      <p className="noti-details">
                        <span className="noti-title">Tarah Shropshire</span>{" "}
                        changed the task name{" "}
                        <span className="noti-title">
                          Appointment booking with payment gateway
                        </span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">6 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="media">
                    <span className="avatar">L</span>
                    <div className="media-body">
                      <p className="noti-details">
                        <span className="noti-title">Misty Tison</span> added{" "}
                        <span className="noti-title">Domenic Houston</span> and{" "}
                        <span className="noti-title">Claire Mapes</span> to
                        project{" "}
                        <span className="noti-title">
                          Doctor available module
                        </span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">8 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="media">
                    <span className="avatar">G</span>
                    <div className="media-body">
                      <p className="noti-details">
                        <span className="noti-title">Rolland Webber</span>{" "}
                        completed task{" "}
                        <span className="noti-title">
                          Patient and Doctor video conferencing
                        </span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">12 mins ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="activities.html">
                  <div className="media">
                    <span className="avatar">V</span>
                    <div className="media-body">
                      <p className="noti-details">
                        <span className="noti-title">Bernardo Galaviz</span>{" "}
                        added new task{" "}
                        <span className="noti-title">Private chat module</span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">2 days ago</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <a href="activities.html">View all Notifications</a>
          </div>
        </div>
      </li>
      <li className="nav-item dropdown d-none d-sm-block">
        <a
          href="javascript:void(0);"
          id="open_msg_box"
          className="hasnotifications nav-link"
        >
          <i className="fa fa-comment-o" />{" "}
          <span className="badge badge-pill bg-danger float-right">8</span>
        </a>
      </li> */}
      <li className="nav-item dropdown has-arrow">
        <a
          href="#"
          className="dropdown-toggle nav-link user-link"
          data-toggle="dropdown"
        >
          <span className="user-img">
            <img
              className="rounded-circle"
              src="assets/img/p.png"
              width={24}
              alt="Admin"
            />
            <span className="status online" />
          </span>
          <span>Admin</span>
        </a>
        <div className="dropdown-menu">
          {/* <a className="dropdown-item" href="profile.html">
            My Profile
          </a>
          <a className="dropdown-item" href="edit-profile.html">
            Edit Profile
          </a>
          <a className="dropdown-item" href="settings.html">
            Settings
          </a> */}
          <a className="dropdown-item" href="login.html">
            Change Password
          </a>          
          <a className="dropdown-item" href="login.html">
            Logout
          </a>
        </div>
      </li>
    </ul>
    <div className="dropdown mobile-user-menu float-right">
      <a
        href="#"
        className="dropdown-toggle"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa fa-ellipsis-v" />
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        {/* <a className="dropdown-item" href="profile.html">
          My Profile
        </a>
        <a className="dropdown-item" href="edit-profile.html">
          Edit Profile
        </a>
        <a className="dropdown-item" href="settings.html">
          Settings
        </a> */}
        <a className="dropdown-item" href="login.html">
          Change Password
        </a>
        <a className="dropdown-item" href="login.html">
          Logout
        </a>
      </div>
    </div>
  </div>
  <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className="menu-title">Main</li>
          <li className="">
            <a href="/">
              <i className="fa fa-dashboard" /> <span>Dashboard</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-users" /> <span> Signup Members </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="/settingsjoining">Member Details</a>
              </li>
              <li>
                <a href="/settingslevel">Member Tree</a>
              </li>
              {/* <li>
                <a href="/settingsepin">Epin</a>
              </li>
              <li>
                <a href="/settingswithdrawal">Withdrawal</a>
              </li>
              <li>
                <a href="/settingspin">Epin Charge</a>
              </li> */}
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-money" /> <span> Money Received </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="/viewmember">Senders Details</a>
              </li>
              <li>
                <a href="/bankdetails">Bank Voucher</a>
              </li>
              <li>
                <a href="/incomestatement">Internal Members Transfer</a>
              </li>
              {/* <li>
                <a href="/purchasescodes">Purchase Epin</a>
              </li> */}
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-money" /> <span> Transections </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="/commissionlevel">Members Details</a>
              </li>
              <li>
                <a href="/commissionlevel">Individual details</a>
              </li>
              <li>
                <a href="/commissionlevel">Total Balance</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-edit" /> <span> Edit page </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="/deposit">About us</a>
              </li>
              <li>
                <a href="/viewdeposite">Contact Us</a>
              </li>
              <li>
                <a href="/viewdeposite">Home Page</a>
              </li>
              <li>
                <a href="/viewdeposite">Workshop</a>
              </li>
              <li>
                <a href="/viewdeposite">Our Mission</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-user" /> <span>Add users</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="/deduct">User’s right</a>
              </li>
              {/* <li>
                <a href="/viewdeduct">View Deduction</a>
              </li> */}
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-edit" /> <span>Edit Info Letter</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="/paymentrequest">Welcome members</a>
              </li>
              <li>
                <a href="/paymentrequest">Members Information</a>
              </li>
              <li>
                <a href="/paymentrequest">Terms & conditions</a>
              </li>
              <li>
                <a href="/paymentrequest">Payout Receive</a>
              </li>
              <li>
                <a href="/paymentrequest">Payment Receive</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-money" /> <span>Add Money</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="/pwithdrawal">Member Details</a>
              </li>
              {/* <li>
                <a href="/awithdrawal">Approved Withdrawal</a>
              </li> */}
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-users" /> <span>Support Massages</span>{" "}
              <span className="menu-arrow" />
            </a>
            {/* <ul style={{ display: "none" }}>
              <li>
                <a href="/gridview">Grid View</a>
              </li>
              <li>
                <a href="/matrixview">Matrix View</a>
              </li>
            </ul> */}
          </li>
          {/* <li>
            <a href="patients.html">
              <i className="fa fa-wheelchair" /> <span>Patients</span>
            </a>
          </li>
          <li>
            <a href="appointments.html">
              <i className="fa fa-calendar" /> <span>Appointments</span>
            </a>
          </li>
          <li>
            <a href="schedule.html">
              <i className="fa fa-calendar-check-o" />{" "}
              <span>Doctor Schedule</span>
            </a>
          </li>
          <li>
            <a href="departments.html">
              <i className="fa fa-hospital-o" /> <span>Departments</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-user" /> <span> Employees </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="employees.html">Employees List</a>
              </li>
              <li>
                <a href="leaves.html">Leaves</a>
              </li>
              <li>
                <a href="holidays.html">Holidays</a>
              </li>
              <li>
                <a href="attendance.html">Attendance</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-money" /> <span> Accounts </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="invoices.html">Invoices</a>
              </li>
              <li>
                <a href="payments.html">Payments</a>
              </li>
              <li>
                <a href="expenses.html">Expenses</a>
              </li>
              <li>
                <a href="taxes.html">Taxes</a>
              </li>
              <li>
                <a href="provident-fund.html">Provident Fund</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-book" /> <span> Payroll </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="salary.html"> Employee Salary </a>
              </li>
              <li>
                <a href="salary-view.html"> Payslip </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="chat.html">
              <i className="fa fa-comments" /> <span>Chat</span>{" "}
              <span className="badge badge-pill bg-primary float-right">5</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-video-camera camera" /> <span> Calls</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="voice-call.html">Voice Call</a>
              </li>
              <li>
                <a href="video-call.html">Video Call</a>
              </li>
              <li>
                <a href="incoming-call.html">Incoming Call</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-envelope" /> <span> Email</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="compose.html">Compose Mail</a>
              </li>
              <li>
                <a href="inbox.html">Inbox</a>
              </li>
              <li>
                <a href="mail-view.html">Mail View</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-commenting-o" /> <span> Blog</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="blog-details.html">Blog View</a>
              </li>
              <li>
                <a href="add-blog.html">Add Blog</a>
              </li>
              <li>
                <a href="edit-blog.html">Edit Blog</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="assets.html">
              <i className="fa fa-cube" /> <span>Assets</span>
            </a>
          </li>
          <li>
            <a href="activities.html">
              <i className="fa fa-bell-o" /> <span>Activities</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-flag-o" /> <span> Reports </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="expense-reports.html"> Expense Report </a>
              </li>
              <li>
                <a href="invoice-reports.html"> Invoice Report </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="settings.html">
              <i className="fa fa-cog" /> <span>Settings</span>
            </a>
          </li>
          <li className="menu-title">UI Elements</li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-laptop" /> <span> Components</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="uikit.html">UI Kit</a>
              </li>
              <li>
                <a href="typography.html">Typography</a>
              </li>
              <li>
                <a href="tabs.html">Tabs</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-edit" /> <span> Forms</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="form-basic-inputs.html">Basic Inputs</a>
              </li>
              <li>
                <a href="form-input-groups.html">Input Groups</a>
              </li>
              <li>
                <a href="form-horizontal.html">Horizontal Form</a>
              </li>
              <li>
                <a href="form-vertical.html">Vertical Form</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-table" /> <span> Tables</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="tables-basic.html">Basic Tables</a>
              </li>
              <li>
                <a href="tables-datatables.html">Data Table</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="calendar.html">
              <i className="fa fa-calendar" /> <span>Calendar</span>
            </a>
          </li>
          <li className="menu-title">Extras</li>
          <li className="submenu">
            <a href="#">
              <i className="fa fa-columns" /> <span>Pages</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="login.html"> Login </a>
              </li>
              <li>
                <a href="register.html"> Register </a>
              </li>
              <li>
                <a href="forgot-password.html"> Forgot Password </a>
              </li>
              <li>
                <a href="change-password2.html"> Change Password </a>
              </li>
              <li>
                <a href="lock-screen.html"> Lock Screen </a>
              </li>
              <li>
                <a href="profile.html"> Profile </a>
              </li>
              <li>
                <a href="gallery.html"> Gallery </a>
              </li>
              <li>
                <a href="error-404.html">404 Error </a>
              </li>
              <li>
                <a href="error-500.html">500 Error </a>
              </li>
              <li>
                <a href="blank-page.html"> Blank Page </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="javascript:void(0);">
              <i className="fa fa-share-alt" /> <span>Multi Level</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <span>Level 1</span> <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="javascript:void(0);">
                      <span>Level 2</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      {" "}
                      <span> Level 2</span> <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="javascript:void(0);">Level 3</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Level 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <span>Level 2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <span>Level 1</span>
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  </div>
</div>



    </header>
    </>
  );
};

export default Header;