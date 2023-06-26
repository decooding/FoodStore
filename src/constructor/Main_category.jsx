import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import GridCard from '../components/grid_card.component';

export default class MainCategory extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Container>
          <Row>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/brad"><GridCard value="Пекарня Вкус Хлеба" img="https://vkusmart.vmv.kz/upload/iblock/fe1/jmtjdolxi5fynkrlprhisbf2vin7l5hq.png"/></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/jus"><GridCard value="Напитки" img="https://vkusmart.vmv.kz/upload/iblock/7d5/7ict6aqleikcym95okvig4o532jg4m3p.png" /></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/milk"><GridCard value="Молоко. Сыр. Яйца" img="https://vkusmart.vmv.kz/upload/iblock/703/51wdt6allrvemnz3l0rnn0dmdsudohip.png" /></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/gastro"><GridCard value="Гастрономия" img="https://vkusmart.vmv.kz/upload/iblock/058/njjnyzvkckt5gjvmv2npbkm64004i8tg.png"/></a>
          </Row>
          <Row>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/fruit"><GridCard value="Овощи. Фрукты. Ягоды" img="https://vkusmart.vmv.kz/upload/iblock/96b/64f3xy3nya3civ9at0g8eehwqv4wv4s9.png" /></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/fish"><GridCard value="Рыба и рыбная продукция" img="https://vkusmart.vmv.kz/upload/iblock/457/z9zhtpqj1a8vfl37t5mssl8pyg2prd2k.png" /></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/freeze"><GridCard value="Замороженные продукты" img="https://vkusmart.vmv.kz/upload/iblock/caa/hkoxeembbvg5pzdyaxaik7t2yagx7uyx.png" /></a>
            <a style={{ color:'#000', textDecoration: 'none' }} className='col' href="/baka"><GridCard value="Бакалея" img="https://vkusmart.vmv.kz/upload/iblock/dd3/v6nqdluayx65rs02baki3vpqcj2satrf.png" /></a>
          </Row>
        </Container>
      </div>
    );
  }
}
