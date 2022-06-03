import DentistItem from "./DentistItem";
import Card from '@mui/material/Card';

const Dentists = ({ dentists, user }) => {
  const dentistItems = dentists.map((dentist) => (
    <DentistItem
      key={dentist.id}
      dentist={dentist}
      user={user}
    />
  ));

  return (
    <Card sx={{minHeight: 500, border: '1px solid',  borderColor: 'primary.main', borderRadius: '16px'}}>
      <div>
        <div className="header-container">
          <h2 >Dentists</h2>
        </div>
          <div className="dentist_container">{dentistItems}
          </div>
      </div>
    </Card>
  );
};

export default Dentists;
