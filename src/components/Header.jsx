import logo from "../assets/logo/Hashtag.svg";
import UserButtons from "./userButtons";

const Header = () => {
  return (
    <header className="flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 itens-end justify-between text-base z-10">
      {/* z-10 ordem da camada */}
      {/* Deu conflito com text-3xl (removido da linha) */}
      <a href="/">
        <img className="h-16 px-2" src={logo} alt="Logo da Hashtag" />
      </a>
      <UserButtons />
    </header>
  );
};

export default Header;
