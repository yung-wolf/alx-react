import Proptypes from 'prop-types';

const NotificationItemShape = Proptypes.shape({
  id: Proptypes.number.isRequired,
  type: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  html: Proptypes.shape({
    __html: Proptypes.string.isRequired
  }),
})

export default NotificationItemShape