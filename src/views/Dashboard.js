import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { StudentShape } from 'types';

const Dashboard = ({ students, deleteStudent }) => {
  return (
    <ViewWrapper>
      <StudentsList students={students} deleteStudent={deleteStudent} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape(StudentShape)),
  deleteStudent: PropTypes.func,
};

export default Dashboard;
