import './App.css'
import Stats from './Stats'

function App() {
  return (
    <main>
      <div className='picture'>
        <picture>
          <source srcSet='/images/image-header-desktop.jpg' media='(min-width: 650px)'/>
          <img src='/images/image-header-mobile.jpg' alt='header image' loading='lazy' />
        </picture>
        <div className='overlay'></div>
      </div>
      <div className='container'>
        <h1>Get <span className='insights'>insights</span> that help your business grow.</h1>
        <p>
          Discover the benefits of data analytics and make better decisions regarding revenue, customer 
          experience, and overall efficiency.
        </p>
        <div className='stat-sheet'>
          <Stats data="10k+" name="COMPANIES" />
          <Stats data="314" name="TEMPLATES" />
          <Stats data="12M+" name="QUERIES" />
        </div>
        
      </div>
    </main>
  )
}

export default App
