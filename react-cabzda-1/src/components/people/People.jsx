import s from './People.module.css';
import { NavLink } from 'react-router-dom';
const People = () => {
    return (
      <div className={s.peopleLeft}>
          <NavLink to="/profile" activeClassName={s.active}>profile</NavLink>
          <NavLink to="/dialogs" activeClassName={s.active}>dialogs</NavLink>
          <NavLink to="/Info" activeClassName={s.active}>info</NavLink>
          <NavLink to="/content" activeClassName={s.active}>content</NavLink>
          <NavLink to="/register" activeClassName={s.active}>register</NavLink>
      </div>
    );
  }

export default People;