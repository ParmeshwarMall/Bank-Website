import Combine from "./Combine"
import DetailForm from './DetailForm';
import Admdashboard from "./Admdashboard";
import Balance from "./Balance";
import Deposite from "./Deposite";
import Withdraw from "./Withdraw";
import MoneyTrans from "./MoneyTrans";
import DeleteAcc from "./DeleteAcc";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Transaction from "./Transaction";
import Userdashboard from "./Userdashboard";
import UserBalance from "./UserBalance";
import UserTransaction from "./UserTransaction";
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRoute2 from "./ProtectedRoute2";



function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Combine />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admdashboard" element={<Admdashboard />} />
          <Route path="/form" element={<DetailForm />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/deposite" element={<Deposite />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/transfer" element={<MoneyTrans />} />
          <Route path="/delete" element={<DeleteAcc />} />
          <Route path="/transaction" element={<Transaction/>}/>
        </Route>

        <Route element={<ProtectedRoute2 />}>
          <Route path="/userdashboard" element={<Userdashboard />} />
          <Route path="/userbalance" element={<UserBalance />} />
          <Route path="/usertransaction" element={<UserTransaction/>}/>
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )

}


export default App