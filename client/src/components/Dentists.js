import DentistItem from "./DentistItem";

const Dentists = ({ dentists, user, getDentistInfo }) => {
  const dentistItems = dentists.map((dentist) => (
    <DentistItem
      key={dentist.id}
      dentist={dentist}
      user={user}
      getDentistInfo={getDentistInfo}
    />
  ));

  return (
    <div>
      <h2>Dentists</h2>
      <div>{dentistItems}</div>
    </div>
  );
};

export default Dentists;
