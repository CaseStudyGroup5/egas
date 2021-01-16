import axios from 'axios';

const STAFF_API_BASE_URL = "http://localhost:8080/staffmembers";

class StaffMemberService {

    createStaffMember(staffmember) {
        return axios.post(STAFF_API_BASE_URL + '/register', staffmember);
    }
    updateStaffMember(staffmember) {
        return axios.patch(STAFF_API_BASE_URL + '/updateStaffMember', staffmember)
    }

    viewGasBooking(){
        return axios.get(STAFF_API_BASE_URL+'/getCustomerGasBooking');
    }
    viewAccessoriesBooking(){
        return axios.get(STAFF_API_BASE_URL+'/getCustomerAccessoriesBooking')
    }
    viewPendingGasDelivery(){
        return axios.get(STAFF_API_BASE_URL+'/viewPendingGasBooking')
    }
    viewPendingAccessoriesDelivery(){
        return axios.get(STAFF_API_BASE_URL+'/viewPendingAccessoriesBooking')
    }
    changeDeliveryStatus(data){
        return axios.patch(STAFF_API_BASE_URL+'/updateGasDeliveryStatus',data)
    }
    changeAccessoriesDeliveryStatus(data){
        return axios.patch(STAFF_API_BASE_URL+'/updateAccessoriesDeliveryStatus',data)
    }

}

export default new StaffMemberService()