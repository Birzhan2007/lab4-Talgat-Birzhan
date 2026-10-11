import { useState } from 'react';

function TopBar({ cartItems = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <a href="#" className="topbar__logo">🌾 АгроМаркет</a>

      <button
        className="topbar__burger"
        type="button"
        aria-label="Меню"
        onClick={() => setMenuOpen((open) => !open)}
      >
        ☰
      </button>

      <nav className={menuOpen ? 'topbar__menu topbar__menu--open' : 'topbar__menu'}>
        <ul className="topbar__nav" onClick={() => setMenuOpen(false)}>
          <li><a href="#catalog">Каталог</a></li>
          <li><a href="#delivery">Доставка</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>

      <div className="topbar__cart">🛒 Корзина: {cartItems}</div>
    </header>
  );
}

export default TopBar;
