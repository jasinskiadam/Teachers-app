import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Average } from 'components/atoms/Average/Average';
import { Wrapper } from './UserListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <Average value={average}>{average}</Average>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
