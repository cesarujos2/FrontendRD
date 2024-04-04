import 'bootstrap/dist/css/bootstrap.min.css';

const TableRD = ({ data, ...props }: any) => {
    return (
        <table className='table' {...props}>
            <thead>
                <tr>
                    <th>Resolución Directoral</th>
                    <th>Estado Resolutivo</th>
                    <th>Director</th>
                    <th>Administrado</th>
                    <th>Fecha Activa</th>
                    <th>Tipo</th>
                    <th>Abrir</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).length > 0 ? data.entry_list.map((entry: any, index: any) => (
                    <tr key={index}>
                        <td style={{ fontSize: "0.875rem" }}>{entry.document_name}</td>
                        <td style={{ fontSize: "0.875rem" }}>{entry.subcategory_id}</td>
                        <td style={{ fontSize: "0.875rem" }}>{entry.director}</td>
                        <td style={{ fontSize: "0.875rem" }}>{entry.administrado}</td>
                        <td style={{ fontSize: "0.875rem" }}>{entry.active_date}</td>
                        <td style={{ fontSize: "0.875rem" }}>{entry.tipo_iga_c}</td>
                        <td style={{ fontSize: "0.875rem" }}>
                            <a href={entry.link_rd_c} target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined">
                                    file_open
                                </span>
                            </a>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan={8} style={{ textAlign: 'center' }}>No hay Datos</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default TableRD