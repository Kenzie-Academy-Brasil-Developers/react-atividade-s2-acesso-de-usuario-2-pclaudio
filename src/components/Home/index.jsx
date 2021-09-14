import { useState } from 'react';
import { Link } from 'react-router-dom'
import { AddMember, ButtonAdd, InputName, MembersList, SelectType } from './style';

const Home = ({ members, addMember }) => {
  const [ name, setName ] = useState('');
  const [ type, setType ] = useState('pf');

  return (
    <main>
      <AddMember>
        <InputName
          type='text'
          placeholder='Nome'
          value={ name }
          onChange={ event => setName(event.target.value) }
        />

        <SelectType
          value={ type }
          onChange={ event => setType(event.target.value) }
        >
          <option value='pf'>Pessoa física</option>
          <option value='pj'>Pessoa jurídica</option>
        </SelectType>

        <ButtonAdd onClick={ () => addMember(name, type) } >Adicionar</ButtonAdd>

      </AddMember>

      <MembersList>
        { members.map(member => 
          <Link
            key={ member.id }
            to={ member.type === 'pj' ? `/company/${ member.id }` : `/customer/${member.id}` }
          >
            { member.name }
          </Link>
        )}
      </MembersList>
    </main>
  );
};

export default Home;