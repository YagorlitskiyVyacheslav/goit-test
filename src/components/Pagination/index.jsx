import React, { Fragment } from "react";
import * as S from "./styled";

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
    <S.StyledButton
      $active={item === page}
      onClick={() => changePageHandler(item, true)}
    >
      {item}
    </S.StyledButton>
  );

  return (
    <S.Wrapper>
      <S.StyledButton disabled={page === 1} onClick={prevPageHandler}>
        Previous
      </S.StyledButton>
      <S.PagesWrapper>
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
                      return <S.StyledButton disabled>...</S.StyledButton>;
                    return <></>;
                  })()}
                </Fragment>
              );
            })}
      </S.PagesWrapper>
      <S.StyledButton
        disabled={(lastPage && page + 1) > lastPage}
        onClick={nextPageHandler}
      >
        Next
      </S.StyledButton>
    </S.Wrapper>
  );
};
