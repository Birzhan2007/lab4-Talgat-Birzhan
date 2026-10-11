import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3001/products';

// Загружает список товаров и возвращает данные, статус загрузки и ошибку
export default function useProducts() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Bad response');
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setItems(data);
      })
      .catch(() => {
        if (!cancelled) setErrorText('Не удалось загрузить товары');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { items, isLoading, errorText };
}
