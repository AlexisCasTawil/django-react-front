import { Route, Routes } from 'react-router-dom';
import { Form } from './form';
import { GamesList } from './games_list';
import { GameEdit } from './games_list/GameEdit';

const AppRoutes = (id) => (
    <Routes>
      <Route exact path="/" element={<GamesList />} />
      <Route exact path="/form" element={<Form />} />
      <Route exact path={`/form/${id}`} element={<GameEdit id={id}/>} />
    </Routes>
);

export default AppRoutes;