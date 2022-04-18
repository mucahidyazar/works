import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { api } from '@config';
import { Status } from '@constants';

export const initialState = {
  status: Status.INIT,
  data: {},
  error: null
};

export const getArticles = createAsyncThunk('articles/get', async ({ page = 1, query = '' }) => {
  try {
    const { data } = await api.get(
      `/articlesearch.json?page=${page}&q=${query}&fq=document_type:("article")&fl=_id&fl=web_url&fl=abstract&fl=multimedia&fl=pub_date&api-key=${
        import.meta.env.VITE_NYT_API_KEY
      }`
    );
    console.log(data);

    return data.response;
  } catch (error) {
    toast.error(error.message);
  }
});

export const productDetail = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {},
  extraReducers: {
    [getArticles.pending]: (state) => {
      state.status = Status.LOADING;
    },
    [getArticles.fulfilled]: (state, action) => {
      console.log(action);
      state.status = Status.OK;
      state.data = action.payload;
      state.selected = action.payload[0];
    },
    [getArticles.rejected]: (state, action) => {
      state.status = Status.ERROR;
      state.error = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setNewSelected } = productDetail.actions;

export default productDetail.reducer;
