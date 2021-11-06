import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ContainerBlock from '../components/ContainerBlock'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FavouriteProjects from '../components/FavoriteProjects'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <ContainerBlock 
      title="Ayan Reza - Developer, Programmer, Writer, Creator"
      description="This is my portfolio website showing my projects"
      >
        <Hero />
        <FavouriteProjects/>

      </ContainerBlock>
    </div>
  )
}

export default Home
