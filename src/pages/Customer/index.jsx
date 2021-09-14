import { Link, useParams } from 'react-router-dom';

const Customer = ({ members }) => {
  const params = useParams();
  const member = members.filter(member => member.id === params.id)[0];

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
</div>
  );
};

export default Customer;