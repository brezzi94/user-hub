import {Pagination} from "react-bootstrap";
import "./PaginationCustom.css";
import type {User} from "../../../features/users/types/user.ts";

interface PaginationProps {
    currentPage: number;
    handlePageChange: (page: number) => void;
    itemsPerPage: number;
    elements: User[]
}

export default function PaginationCustom({currentPage, handlePageChange, itemsPerPage, elements}: PaginationProps) {
    return (
        <nav
            className="pagination-wrapper d-flex justify-content-center mt-3"
        >
            <Pagination>
                <Pagination.First
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(1)}
                />
                <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                />

                {Array.from({
                    length: Math.ceil(elements.length / itemsPerPage),
                }).map((_, i) => (
                    <Pagination.Item
                        key={i + 1}
                        active={i + 1 === currentPage}
                        onClick={() => handlePageChange(i + 1)}
                    >
                        {i + 1}
                    </Pagination.Item>
                ))}

                <Pagination.Next
                    disabled={currentPage === Math.ceil(elements.length / itemsPerPage)}
                    onClick={() => handlePageChange(currentPage + 1)}
                />
                <Pagination.Last
                    disabled={currentPage === Math.ceil(elements.length / itemsPerPage)}
                    onClick={() =>
                        handlePageChange(Math.ceil(elements.length / itemsPerPage))
                    }
                />
            </Pagination>
        </nav>
    )
}
