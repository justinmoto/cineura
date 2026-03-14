import Header from '../components/Header'
import Footer from '../components/Footer'

const DummyPage4 = () => (
  <div className='bg-[#0a0a0b] min-h-screen'>
    <Header wishlistCount={0} />
    <main className='px-24 max-xl:px-16 max-lg:px-8 max-md:px-6 max-sm:px-4 py-16 text-center'>
      <h1 className='text-white text-2xl font-medium mb-4'>Dummy Page 4</h1>
      <p className='text-white/60'>Fourth dummy page for testing.</p>
    </main>
    <Footer />
  </div>
)

export default DummyPage4
