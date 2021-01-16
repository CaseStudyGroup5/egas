import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import HomeComponent from './component/HomeComponent';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import HeaderComponent from './component/HeaderComponent';
import AboutComponent from './component/AboutComponent';
import AdminComponent from './Admin Module/AdminComponent';
import CustomerComponent from './CustomerModule/CustomerComponent';
import DealerComponent from './Dealer Module/Component/DealerComponent';
import menu from './Dealer Module/Component/menu';
import ViewConnections from './Dealer Module/Component/ViewConnections';
import ChangeConnection from './Dealer Module/Component/changeConnection';
import DealerLogin from './Dealer Module/Component/DealerLogin';
import StaffComponent from './Staff Module/StaffComponent';
import StaffRegistration from './Staff Module/StaffRegistration';
import DealerRegistration from './Dealer Module/Component/DealerRegistration'
import StaffLogin from './Staff Module/StaffLogin';
import StaffViewComponent from './Staff Module/StaffViewComponent';
import UpdateStaffComponent from './Staff Module/UpdateStaffComponent';
import ViewGasBooking from './Staff Module/ViewGasBooking';
import ViewAccessoriesBook from './Staff Module/ViewAccessoriesBook';
import UpdateGasBooking from './Staff Module/UpdateGasBooking';
import UpdateAccessoriesBooking from './Staff Module/UpdateAccessoriesBooking';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <Switch>
        <Route exact path="/" component={HomeComponent}/>
        <Route path="/about" component={AboutComponent}/>
        <Route path="/admin" component={AdminComponent}/>
        <Route path="/customer" component={CustomerComponent}/>
        <Route path="/dealer" component={DealerComponent}/>
        <Route path="/staff" component={StaffComponent}/>
        <Route path="/staffregister" component={StaffRegistration}/>
        <Route path="/menu" component={menu}/>
        <Route path="/viewconnections" component={ViewConnections}/>
        <Route path="/dealerlogin" component={DealerLogin}/>
        <Route path="/dealerregister" component={DealerRegistration}/>
        <Route path="/changeconnection" component={ChangeConnection}/>
        <Route path="/stafflogin" component={StaffLogin}/>
        <Route path="/staffview" component={StaffViewComponent}/>
        <Route path="/updateStaffMember" component={UpdateStaffComponent}/>
        <Route path="/custGas" component={ViewGasBooking}/>
        <Route path="/custAccessories" component={ViewAccessoriesBook}/>
        <Route path="/newGas" component={UpdateGasBooking}/>
        <Route path="/newAccessories" component={UpdateAccessoriesBooking}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
