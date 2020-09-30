import Head from 'next/head'
import Link from 'next/link'
import GenLayout from "../components/genlayout/genlayout"
import Horizcard from '../components/horizcard/horizcard'
import Leftbar from '../components/leftbar/leftbar'

export default function Home() {
  return (
    <GenLayout>
      <Head>
        <title>Aux Étoiles!</title>
      </Head>

      <Horizcard padding='7em' width='95%' leftbar='#ee00ff'>
        <Link href='/aboutcreator'>
        <h1 className='aboutCreator' style={{display: 'inline-block', maxWidth: '50%'}}>About the Creator (Employers click here!)</h1>
        </Link>
        <img src='/images/profile.jpg' style={{overflow: 'hidden', width: '6em', display: 'inline-block',float: 'right', position: 'relative'}} />
      </Horizcard>

    </GenLayout>
  )
}

/* leftbar='#ee00ff'*/