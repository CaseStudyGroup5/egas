import axios from 'axios';

const DEALER_API_BASE_URL = "http://localhost:8080/dealers";

class DealerService {

    getConnections(){
        return axios.get(DEALER_API_BASE_URL+'/viewCustomerConnections');
    }
    getPendingConnections(){
        return axios.get(DEALER_API_BASE_URL+'/viewPendingConnections');
    }
    login(login)
    {
        return axios.post(DEALER_API_BASE_URL+'/login',login);
    }
    changeConnectionStatus(data)
    {
        return axios.patch(DEALER_API_BASE_URL+'/changeConnectionStatus',data);
    }
    getInfo(){
        return axios.get(DEALER_API_BASE_URL+'/viewDealer');
    }
    update(data)
    {
        console.log(data);
        return axios.patch(DEALER_API_BASE_URL+'/updateDealer',data);
    }
    dealerRegistration(dealer){
        return axios.post(`${DEALER_API_BASE_URL}/register`, dealer);

    }

    getGasBookings(){
        return axios.get(`${DEALER_API_BASE_URL}/getAllGasBookings`)
    }
    getPendingGasBookings(){
        return axios.get(`${DEALER_API_BASE_URL}`+'/getPendingGasBookings');
    }
    changeGasBookingStatus(status){
        return axios.patch(`${DEALER_API_BASE_URL}/changeGasBookingStatus`,status)
    }
    
    getAccessoriesBookings(){
        return axios.get(`${DEALER_API_BASE_URL}/getAllCustomerAccessories`)
    }
    getPendingAccessoriesBookings(){
        return axios.get(`${DEALER_API_BASE_URL}`+'/getPendingAccessories');
    }
    changeAccessoriesBookingStatus(status){
        return axios.patch(`${DEALER_API_BASE_URL}/changeAccessoriesBookingStatus`,status)
    }
    getAllDeliveryStaff(){
        return axios.get(`${DEALER_API_BASE_URL}/getAllDeliveryStaff`)
    }
    getPendingStaff(){
        return axios.get(`${DEALER_API_BASE_URL}`+'/getPendingStaff');
    }
    changeStaffStatus(status){
        return axios.patch(`${DEALER_API_BASE_URL}/changeStaff`,status)
    }


}

export default new DealerService()