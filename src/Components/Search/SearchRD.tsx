import './StyleSheet/SearchRD.css';
import FilterRD from './Filter/filterRD';
import { useEffect, useState } from 'react';
import fetchApi from './fetchApi';
import TableRD from './Table/TableRD';
import PaginationRD from './Table/PaginationRD';

function SearchRD() {
    const [query, setQuery] = useState(
        {
            document_name: "",
            subcategory_id: "",
            administrado: "",
            active_date: {
                active_date_inicial: "",
                active_date_final: ""
            }
        }
    );
    const [data, setData] = useState({
        "result_count": 0,
        "total_count": "0",
        "next_offset": 0,
        "entry_list": []
    });
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [maxPage, setMaxPage] = useState(0)

    
    useEffect(() => {
        if (Object.keys(query).length) {
            setIsLoading(true); // Activa la ventana de carga
            fetchApi(query, page - 1).then(resp => {
                setData(resp);
                setIsLoading(false); // Desactiva la ventana de carga una vez que se reciben los datos
                setMaxPage(Math.ceil(Number(resp.total_count) / 15))
            }).catch(error => {
                console.error('Error al obtener los datos:', error);
                setIsLoading(false); // Desactiva la ventana de carga si hay un error
            });
        }
    }, [JSON.stringify(query), page]);
    return (
        <div className='search-container' style={{ minHeight: '300px' }}>
            <div className='filter-search section-search-container'>
                <FilterRD getQueryRD={setQuery} setPage={setPage} />
            </div>
            <div className='table-search section-search-container'>
                <PaginationRD page={page} getPage={setPage} maxPage={maxPage}></PaginationRD>
                <TableRD data={data} isLoading={isLoading} />
            </div>
        </div>
    );
}

export default SearchRD;
