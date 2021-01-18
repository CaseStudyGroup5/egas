import axios from 'axios'
 
const ADMIN_API_BASE_URL = "http://localhost:8080/admin"

class AdminService {
  login(login)
    {
        return  axios.post(ADMIN_API_BASE_URL+'/login',login);
        
    }
    getDealers() {
      return axios.get(ADMIN_API_BASE_URL+'/getDealers')
    }
      getCustomers() {
        return axios.get(ADMIN_API_BASE_URL+'/getCustomers')
          
    }
         getDeliveryStaff(){
    
            return axios.get(ADMIN_API_BASE_URL+'/getDeliveryStaff')
  
         }
      
         getCustomerAccessoriesBooking(){
    
          return axios.get(ADMIN_API_BASE_URL+'/getCustomerAccessoriesBooking')

       }
    
       getCustomerGasBooking(){
    
        return axios.get(ADMIN_API_BASE_URL+'/getCustomerGasBooking')

     }
  


  getDealerById(dealerId) {
      return axios.get(ADMIN_API_BASE_URL + '/' + dealerId)
  }
   
  viewDealers(){
    return axios.get(ADMIN_API_BASE_URL+'/getDealers')
}
updateDealerStatus(data){
    return axios.patch(ADMIN_API_BASE_URL+'/changeStatus',data)
}

}


export default new AdminService()
