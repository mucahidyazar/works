import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { api } from '@config';
import { Status } from '@constants';

const initialState = {
  status: Status.INIT,
  data: {},
  selected: null,
  error: null
};

export const getArticles = createAsyncThunk('articles/get', async ({ page = 1, query = '' }) => {
  try {
    const { data } = await api.get(
      `/articlesearch.json?page=${page}&q=${query}&fq=document_type:("article")&fl=_id&fl=web_url&fl=abstract&fl=multimedia&fl=pub_date&api-key=${
        import.meta.env.VITE_NYT_API_KEY
      }`
    );

    return data.response;
  } catch (error) {
    toast.error(error.message);
  }
});

export const productDetail = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    setNewSelected: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.selected = action.payload;
    }
  },
  extraReducers: {
    [getArticles.pending]: (state) => {
      state.status = Status.LOADING;
    },
    [getArticles.fulfilled]: (state, action) => {
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
