import { useSelector } from "react-redux";
import { getQuizScore } from "@/db/services";
import EmptyState from "@/pages/Score/components/EmptyState";

const formatToPercent = (value) => `${(value * 100).toFixed(2)}%`;

export const useScore = () => {
  const { realizedQuizes } = useSelector((state) => state.user);
  if (!realizedQuizes.length) {
    return <EmptyState />;
  }

  const quizesWithScore = realizedQuizes.map((q) => getQuizScore(q));
  const passedQuestions = quizesWithScore.reduce(
    (acc, curr) => acc + curr?.quiz?.questions?.length,
    0
  );
  const correctAnswers = quizesWithScore.reduce(
    (acc, curr) => acc + curr?.correctAnswers?.length,
    0
  );

  const totalScore = quizesWithScore.reduce(
    (acc, curr) => acc + curr.score / curr?.quiz?.questions?.length,
    0
  );
  const countRealizedQuizes = realizedQuizes?.length;
  const countHitsInPercent = formatToPercent(totalScore / countRealizedQuizes);
  console.log({
    quizesWithScore,
    totalScore,
    countRealizedQuizes,
    countHitsInPercent,
    passedQuestions,
    correctAnswers,
  });
  return {
    totalScore,
    quizesWithScore,
    countRealizedQuizes,
    countHitsInPercent,
    passedQuestions,
    correctAnswers,
  };
};
