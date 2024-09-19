import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import SettingsJoining from './components/settingsjoining';
import SettingsLevel from './components/settingslevel';
import SettingsEpin from './components/settingsepin'
import SettingsWithdrawal from './components/settingswithdrawal'
import SettingsPin from './components/settingspin'
import ViewMember from './components/viewmember'
import BankDetails from './components/bankdetails'
import IncomeStatement from './components/incomestatement'
import PurchaseScodes from './components/purchasescodes'
import CommissionLevel from './components/commissionlevel'
import Deposit from './components/deposit'
import ViewDeposite from './components/viewdeposite'
import Deduct from './components/deduct'
import ViewDeduct from './components/viewdeduct'
import PaymentRequest from './components/paymentrequest'
import PWithdrawal from './components/pwithdrawal'
import AWithdrawal from './components/awithdrawal'
import GridView from './components/gridview'
import MatrixView from './components/matrixview'

 
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/settingsjoining" element={<SettingsJoining />} />
          <Route path="/settingslevel" element={<SettingsLevel />} />
          <Route path="/settingsepin" element={<SettingsEpin />} />
          <Route path="/settingswithdrawal" element={<SettingsWithdrawal />} />
          <Route path="/settingspin" element={<SettingsPin />} />
          <Route path="/viewmember" element={<ViewMember />} />
          <Route path="/bankdetails" element={<BankDetails />} />
          <Route path="/incomestatement" element={<IncomeStatement />} />
          <Route path="/purchasescodes" element={<PurchaseScodes />} />
          <Route path="/commissionlevel" element={<CommissionLevel />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/viewdeposite" element={<ViewDeposite />} />
          <Route path="/deduct" element={<Deduct />} />
          <Route path="/viewdeduct" element={<ViewDeduct />} />
          <Route path="/paymentrequest" element={<PaymentRequest />} />
          <Route path="/pwithdrawal" element={<PWithdrawal />} />
          <Route path="/awithdrawal" element={<AWithdrawal />} />
          <Route path="/gridview" element={<GridView />} />
          <Route path="/matrixview" element={<MatrixView />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
