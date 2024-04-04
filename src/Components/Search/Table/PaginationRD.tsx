import { Pagination } from "@mui/material";


function PaginationRD({ page, getPage, maxPage }: any) {
    const pageClick = (e: any) => {
        getPage(Number(e.target.textContent))
    }

    let items = []
    if (maxPage >= 1) {
        for (let number = 1; number <= maxPage; number++) {
            items.push(
                <Pagination.Item key={number}  active={number === page}>
                    {number}
                </Pagination.Item>,
            );
        }
    }
    return (
        <div style={{display: "flex", justifyContent: "center"}} ><Pagination onClick={pageClick} count={maxPage} shape="rounded" page={page} /></div>
    )
}

export default PaginationRD