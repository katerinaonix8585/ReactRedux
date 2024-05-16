export interface FeedbackProps {
    likeValue: number;
    dislikeValue: number;
    addLike?: () => void;
    addDislike?: () => void;
    resetResults?: () => void
  }