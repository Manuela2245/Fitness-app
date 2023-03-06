export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4ca849d282mshdbe678ae33a328cp17259fjsn14b7212b9976',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const requestData= async(url,options)=>{

    const response=await fetch(url,options);
    const data=await response.json();

    return data;
};