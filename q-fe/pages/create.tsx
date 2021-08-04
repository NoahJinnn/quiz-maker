import { LayoutListQuiz } from '@layouts/LayoutListQuiz';
import { CreateScreen } from '@screens/Create';

interface ICreatePageProps {}

const CreatePage: IPageComponent<ICreatePageProps> = () => <CreateScreen />;

CreatePage.Layout = LayoutListQuiz;

export default CreatePage;
