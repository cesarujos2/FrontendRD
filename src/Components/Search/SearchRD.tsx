import './StyleSheet/SearchRD.css';
import FilterRD from './Filter/filterRD';
import { useEffect, useState } from 'react';
import fetchApi from './fetchApi';
import TableRD from './Table/TableRD';

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
    const [data, setData] = useState({});

    useEffect(() => {
        if (Object.keys(query).length) {
            fetchApi(query).then(resp => {
                setData(resp);
            }).catch(error => console.error('Error al obtener los datos:', error));
        }
    }, [JSON.stringify(query)]);

    return (
        <div className='search-container' style={{ minHeight: '300px' }}>
            <div className='filter-search section-search-container'>
                <FilterRD getQueryRD={setQuery} />
            </div>
            <div className='table-search section-search-container'>
                {Object.keys(data).length > 0 ? <TableRD data={data} /> : "No hay Datos"}
            </div>
        </div>
    );
}

export default SearchRD;
