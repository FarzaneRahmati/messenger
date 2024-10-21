import axios from "axios";


const client = axios.create({
    baseURL:'http://localhost:8000',
});

export async function fname(){
  const {data} = await client('/...');
  return data;
}





