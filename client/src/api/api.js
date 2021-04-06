import axios from 'axios';
export const getPosts = () => {
    return fetch('http://localhost:8080/getlist')
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => Promise.reject(error));
  };
  

 

  export const addPost = (data) => {
    return axios.post('http://localhost:8080/createlist', data)
    .then((res) => {
      console.log("RESPONSE ==== : ", res);
    })
    .catch((err) => {
      console.log("ERROR: ====", err);
    })
  };

  
  export const updateList = (id,data) => {
    return axios.put(`http://localhost:8080/updatelist/${id}`, data)
    .then((res) => {
      console.log("RESPONSE ==== : ", res);
    })
    .catch((err) => {
      console.log("ERROR: ====", err);
    })
  };

  
  

  export const deleteTodoList = async(id) => {
    return await axios.delete(`http://localhost:8080/deletelist/${id}`)
    .then((res) => {
      console.log("RESPONSE ==== : ", res);
    })
    .catch((err) => {
      console.log("ERROR: ====", err);
    })
  };



  export const addTodo = async(id,data) => {
    let result
    await axios.post(`http://localhost:8080/createtodo/${id}`, data)
    .then((res) => {
      result=res
      console.log("RESPONSE ==== : ", res);
    })
    .catch((err) => {
      console.log("ERROR: ====", err);
    })
    return result;
  };


  // export const getTodo = (id) => {
  //   // console.log(`id`,id);
  //    let data = fetch(`http://localhost:8080/gettodo/${id}`)
     
  //     .then((response) => response.json())
  //     .then((json) => json)
  //     .catch((error) => Promise.reject(error));
  //     console.log(`data`,data);
  //     return data;
  // };

  
  export const getTodo = async(idtodo) => {
    let result
   await axios.get(`http://localhost:8080/gettodo/${idtodo}`)
    .then((res) => {
       result=res
      console.log("RESPONSE ==== : ", res);
    })
    .catch((err) => {
      console.log("ERROR: ====", err);
    });
    // console.log(`result`,result);
    return result;
  };


  export const updatetodo = (id,data) => {
    return axios.put(`http://localhost:8080/updatetodo/${id}`, data)
    .then((res) => {
      console.log("RESPONSE ==== : ", res);
    })
    .catch((err) => {
      console.log("ERROR: ====", err);
    })
  };


  export const deleteTodo = async(id) => {
    return await axios.delete(`http://localhost:8080/deletetodo/${id}`)
    .then((res) => {
      console.log("RESPONSE ==== : ", res);
    })
    .catch((err) => {
      console.log("ERROR: ====", err);
    })
  };
