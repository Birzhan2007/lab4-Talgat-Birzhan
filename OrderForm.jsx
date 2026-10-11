function OrderForm() {
  const submitOrder = (event) => {
    event.preventDefault(); // не перезагружать страницу
    alert('Заявка отправлена! Мы свяжемся с вами.');
    event.target.reset(); // очистить поля
  };

  return (
    <section id="contact" className="order">
      <h2>Оптовая заявка</h2>

      <form className="order__form" onSubmit={submitOrder}>
        <div>
          <label htmlFor="name">Имя / организация</label>
          <input id="name" name="name" type="text" required
                 placeholder="ИП «Фермер»" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required
                 placeholder="farmer@mail.kz" />
        </div>
        <div>
          <label htmlFor="phone">Телефон</label>
          <input id="phone" name="phone" type="tel"
                 placeholder="+7 7XX XXX XX XX" />
        </div>
        <div>
          <label htmlFor="volume">Объём заказа, кг</label>
          <input id="volume" name="volume" type="number" min="10" required
                 placeholder="Например, 100" />
        </div>
        <div>
          <label htmlFor="date">Желаемая дата доставки</label>
          <input id="date" name="date" type="date" />
        </div>
        <div>
          <label htmlFor="comment">Комментарий</label>
          <textarea id="comment" name="comment" rows="2"
                    placeholder="Дополнительная информация..." />
        </div>

        <button type="submit" className="order__submit">➤ Отправить заявку</button>
      </form>
    </section>
  );
}

export default OrderForm;
