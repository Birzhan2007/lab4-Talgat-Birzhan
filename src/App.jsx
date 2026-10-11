import { useState } from 'react';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import OrderForm from './components/OrderForm';
import ProductCard from './components/ProductCard';
import useProducts from './hooks/useProducts';

function App() {
  const { items, isLoading, errorText } = useProducts();
  const [query, setQuery] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const addToCart = () => setCartItems((prev) => prev + 1);

  const visibleItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <>
      <TopBar cartItems={cartItems} />

      <main className="layout">
        <section id="catalog" className="catalog">
          <div className="catalog__bar">
            <h2>Каталог</h2>
            <input
              type="search"
              placeholder="Поиск товара..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {isLoading && <p>Загрузка...</p>}
          {errorText && <p className="catalog__error">{errorText}</p>}

          <div className={showAll ? 'catalog__grid' : 'catalog__grid catalog__grid--collapsed'}>
            {!isLoading &&
              !errorText &&
              visibleItems.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onAdd={addToCart}
                  featured={item.id === 1}
                />
              ))}
          </div>

          <button
            type="button"
            className="catalog__more"
            onClick={() => setShowAll((value) => !value)}
          >
            {showAll ? 'Скрыть ⌃' : 'Показать ещё товары ⌄'}
          </button>
        </section>

        <aside id="delivery" className="layout__aside">
          <h3>Доставка</h3>
          <ul>
            <li>Астана — на следующий день</li>
            <li>Акмолинская область — 2–3 дня</li>
            <li>Бесплатно от 20 000 тг</li>
          </ul>
        </aside>

        <OrderForm />
      </main>

      <BottomBar />
    </>
  );
}

export default App;
