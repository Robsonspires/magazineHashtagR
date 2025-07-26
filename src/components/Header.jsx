import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo/Hashtag.svg";
import UserButtons from "./userButtons";

const Header = () => {
  // const locationObject = useLocation().pathname;
  const { pathname } = useLocation();

  const completeHeader = (
    <header className="flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 itens-end justify-between text-xl z-10">
      {/* z-10 ordem da camada */}
      {/* Deu conflito com text-3xl (removido da linha) */}
      <Link to="/">
        <img className="h-16 px-2" src={logo} alt="Logo da Hashtag" />
      </Link>
      <UserButtons />
    </header>
  );

  const simpleHeader = (
    <header className="flex sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 itens-end justify-between text-xl z-10">
      {/* z-10 ordem da camada */}
      {/* Deu conflito com text-3xl (removido da linha) */}
      <Link to="/">
        <img className="h-12 px-2" src={logo} alt="Logo da Hashtag" />
      </Link>
    </header>
  );
  return <>{pathname === "/" ? completeHeader : simpleHeader}</>;
};

export default Header;
