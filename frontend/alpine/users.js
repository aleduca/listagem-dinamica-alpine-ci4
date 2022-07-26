import http from '../services/http';

export default function getUsers(){
  return {
    users:[],
    async get(){
      try {
        const {data} = await http.get('/users');
        this.users = data;
      } catch (error) {
        console.log(error);
      }  
    }
  };
}