import {Avatar} from "./Avatar";
import Styles from "./Sidebar.module.css";
import {PencilSimpleLine} from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={Styles.sidebar}>
      <img
        className={Styles.cover}
        src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=50"
      />

      <div className={Styles.profile}>
        <Avatar
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLckHtbzITa9DTmZd6SAPeq-fAVUDeDkUjDNxnSdPESSq93v2UJXmpLiLpuwZZi6iWuQ&usqp=CAU"}
          
        />
        <strong>Leslie Alexander</strong>
        <span>UI Designer</span>
      </div>
      <footer>
        <a href="#">
          {" "}
          <PencilSimpleLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
