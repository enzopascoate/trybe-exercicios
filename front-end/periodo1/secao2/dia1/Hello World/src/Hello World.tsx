import Title from './Title';
import ModuleDetails from './ModuleDetails';

function HelloWorld() {
  const name = 'Klaus';
  const personBirthDate = '25/12/1862';
  function Age(birthDate: string) {
    const [day, month, year] = birthDate.split('/');
    // const birthday = new Date(Number(year), Number(month), Number(day));
    const birthday = new Date(+year, +month, +day);
    const today = new Date();
    const age = today.getFullYear() - birthday.getFullYear();
    return age;
  }
  return (
    <>
      <Title />
      <ModuleDetails />
      <br />
      <p>{`Bem vindo, ${name}, vejo aqui que vc tem ${Age(personBirthDate)} anos'`}</p>
    </>
  );
}

export default HelloWorld;
