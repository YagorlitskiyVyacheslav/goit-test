import React, { Fragment } from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  height: 40px;
  min-width: 30px;
  padding-bottom: 7px;
  :not(:disabled) {
    cursor: pointer;
  }
  :disabled {
    color: ${({ theme }) => theme.primary400};
  }
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  border: none;
  background-color: transparent;
  line-height: 20px;
  color: ${({ theme }) => theme.primary300};
  border-bottom: 3px solid
    ${({ $active, theme }) => ($active ? theme.success : theme.success + "00")};
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const PagesWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Pagination = ({
  lastPage,
  page,
  total,
  perPage,
  onPageChange,
}) => {
  if (perPage >= total) return <></>;

  const changePageHandler = (value, isNumberClick) =>
    onPageChange(isNumberClick ? value : page + value);

  const nextPageHandler = () => changePageHandler(+1);
  const prevPageHandler = () => changePageHandler(-1);

  const pagesArray = Array.apply(null, {
    length: lastPage ?? 0,
  })
    .map(Number.call, Number)
    .map((item) => item + 1);

  const pagesButton = ({ item }) => (
    <StyledButton
      $active={item === page}
      onClick={() => changePageHandler(item, true)}
    >
      {item}
    </StyledButton>
  );

  return (
    <Wrapper>
      <StyledButton disabled={page === 1} onClick={prevPageHandler}>
        Previous
      </StyledButton>
      <PagesWrapper>
        {pagesArray.length <= 3
          ? pagesArray.map((item) => (
              <Fragment key={item}>{pagesButton({ item })}</Fragment>
            ))
          : pagesArray.map((item) => {
              return (
                <Fragment key={item}>
                  {(() => {
                    if (
                      item === lastPage ||
                      item === 1 ||
                      item === page - 1 ||
                      item === page + 1 ||
                      item === page + 2 ||
                      item === page - 2 ||
                      item === page
                    )
                      return pagesButton({ item });
                    if (item === page - 3 || item === page + 3)
                      return <StyledButton disabled>...</StyledButton>;
                    return <></>;
                  })()}
                </Fragment>
              );
            })}
      </PagesWrapper>
      <StyledButton
        disabled={(lastPage && page + 1) > lastPage}
        onClick={nextPageHandler}
      >
        Next
      </StyledButton>
    </Wrapper>
  );
};
