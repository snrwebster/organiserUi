const api = "https://localhost:7111/SnrOrgApi/User/";
const apiUserReqHandler = async (endpoint, data, method) => {
  let options = 
  {
    method: method,
    headers: 
    {
      "Content-Type": "application/json",
    },
  };
  if (method === "GET") 
  {
    let apiRoute = api + endpoint + data;
    const response = await fetch(apiRoute, options);

    if (!response.ok) 
    {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } 
    else
    {
      const result = response.json();
      return result;
    }
  } 
  else if (method === "POST") 
  {
    try 
    {
      options.body = JSON.stringify(data);
      let apiRoute = api + endpoint;
      const response = await fetch(apiRoute, options);
      if (!response.ok) 
      {
        throw new Error(`HTTP error! Status: ${response}`);
      } 
      else
      {
        const result = response.json();
        return result;
      }
      
    } catch (e) 
    {
      console.log(e);
    }
  }
};
export default apiUserReqHandler;
