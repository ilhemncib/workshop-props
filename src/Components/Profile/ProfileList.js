
import React from 'react';

import ProfileItem from './ProfileItem';
import PropTypes from 'prop-types';





const ProfileList = ({ profileList , alertDescription}) => {
    return (
        <div className="container pt-4">
      <div className="row">
        {profileList.map((profile, i) => (
          <ProfileItem
            key={profile.id}
            profile={profile}
            title={profile.profileName}
            alertDescription={alertDescription}
           
          >
            <img
              style={{ height: 200, width:100}}
              src={profile.image}
              alt=""
              className="card-img-top"
            />
          </ProfileItem>
        ))}
      </div>
    </div>
  );
};
ProfileList.propTypes = {
    profileList: PropTypes.array.isRequired,
    alertDescription: PropTypes.func.isRequired,
  };
  
  export default ProfileList;