export function Logout(link, Name,AC) {
    return (
      <li class="nav-item">
      <NavLink className="nav-link active" to={link}onClick={()=>{AC({name:null,password:null,status:'Blocked'})}}>
        {Name}
      </NavLink>
    </li>);
  }