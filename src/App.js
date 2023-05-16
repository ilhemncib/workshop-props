import { Fragment } from 'react';
import ProfileList from './Components/Profile/ProfileList' ;
import './App.css'; 
import image1 from './per1.jpg' ;
import image2 from './pers2.jpg';
import image3 from './pers3.jpg' ;


 function App() { 

const profileList =[
  {
  id :1,
  fullName : "ilhem" , 
  bio : "fullstack" ,
  profession :"wed devlp" ,
  image: image1 ,

  } ,

  {
  id :2 ,
  fullName : "ilyes" , 
  bio : "fullstack" ,
  profession :"wed devlp" ,
  image: image2 ,

  } ,
   {
  id :3 ,
  fullName : "amine" , 
  bio : "fullstack" ,
  profession :"wed devlp" ,
  image: image3,

  }
  
] 
const alertDescription = desc => alert(`Descrtitio: ${desc}`);

return ( 
  <Fragment>
  
  <ProfileList
    profileList={profileList}
    alertDescription={alertDescription}
  />
</Fragment> 
          ); } 
    export default App;