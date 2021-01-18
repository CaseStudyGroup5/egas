import axios from 'axios';
 
const CUSTOMER_API_BASE_URL = "http://localhost:8080/customers";

class CustomerService {

    customerRegister(customer){
        return axios.post(CUSTOMER_API_BASE_URL+'/register', customer);

    }

    login(login)
    {
        return axios.post(CUSTOMER_API_BASE_URL+'/login',login);
    }

    customerGasBooking(customer){
        return axios.post(CUSTOMER_API_BASE_URL+'/gasBooking', customer);
    }

    updateCustomer(customer)
    {        
        return axios.patch(`${CUSTOMER_API_BASE_URL}/updateCustomer`, customer);
    }

    customerNewConnection(customer){
        return axios.post(CUSTOMER_API_BASE_URL+'/newConnection', customer);
    }

    customerAccessoriesBooking(customer){
        return axios.post(CUSTOMER_API_BASE_URL+'/accessoriesBooking', customer);
    }

    getCustomerName(pancardnumber){
        return axios.get(CUSTOMER_API_BASE_URL+'/getCustomerName',pancardnumber);
    }

}

export default new CustomerService()