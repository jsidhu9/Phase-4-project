import DentistItem from "./DentistItem";

function Dentists({dentists, user, handlePost}) {
    

     const dentistItems = dentists.map((dentist) => (
          <DentistItem 
               key={dentist.id}
               dentist={dentist}
               user={user}
               handlePost={handlePost}
          />
     ))
    return (
   
          <div>
               <h2>Dentists</h2>
               <div>{dentistItems}</div>
          </div>
     
    );
  }
  
  export default Dentists;