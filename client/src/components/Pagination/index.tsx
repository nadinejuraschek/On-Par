import { Button } from "components";
import { useMemo } from "react";
import { Options, Page, StyledPagination } from "./styled";
import { IPagination } from "./types";

export const Pagination = ({
  className = "",
  handlePageChange,
  limit,
  page,
  totalCount,
}: IPagination): JSX.Element => {
  const renderPageOptions = useMemo(() => {
    const optionsCount = (totalCount < limit) ? 1 : Math.ceil(totalCount / limit);
    return Array.from(Array(optionsCount + 1).keys()).slice(1).map((num) => (
      <Page
        active={page === num}
        handleClick={() => handlePageChange(num)}
        key={num}
        round
        variant="tertiary"
      >
        {num}
      </Page>
    ));
  }, [
    handlePageChange,
    limit,
    page,
    totalCount,
  ]);

  return (
    <StyledPagination className={className}>
      <Button
        disabled={page === 1}
        handleClick={() => handlePageChange(page--)}
        square
        variant="tertiary"
      >
        <i className="chevron left icon"></i>
      </Button>
      <Options>{renderPageOptions}</Options>
      <Button
        disabled={page === (totalCount < limit ? 1 : totalCount / limit)}
        handleClick={() => handlePageChange(page++)}
        square
        variant="tertiary"
      >
        <i className="chevron right icon"></i>
      </Button>
    </StyledPagination>
  );
}