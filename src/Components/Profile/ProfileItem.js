import React from 'react';
import PropTypes from 'prop-types';


const ProfileItem = props => {
  const { profile, title, children, alertDescription } = props;
  const {fullName ,bio, profession} = profile;

  const handleClick = () => alertDescription(fullName);

  
  return (
    <div className="col-md-3">
      <div className="card mb-4">
        {children}
        <div className="card-body">
          <h3 className="text-primary">{title}</h3>
          <p className="card-text">{bio}</p>
          <p className="card-text">{profession}</p>
          <a href="#!" className="btn btn-primary" onClick={handleClick}>
            View Description
          </a>
        </div>
      </div>
    </div>
  );
};

ProfileItem.defaultProps = {
  title: 'Default title',
};

ProfileItem.propTypes = {
  category: PropTypes.object.isRequired,
  title: PropTypes.string,
  alertDescription: PropTypes.func.isRequired,
};

export default ProfileItem;