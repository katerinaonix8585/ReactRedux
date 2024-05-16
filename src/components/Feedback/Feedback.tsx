import Button from "components/Button/Button"
import { FeedbackContainer, FeedbackResultContainer, LikeDislikeContainer, Result,  } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { feedbackSliceActions, feedbackSliceSelectors } from "store/redux/feedback/feedbackSlice";

function Feedback() {
  
  const like = useAppSelector(feedbackSliceSelectors.like);
  const dislike = useAppSelector(feedbackSliceSelectors.dislike);

  const dispatch = useAppDispatch();

  const addLike = () => {   
    dispatch(feedbackSliceActions.addLike())
  }

  const addDislike = () => {   
    dispatch(feedbackSliceActions.addDislike())
  }

  const resetResults = () => {   
    dispatch(feedbackSliceActions.resetResults())
  }


 return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Button name="Like" onButtonClick={addLike} />
          <Result>{like}</Result>
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Button name="Dislike" onButtonClick={addDislike} />
          <Result>{dislike}</Result>
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="Reset Results" onButtonClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;
