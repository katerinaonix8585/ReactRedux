import { create } from "domain";
import { createAppSlice } from "store/createAppSlice";
import { ActivityInfo, ActivityRandomizerSliceState } from "./types";
import { v4 } from "uuid";
import { PayloadAction } from "@reduxjs/toolkit";

const activityRandomizerInitialState: ActivityRandomizerSliceState = {
    data: [],
    status: 'default',
    error: undefined, 
    isLoading: false 
}  

export const activityRandomizerSlice = createAppSlice({
    name: "AVTIVITYRANDOM",
    initialState: activityRandomizerInitialState,
    reducers: create => ({
        deleteAllActivities: create.reducer((()=>activityRandomizerInitialState)),
        deleteActivity: create.reducer((state: ActivityRandomizerSliceState, action: PayloadAction<string>)=>{
            state.data = state.data.filter((activity)=> activity.id !== action.payload )}),
        getActivity: create.asyncThunk(async (arg, thunkApi) => {
           const response = await fetch('https://www.boredapi.com/api/activity')
           const result = await response.json()
           console.log(result)
           
           if (!response.ok) {
            thunkApi.rejectWithValue(result)
          } else {            
            return result
          }
        }, {
           pending: (state: ActivityRandomizerSliceState) => {
            console.log('pending')  
            state.isLoading = true          
            state.status = 'loading'         
            state.error = undefined
           }, 
           fulfilled: (state: ActivityRandomizerSliceState, action: any) => {
            console.log('fulfilled')
            console.log(action)
            state.isLoading = false
            state.status = 'success'
            state.data = [...state.data, {  
              id: v4(),            
              activity: action.payload?.activity,
            }]
          },
          rejected: (state: ActivityRandomizerSliceState, action: any) => {
            state.status = 'error'
            state.isLoading = false
            state.error = action.payload
            alert("Network error");
          }
         }),        
        }),
        selectors: {
            activity: (state) => state
        }
    })  
    
    export const activityRandomizerSliceActions = activityRandomizerSlice.actions;
    export const activityRandomizerSliceSelectors = activityRandomizerSlice.selectors;