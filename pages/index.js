import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
// import { SpineInit } from '../components/spine'
import SpineInit from '../components/Spine/spine'
import { changeAnimation, disposeAnimation, restartAnimation, pauseAnimation, addAnimation } from '../components/Spine/method'

const DefaultWrapper = styled.div`
  .btns {
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

export default function Home() {
  const [player,setPlayer] = useState(null)
  useEffect(()=>{
    setPlayer(SpineInit())
  },[])



  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultWrapper>
        <div className="btns">
          <button onClick={()=>changeAnimation(player)}>change animation</button>
          <button onClick={()=>addAnimation(player)}>add animation</button>
          <button onClick={()=>pauseAnimation(player)}>pause animation</button>
          <button onClick={()=>restartAnimation(player)}>restart animation</button>
          <button onClick={()=>disposeAnimation(player)}>dispose animation</button>
        </div>
        <div className="spineFrame" id="container"></div>
        
      </DefaultWrapper>
    </div>
  )
}


