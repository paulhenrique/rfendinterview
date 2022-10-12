import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSelectedQuizByQuestionId,
  getSelectedQuestion,
} from "@/db/services";
import { setQuiz } from "@/store/features/quiz";
import { registerQuizAnswer } from "../../../store/features/user";

const useQuestionStoreHandler = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentQuestion, id: idQuiz } = useSelector((state) => state.quiz);

  const setQuizBasedOnQuestionId = () => {
    const selectedQuiz = getSelectedQuizByQuestionId(id);
    const [currentQuestion, currentQuestionIndex] = getSelectedQuestion(
      selectedQuiz,
      id
    );
    dispatch(
      setQuiz({ ...selectedQuiz, currentQuestionIndex, currentQuestion })
    );
  };

  useEffect(() => {
    setQuizBasedOnQuestionId();
  }, [id]);

  const handleUpdateQuestionAnswer = (answer) => {
    console.log(answer, currentQuestion);
    dispatch(
      registerQuizAnswer({
        idQuiz,
        idQuestion: currentQuestion.idQuestion,
        answer,
      })
    );
  };

  return {
    handleUpdateQuestionAnswer,
  };
};

export default useQuestionStoreHandler;
