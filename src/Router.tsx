import { Routes, Route } from "react-router-dom";
import CONSTANT from "./Constant";
import NotFound from "./container/error/NotFound";
import Question from "./container/quiz/Question";
import Results from "./container/quiz/Results";
import Start from "./container/quiz/Start";


export default function Router() {
  return (
    <Routes>
      <Route path={CONSTANT.url.home} element={<Start />} />
      <Route path={CONSTANT.url.start} element={<Start />} />
      <Route path={CONSTANT.url.question} element={<Question />} />
      <Route path={CONSTANT.url.result} element={<Results />} />
      <Route path={"/*"} element={<NotFound />} />
    </Routes>
  );
}
