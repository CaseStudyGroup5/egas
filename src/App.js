import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import HomeComponent from './component/HomeComponent';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import HeaderComponent from './component/HeaderComponent';
import AboutComponent from './AboutUs/Component/AboutComponent';
import DealerUpdate from './Dealer Module/Component/DealerUpdate';
import CustomerComponent from './CustomerModule/components/CustomerComponent';
import DealerComponent from './Dealer Module/Component/DealerComponent';
import menu1 from './Dealer Module/Component/menu1';
import ViewConnections from './Dealer Module/Component/ViewConnections';
import ChangeConnection from './Dealer Module/Component/changeConnection';
import DealerLogin from './Dealer Module/Component/DealerLogin';
import profileDetail from './Dealer Module/Component/profileDetail';
import StaffComponent from './Staff Module/components/StaffComponent';
import StaffRegistration from './Staff Module/components/StaffRegistration';
import ChangeGasBooking from './Dealer Module/Component/changeGasBooking';
import ViewStaff from './Dealer Module/Component/ViewStaff';
import ViewBookings from './Dealer Module/Component/ViewBookings';
import ChangeStaff from './Dealer Module/Component/ChangeStaff';
import ViewAccessories from './Dealer Module/Component/ViewAccessories';
import ChangeAccessories from './Dealer Module/Component/ChangeAccessories';
import DealerRegistration from './Dealer Module/Component/DealerRegistration'
import StaffLogin from './Staff Module/components/StaffLogin';
import StaffViewComponent from './Staff Module/components/StaffViewComponent';
import UpdateStaffComponent from './Staff Module/components/UpdateStaffComponent';
import ViewGasBooking from './Staff Module/components/ViewGasBooking';
import ViewAccessoriesBook from './Staff Module/components/ViewAccessoriesBook';
import UpdateGasBooking from './Staff Module/components/UpdateGasBooking';
import UpdateAccessoriesBooking from './Staff Module/components/UpdateAccessoriesBooking';
import CustomerLogin from './CustomerModule/components/CustomerLogin';
import CustomerRegister from './CustomerModule/components/CustomerRegister';
import CustomerBookingGas from './CustomerModule/components/CustomerBookingGas';
import CustomerNewConnection from './CustomerModule/components/CustomerNewConnection';
import CustomerBookingAccessories from './CustomerModule/components/CustomerBookingAccessories';
import CustomerUpdate from './CustomerModule/components/CustomerUpdate';
import AdminLogin from './Admin Module/components/AdminLogin';
import Password from './Admin Module/components/Password';
import ListDealerComponent from './Admin Module/components/ListDealerComponent';
import ListCustomerComponent from './Admin Module/components/ListCustomerComponent';
import ListDeliveryStaffComponent from './Admin Module/components/ListDeliveyStaffComponent';
import GasBookingListComponent from './Admin Module/components/GasBookingListComponent';
import AccessoriesBookingList from './Admin Module/components/AccessoriesBookingList';
import Adminmenu from './Admin Module/components/Adminmenu';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <Switch>
        <Route exact path="/" component={HomeComponent}/>
        <Route path="/about" component={AboutComponent}/>
        <Route path="/customer" component={CustomerComponent}/>
        <Route path="/dealer" component={DealerComponent}/>
        <Route path="/staff" component={StaffComponent}/>
        <Route path="/staffregister" component={StaffRegistration}/>
        <Route path="/menu1" component={menu1}/>
        <Route path="/viewconnections" component={ViewConnections}/>
        <Route path="/dealerlogin" component={DealerLogin}/>
        <Route path="/dealerregister" component={DealerRegistration}/>
        <Route path="/changeconnection" component={ChangeConnection}/>
        <Route path="/dealerupdate" component={DealerUpdate}/>
        <Route path="/profiledetail" component={profileDetail}/>
        <Route path="/viewbookings" component={ViewBookings}/>
        <Route path="/changegasbooking" component={ChangeGasBooking}/>
        <Route path="/viewstaff" component={ViewStaff}/>
        <Route path="/changestaff" component={ChangeStaff}/>
        <Route path="/viewaccessories" component={ViewAccessories}/>
        <Route path="/changeaccessories" component={ChangeAccessories}/>
        <Route path="/stafflogin" component={StaffLogin}/>
        <Route path="/staffview" component={StaffViewComponent}/>
        <Route path="/updateStaffMember" component={UpdateStaffComponent}/>
        <Route path="/custGas" component={ViewGasBooking}/>
        <Route path="/custAccessories" component={ViewAccessoriesBook}/>
        <Route path="/newGas" component={UpdateGasBooking}/>
        <Route path="/newAccessories" component={UpdateAccessoriesBooking}/>
        <Route path="/customerlogin" component={ CustomerLogin } />
        <Route path="/customerregister" component={ CustomerRegister }/>
        <Route path="/customergasbooking" component={ CustomerBookingGas } />
        <Route path="/customernewconnection" component = { CustomerNewConnection } />
        <Route path="/customeraccessoriesbooking" component = { CustomerBookingAccessories} />
        <Route path="/customerupdate" component={ CustomerUpdate}/>
        <Route path="/admin" component={AdminLogin}/>
         <Route path="/updatePassword" component={Password}/>
        <Route path="/dealers" component={ListDealerComponent}/>
        <Route path="/customers" component={ListCustomerComponent}/>
        <Route path="/deliverystaff" component={ListDeliveryStaffComponent}/>
        <Route path="/gasbooking" component={GasBookingListComponent}/>
        <Route path="/accessoriesbooking" component={AccessoriesBookingList}/>
        <Route path="/adminmenu" component={Adminmenu}/>

        </Switch>
      </Router>
    </div>
  );
}


export default App;
