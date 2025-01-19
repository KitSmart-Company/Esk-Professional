import React from "react";
import "./Modal.scss";

const ModalContainer = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <div className="modal-content ">
        <div className="modal-row innerWidth">
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="modal-image"
            />
          </div>
          <div className="modal-header-contaoner">
            <div className="modal-header">
              <h1>{product.title}</h1>
            </div>
            <div className="modal-body">
              <div className="modal-price">
                <h6>
                  Цена: <span>{product.price} ₽</span>
                </h6>
              </div>
              <div className="table-container">
                <table className="dessert-table">
                  <thead>
                    <tr>
                      <th>Характеристики</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr>
                      
                      <td>
                        {product.id === 1 && <>Производитель</>}
                        {product.id === 2 && <>Производитель</>}
                        {product.id === 3 && <>Производитель</>}
                        {product.id === 4 && <>Производитель</>}
                        {product.id === 5 && <>Производитель</>}
                        {product.id === 6 && <>Производитель</>}
                        {product.id === 7 && <>Производитель</>}
                        {product.id === 8 && <>Производитель</>}
                        {product.id === 9 && <>Производитель</>}
                        {product.id === 10 && <>Производитель</>}
                        {product.id === 11 && <>Производитель</>}
                        {product.id === 12 && <>Производитель</>}
                        {product.id === 13 && <>Производитель</>}
                        {product.id === 14 && <>Производитель</>}
                        {product.id === 15 && <>Производитель</>}
                        {product.id === 16 && <>Производитель</>}
                        {product.id === 17 && <>Производитель</>}
                        {product.id === 18 && <>Производитель</>}
                        {product.id === 19 && <>Производитель</>}
                        {product.id === 20 && <>Производитель</>}
                        {product.id === 21 && <>Производитель</>}
                        {product.id === 22 && <>Производитель</>}
                        {product.id === 23 && <>Производитель</>}
                        {product.id === 24 && <>Производитель</>}
                        {product.id === 25 && <>Производитель</>}
                        {product.id === 26 && <>Производитель</>}
                        {product.id === 27 && <>Производитель</>}
                        {product.id === 28 && <>Производитель</>}
                        {product.id === 29 && <>Производитель</>}
                        {product.id === 30 && <>Производитель</>}
                        {product.id === 31 && <>Производитель</>}
                        {product.id === 32 && <>Производитель</>}
                        {product.id === 33 && <>Производитель</>}
                        {product.id === 34 && <>Производитель</>}
                        {product.id === 35 && <>Производитель</>}
                        {product.id === 36 && <>Производитель</>}
                        {product.id === 37 && <>Производитель</>}
                        {product.id === 38 && <>Производитель</>}
                        {product.id === 39 && <>Производитель</>}
                        {product.id === 40 && <>Производитель</>}
                        {product.id === 41 && <>Производитель</>}
                        {product.id === 42 && <>Производитель</>}
                        {product.id === 43 && <>Производитель</>}
                        {product.id === 44 && <>Производитель</>}
                        {product.id === 45 && <>Производитель</>}
                        {product.id === 46 && <>Производитель</>}
                        {product.id === 47 && <>Производитель</>}
                        {product.id === 48 && <>Производитель</>}
                        {product.id === 49 && <>Производитель</>}
                        {product.id === 50 && <>Производитель</>}
                        {product.id === 51 && <>Производитель</>}
                        {product.id === 52 && <>Производитель</>}
                        {product.id === 53 && <>Производитель</>}
                        {product.id === 54 && <>Разлиновка</>}
                      
                      </td>

                      <td>
                        {product.id === 1 && <>ESK Professional</>}
                        {product.id === 2 && <>ESK Professional</>}
                        {product.id === 3 && <>ESK Professional</>}
                        {product.id === 4 && <>ESK Professional</>}
                        {product.id === 5 && <>ESK Professional</>}
                        {product.id === 6 && <>ESK Professional</>}
                        {product.id === 7 && <>ESK Professional</>}
                        {product.id === 8 && <>ESK Professional</>}
                        {product.id === 9 && <>ESK Professional</>}
                        {product.id === 10 && <>ESK Professional</>}
                        {product.id === 11 && <>ESK Professional</>}
                        {product.id === 12 && <>ESK Professional</>}
                        {product.id === 13 && <>ESK Professional</>}
                        {product.id === 14 && <>ESK Professional</>}
                        {product.id === 15 && <>ESK Professional</>}
                        {product.id === 16 && <>ESK Professional</>}
                        {product.id === 17 && <>ESK Professional</>}
                        {product.id === 18 && <>ESK Professional</>}
                        {product.id === 19 && <>ESK Professional</>}
                        {product.id === 20 && <>ESK Professional</>}
                        {product.id === 21 && <>ESK Professional</>}
                        {product.id === 22 && <>ESK Professional</>}
                        {product.id === 23 && <>ESK Professional</>}
                        {product.id === 24 && <>ESK Professional</>}
                        {product.id === 25 && <>ESK Professional</>}
                        {product.id === 26 && <>HP Firenze</>}
                        {product.id === 27 && <>New Vip</>}
                        {product.id === 28 && <>HP Firenze</>}
                        {product.id === 29 && <>HP Firenze</>}
                        {product.id === 30 && <>HP Firenze</>}
                        {product.id === 31 && <>HP Firenze</>}
                        {product.id === 32 && <>HP Firenze</>}
                        {product.id === 33 && <>HP Firenze</>}
                        {product.id === 34 && <>HP Firenze</>}
                        {product.id === 35 && <>HP Firenze</>}
                        {product.id === 36 && <>HP Firenze</>}
                        {product.id === 37 && <>HP Firenze</>}
                        {product.id === 38 && <>ESK Professional</>}
                        {product.id === 39 && <>HP Firenze</>}
                        {product.id === 40 && <>HP Firenze</>}
                        {product.id === 41 && <>HP Firenze</>}
                        {product.id === 42 && <>HP Firenze</>}
                        {product.id === 43 && <>HP Firenze</>}
                        {product.id === 44 && <>Max Pro</>}
                        {product.id === 45 && <>HP Firenze</>}
                        {product.id === 46 && <>HP Firenze</>}
                        {product.id === 47 && <>HP Firenze</>}
                        {product.id === 48 && <>HP Firenze</>}
                        {product.id === 49 && <>HP Firenze</>}
                        {product.id === 50 && <>HP Firenze</>}
                        {product.id === 51 && <>HP Firenze</>}
                        {product.id === 52 && <>HP Firenze</>}
                        {product.id === 53 && <>HP Firenze</>}
                        {product.id === 54 && <>Линейка</>}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {product.id === 1 && <>Объем</>}
                        {product.id === 2 && <>Объем</>}
                        {product.id === 3 && <>Объем</>}
                        {product.id === 4 && <>Объем</>}
                        {product.id === 5 && <>Объем</>}
                        {product.id === 6 && <>Объем</>}
                        {product.id === 7 && <>Объем</>}
                        {product.id === 8 && <>Объем</>}
                        {product.id === 9 && <>Объем</>}
                        {product.id === 10 && <>Объем</>}
                        {product.id === 11 && <>Объем</>}
                        {product.id === 12 && <>Объем</>}
                        {product.id === 13 && <>Объем</>}
                        {product.id === 14 && <>Объем</>}
                        {product.id === 15 && <>Объем</>}
                        {product.id === 16 && <>Объем</>}
                        {product.id === 17 && <>Объем</>}
                        {product.id === 18 && <>Объем</>}
                        {product.id === 19 && <>Объем</>}
                        {product.id === 20 && <>Объем</>}
                        {product.id === 21 && <>Объем</>}
                        {product.id === 22 && <>Объем</>}
                        {product.id === 23 && <>Объем</>}
                        {product.id === 24 && <>Объем</>}
                        {product.id === 25 && <>Цвет</>}
                        {product.id === 26 && <>Объем</>}
                        {product.id === 27 && <>Объем</>}
                        {product.id === 28 && <>Объем</>}
                        {product.id === 29 && <>Объем</>}
                        {product.id === 30 && <>Объем</>}
                        {product.id === 31 && <>Объем</>}
                        {product.id === 32 && <>Объем</>}
                        {product.id === 33 && <>Объем</>}
                        {product.id === 34 && <>Объем</>}
                        {product.id === 35 && <>Объем</>}
                        {product.id === 36 && <>Объем</>}
                        {product.id === 37 && <>Объем</>}
                        {product.id === 38 && <>Объем</>}
                        {product.id === 39 && <>Объем</>}
                        {product.id === 40 && <>Объем</>}
                        {product.id === 41 && <>Объем</>}
                        {product.id === 42 && <>Объем</>}
                        {product.id === 43 && <>Объем</>}
                        {product.id === 44 && <>Цвет</>}
                        {product.id === 45 && <>Объем</>}
                        {product.id === 46 && <>Объем</>}
                        {product.id === 47 && <>Объем</>}
                        {product.id === 48 && <>Объем</>}
                        {product.id === 49 && <>Объем</>}
                        {product.id === 50 && <>Объем</>}
                        {product.id === 51 && <>Объем</>}
                        {product.id === 52 && <>Объем</>}
                        {product.id === 53 && <>Объем</>}
                        {product.id === 54 && <>Формат листов</>}
                      </td>
                      <td>
                        {product.id === 1 && <>1000 мл</>}
                        {product.id === 2 && <>1000 мл</>}
                        {product.id === 3 && <>1000 мл</>}
                        {product.id === 4 && <>1000 мл</>}
                        {product.id === 5 && <>500 мл</>}
                        {product.id === 6 && <>500 мл</>}
                        {product.id === 7 && <>500 мл</>}
                        {product.id === 8 && <>950 гр</>}
                        {product.id === 9 && <>950 гр</>}
                        {product.id === 10 && <>1000 мл</>}
                        {product.id === 11 && <>500 мл</>}
                        {product.id === 12 && <>120 мл</>}
                        {product.id === 13 && <>300 мл</>}
                        {product.id === 14 && <>300 мл</>}
                        {product.id === 15 && <>200 гр</>}
                        {product.id === 16 && <>250 гр</>}
                        {product.id === 17 && <>250 мл</>}
                        {product.id === 18 && <>250 мл</>}
                        {product.id === 19 && <>950 мл</>}
                        {product.id === 20 && <>200 мл</>}
                        {product.id === 21 && <>500 мл</>}
                        {product.id === 22 && <>500 мл</>}
                        {product.id === 23 && <>500 мл</>}
                        {product.id === 24 && <>100 мл</>}
                        {product.id === 25 && <>Белый</>}
                        {product.id === 26 && <>1000/200/<br/>1000/200 мл</>}
                        {product.id === 27 && <>1000 мл</>}
                        {product.id === 28 && <>1000 мл</>}
                        {product.id === 29 && <>200 мл</>}
                        {product.id === 30 && <>1000 мл</>}
                        {product.id === 31 && <>200 мл</>}
                        {product.id === 32 && <>250/200/250/200 мл</>}
                        {product.id === 33 && <>250 мл</>}
                        {product.id === 34 && <>250 мл</>}
                        {product.id === 35 && <>200 мл</>}
                        {product.id === 36 && <>1000/1000/100 мл</>}
                        {product.id === 37 && <>250/1000/100 мл</>}
                        {product.id === 38 && <>250/1000/1000 мл</>}
                        {product.id === 39 && <>1000 мл</>}
                        {product.id === 40 && <>250 мл</>}
                        {product.id === 41 && <>1000 мл</>}
                        {product.id === 42 && <>75 мл</>}
                        {product.id === 43 && <>200 мл</>}
                        {product.id === 44 && <>Черный</>}
                        {product.id === 45 && <>250/10 ампул/50 мл</>}
                        {product.id === 46 && <>50 мл</>}
                        {product.id === 47 && <>10 ампул по 8 мл</>}
                        {product.id === 48 && <>250 мл</>}
                        {product.id === 49 && <>10 ампул по 8 мл</>}
                        {product.id === 50 && <>50 мл</>}
                        {product.id === 51 && <>250 мл</>}
                        {product.id === 52 && <>50 мл</>}
                        {product.id === 53 && <>250/100/1000</>}
                        {product.id === 54 && <>	
                          А5</>}
                        
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {product.id === 1 && <>Тип товара</>}
                        {product.id === 2 && <>Тип товара</>}
                        {product.id === 3 && <>Тип товара</>}
                        {product.id === 4 && <>Тип товара</>}
                        {product.id === 5 && <>Тип товара</>}
                        {product.id === 6 && <>Тип товара</>}
                        {product.id === 7 && <>Тип товара</>}
                        {product.id === 8 && <>Тип товара</>}
                        {product.id === 9 && <>Тип товара</>}
                        {product.id === 10 && <>Тип товара</>}
                        {product.id === 11 && <>Тип товара</>}
                        {product.id === 12 && <>Тип товара</>}
                        {product.id === 13 && <>Тип товара</>}
                        {product.id === 14 && <>Тип товара</>}
                        {product.id === 15 && <>Тип товара</>}
                        {product.id === 16 && <>Тип товара</>}
                        {product.id === 17 && <>Тип товара</>}
                        {product.id === 18 && <>Тип товара</>}
                        {product.id === 19 && <>Тип товара</>}
                        {product.id === 20 && <>Тип товара</>}
                        {product.id === 21 && <>Тип товара</>}
                        {product.id === 22 && <>Тип товара</>}
                        {product.id === 23 && <>Тип товара</>}
                        {product.id === 24 && <>Тип товара</>}
                        {product.id === 25 && <>Тип товара</>}
                        {product.id === 26 && <>Тип товара</>}
                        {product.id === 27 && <>Тип товара</>}
                        {product.id === 28 && <>Тип товара</>}
                        {product.id === 29 && <>Тип товара</>}
                        {product.id === 30 && <>Тип товара</>}
                        {product.id === 31 && <>Тип товара</>}
                        {product.id === 32 && <>Тип товара</>}
                        {product.id === 33 && <>Тип товара</>}
                        {product.id === 34 && <>Тип товара</>}
                        {product.id === 35 && <>Тип товара</>}
                        {product.id === 36 && <>Тип товара</>}
                        {product.id === 37 && <>Тип товара</>}
                        {product.id === 38 && <>Тип товара</>}
                        {product.id === 39 && <>Тип товара</>}
                        {product.id === 40 && <>Тип товара</>}
                        {product.id === 41 && <>Тип товара</>}
                        {product.id === 42 && <>Тип товара</>}
                        {product.id === 43 && <>Тип товара</>}
                        {product.id === 44 && <>Тип товара</>}
                        {product.id === 45 && <>Тип товара</>}
                        {product.id === 46 && <>Тип товара</>}
                        {product.id === 47 && <>Тип товара</>}
                        {product.id === 48 && <>Тип товара</>}
                        {product.id === 49 && <>Тип товара</>}
                        {product.id === 50 && <>Тип товара</>}
                        {product.id === 51 && <>Тип товара</>}
                        {product.id === 52 && <>Тип товара</>}
                        {product.id === 53 && <>Тип товара</>}
                        {product.id === 54 && <>Количество листов</>}
                      </td>
                      <td>
                        {product.id === 1 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 2 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 3 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 4 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 5 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 6 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 7 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 8 && <> Горячий ботокс</>}
                        {product.id === 9 && <>Холодный ботокс</>}
                        {product.id === 10 && <>Нанопластика волос</>}
                        {product.id === 11 && <>Нанопластика волос</>}
                        {product.id === 12 && <>Нанопластика волос</>}
                        {product.id === 13 && <>Восстанавливающий шампунь</>}
                        {product.id === 14 && <>Восстанавливающий шампунь</>}
                        {product.id === 15 && <>Холодный ботокс</>}
                        {product.id === 16 && <>Домашний уход</>}
                        {product.id === 17 && <>Домашний уход</>}
                        {product.id === 18 && <>Домашний уход</>}
                        {product.id === 19 && <>Домашний уход</>}
                        {product.id === 20 && <>Ботокс</>}
                        {product.id === 21 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 22 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 23 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 24 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 25 && (
                          <>Классическое кератиновое выпрямление</>
                        )}
                        {product.id === 26 && <>Холодный ботокс</>}
                        {product.id === 27 && <>Холодный ботокс</>}
                        {product.id === 28 && <>Домашний уход</>}
                        {product.id === 29 && <>Холодный ботокс</>}
                        {product.id === 30 && <>Домашний уход</>}
                        {product.id === 31 && <>Холодный ботокс</>}
                        {product.id === 32 && <>Холодный ботокс</>}
                        {product.id === 33 && <>Домашний уход</>}
                        {product.id === 34 && <>Домашний уход</>}
                        {product.id === 35 && <>Средства для укладки, термозащита, праймеры</>}
                        {product.id === 36 && <>Холодный ботокс</>}
                        {product.id === 37 && <>Холодный ботокс</>}
                        {product.id === 38 && <>Ботокс для волос</>}
                        {product.id === 39 && <>Домашний уход, Холодный ботокс</>}
                        {product.id === 40 && <>Домашний уход, Холодный ботокс</>}
                        {product.id === 41 && <>Красители для волос</>}
                        {product.id === 42 && <>Домашний уход</>}
                        {product.id === 43 && <>Средства для укладки, термозащита, праймеры</>}
                        {product.id === 44 && <>Инстурменты</>}
                        {product.id === 45 && <>Детокс кожи головы</>}
                        {product.id === 46 && <>Детокс кожи головы</>}
                        {product.id === 47 && <>Детокс кожи головы</>}
                        {product.id === 48 && <>Детокс кожи головы</>}
                        {product.id === 49 && <>Детокс кожи головы</>}
                        {product.id === 50 && <>Детокс кожи головы</>}
                        {product.id === 51 && <>Детокс кожи головы</>}
                        {product.id === 52 && <>Детокс кожи головы</>}
                        {product.id === 53 && <>Холодный ботокс</>}
                        {product.id === 54 && <>	
                          52 шт.</>}
                      </td>
                    </tr>
                    {product.id === 9 && (
                      <>
                        <tr>
                          <td>Назначение</td>
                          <td> восстановление волос</td>
                        </tr>
                      </>
                    )}
                    {product.id === 10 && (
                      <>
                        <tr>
                          <td>Особенность</td>
                          <td>Без формальдегида</td>
                        </tr>
                      </>
                    )}
                    {product.id === 11 && (
                      <>
                        <tr>
                          <td>Особенность</td>
                          <td>Без формальдегида</td>
                        </tr>
                      </>
                    )}
                    {product.id === 12 && (
                      <>
                        <tr>
                          <td>Особенность</td>
                          <td>Без формальдегида</td>
                        </tr>
                      </>
                    )}
                    {product.id === 27 && (
                      <>
                        <tr>
                          <td>Назначение</td>
                          <td>Восстановление волос</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-picture innerWidth">
          <div className="modal-description">
            <h1>Описание</h1>
            <h3>{product.description1}</h3>
            <p> {product.description2}</p>
            <p> {product.description22}</p>
            <h3>{product.description3}</h3>
            {product.id === 1 && (
              <ul>
                <li>{product.description4}</li>
                <li>{product.description5}</li>
                <li>{product.description6}</li>
                <li>{product.description7}</li>
              </ul>
            )}
            {product.id === 5 && (
              <ul>
                <li>{product.description4}</li>
                <li>{product.description5}</li>
                <li>{product.description6}</li>
                <li>{product.description7}</li>
              </ul>
            )}
            <div className="modal-image-product">
              {product.id === 1 && (
                <img src={product.image2} alt="до и после" />
              )}
            </div>
            {product.id === 1 && (
              <>
                <h2>{product.description8}</h2>
                <p> {product.description9}</p>
                <ul>
                  <li>{product.description10}</li>
                  <li>{product.description11}</li>
                  <li>{product.description12}</li>
                </ul>

                <h1>{product.description13}</h1>

                <div className="active-components-composition">
                  <figure>
                    <img src={product.image3} alt="" />
                    <figcaption>{product.description14}</figcaption>
                  </figure>
                  <figure>
                    <img src={product.image4} alt="" />
                    <figcaption>{product.description15}</figcaption>
                  </figure>
                  <figure>
                    <img src={product.image5} alt="" />
                    <figcaption>{product.description16}</figcaption>
                  </figure>
                </div>
              </>
            )}
            <div className="modal-image-product">
              {product.id === 5 && (
                <img src={product.image2} alt="до и после" />
              )}
            </div>
            {product.id === 5 && (
              <>
                <h2>{product.description8}</h2>
                <p> {product.description9}</p>
                <ul>
                  <li>{product.description10}</li>
                  <li>{product.description11}</li>
                  <li>{product.description12}</li>
                </ul>

                <h1>{product.description13}</h1>

                <div className="active-components-composition">
                  <figure>
                    <img src={product.image3} alt="до и после" />
                    <figcaption>{product.description14}</figcaption>
                  </figure>
                  <figure>
                    <img src={product.image4} alt="до и после" />
                    <figcaption>{product.description15}</figcaption>
                  </figure>
                  <figure>
                    <img src={product.image5} alt="до и после" />
                    <figcaption>{product.description16}</figcaption>
                  </figure>
                </div>
              </>
            )}
            {product.id === 8 && <p> {product.description9}</p>}
            {product.id === 8 && (
              <ul>
                <li>{product.description4}</li>
                <li>{product.description5}</li>
                <li>{product.description6}</li>
                <li>{product.description7}</li>
                <li>{product.description20}</li>
                <li>{product.description21}</li>
              </ul>
            )}
            {product.id === 8 && <p> {product.description22}</p>}
            {product.id === 8 && (
              <div className="active-components">
                <div>
                  <img src={product.image3} alt="" />
                  <h4>{product.description23}</h4>
                  <figcaption>{product.description14}</figcaption>
                </div>
                <div>
                  <img src={product.image4} alt="" />
                  <h4>{product.description24}</h4>
                  <figcaption>{product.description15}</figcaption>
                </div>
                <div className="active-components-product">
                  <img src={product.image5} alt="" />
                  <h4>{product.description25}</h4>
                  <figcaption>{product.description16}</figcaption>
                </div>
              </div>
            )}
            {product.id === 9 && (
              <>
                <h2>{product.description8}</h2>
                <ul>
                  <li>{product.description4}</li>
                  <li>{product.description5}</li>
                  <li>{product.description6}</li>
                  <li>{product.description7}</li>
                  <li>{product.description20}</li>
                  <li>{product.description21}</li>
                  <li>{product.description24}</li>
                </ul>
                <h2>{product.description25}</h2>
                <p> {product.description26}</p>
                <p> {product.description27}</p>
                <p> {product.description28}</p>

                <h2>{product.description29}</h2>

                <ul>
                  <li>{product.description30}</li>
                  <li>{product.description31}</li>
                  <li>{product.description32}</li>
                  <li>{product.description33}</li>
                  <li>{product.description34}</li>
                  <li>{product.description35}</li>
                </ul>
              </>
            )}

            {product.id === 10 && (
              <div className="active-components">
                <div className="active-components-row">
                  <img src={product.image2} alt="" />
                  <figcaption>{product.description13}</figcaption>
                </div>
                <div className="active-components-row">
                  <img src={product.image3} alt="" />
                  <figcaption>{product.description14}</figcaption>
                </div>
                <div className="active-components-row">
                  <img src={product.image4} alt="" />
                  <figcaption>{product.description15}</figcaption>
                </div>
                <div className="active-components-product active-components-row">
                  <img src={product.image5} alt="" />
                  <figcaption>{product.description16}</figcaption>
                </div>
              </div>
            )}

            {product.id === 11 && (
              <div className="active-components">
                <div className="active-components-row">
                  <img src={product.image2} alt="" />
                  <h4>{product.description23}</h4>
                  <figcaption>{product.description13}</figcaption>
                </div>
                <div className="active-components-row">
                  <img src={product.image3} alt="" />
                  <h4>{product.description23}</h4>
                  <figcaption>{product.description14}</figcaption>
                </div>
                <div className="active-components-row">
                  <img src={product.image4} alt="" />
                  <h4>{product.description23}</h4>
                  <figcaption>{product.description15}</figcaption>
                </div>
                <div className="active-components-product active-components-row">
                  <img src={product.image5} alt="" />
                  <h4>{product.description25}</h4>
                  <figcaption>{product.description16}</figcaption>
                </div>
              </div>
            )}

            {product.id === 12 && (
              <>
                <p> {product.description26}</p>
                <p> {product.description27}</p>
                <p> {product.description28}</p>
                <div className="modal-image-product">
                  <img src={product.image1} alt="" />
                </div>
                <h2>{product.description13}</h2>
                <div className="active-components">
                  <div className="active-components-row">
                    <img src={product.image2} alt="" />
                    <figcaption>{product.description13}</figcaption>
                  </div>
                  <div className="active-components-row">
                    <img src={product.image3} alt="" />
                    <figcaption>{product.description14}</figcaption>
                  </div>
                  <div className="active-components-row">
                    <img src={product.image4} alt="" />
                    <figcaption>{product.description15}</figcaption>
                  </div>
                  <div className="active-components-product active-components-row">
                    <img src={product.image5} alt="" />
                    <figcaption>{product.description16}</figcaption>
                  </div>
                </div>
              </>
            )}

            {product.id === 13 && (
              <>
                <p> {product.description26}</p>
                <p> {product.description27}</p>
                <p> {product.description28}</p>
                <p> {product.description36}</p>
                <p> {product.description37}</p>
                <p> {product.description38}</p>
                <p> {product.description39}</p>

                <h2>{product.description8}</h2>
                <ul>
                  <li>{product.description4}</li>
                  <li>{product.description5}</li>
                </ul>
                <h4>
                  КАКИЕ ПРОБЛЕМЫ РЕШИТ:{" "}
                  <span style={{ color: "#444444" }}>
                    выпадение волос, ломкость, интенсивное спутывание, сухость,
                    жёсткость.
                  </span>
                </h4>
                <p>
                  Подойдёт для ежедневного ухода за натуральными и окрашенными
                  волосами.
                </p>

                <h2>СПОСОБ ПРИМЕНЕНИЯ: </h2>
                <ul>
                  <li>
                    выдавите шампунь на ладонь, взбейте его в пену и нанесите на
                    кожу головы. Затем промойте чистой тёплой водой. При
                    необходимости повторите процедуру.
                  </li>
                  <li>
                    после шампуня используйте кондиционер или маску BC Original
                    для полноценной процедуры ухода за волосами.
                  </li>
                </ul>
              </>
            )}
            {product.id === 14 && (
              <>
                <p>
                  Восстанавливающая маска BC Original для интенсивного ухода и
                  укрепления волос (pH 3,5), в объеме 300 мл.{" "}
                </p>
                <p>
                  Восстанавливает повреждения, глубоко питает, увлажняет и
                  ухаживает за волосами. Сохраняет объём, дарит блеск, мягкость
                  и гладкость. Облегчает расчёсывание, защищает от ломкости и
                  сечения кончиков
                </p>
                <p>
                  Формула с протеинами, аминокислотами, маслом Ши, Аргановым
                  маслом и минеральным маслом, обеспечивает волосам
                  профессиональный уход — уплотнение и смягчение, восстановление
                  эластичности и здоровой структуры.
                </p>
                <p>
                  Насыщают волосы витаминами и полезными микроэлементами, дарят
                  блеск и гладкость.
                </p>
                <p>
                  Богатый натуральный состав маски обеспечивает интенсивное
                  восстановление, эффективную заботу и уход даже за самыми
                  повреждёнными волосами.
                </p>
                <p>
                  При регулярном использовании волосы становятся здоровыми,
                  крепкими, объёмными, гладкими и мягкими.
                </p>
                <p>
                  КОМУ ПОДОЙДЁТ: обладательницам окрашенных, обесцвеченных,
                  механически и химически повреждённых волос. Сохраняет эффект
                  от процедур кератинового выпрямления, нанопластики и ботокса.
                </p>
                <p>
                  КАКИЕ ПРОБЛЕМЫ РЕШИТЬ: ломкость, интенсивное спутывание,
                  сухость, жёсткость.
                </p>
                <p>
                  Подойдёт для ухода за натуральными и окрашенными волосами.
                  Используйте каждое 2-3 мытьё для лучшего результата.
                </p>
                <p>
                  Оставьте на 5-10 минут при обычном уходе и на 15-20 минут при
                  интенсивном восстановлении (1 раз в неделю). Затем тщательно
                  промойте волосы чистой водой, удалите излишки влаги и нанесите
                  термозащиту BC Original Leave In 15 в 1.
                </p>
                <h2>СПОСОБ ПРИМЕНЕНИЯ: </h2>

                <ul>
                  <li>
                    очистите кожу головы и волосы шампунем BC Original, удалите
                    излишки влаги и после нанесите маску — отступив от корней
                    5-7 см, особое внимание уделяя кончикам.
                  </li>
                </ul>
              </>
            )}
            {product.id === 15 && (
              <>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    SOS Rescue cream -
                  </span>{" "}
                  интенсивное восстановление и глубокое увлажнение волос по всей
                  длине. Комплекс двусернистых аминокислот, входящих в состав,
                  восстанавливает дисульфидные связи в структуре волоса.
                </p>
                <h2>Активные компоненты:</h2>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Гидролизованный кератин -
                  </span>{" "}
                  основной строительный материал волоса, в который входят
                  пептиды, полипептиды и аминокислоты.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Масло семян Чиа (испанский шалфей) -
                  </span>{" "}
                  содержит высокую концентрацию Омега - кислот и является мощным
                  природным антиоксидантом.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Экстракт белой орхидеи -
                  </span>{" "}
                  восстанавливает структуру волоса, улучшает гидроскопичность,
                  укрепляет кутикулу волос.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Глицерин масла сои -
                  </span>{" "}
                  содержит витамин Е и лецитин, питает структуру волос, делает
                  их гладкимим и эластичными.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Молочная кислота -
                  </span>{" "}
                  является "проводником" для всех питательных компонентов,
                  размягчает и увлажняет волосы.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Ланолин -
                  </span>{" "}
                  воск натурального происхождения, который повышает прочность
                  волос. Содержит в себе жирные аминокислоты, отвечающие за
                  эластичность волоса.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Пантенол -
                  </span>{" "}
                  глубоко проникающий увлажнитель, который стимулирует
                  обновление клеток.
                </p>

                <h2>О процедуре:</h2>

                <ul>
                  <li>
                    Комплекс позволяет разгладить, восстановить и вернуть
                    плотность волоса, придав эластичность и восполнив
                    необходимые микроэлементы. Подходит для любого типа и
                    структуры волос, включая ранее химически обработанные,а так
                    же, утратившие природный блеск и эластичность.
                  </li>
                  <li>
                    Входящие в состав, тщательно подобранные активные
                    компоненты: экстракт Белой орхидеи, уникальное по своим
                    природным качествам масло семян Чиа (испанский шалфей),
                    глицерин масла сои делают состав по истине драгоценным
                    продуктом по уходу и восстановлению волос абсолютно любого
                    типа и состояния.
                  </li>
                  <li>
                    Благодаря процедуре глубокого восстановления, волосы
                    приобретут интенсивный блеск, мягкость, перестанут путаться
                    и приобретут плотность.
                  </li>
                </ul>
              </>
            )}

            {product.id === 16 && (
              <>
                <h3>Маска BC Original домашний уход</h3>
                <p>
                  Восстанавливающая маска BC Original для интенсивного ухода и
                  укрепления волос.
                </p>
                <p>
                  Восстанавливает повреждения, глубоко питает, увлажняет и
                  ухаживает за волосами. Сохраняет объём, дарит блеск, мягкость
                  и гладкость. Облегчает расчёсывание, защищает от ломкости и
                  сечения кончиков.
                </p>
                <p>
                  Формула с протеинами, гидролизованным кератином, коллагеном и
                  маслами ши, кокоса и авокадо обеспечивает волосам
                  профессиональный уход — уплотнение и смягчение, восстановление
                  эластичности и здоровой структуры.
                </p>
                <p>
                  Пантенол, сок алоэ, растительные экстракты (крапива, шалфей,
                  календула), витамины В3 и В6, аминокислоты (аргинин) и цинк
                  насыщают волосы витаминами и полезными микроэлементами, дарят
                  блеск и гладкость.
                </p>
                <p>
                  Богатый натуральный состав маски обеспечивает интенсивное
                  восстановление, эффективную заботу и уход даже за самыми
                  повреждёнными волосами.
                </p>
                <p>
                  При регулярном использовании волосы становятся здоровыми,
                  крепкими, объёмными, гладкими и мягкими.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Кому подойдёт:
                  </span>
                  обладательницам окрашенных, обесцвеченных, механически и
                  химически повреждённых волос. Сохраняет эффект от процедур
                  кератинового выпрямления, нанопластики и ботокса.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Какие проблемы решит:
                  </span>
                  ломкость, интенсивное спутывание, сухость, жёсткость.
                </p>
                <p>
                  Подойдёт для ухода за натуральными и окрашенными волосами.
                  Используйте каждое 2-3 мытьё для лучшего результата.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Способ применения:
                  </span>
                  очистите кожу головы и волосы шампунем BC Original, удалите
                  излишки влаги и после нанесите маску — отступив от корней 10
                  см, особое внимание уделяя кончикам.
                </p>
                <p style={{ marginBottom: "4rem" }}>
                  Оставьте на 5-10 минут при обычном уходе и на 15-20 минут при
                  интенсивном восстановлении (1 раз в неделю). Затем тщательно
                  промойте волосы чистой водой, удалите излишки влаги и нанесите
                  термозащиту BC Original Leave In 15 в 1.
                </p>
              </>
            )}
            {product.id === 17 && (
              <>
                <h3>Шампунь BC Original домашний уход</h3>
                <p>
                  Восстанавливающий шампунь BC Original для роста и против
                  выпадения волос [рН-5.5].
                </p>
                <p>
                  Деликатно очищает кожу головы и волосы по длине, придаёт
                  объём, дарит блеск, мягкость и гладкость.
                </p>
                <p>
                  Ухаживает за кожей головы: дарит чувство комфорта без
                  стянутости и сухости, увлажняет и успокаивает.
                </p>
                <p>
                  Формула с протеинами, гидролизованным кератином, коллагеном и
                  маслом авокадо обеспечивает волосам не только бережное
                  очищение, но и профессиональный уход — питание и увлажнение,
                  уплотнение и смягчение, восстановление и повышение
                  эластичности.
                </p>
                <p>
                  Пантенол, сок алоэ, растительные экстракты (крапива, шалфей,
                  календула), витамины В3 и В6, аминокислоты (аргинин) и цинк в
                  составе заботятся о коже головы и волосяных луковицах.
                  Увлажняют и успокаивают, насыщают витаминами и полезными
                  микроэлементами.
                </p>
                <p>
                  Богатый натуральный состав шампуня обеспечивает усиленный
                  рост, а также уменьшает выпадение волос.
                </p>
                <p>
                  При регулярном использовании волосы становятся здоровыми,
                  крепкими, объёмными, гладкими и мягкими.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Кому подойдёт:
                  </span>
                  обладательницам комбинированной, сухой и обычной кожи головы.
                  Также для окрашенных, обесцвеченных, механически и химически
                  повреждённых волос. Сохраняет эффект от процедур кератинового
                  выпрямления, нанопластики и ботокса.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Какие проблемы решит:
                  </span>
                  выпадение волос, ломкость, интенсивное спутывание, сухость,
                  жёсткость.
                </p>
                <p>
                  Подойдёт для ежедневного ухода за натуральными и окрашенными
                  волосами.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Способ применения:
                  </span>
                  выдавите шампунь на ладонь, взбейте его и нанесите на кожу
                  головы. Затем промойте чистой тёплой водой. При необходимости
                  повторите процедуру.
                </p>
                <p style={{ marginBottom: "4rem" }}>
                  После используйте кондиционер или маску BC Original для
                  полноценной процедуры ухода за волосами.
                </p>
              </>
            )}
            {product.id === 18 && (
              <>
                <h3>Кондиционер BC Original для домашнего ухода 250 мл</h3>
                <p>
                  Восстанавливающий кондиционер BC Original для роста и
                  укрепления волос.
                </p>
                <p>
                  Глубоко питает, увлажняет и ухаживает за волосами. Сохраняет
                  объём, дарит блеск, мягкость и гладкость. Облегчает
                  расчёсывание, защищает от ломкости и сечения кончиков.
                </p>
                <p>
                  Формула с протеинами, гидролизованным кератином, коллагеном и
                  маслами ши, кокоса и авокадо обеспечивает волосам
                  профессиональный уход — уплотнение и смягчение, восстановление
                  эластичности и здоровой структуры.
                </p>
                <p>
                  Пантенол, сок алоэ, растительные экстракты (крапива, шалфей,
                  календула), витамины В3 и В6, аминокислоты (аргинин) и цинк
                  насыщают волосы витаминами и полезными микроэлементами, дарят
                  блеск и гладкость.
                </p>
                <p>
                  Богатый натуральный состав кондиционера обеспечивает
                  интенсивное восстановление, эффективную заботу и уход даже за
                  самыми повреждёнными волосами.
                </p>
                <p>
                  При регулярном использовании волосы становятся здоровыми,
                  крепкими, объёмными, гладкими и мягкими.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Кому подойдёт:
                  </span>
                  обладательницам окрашенных, обесцвеченных, механически и
                  химически повреждённых волос. Сохраняет эффект от процедур
                  кератинового выпрямления, нанопластики и ботокса.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Какие проблемы решит:
                  </span>
                  ломкость, интенсивное спутывание, сухость, жёсткость.
                </p>
                <p>
                  Подойдёт для ежедневного ухода за натуральными и окрашенными
                  волосами.
                </p>
                <p>
                  <span style={{ fontWeight: "700", color: "black" }}>
                    Способ применения:
                  </span>
                  очистите кожу головы и волосы шампунем BC Original, удалите
                  излишки влаги и после нанесите кондиционер — отступив от
                  корней 10 см, особое внимание уделяя кончикам.
                </p>
                <p style={{ marginBottom: "4rem" }}>
                  Оставьте на 5-10 минут, затем тщательно промойте волосы чистой
                  водой, удалите излишки влаги и нанесите термозащиту BC
                  Original Leave In 15 в 1.
                </p>
              </>
            )}

            {product.id === 19 && (
              <>
                <p>
                  Ботокс-Глянец ARGAN OIL Ztox, в объеме 950 г. - это
                  обогащенный аргановым маслом комплекс, интенсивно увлажняет и
                  питает волосы необходимыми витаминами и микроэлементами.{" "}
                </p>
                <ul>
                  <li>
                    Дисциплинирует волосы, возвращает гладкость и
                    непревзойденный блеск.{" "}
                  </li>
                  <li>Придает эластичность и плотность волосам. </li>
                  <li>
                    Подходит для любого типа и структуры волос, включая ранее
                    химически обработанные волосы.{" "}
                  </li>
                  <li>Убирает пушистость и разглаживает волосы.</li>
                </ul>
                <h2>Показания:</h2>
                <ul>
                  <li>
                    натуральные, очень пористые волосы, утратившие природный
                    блеск и эластичность{" "}
                  </li>
                  <li>сухие и ломкие, тонкие, ослабленные волосы</li>
                  <li>
                    после химического воздействия хим. завивка, хим.
                    выпрямление, окрашивание, блондирование{" "}
                  </li>
                  <li>
                    нормальный тип волос, для придания дополнительного блеска.
                  </li>
                </ul>
                <p style={{ marginBottom: "4rem" }}>
                  Эффект от процедуры сохраняется от 2 до 4 месяцев.
                </p>
              </>
            )}

            {product.id === 20 && (
              <>
                <p>
                  BC Original BTX CREMA - это активная система, направленная на
                  реконструкцию волос. Обеспечивает гарантированный результат с
                  первой процедуры для любого типа волос. Обладает легким
                  эффектом разглаживания и глубоким кондиционирующим действием.
                </p>
                <p>
                  В состав данной линии входит бесценная коллеция масел, таких
                  как масло Ши, Чиа белой, фракционированное кокосовое масло.
                  Они обладают уникальным богатым комплексом необходимых
                  витаминов, антиоксидантов, минералов, полезных кислот и других
                  питательных веществ, оказывающих огромнейший положительный
                  эффект на состояние здоровья волос.
                </p>
              </>
            )}
            {product.id === 21 && (
              <>
                <h3>BC Original Brazilian Mask Regeneration 2 шаг</h3>
                <p>
                  Активный состав Brazilian Mask Regeneration из серии BC
                  Original – оригинальная формула с кератином, которая проникает
                  в глубь волоса и восстанавливает его по всей длине. Состав
                  легко наносится и распределяется по длине волос, во время
                  запечатывания происходит восстановительный процесс с эффектом
                  выпрямления.
                </p>
              </>
            )}
            {product.id === 22 && (
              <>
                <h3>BC Original Brazilian Restoration Mask 3 шаг</h3>
                <p>
                  Маска Restoration Mask из серии BC Original завершает
                  процедуру выпрямления и восстановления волос. Маска
                  уравновешивает кислотно-щелочной баланс волосяного полотна,
                  что позволяет закончить процедуру демонстрацией гладких и
                  блестящих волос.
                </p>
              </>
            )}
            {product.id === 23 && (
              <>
                <ul>
                  <li>{product.description4}</li>
                  <li>{product.description5}</li>
                  <li>{product.description6}</li>
                  <li>{product.description7}</li>
                </ul>
                <div className="modal-image-product">
                  <img src={product.image2} alt="до и после" />
                </div>
                <h2>{product.description8}</h2>
                <p> {product.description9}</p>

                <ul>
                  <li>{product.description10}</li>
                  <li>{product.description11}</li>
                  <li>{product.description12}</li>
                </ul>

                <h1>{product.description13}</h1>

                <div className="active-components-composition">
                  <figure>
                    <img src={product.image3} alt="" />
                    <figcaption>{product.description14}</figcaption>
                  </figure>
                  <figure>
                    <img src={product.image4} alt="" />
                    <figcaption>{product.description15}</figcaption>
                  </figure>
                  <figure>
                    <img src={product.image5} alt="" />
                    <figcaption>{product.description16}</figcaption>
                  </figure>
                </div>
              </>
            )}
            {product.id === 24 && (
              <>
                <ul>
                  <li>{product.description4}</li>
                  <li>{product.description5}</li>
                  <li>{product.description6}</li>
                  <li>{product.description7}</li>
                </ul>
                <div className="modal-image-product">
                  <img src={product.image2} alt="до и после" />
                </div>
                <h2>{product.description8}</h2>
                <p> {product.description9}</p>

                <ul>
                  <li>{product.description10}</li>
                  <li>{product.description11}</li>
                  <li>{product.description12}</li>
                </ul>

                <h1>{product.description13}</h1>

                <div className="active-components-composition">
                  <figure>
                    <img src={product.image3} alt="" />
                    <figcaption>{product.description14}</figcaption>
                  </figure>
                  <figure>
                    <img src={product.image4} alt="" />
                    <figcaption>{product.description15}</figcaption>
                  </figure>
                  <figure>
                    <img src={product.image5} alt="" />
                    <figcaption>{product.description16}</figcaption>
                  </figure>
                </div>
              </>
            )}
            {product.id === 25 && (
              <>
                <span>
                  Брендированный стайлер ESK Professional для кератинового
                  выпрямления волос и ботокса для волос:
                </span>
                <ul>
                  <li>Эргономичный дизайн</li>
                  <li>
                    Регулировка температуры-шаг выставления температуры 5
                    градусов (от 50°С до 232°С)
                  </li>
                  <li>
                    Плавающие пластины с титановым покрытием (45 на 95 мм)
                  </li>
                  <li>Сенсорный LED дисплей </li>
                  <li>Вращающийся шнур (360 °)</li>
                </ul>
              </>
            )}
            {product.id === 26 && (
              <>
                <p>
                  Четырёхступенчатая система холодного восстановления волос
                  подверженных химическим и механическим воздействиям.
                  Способствует восстановлению дисульфидных связей и
                  эластинизации даже самых поврежденных волос.
                </p>
                <h3 style={{ marginBottom: "0.5rem" }}>Состав набора</h3>
                <p style={{ fontWeight: "bold" }}>Shampoo Relief (Шаг 1)</p>
                <p>
                  Мягкий шампунь для сухих и поврежденных волос. Бережно удаляет
                  загрязнения и подготавливает волосы к процедуре
                  восстановления. рН 4,5-5,5
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Protein Mineral Relief (Шаг 2)
                </p>
                <p>
                  Минерально-протеиновый спрей с экстрактами сахаромецитов
                  (ферментированных в присутствии ионов цинка, магния и меди).
                  Насыщает волос изнутри и открывает чешуйки для более лёгкого
                  проникновения следующего средства. рН 7,0-8,0
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Treatment Mask Relief (Шаг 3)
                </p>
                <p>
                  Питательная маска с комплексом гидролизованных протеинов сои,
                  аминокислот кератина и косметических масел. Способствует
                  восстановлению структуры кортекса волоса и "заполнению"
                  пустот, образованных в результате повреждения волос . рН
                  4,0-5,0
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Protein Repair Relief (Шаг 4)
                </p>
                <p>
                  Протеиновый завершающий спрей с аминокислотами кератина и
                  косметическими маслами. Сглаживает кутикулярный слой и
                  "запечатывает" в волосе необходимые для восстановления
                  протеины, минералы и аминокислоты. рН 6,5
                </p>

                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Для каких волос подойдет:
                  </span>{" "}
                  волосы повреждённые частыми обесцвечиваниями, окрашиваниями на
                  высоких оксидах, химическими завивками и механическими
                  воздействиями ( частые укладки, выпрямление щипцами и т.д.)
                </p>

                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Рекомендуемый курс:
                  </span>{" "}
                  для волос 1-3 степени повреждения (1 раз в месяц); для волос
                  4-5 степени повреждения (курс из 5-6 процедур с интервалом
                  7-10 дней)
                </p>

                <p>
                  <span style={{ fontWeight: "bold" }}>Результат:</span> мягкие,
                  блестящие и эластичные волосы. Минимизирование сечения,
                  ломкости, сухости и пористости.
                </p>

                <p style={{ marginBottom: "4rem" }}>
                  Также процедура минерально-протеинового восстановления Relief
                  подойдёт после окрашивания для поддержания качества волос.{" "}
                </p>
              </>
            )}
            {product.id === 27 && (
              <>
                <h3>Капиллярное восстановление волос Argan Oil New Vip</h3>
                <p>
                  {" "}
                  Argan Oil - универсальная система восстановления для всех
                  типов волос. Бразильский ботокс для волос.
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Selante Ztox Oleo de Argan
                  </span>{" "}
                  — капиллярное восстановление волос, глубокое питание,
                  увлажнение и выравнивание структуры волоса.{" "}
                </p>

                <p>
                  - Обогащенный аргановым маслом комплекс интенсивно увлажняет и
                  питает волосы необходимыми витаминами и микроэлементами,
                  блокирует свободные радикалы в структуре волос.
                </p>

                <p>
                  - Дисциплинирует волосы, возвращает гладкость и
                  непревзойденный блеск.
                </p>

                <p>- Придает эластичность и плотность волосам.</p>
                <p>
                  - Подходит для любого типа и структуры волос, включая ранее
                  химически обработанные волосы.
                </p>
                <p>- Убирает пушистость и дисциплинирует волосы.</p>

                <h4>Показания:</h4>
                <ul>
                  <li>натуральные очень пористые волосы</li>
                  <li>утратившие природный блеск и эластичность</li>
                  <li>сухие и ломкие</li>
                  <li>тонкие, ослабленные волосы</li>
                  <li>
                    после химического воздействия (хим. завивка, хим.
                    выпрямление, окрашивание, блондирование)
                  </li>
                  <li>
                    нормальный тип волос, для придания дополнительного блеска
                  </li>
                </ul>

                <p style={{ marginBottom: "4rem" }}>
                  <span style={{ fontWeight: "bold" }}>Аргановое масло</span> —
                  уникальное марокканское масло, получаемое из косточек
                  арганового дерева. Очень эффективное и полезное питательное
                  масло, насыщенное различными жирными кислотами (олеиновой,
                  линолевой, пальмитиновой и стеариновой), витамином Е и
                  скваленом. Эти компоненты эффективно увлажняют и питают
                  волосы, придают им блеск и гладкость.
                </p>
              </>
            )}
            {product.id === 28 && (
              <>
                <h3>Shampoo Relief</h3>
                <p>
                  Специальный шампунь для сухих, физически и химически
                  поврежденных волос. Восстанавливает природную мягкость и
                  естественный блеск благодаря протеиновому комплексу и
                  аминокислотам.
                </p>
              </>
            )}
            {product.id === 29 && (
              <>
                <h3>Protein Mineral Relief</h3>
                <p>
                  (2 шаг в процедуре минерально-протеинового восстановления
                  Relief)
                </p>
                <p>
                  Минерально-протеиновый спрей с экстрактами сахаромецитов
                  (ферментированных в присутствии ионов цинка, магния и меди).
                  Насыщает волос изнутри и открывает чешуйки для более лёгкого
                  проникновения следующего средства.
                </p>
                <p>В составе Protein Mineral входят :</p>
                <p>- Saccharomyces Copper Ferment</p>
                <p>
                  Ингредиент, способствующий̆ выработке коллагена и образования
                  эластина. Также ионы меди являются катализатором процесса
                  образования дисульфидных сшивок при кератинизации.
                </p>
                <p>- Saccharomyces Magnesium Ferment</p>
                <p>Антиоксидант и проводник пептидов</p>
                <p>
                  Ингредиент, обладающий антиоксидантными свойствами и
                  способствующий заполнению пустот в волосах. Цинк также
                  помогает поддерживать нормальный уровень витамина А в волосе.
                </p>
                <p>- Propylene Glycol</p>
                <p>
                  Влагоудерживающее веществ. Облегчает расчёсывание, увеличивает
                  эластичность и прочность волос, а также увлажняет их. Молекула
                  пропиленгликоля также выполняет функции растворителя и
                  транспортировщика других компонентов (в данном случае воды и
                  сахаромицетов) благодаря небольшому размеру.
                </p>
                <p>- Cetrimonium Chloride</p>
                <p>
                  Четвертичная аммонийная соль, которая имеет положительный
                  заряд, притягивающийся к слабоотрицательному заряду белков
                  волоса, оказывая антистатический эффект.⠀
                </p>
                <p>- Myristyl Alcohol, Cetyl Alcohol, Lauryl Alcohol</p>
                <p>
                  Жирные спирты (не путать с простыми и ароматическими), которые
                  оказывают кондиционирующий и увлажняющий эффект. Обладают
                  эмульгирующими, смягчающими и окклюзивными свойствами.
                </p>
                <p style={{ fontWeight: "bold", marginTop: "1.8rem" }}>
                  Таким образом второй шаг из набора Relief выполняет следующие
                  функции:
                </p>
                <ul>
                  <li>
                    кондиционирует волосы после применения 1 шага (шампуня)
                  </li>
                  <li>облегчает проникновение компонентов 3 шага (маски)</li>
                  <li>
                    начинает процесс образование дисульфидных сшивок (поэтому
                    для большей эффективности 2 шаг нужно смывать на 80%, а не
                    полностью)
                  </li>
                </ul>
              </>
            )}
            {product.id === 30 && (
              <>
                <h3>Treatment Mask Relief</h3>
                <p>
                  Питательная маска для заполнения пустот в кортексе, то есть -
                  глубокого восстановления волос.
                </p>
              </>
            )}
            {product.id === 31 && (
              <>
                <h3>Protein Repair Relief</h3>
                <p>
                  Завершающий этап. Это питательное средство сглаживает внешний
                  кутикулярный слой и восстанавливает естественный блеск волос,
                  мгновенно делая их мягкими, блестящими и полными сил.
                </p>
              </>
            )}
            {product.id === 32 && (
              <>
                <h3>Минерально-протеиновое восстановление Relief</h3>
                <p>
                  Четырёхступенчатая система холодного восстановления волос
                  подверженных химическим и механическим воздействиям.
                  Способствует восстановлению дисульфидных связей и
                  эластинизации даже самых поврежденных волос.
                </p>
                <h3 style={{ marginBottom: "0.5rem" }}>Состав набора</h3>
                <p style={{ fontWeight: "bold" }}>Shampoo Relief (Шаг 1)</p>
                <p>
                  Мягкий шампунь для сухих и поврежденных волос. Бережно удаляет
                  загрязнения и подготавливает волосы к процедуре
                  восстановления. рН 4,5-5,5
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Protein Mineral Relief (Шаг 2)
                </p>
                <p>
                  Минерально-протеиновый спрей с экстрактами сахаромецитов
                  (ферментированных в присутствии ионов цинка, магния и меди).
                  Насыщает волос изнутри и открывает чешуйки для более лёгкого
                  проникновения следующего средства. рН 7,0-8,0
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Treatment Mask Relief (Шаг 3)
                </p>
                <p>
                  Питательная маска с комплексом гидролизованных протеинов сои,
                  аминокислот кератина и косметических масел. Способствует
                  восстановлению структуры кортекса волоса и "заполнению"
                  пустот, образованных в результате повреждения волос . рН
                  4,0-5,0
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Protein Repair Relief (Шаг 4)
                </p>
                <p>
                  Протеиновый завершающий спрей с аминокислотами кератина и
                  косметическими маслами. Сглаживает кутикулярный слой и
                  "запечатывает" в волосе необходимые для восстановления
                  протеины, минералы и аминокислоты. рН 6,5
                </p>

                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Для каких волос подойдет:
                  </span>{" "}
                  волосы повреждённые частыми обесцвечиваниями, окрашиваниями на
                  высоких оксидах, химическими завивками и механическими
                  воздействиями ( частые укладки, выпрямление щипцами и т.д.)
                </p>

                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Рекомендуемый курс:
                  </span>{" "}
                  для волос 1-3 степени повреждения (1 раз в месяц); для волос
                  4-5 степени повреждения (курс из 5-6 процедур с интервалом
                  7-10 дней)
                </p>

                <p>
                  <span style={{ fontWeight: "bold" }}>Результат:</span> мягкие,
                  блестящие и эластичные волосы. Минимизирование сечения,
                  ломкости, сухости и пористости.
                </p>

                <p style={{ marginBottom: "4rem" }}>
                  Также процедура минерально-протеинового восстановления Relief
                  подойдёт после окрашивания для поддержания качества волос.
                </p>
              </>
            )}
            {product.id === 33 && (
              <>
                <h3>Shampoo Relief</h3>
                <p>
                  Специальный шампунь для сухих, физически и химически
                  поврежденных волос. Восстанавливает природную мягкость и
                  естественный блеск благодаря протеиновому комплексу и
                  аминокислотам.
                </p>
              </>
            )}
            {product.id === 34 && (
              <>
                <h3>Treatment Mask Relief</h3>
                <p>
                  Питательная маска для заполнения пустот в кортексе, то есть -
                  глубокого восстановления волос.
                </p>
              </>
            )}
            {product.id === 35 && (
              <>
                <h3>Кондиционер для волос No Rinse Relief</h3>
                <p>
                  Необходимое средство в домашнем уходе для всех обладательниц
                  пористых, сильно секущихся и ослабленных волос. Если ты хочешь
                  отрастить сильные и здоровые волосы, то несмываемый
                  кондиционер от Relief именно для тебя.
                </p>
                <p>
                  No Rinse эффективно работает на волосах благодаря следующим
                  компонентам:
                </p>
                <p>- Пантотенат кальция</p>
                <p>
                  Пантотеновая кислота или пантотенат кальция способствует
                  увлажнению и уменьшению потери влаги на кутикульрном слое
                  волоса. Сохраняет эластичность и защищает от УФ-лучей.
                </p>
                <p>- Линолевая кислота</p>
                <p>
                  Относится к полиненасыщенным незаменимым жирным кислотам, а
                  именно к классу Омега-6. Линолевая кислота входит в состав
                  гидролипидной плёнки, удерживающей необходимую влагу и
                  выполняющей защитную функцию в волосе.
                </p>
                <p>- Гидролизованные протеины пшеницы и сои</p>
                <p>
                  Природные антиоксиданты, стимулирующие синтез коллагена и
                  выравнивающие микрорельеф кутикулы волос.
                </p>
                <p>- Экстракт конского каштана</p>
                <p>
                  Данный компонент способствует поглощению УФ-лучей и синтезу
                  коллагена
                </p>
                <ul>Защищает от воздействия УФ-лучей и высоких температур</ul>
              </>
            )}
            {product.id === 36 && (
              <>
                <h3>Холодный уход для волос с коллагеном</h3>
                <p>
                  Подходит для восстановления хрупких, повреждённых, лишенных
                  блеска и плотности волос. Процедура оптимально наполняет
                  волосы питательными веществами растительного происхождения,
                  бережно воздействует на структуру волос, занимает немного
                  времени (меньше часа) и имеет накопительный эффект. Состав не
                  имеет искусственных отдушек и не утяжеляет волосы.
                </p>
                <h3>Показания:</h3>
                <ul>
                  <li>
                    Длинные или средней длины волосы, натуральные или
                    окрашенные;
                  </li>
                  <li>
                    Волосы после химического, механического, термического
                    повреждения;
                  </li>
                  <li>Волосы после воздействия солнечного излучения;</li>
                  <li>Волосы,утратившие блеск и жизненную силу;</li>
                  <li>Истонченные и легко спутывающиеся концы волос;</li>
                  <li>Пористые волосы;</li>
                  <li>Пушистость вьющихся волос.</li>
                </ul>
                <h3>Результат:</h3>
                <ul>
                  <li>Повышается упругость и прочность волос;</li>
                  <li>
                    Повышается защитная функция волос (волосы защищены от
                    вредного влияния высоких и низких температур, ветра, жесткой
                    воды);
                  </li>
                  <li>Восстанавливается текстура волосяного стержня;</li>
                  <li>Блеск волос;</li>
                  <li>Снимается электростатичность;</li>
                  <li>Удерживается оптимальный уровень влаги в волосе.</li>
                </ul>
                <h3>Комплекс средств ботокса для волос с коллагеном</h3>
                <ul>
                  <li>
                    Подготавливающий шампунь Therapy System Шампунь содержит
                    растительные био-экстракты, которые мягко очищают волосы и
                    кожу головы, стимулируя микроциркуляцию крови, способствует
                    естественному возобновлению роста волос и предотвращает
                    излишнюю жирность у корней, устраняет шелушение. Волосы
                    становятся мягкими, блестящими и здоровыми.
                  </li>
                  <li>
                    Смываемая маска Iside Detangling Маска нового поколения.
                    Содержит натуральные масла (жожоба, соя, миндаль, ланолин),
                    которые делают волосы мягкими, блестящими и легко
                    расчесываемыми, обеспечивает антистатический эффект.
                    Подходит для всех типов волос.
                  </li>
                  <li>
                    Концентрированный флюид Silkier Cream Улучшает структуру
                    волос, придает блеск тусклым и объем сухим и химически
                    поврежденным волосам, формирует защитный слой, который
                    защищает кутикулу от внешних неблагоприятных воздействий.
                  </li>
                </ul>
              </>
            )}
            {product.id === 37 && (
              <>
                <h3>Холодный уход для волос с коллагеном</h3>
                <p>
                  Подходит для восстановления хрупких, повреждённых, лишенных
                  блеска и плотности волос. Процедура оптимально наполняет
                  волосы питательными веществами растительного происхождения,
                  бережно воздействует на структуру волос, занимает немного
                  времени (меньше часа) и имеет накопительный эффект. Состав не
                  имеет искусственных отдушек и не утяжеляет волосы.
                </p>
                <h3>Показания:</h3>
                <ul>
                  <li>
                    Длинные или средней длины волосы, натуральные или
                    окрашенные;
                  </li>
                  <li>
                    Волосы после химического, механического, термического
                    повреждения;
                  </li>
                  <li>Волосы после воздействия солнечного излучения;</li>
                  <li>Волосы,утратившие блеск и жизненную силу;</li>
                  <li>Истонченные и легко спутывающиеся концы волос;</li>
                  <li>Пористые волосы;</li>
                  <li>Пушистость вьющихся волос.</li>
                </ul>
                <h3>Результат:</h3>
                <ul>
                  <li>Повышается упругость и прочность волос;</li>
                  <li>
                    Повышается защитная функция волос (волосы защищены от
                    вредного влияния высоких и низких температур, ветра, жесткой
                    воды);
                  </li>
                  <li>Восстанавливается текстура волосяного стержня;</li>
                  <li>Блеск волос;</li>
                  <li>Снимается электростатичность;</li>
                  <li>Удерживается оптимальный уровень влаги в волосе.</li>
                </ul>
                <h3>Комплекс средств ботокса для волос с коллагеном</h3>
                <ul>
                  <li>
                    Подготавливающий шампунь Therapy System Шампунь содержит
                    растительные био-экстракты, которые мягко очищают волосы и
                    кожу головы, стимулируя микроциркуляцию крови, способствует
                    естественному возобновлению роста волос и предотвращает
                    излишнюю жирность у корней, устраняет шелушение. Волосы
                    становятся мягкими, блестящими и здоровыми.
                  </li>
                  <li>
                    Смываемая маска Iside Detangling Маска нового поколения.
                    Содержит натуральные масла (жожоба, соя, миндаль, ланолин),
                    которые делают волосы мягкими, блестящими и легко
                    расчесываемыми, обеспечивает антистатический эффект.
                    Подходит для всех типов волос.
                  </li>
                  <li>
                    Концентрированный флюид Silkier Cream Улучшает структуру
                    волос, придает блеск тусклым и объем сухим и химически
                    поврежденным волосам, формирует защитный слой, который
                    защищает кутикулу от внешних неблагоприятных воздействий.
                  </li>
                </ul>
              </>
            )}
            {product.id === 38 && (
              <>
                <h3>Шампунь Deep Cleansing</h3>
                <p>
                  Deep Cleansing SHAMPOO Belinha Brazilian Therapy.
                  Подготавливающий шампунь глубокой очистки — интенсивно очищает
                  и расскрывает кутикульные слои волоса, подготавливая к
                  проведению процедуры.{" "}
                </p>
              </>
            )}
            {product.id === 39 && (
              <>
                <h3>Шампунь для блеска волос Therapy System </h3>
                <p>
                  Очищающий шампунь, который способствует росту волос. Походит
                  для нормальной и жирной кожи головы.
                </p>
              </>
            )}
            {product.id === 40 && (
              <>
                <h3>Шампунь для блеска волос Therapy System</h3>
                <p>
                  Очищающий шампунь, который способствует росту волос. Походит
                  для нормальной и жирной кожи головы
                </p>
              </>
            )}
            {product.id === 41 && (
              <>
                <h3>Маска Detangling Mask</h3>
                <p>
                  Универсальная маска Iside Detangling Mask, которая подходит
                  для домашнего использования. Преимущества маски в легком
                  использовании – наносится после мытья на 5-10 минут и быстром
                  воздействии. Уже после первого применения наблюдается глубокое
                  питание волос, исчезает спутанность и наэлектризованность
                  волос.
                </p>
                <p>
                  Универсальная маска Iside Detangling Mask, которая подходит
                  для домашнего использования. Преимущества маски в легком
                  использовании – наносится после мытья на 5-10 минут и быстром
                  воздействии. Уже после первого применения наблюдается глубокое
                  питание волос, исчезает спутанность и наэлектризованность
                  волос.
                </p>
                <p>
                  Маска имеет приятную консистенцию и тает на волосах во время
                  нанесения.
                </p>
                <p>
                  Благодаря содержанию в составе масла жожоба, волосы
                  увлажняются изнутри и покрываются защитной пленкой за счет
                  липидов.
                </p>
                <p>
                  Миндальное масло также увлажняет волосы и делает их
                  эластичными, возвращая волосам природный блеск. Масло сои в
                  составе Iside, выполняет функцию восстановления и насыщения
                  волос из-за высокого содержания лецитина. Также оно защищает
                  напитанные и увлажненные волосы от быстрого вымывания
                  питательных веществ. И самый главный, компонент, который
                  удерживает влагу в волосах – ланолин высокого качества.
                </p>
                <p>
                  Большой объем маски Iside Detangling Mask и невысокая цена
                  делает маску экономичной и позволяет надолго забыть о
                  проблемах спутанных и электризованных волос.
                </p>
                <p>
                  Регулярное применение маски делает волосы гладкими, блестящими
                  и послушными, что особенно важно в зимний период.
                </p>
                <p style={{ marginBottom: "3rem" }}>
                  Подходит для всех типов волос.
                </p>
              </>
            )}
            {product.id === 42 && (
              <>
                <h3>Концентрированный флюид Silkier Cream</h3>
                <p>
                  Придает шелковистость, распутывает волосы, разглаживает,
                  защищает, питает, регенерирует, термозащита.
                </p>
                <p>
                  Разглаживающий концентрированный флюид придающий шелковистый
                  вид и блестящий эффект. Глубоко питает обезвоженные волосы,
                  окрашенные, сухие и посеченные, придавая им плотность, объем и
                  блеск. Благодаря эфирным маслам и натуральным силиконам при
                  регулярном использовании реконструирует поврежденные кончики.
                  Придает мягкость и непревзойденный блеск.
                </p>
              </>
            )}
            {product.id === 43 && (
              <>
                <h3>Концентрированный флюид Silkier Cream</h3>
                <p>
                  Придает шелковистость, распутывает волосы, разглаживает,
                  защищает, питает, регенерирует, термозащита.
                </p>
                <p>
                  Разглаживающий концентрированный флюид придающий шелковистый
                  вид и блестящий эффект. Глубоко питает обезвоженные волосы,
                  окрашенные, сухие и посеченные, придавая им плотность, объем и
                  блеск. Благодаря эфирным маслам и натуральным силиконам при
                  регулярном использовании реконструирует поврежденные кончики.
                  Придает мягкость и непревзойденный блеск.
                </p>
              </>
            )}
            {product.id === 44 && (
              <>
                <h3>Max Pro: классический + паровой стайлер</h3>
                <p>
                  Благодаря специальному эликсиру, 100% титановые пластины в
                  стайлере создают пар содержащий природные масла и витамины для
                  волос, который заполняет чешуйки кутикулярного слоя.
                  Температурный эффект в свою очередь закрывает чешуйки,
                  придавая каждому волосу шелковистость и жизненную силу. После
                  процедуры волосы становятся блестящими и гладкими. А
                  технология отрицательных ионов, которые источают титановые
                  пластины, нейтрализует статическое электричество.
                </p>
                <p>
                  Выпрямитель поддерживает постоянную температуру по всей
                  пластине, без скачков и перепадов температурного режима.
                  Настроить нужную температуру можно благодаря удобному
                  ЖК-дисплею, диапазон от 150°C до 230°C с шагом переключения
                  10°C. Также присутствует функция автоматического отключения
                  после 60 минут работы.
                </p>
              </>
            )}
            {product.id === 45 && (
              <>
                <h3>Шампунь Geo Vita Energizing </h3>
                <p>
                  Линия «Geo Vita Energizing» разработана для профилактики и
                  лечения выпадения волос. Курс детокса способствует укреплению
                  корней волос, нормализации кровообращения кожи головы, в
                  результате чего устанавливается правильное питание волосяных
                  луковиц. После курса «Geo Vita Energizing» происходит рост
                  новых волос. Проведение процедуры включает проведение двух
                  видов массажа - энергичного и успокаивающего, что способствует
                  более глубокому проникновению питательных веществ в кожу
                  головы. Мягкий шампунь нежно очищает корни от загрязнений.
                  Процедура приятна как клиенту так и мастеру, так как все
                  средства имеют приятный естественный запах. Время проведения
                  процедуры не более 1 часа.
                </p>
              </>
            )}
            {product.id === 46 && (
              <>
                <h3>Эссенция Geo Vita Energizing Essence</h3>
                <p>
                  Смесь ревитализирующих эссенций для предотвращения выпадения
                  волос. Эффективна при проблемах с недостаточным питанием
                  волосяных луковиц.
                </p>
              </>
            )}
            {product.id === 47 && (
              <>
                <h3>Лосьон Geo Vita Energizing Lotion</h3>
                <p>
                  Лосьон с эфирными маслами для питания и стимуляции роста
                  волос. Делает волосы сильные и объемные, за счет повышения
                  физиологической активности волосяного фолликула.
                </p>
              </>
            )}
            {product.id === 48 && (
              <>
                <h3>Шампунь против выпадения волос Geo Vita Energizing</h3>
                <p>
                  Деликатный шампунь с эфирными маслами. Эффективное очищение с
                  учетом уровня кислотности кожи. Протеины и витамины питают
                  волосы, придавая им блеск и объем. Делает волосы более
                  послушные.
                </p>
              </>
            )}
            {product.id === 49 && (
              <>
                <h3>Лосьон Geo Vita Soothing Lotion 10 ампул по 8 мл</h3>
                <p>
                  Благодаря ромашке и ее био-активным компонентам, лосьон
                  освежает и снимает покраснение, восстанавливая биологический
                  цикл и гарантирует правильное питание волосяных луковиц, что
                  заметно по постепенному уменьшению шелушения кожи головы.
                  Благодаря эфирным маслам, кожа головы восстанавливает здоровый
                  цвет.
                </p>
              </>
            )}
            {product.id === 50 && (
              <>
                <h3>Эссенция Geo Vita Geoplus Essence</h3>
                <p>
                  Улучшает циркуляцию лимфы, восстанавливая поступление
                  кислорода. Предотвращает выпадение волос и ускоряет их
                  естественный рост. Витамины А и Е,эфирные масла бергамота,
                  герани и эвкалипта помогают вывести токсины их кожи головы.
                  Предотвращает появление свободных радикалов.
                </p>
              </>
            )}
            {product.id === 51 && (
              <>
                <h3>Шампунь против перхоти Geo Vita Purifying</h3>
                <p>
                  Благодаря природным компонентам, включая эфирные масла, цинк,
                  минералы и pH кислоты, шампунь восстанавливает флору кожи
                  головы и эффективно восстанавливает баланс. Перхоть исчезает,
                  волосы становятся сильными, блестящими, объемными и
                  послушными.
                </p>
              </>
            )}
            {product.id === 52 && (
              <>
                <h3>Эссенция Geo Vita Soothing Essence 50 мл</h3>
                <p>
                  Благодаря ромашке и ее био-активным компонентам, лосьон
                  освежает и снимает покраснение. Восстанавливает кровоснабжение
                  кожи головы и баланс pH. Комплекс обогащен витаминами и
                  минералами. Средство восстанавливает бактериальную микрофлору
                  кожи.
                </p>
              </>
            )}
            {product.id === 53 && (
              <>
                <h3>Холодный уход для укрепления волос и придания блеска</h3>
                <p>
                  Подходит для восстановления хрупких, повреждённых, лишенных
                  блеска и плотности волос. Процедура оптимально наполняет
                  волосы питательными веществами растительного происхождения,
                  бережно воздействует на структуру волос, занимает немного
                  времени (меньше часа) и имеет накопительный эффект. Состав не
                  имеет искусственных отдушек и не утяжеляет волосы.
                </p>
                <h3>Показания:</h3>
                <ul>
                  <li>
                    Длинные или средней длины волосы, натуральные или
                    окрашенные;
                  </li>
                  <li>
                    Волосы после химического, механического, термического
                    повреждения;
                  </li>
                  <li>Волосы после воздействия солнечного излучения;</li>
                  <li>Волосы,утратившие блеск и жизненную силу;</li>
                  <li>Истонченные и легко спутывающиеся концы волос;</li>
                  <li>Пористые волосы;</li>
                  <li>Пушистость вьющихся волос.</li>
                </ul>
                <h3>Результат:</h3>
                <ul>
                  <li>Повышается упругость и прочность волос;</li>
                  <li>
                    Повышается защитная функция волос (волосы защищены от
                    вредного влияния высоких и низких температур, ветра, жесткой
                    воды);
                  </li>
                  <li>Восстанавливается текстура волосяного стержня;</li>
                  <li>Блеск волос;</li>
                  <li>Снимается электростатичность;</li>
                  <li>Удерживается оптимальный уровень влаги в волосе.</li>
                </ul>
                <h3>Комплекс средств </h3>
                <ul>
                  <li>
                    Подготавливающий шампунь Therapy System (250 мл) Шампунь
                    содержит растительные био-экстракты, которые мягко очищают
                    волосы и кожу головы, стимулируя микроциркуляцию крови,
                    способствует естественному возобновлению роста волос и
                    предотвращает излишнюю жирность у корней, устраняет
                    шелушение. Волосы становятся мягкими, блестящими и
                    здоровыми.
                  </li>
                  <li>
                    Смываемая маска Iside Detangling (950 гр) Маска нового
                    поколения. Содержит натуральные масла (жожоба, соя, миндаль,
                    ланолин), которые делают волосы мягкими, блестящими и легко
                    расчесываемыми, обеспечивает антистатический эффект.
                    Подходит для всех типов волос.
                  </li>
                  <li>
                    Флюид с маслом семян льна Liquid Crystals (100 мл) Улучшает
                    структуру волос, придает блеск тусклым и объем сухим и
                    химически поврежденным волосам, формирует защитный слой,
                    который защищает кутикулу от внешних неблагоприятных
                    воздействий.
                  </li>
                </ul>
              </>
            )}
            {product.id === 54 && (
              <>
                <h3>Рабочая тетрадь мастера</h3>
                <p>
                  Теоретическое пособие по работе с профессиональными и
                  домашними продуктами, представленными в компании:
                </p>
                <ul>
                  <li>
                    ESK Professional (BC Original, BTX Crema, Alpha Gold, Alpha
                    Ton,SOS){" "}
                  </li>
                  <li>ZAP (Me Leva, Ztox Pasta, Liquido, Collagen) </li>
                  <li>HP Firenze (Relief, Therapy System, Geo Vita)</li>
                </ul>
                <p>
                  52 страницы с полезными и информативными инструкциями,
                  расходами и свободными строчками для записи комментариев
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
