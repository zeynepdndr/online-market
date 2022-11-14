import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  items: [],
  loading: false,
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  //This field lets the slice handle actions generating by createAsyncThunk
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchTournamentsFromAPI.pending, (state: any) => {
  //       state.loading = true;
  //     });
  //     builder.addCase(
  //       fetchTournamentsFromAPI.fulfilled,
  //       (state: any, action: AnyAction) => {
  //         state.loading = false;
  //         state.items = action.payload;
  //       }
  //     );
  //     builder.addCase(fetchTournamentsFromAPI.rejected, (state: any) => {
  //       state.loading = false;
  //       state.error = true;
  //     });
  //     builder.addCase(
  //       addTournamentWithAPI.fulfilled,
  //       (state: any, action: AnyAction) => {
  //         state.items.push(action.payload);
  //       }
  //     );
  //     builder.addCase(
  //       deleteTournamentWithAPI.fulfilled,
  //       (state: any, action: AnyAction) => {
  //         const newItems = state.items.filter(
  //           (item: ITournamentItem) => item.id !== action.payload
  //         );
  //         state.items = newItems;
  //       }
  //     );
  //     builder.addCase(
  //       editTournamentWithAPI.fulfilled,
  //       (state: any, action: AnyAction) => {
  //         const updatedTournament = state.items.find(
  //           (item: ITournamentItem) => item.id === action.payload.id
  //         );

  //         if (updatedTournament) {
  //           state.items[action.payload.id] = action.payload;
  //         }
  //       }
  //     );
  //   },
});

export const productsActions = productsSlice.actions;
