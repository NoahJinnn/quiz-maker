import { getQuiz } from '@apis/quiz';
import { LayoutPlayQuiz } from '@layouts/LayoutPlayQuiz';
import { PlayScreen } from '@screens/Play';

interface IPlayPageProps {
  quiz?: IQuiz[];
}

const PlayPage: IPageComponent<IPlayPageProps> = ({ quiz }) => <PlayScreen quiz={quiz} />;

PlayPage.Layout = LayoutPlayQuiz;

PlayPage.getInitialProps = async ({ query }) => {
  try {
    const { listId } = query;
    if (listId) {
      const quiz = await getQuiz();
      if (quiz) {
        return { quiz: quiz.filter((item) => item.quizListId === parseInt(listId, 10)) };
      }
    }
    return {};
  } catch (e) {
    return {};
  }
};

export default PlayPage;
