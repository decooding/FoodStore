import React, { Component } from 'react'
import CardList from '../components/cardList.component'
import SliderImg from '../components/sliderImg.component'
import TextBlock from '../components/textBlock.component'
import MainCategory from '../constructor/Main_category'
import MainRecomend from '../constructor/Main_recomend'
import TopRatingCom from '../constructor/TopRatingComment'


export default class Main extends Component {
  render() {
    return (
      <div>
        <SliderImg />
        <TextBlock value = 'Каталог'/>
        <MainCategory/>
        <TextBlock value = 'Есть в ассортименте'/>
        <CardList />
        <TextBlock id='recomend' value = 'Всего за 1 теңге'/>
        <MainRecomend/>
        <TextBlock value = 'О нас'/>
        <TopRatingCom/>
      </div>
    )
  }
}
