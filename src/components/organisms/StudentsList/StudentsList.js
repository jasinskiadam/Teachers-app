import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import PropTypes from 'prop-types';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { StudentShape } from 'types';

const StudentsList = ({ students, deleteStudent }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((studentData) => (
          <StudentsListItem deleteStudent={deleteStudent} key={studentData.name} studentData={studentData} />
        ))}
      </StyledList>
    </>
  );
};

StudentsList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape(StudentShape)),
  deleteStudent: PropTypes.func,
};

export default StudentsList;
