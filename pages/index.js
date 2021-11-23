import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ContainerBlock from '../components/ContainerBlock'
import Navbar from '../components/Navbar'
import LatestCode from '../components/LatestCode'
import userData from '../constants/data'
import getLatestRepos from '../lib/getLatestRepos'
import Hero from '../components/Hero'
import FavouriteProjects from '../components/FavoriteProjects'
import Footer from '../components/Footer'

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Ayan Reza"
      description="Ayan Reza's personal portfolio site displaying his projects and skills. No need to look for any more candidates. I'll get the job done. "
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};