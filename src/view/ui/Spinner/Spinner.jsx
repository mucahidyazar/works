import React from 'react'

import * as S from './style'

export default function Spinner({children, ...rest}) {
  return (
    <S.Spinner>
      <S.SpinnerOne></S.SpinnerOne>
      <S.SpinnerTwo></S.SpinnerTwo>
    </S.Spinner>
  )
}
