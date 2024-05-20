import Button from "components/Button/Button";
import { ActivityCard, ActivityCardWrapper, ActivityRandomizerWrapper, ActivityText, ActivityTextWrapper, ActivityWrapper, ButtonContainer, SpinnerContainer } from "./styles";
import { activityRandomizerSliceActions, activityRandomizerSliceSelectors } from "store/redux/activityRandomizer/activityRandomizerSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import Spinner from "components/Spinner/Spinner";
import { useState } from "react";

function ActivityRandomizer () {

    const dispatch = useAppDispatch();
    const { data, status, error} = useAppSelector(activityRandomizerSliceSelectors.activity)
  
    const getActivity = () => {
      dispatch(activityRandomizerSliceActions.getActivity())
    }
  
    const activities = data.map((activity) => {

        const deleteActivity = () => {
            dispatch(activityRandomizerSliceActions.deleteActivity(activity.id))
          }

      return (
        <ActivityCardWrapper>
           <ActivityTextWrapper>
             <ActivityText key={activity.id}>{activity.activity}</ActivityText>
           </ActivityTextWrapper>    
           <ButtonContainer>
             <Button name="Delete Activity" onButtonClick={deleteActivity} /> 
           </ButtonContainer>

        </ActivityCardWrapper>            
      )
    })

    const deleteAllActivities = ()=>{
        dispatch(activityRandomizerSliceActions.deleteAllActivities())    
      }
    

    return (
        <ActivityRandomizerWrapper>
            <ActivityCard>
                <ButtonContainer>
                    <Button name="Get Activity" onButtonClick={getActivity} disabled={status === "loading"}></Button>
                </ButtonContainer>
                {status === "loading" ? ( 
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          <ActivityWrapper>{activities}</ActivityWrapper>
        )}                
            </ActivityCard> 
            <ButtonContainer>
                {activities.length > 0 && <Button onButtonClick={deleteAllActivities} name="Delete all activity" />}     
            </ButtonContainer>
                      
        </ActivityRandomizerWrapper>
    )
}

export default ActivityRandomizer;