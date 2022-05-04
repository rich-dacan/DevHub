/* eslint-disable react/prop-types */
import React          from 'react';
import { ListOfTech } from './styles';

import ModalEditTech from '../ModalEdit';


const ListTechs = ({tech, setTech}) => {


  return (
    <ListOfTech>
      
      { tech.map(({id, title, status}) => 

        <li key={id}>
          {/* <p>{id}</p> */}
          <h3>{title}</h3>
          <div>
            <p>{status}</p>
            <span>
              <ModalEditTech id={id} title={title} tech={tech} setTech={setTech}/>
            </span>
          </div>
        </li>
      )}
    </ListOfTech>
  )
}
export default ListTechs;




  // const [tech, setTech] = useState([]);
  
  // AQUI PEGO OS DADOS QUE EU SALVO PREVIAMENTE DURANTE O LOGIN NO LOCAL STORAGE E RENDERIZO AS INFORMAÇÕES NA INTERFACE;
  // const user  = JSON.parse(localStorage.getItem('@KenzieHub: user'));
  // const token = JSON.parse(localStorage.getItem('@KenzieHub: token'));

  // const loadTechs = () => {
  //   api
  //     .get(`/users/${user.id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       }
  //     })
  //     .then((response) => setTech(response.data.techs));
  // }

  // useEffect(() => {

  //   loadTechs();

  // }, []);

  // console.log(tech[0].id)