import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          Feu Studios
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6">
          <Link to="/novidades" className="hover:text-orange-400">Novidades</Link>
          <Link to="/sobre" className="hover:text-orange-400">Sobre</Link>
          <Link to="/trabalhe-conosco" className="hover:text-orange-400">Trabalhe Conosco</Link>
          <Link to="/login" className="hover:text-orange-400">Login</Link>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col p-4 gap-4">
            <Link to="/novidades" onClick={() => setOpen(false)}>Novidades</Link>
            <Link to="/sobre" onClick={() => setOpen(false)}>Sobre</Link>
            <Link to="/trabalhe-conosco" onClick={() => setOpen(false)}>Trabalhe Conosco</Link>
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          </ul>
        </nav>
      )}
    </header>
  );
}

