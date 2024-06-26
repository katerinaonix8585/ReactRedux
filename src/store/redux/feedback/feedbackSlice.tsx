
import { createAppSlice } from "store/createAppSlice";
import { FeedbackStateSlice } from "./types";

const feedbackInitialState: FeedbackStateSlice = {
    like: 0, 
    dislike: 0
}


export const feedbackSlice = createAppSlice({
name: 'FEEDBACK',  
initialState: feedbackInitialState, 
reducers: create => ({
    addLike: create.reducer((state: FeedbackStateSlice)=>{state.like = state.like + 1}),
    addDislike: create.reducer((state: FeedbackStateSlice)=>{state.dislike = state.dislike + 1}), 
    // resetResults: create.reducer((state: FeedbackStateSlice)=>{state.like = 0, state.dislike = 0}),    
    resetResults: create.reducer(()=> feedbackInitialState),  
   }),
   selectors: {
    like: (state: FeedbackStateSlice) => state.like,
    dislike: (state: FeedbackStateSlice) => state.dislike
   }     
})

export const feedbackSliceActions = feedbackSlice.actions;
export const feedbackSliceSelectors = feedbackSlice.selectors;