import Image from 'next/image'
import styles from './page.module.css'
import Addusers from './components/Addusers'
import Displayusers from './components/Displayusers'

export default function Home() {
  return (
    <>
      <Addusers />
      <Displayusers/>
    </>
  )
}
