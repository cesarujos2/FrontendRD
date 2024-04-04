const fetchApi = async (body: {}, page: number) => {
    let headersList = {
        "Referer": "https://tu-frontend.com",
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify(body);

    let response = await fetch(`https://ccql8lh3-3001.use.devtunnels.ms/rd/api?max_results=0&page=${page}`, {
        method: "POST",
        body: bodyContent,
        headers: headersList
    });
    if(response.status == 200){
        let data = await response.json();
        return data
    } else{
        throw new Error("Estado: " + response.status)
    };
    }

export default fetchApi