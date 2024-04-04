const fetchApi = async (body: {}, page: number) => {
    let headersList = {
        "Referer": "https://tu-frontend.com",
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify(body);

    let response = await fetch(`http://localhost:3001/rd/api?max_results=0&page=${page}`, {
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