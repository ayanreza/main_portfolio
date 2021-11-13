import type { NextPage } from 'next'
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
      title="Manu Arora - Developer, Writer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};