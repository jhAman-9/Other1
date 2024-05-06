// eslint-disable-next-line no-unused-vars
import React from 'react'
import UpHead from './components/UpHead'
import Body from './components/Body'
import Header from './components/Header'
import Accreditations from './components/Accreditations'
import Google from './components/Google'
import Analytics from './components/Analytics'
import Explore from './components/Explore'
import Live from './components/Live'
import Learners from './components/Learners'
import Think from './components/Think'
import Talk from './components/Talk'
import Newsletter from './components/Newsletter'

const App = () => {
  return (
    <>
      <UpHead />
      <Header />
      <Body />
      <Accreditations />
      <Google />
      <Analytics />
      <Explore />
      <Live />
      <Learners />
      <Think />
      <Talk />
      <Newsletter/>
    </>
  );
}

export default App