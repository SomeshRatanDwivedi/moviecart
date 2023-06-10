import { API_ROOT } from "../constants";
import axios from 'axios'

export const getAllMovies=async()=>{
    try{
       
        const {data}=await axios.get(`${API_ROOT}/movies/all-movies`);
        return data;

    }catch(error){
     
        return error
    }
}

export const addNewMovie = async (movieData) => {
    try {

        const { data } = await axios.post(`${API_ROOT}/movies/new-movie`, movieData, {'Content-Type':'application/x-www-form-urlencoded'});
        return data;

    } catch (error) {

        return error
    }
}