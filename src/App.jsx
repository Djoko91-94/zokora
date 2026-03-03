import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myimage from './assets/myimage.jpg'
import Card from './components/Card';
import SkillBars from './components/SkillBars'

function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (name && password) {
      setIsLoggedIn(true)
      alert(`Welcome ${name}!`)
    }
  }

  const toggleShowPassword = () => setShowPassword((prev) => !prev)

  return (
    <>
      <header class="w-full bg-gray-800 text-white py-4 shadow-md">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <div class="container mx-auto flex justify-between items-center px-6">
          <div class="header-left">
            <img class="h-10" src="https://prog-8.com/images/html/advanced/main_logo.png" alt="Progate Logo - Learn to code" />
          </div>
          <a href="#" class="menu-icon block md:hidden text-white text-2xl">
            <span class="fa fa-bars"></span>
          </a>
          <nav class="header-right hidden md:flex space-x-6" aria-label="Main Navigation">
            <a href="#" class="text-white hover:text-blue-400 transition duration-300 ease-in-out font-serif">Lessons</a>
            <a href="https://prog-8.com/account/sign_in" class="text-white hover:text-blue-400 transition font-serif">Sign in</a>
            <a href="https://prog-8.com/account/sign_in" class="login text-blue-600 hover:bg-slate-50 duration-500 font-serif">Log in</a>
          </nav>
        </div>
      </header>
      <div class="top-wrapper bg-[url(https://prog-8.com/images/html/advanced/top_en.png)] py-16 bg-no-bg-repeat bg-cover bg-center">
        <div class="container mx-auto text-center px-6">
          <h1 class="text-4xl font-semibold mb-4 text-white font-serif">LEARN TO CODE.</h1>
          <h1 class="text-4xl font-semibold mb-6 text-white font-serif">LEARN TO BE CREATIVE.</h1>
          <p class="text-lg mb-0 text-white font-serif">Progate is a web service where you can learn programming online.</p>
          <p class="text-lg mb-8 text-white font-serif">We offer you a fully equipped coding environment to get you started.</p>
          <div class="btn-wrapper space-x-4">
            <a href="https://www.google.co.jp/mail/help/intl/ja/about.html?vm=r" class="btn bg-green-400 text-white py-2 px-4 rounded-md mb-0 inline-block hover:brightness-90 hover:shadow-lg transition duration-300 font-serif">Sign up with Email</a>
            <p class="my-4 text-white">or</p>
            <a href="https://www.facebook.com/" class="btn bg-blue-600 text-white py-2 px-4 rounded-md mb-4 inline-block hover:brightness-90 hover:shadow-lg items-center gap-2 duration-300 font-serif">
              <span class="fa-brands fa-facebook mr-2"></span>Sign up with Facebook
            </a>
            <a href="https://x.com/?lang=en" class="btn bg-blue-400 text-white py-2 px-4 rounded-md mb-4 inline-block hover:brightness-90 hover:shadow-lg transition duration-300 items-center gap-2 font-serif">
              <span class="fa-brands fa-twitter mr-2"></span>Sign up with Twitter
            </a>
          </div>
        </div>
      </div>

      <div class="lesson-wrapper bg-white py-16">
        <div class="container mx-auto text-center px-6">
          <div class="heading mb-8">
            <h2 class="text-3xl font-serif">Learn Where to Get Started!</h2>
          </div>
          <div class="lessons grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-serif">
            <div class="lesson text-center">
              <div class="lesson-icon mb-4">
                <img src="https://prog-8.com/images/html/advanced/html.png" class="mx-auto" alt="HTML & CSS" loading="lazy" />
                <p class="font-semibold">HTML & CSS</p>
              </div>
              <p class="txt-contents text-sm">Languages used to build and design the appearances of your websites. HTML adds the structure, and CSS styles it.</p>
            </div>
            <div class="lesson text-center">
              <div class="lesson-icon mb-4">
                <img src="https://prog-8.com/images/html/advanced/jQuery.png" class="mx-auto" alt="jQuery" loading="lazy" />
                <p class="font-semibold">jQuery</p>
              </div>
              <p class="txt-contents text-sm">A fast, feature-rich and easy-to-use JavaScript library that handles animations and Ajax requests.</p>
            </div>
            <div class="lesson text-center">
              <div class="lesson-icon mb-4">
                <img src="https://prog-8.com/images/html/advanced/ruby.png" class="mx-auto" alt="Ruby" loading="lazy" />
                <p class="font-semibold">Ruby</p>
              </div>
              <p class="txt-contents text-sm">A dynamic, general-purpose language that is simple and productive. It is commonly used to build web applications.</p>
            </div>
            <div class="lesson text-center">
              <div class="lesson-icon mb-4">
                <img src="https://prog-8.com/images/html/advanced/php.png" class="mx-auto" alt="PHP" loading="lazy" />
                <p class="font-semibold">PHP</p>
              </div>
              <p class="txt-contents text-sm">An open source scripting language that can be embedded into HTML, and well suited for web development.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="message-wrapper bg-gray-100 py-16">
        <div class="container mx-auto text-center px-6">
          <div class="heading mb-8">
            <h2 class="text-3xl font-serif">Ready to become an awesome programmer?</h2>
            <h3 class="text-xl font-light mb-6 font-serif">Let's learn to code, learn to be creative!</h3>
          </div>

          {!isLoggedIn ? (
            <form onSubmit={handleLogin} class="max-w-md mx-auto mb-8 p-6 bg-white rounded-lg shadow-md">
              <h3 class="text-2xl font-serif mb-6 text-gray-800">Login</h3>
              <div class="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-serif"
                />
              </div>
              <div class="mb-6 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-serif"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                >
                  <span className={showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}></span>
                </button>
              </div>
              <button type="submit" class="btn bg-blue-600 text-white py-2 px-6 rounded-md inline-block hover:brightness-90 hover:shadow-lg transition duration-300 font-serif">
                Start Learning
              </button>
            </form>
          ) : (
            <div class="mb-8 p-6 bg-white rounded-lg shadow-md">
              <p class="text-xl font-serif text-gray-800 mb-4">Logged in as: <strong>{name}</strong></p>
            </div>
          )}

        </div>
      </div>

      <footer class="bg-gray-800 text-white py-6">
        <div class="container">
          <img src="https://prog-8.com/images/html/advanced/footer_logo.png" alt="Footer Logo" class="mb-4" />
          <p class="font-serif">Learn to code, learn to be creative.</p>
        </div>
      </footer>
    </>
  );
}

export default App;