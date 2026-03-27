import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Membership from '../components/Membership'
import Location from '../components/Location'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services preview={true} />
      <WhyUs />
      <Membership />
      <Location />
    </>
  )
}
