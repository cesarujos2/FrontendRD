import 'bootstrap/dist/css/bootstrap.min.css';

const TableRD = ({ data }: any) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Resolución Directoral</th>
                    <th>Estado Resolutivo</th>
                    <th>Director</th>
                    <th>Administrado</th>
                    <th>Fecha Activa</th>
                    <th>Tipo</th>
                    <th>Enlace</th>
                </tr>
            </thead>
            <tbody>
                {data.entry_list.map((entry: any, index: any) => (
                    <tr key={index}>
                        <td>{entry.document_name}</td>
                        <td>{entry.subcategory_id}</td>
                        <td>{entry.director}</td>
                        <td>{entry.administrado}</td>
                        <td>{entry.active_date}</td>
                        <td>{entry.tipo_iga_c}</td>
                        <td><a href={entry.link_rd_c} target="_blank" rel="noopener noreferrer">Enlace</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableRD