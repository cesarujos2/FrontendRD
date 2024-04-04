import { Pagination } from "react-bootstrap";

function PaginationRD({ page, getPage, maxPage }: any) {
    const pageClick = (e: any) => {
        getPage(Number(e.target.textContent))
    }

    let items = []
    if (maxPage >= 1) {
        for (let number = 1; number <= maxPage; number++) {
            items.push(
                <Pagination.Item style={{display: "block", zIndex: "0"}} key={number} onClick={pageClick} active={number === page}>
                    {number}
                </Pagination.Item>,
            );
        }
    }
    return (
        <Pagination>{items}</Pagination>
    )
}

export default PaginationRD