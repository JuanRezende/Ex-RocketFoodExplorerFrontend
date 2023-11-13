import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Details } from '../pages/Details';
import { Edit } from '../pages/Edit';
import { Orders } from '../pages/Orders';

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/orders" element={<Orders />} />

      <Route path="/*" element={<Navigate  to="/" />}/>
    </Routes>
  );
}