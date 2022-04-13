import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {Button, Spinner} from '@ui'
import {Theme} from '@constants'
import {fetchData} from '@store/product-detail/slice'
import {setTheme} from '@store/main/slice'

import * as S from './style'

export default function FullPageLoading() {
  return (
    <S.Page>
      <Spinner />
    </S.Page>
  )
}
