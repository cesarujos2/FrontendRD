const fetchApi = async (body: {}) => {
    let headersList = {
        "Referer": "https://tu-frontend.com",
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify(body);

    let response = await fetch("http://localhost:3001/rd/api?max_results=0&page=0", {
        method: "POST",
        body: bodyContent,
        headers: headersList
    });

    let data = await response.json();
    return data
};

export default fetchApi