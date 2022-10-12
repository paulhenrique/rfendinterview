import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { useState } from "react";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";
import QuestionItem from "./QuestionItem";
// função que transforma o valor da pontuação em um valor percentual
const getPercent = (score, total) => {
  return Math.round((score / total) * 100);
};

const centeredFlexStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const QuizCard = ({ quiz }) => {
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <Paper
      sx={{
        width: "100%",
        p: "32px",
      }}
    >
      <Box sx={centeredFlexStyle}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <PlaylistAddCheckIcon />
            <Typography variant="h6">{quiz.quiz.title}</Typography>
          </Box>
          <Box>
            <Typography variant="caption">
              Pontuação: {quiz.score} |{" "}
            </Typography>
            <Typography variant="caption">
              Perguntas: {quiz.quiz.questions.length} |{" "}
            </Typography>
            <Typography variant="caption">
              Completo: {quiz.complete ? "Sim" : "Não"}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...centeredFlexStyle,
            justifyContent: "center",
          }}
        >
          <CircularProgress
            variant="determinate"
            size={80}
            sx={{ color: green["600"] }}
            value={getPercent(quiz.score, quiz.quiz.questions.length)}
          />
          <Typography sx={{ position: "absolute" }}>
            {`${quiz.score}/${quiz.quiz.questions.length}`}
          </Typography>
        </Box>
      </Box>
      <Box sx={centeredFlexStyle}>
        <Tooltip title="Voltar a responder o quiz">
          <Button
            component={Link}
            to={`/questao/${quiz.quiz.questions[0].idQuestion}`}
            sx={{ mt: 2 }}
            size="small"
            startIcon={<PlayArrowIcon />}
          >
            Retomar quiz
          </Button>
        </Tooltip>
        <Tooltip title="Mostra as respostas certas, erradas e não respondidas">
          <Button
            onClick={() => setOpenInfo((current) => !current)}
            sx={{ mt: 2 }}
            size="small"
            endIcon={
              <ExpandMoreIcon
                sx={{ transform: openInfo ? "rotate(180deg)" : "" }}
              />
            }
          >
            {openInfo ? "Ocultar" : "Ver mais"}
          </Button>
        </Tooltip>
      </Box>
      <Collapse in={openInfo}>
        {quiz.questionsCorrectAndWrong.map((question, index) => (
          <QuestionItem index={index} key={index} question={question} />
        ))}
      </Collapse>
    </Paper>
  );
};

export default QuizCard;
