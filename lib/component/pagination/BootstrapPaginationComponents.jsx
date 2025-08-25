import { Pagination } from "react-bootstrap";

export const BootstrapPaginationContainer = ({ children, ...props }) => <Pagination {...props}>{children}</Pagination>;

export const BootstrapPaginationEllipsis = Pagination.Ellipsis;
export const BootstrapPaginationItem = Pagination.Item;
export const BootstrapPaginationFirst = Pagination.First;
export const BootstrapPaginationLast = Pagination.Last;
export const BootstrapPaginationNext = Pagination.Next;
export const BootstrapPaginationPrev = Pagination.Prev;

export const bootstrapPaginationPlugin = {
    Container: BootstrapPaginationContainer,
    Ellipsis: BootstrapPaginationEllipsis,
    First: BootstrapPaginationFirst,
    Item: BootstrapPaginationItem,
    Last: BootstrapPaginationLast,
    Next: BootstrapPaginationNext,
    Prev: BootstrapPaginationPrev,
};
