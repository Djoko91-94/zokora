import './App.css'

function App() {
  return (
    <>
      <header className="w-full bg-gray-800 text-white py-4 shadow-md">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="header-left">
            <img className="h-10" src="https://prog-8.com/images/html/advanced/main_logo.png" alt="Progate Logo - Learn to code" />
          </div>
          <a href="#" className="menu-icon block md:hidden text-white text-2xl">
            <span className="fa fa-bars"></span>
          </a>
          <nav className="header-right hidden md:flex space-x-6" aria-label="Main Navigation">
            <a href="#" className="text-white hover:text-blue-400 transition duration-300 ease-in-out font-serif">Lessons</a>
            <a href="https://prog-8.com/account/sign_in" className="text-white hover:text-blue-400 transition font-serif">Sign in</a>
            <a href="https://prog-8.com/account/sign_in" className="login text-blue-600 hover:bg-slate-50 duration-500 font-serif">Log in</a>
          </nav>
        </div>
      </header>
      <div className="top-wrapper bg-[url(https://prog-8.com/images/html/advanced/top_en.png)] py-16 bg-no-bg-repeat bg-cover bg-center">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-semibold mb-4 text-white font-serif">LEARN TO CODE.</h1>
          <h1 className="text-4xl font-semibold mb-6 text-white font-serif">LEARN TO BE CREATIVE.</h1>
          <p className="text-lg mb-0 text-white font-serif">Progate is a web service where you can learn programming online.</p>
          <p className="text-lg mb-8 text-white font-serif">We offer you a fully equipped coding environment to get you started.</p>
          <div className="btn-wrapper space-x-4">
            <a href="https://www.google.co.jp/mail/help/intl/ja/about.html?vm=r" className="btn bg-green-400 text-white py-2 px-4 rounded-md mb-0 inline-block hover:brightness-90 hover:shadow-lg transition duration-300 font-serif">Sign up with Email</a>
            <p className="my-4 text-white">or</p>
            <a href="https://www.facebook.com/" className="btn bg-blue-600 text-white py-2 px-4 rounded-md mb-4 inline-block hover:brightness-90 hover:shadow-lg items-center gap-2 duration-300 font-serif">
              <span className="fa-brands fa-facebook mr-2"></span>Sign up with Facebook
            </a>
            <a href="https://x.com/?lang=en" className="btn bg-blue-400 text-white py-2 px-4 rounded-md mb-4 inline-block hover:brightness-90 hover:shadow-lg transition duration-300 items-center gap-2 font-serif">
              <span className="fa-brands fa-twitter mr-2"></span>Sign up with Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="lesson-wrapper bg-white py-16">
        <div className="container mx-auto text-center px-6">
          <div className="heading mb-8">
            <h2 className="text-3xl font-serif">Learn Where to Get Started!</h2>
          </div>
          <div className="lessons grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-serif">
            <div className="lesson text-center">
              <div className="lesson-icon mb-4">
                <img src="https://prog-8.com/images/html/advanced/html.png" className="mx-auto" alt="HTML & CSS" loading="lazy" />
                <p className="font-semibold">HTML & CSS</p>
              </div>
              <p className="txt-contents text-sm">Languages used to build and design the appearances of your websites. HTML adds the structure, and CSS styles it.</p>
            </div>
            <div className="lesson text-center">
              <div className="lesson-icon mb-4">
                <img src="https://prog-8.com/images/html/advanced/jQuery.png" className="mx-auto" alt="jQuery" loading="lazy" />
                <p className="font-semibold">jQuery</p>
              </div>
              <p className="txt-contents text-sm">A fast, feature-rich and easy-to-use JavaScript library that handles animations and Ajax requests.</p>
            </div>
            <div className="lesson text-center">
              <div className="lesson-icon mb-4">
                <img src="https://prog-8.com/images/html/advanced/ruby.png" className="mx-auto" alt="Ruby" loading="lazy" />
                <p className="font-semibold">Ruby</p>
              </div>
              <p className="txt-contents text-sm">A dynamic, general-purpose language that is simple and productive. It is commonly used to build web applications.</p>
            </div>
            <div className="lesson text-center">
              <div className="lesson-icon mb-4">
                <img src="https://prog-8.com/images/html/advanced/php.png" className="mx-auto" alt="PHP" loading="lazy" />
                <p className="font-semibold">PHP</p>
              </div>
              <p className="txt-contents text-sm">An open source scripting language that can be embedded into HTML, and well suited for web development.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="message-wrapper bg-gray-100 py-16">
        <div className="container mx-auto text-center px-6">
          <div className="heading mb-8">
            <h2 className="text-3xl font-serif">Ready to become an awesome programmer?</h2>
            <h3 className="text-xl font-light mb-6 font-serif">let&apos;s learn to code, learn to be creative!</h3>
          </div>
          <a href="https://progate.com/dashboard" className="btn bg-green-600 text-white py-2 px-6 rounded-md inline-block hover:brightness-90 hover:shadow-lg items-center gap-2 duration-300 font-serif">Start Learning</a>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container">
          <img src="https://prog-8.com/images/html/advanced/footer_logo.png" alt="Footer Logo" className="mb-4" />
          <p className="font-serif">Learn to code, learn to be creative.</p>
        </div>
      </footer>
    </>
  );
}

export default App;