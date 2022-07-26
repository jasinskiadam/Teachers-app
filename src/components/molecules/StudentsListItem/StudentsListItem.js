import { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Average } from 'components/atoms/Average/Average';
import { StyledInfo, Wrapper } from './StudentsListItem.styles';
import { StudentsContext } from 'providers/StudentsProvider';

const StudentsListItem = ({ studentData: { average, name, attendance } }) => {
  const { deleteStudent } = useContext(StudentsContext);

  return (
    <Wrapper>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>{name}</p>
        <p>{attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteStudent(name)} />
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default StudentsListItem;
