import Header from '../components/Header'
import Footer from '../components/Footer'

const DummyDuplicate = () => (
  <div className='bg-[#0a0a0b] min-h-screen'>
    <Header wishlistCount={0} />
    <main className='px-24 py-16 text-center'>
      <h1 className='text-white text-2xl'>Duplicate test page</h1>
      <p className='text-white/60'>Same structure for duplicate detection.</p>
    </main>
    <Footer />
  </div>
)

export default DummyDuplicate
