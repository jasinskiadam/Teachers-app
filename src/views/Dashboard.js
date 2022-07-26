import { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { StudentsContext } from 'providers/StudentsProvider';

const Dashboard = () => {
  const { students } = useContext(StudentsContext);
  return (
    <ViewWrapper>
      <StudentsList students={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
