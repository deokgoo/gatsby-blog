import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const Profile = () => {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      site {
        siteProfileData {
          profile_img,
          profile_name,
          profile_description
        }
      }
    }
  `);
  let { profile_img, profile_name, profile_description } = data.site.siteProfileData;
  return (
    <div className="profile" style={{display: 'flex', justifyContent: 'center', fontFamily: 'Nanum Pen Script', fontWeight: 'bold', fontSize: '2rem'}}>
      <img className="profile__img" style={{height: '100px', width: '100px', borderRadius: '50%'}} src={profile_img}/>
      <div className="profile__descript" style={{display: 'flex', flexDirection: 'column', marginLeft: '15px'}}>
        <div className="profile__name"> {profile_name} </div>
        <div className="profile__name" style={{marginTop: '15px'}}> {profile_description} </div>
      </div>
    </div>
  )
};

export default Profile;