import Head from 'next/head'
import FadeHome from '../components/Homepage/FadeHome'
function HomePage() {
  return (
    <>
      <div>
        <Head>
          <title>Starter Template</title>
        </Head>
        <div>Content Here</div>
        <div>
          <FadeHome />
        </div>
        <div>Footer below here</div>
      </div>
    </>
  )
}

export default HomePage
