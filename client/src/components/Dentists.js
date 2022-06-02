import DentistItem from "./DentistItem";

const Dentists = ({ dentists, user }) => {
  const dentistItems = dentists.map((dentist) => (
    <DentistItem
      key={dentist.id}
      dentist={dentist}
      user={user}
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
