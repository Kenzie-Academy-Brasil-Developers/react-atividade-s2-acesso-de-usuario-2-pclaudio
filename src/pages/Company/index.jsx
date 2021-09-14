import { Link, useParams } from 'react-router-dom';

const Company = ({ members }) => {
  const params = useParams();
  const member = members.filter(member => member.id === params.id)[0];

  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Company;