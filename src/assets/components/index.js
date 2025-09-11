const getApiData = async () => {
    let apiData = await fetch ('https://dummyjson.com/products' , {
            method : "GET"
        })
        
    return await apiData.json()

}

export default getApiData;