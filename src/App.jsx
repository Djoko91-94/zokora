import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myimage from './assets/myimage.jpg'
import Card from './components/Card';
import SkillBars from './components/SkillBars'


function App() {
  return (
    <>
      <div>
        <header class="bg-gray-700 text-white py-1">
          <div class="container mx-auto flex justify-between items-center p-4">
            <div class="header-left">
              <img class="logo" src="https://prog-8.com/images/html/advanced/main_logo.png" alt="Logo" />
            </div>
            <div class="header-right space-x-4">
              <a href="#" class="text-gray-200">Lessons</a>
              <a href="#" class="text-gray-200">Sign in</a>
              <a href="#" class="login text-blue-500">Log in</a>
            </div>
          </div>
        </header>

        <div class="top-wrapper bg-gray-100 py-16">
          <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold mb-4">LEARN TO CODE.</h1>
            <h1 class="text-4xl font-bold mb-4">LEARN TO BE CREATIVE.</h1>
            <p class="text-gray-700 mb-4">Progate is a web service where you can learn programming online.</p>
            <p class="text-gray-700 mb-8">We offer you a fully equipped coding environment to get you started.</p>
            <div class="btn-wrapper space-y-4">
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" class="btn signup inline-block bg-blue-500 text-white py-2 px-6 rounded-full">Sign up with Email</a>
              <p>or</p>
              <a href="https://www.facebook.com/brayanne.christy/" class="btn facebook inline-block bg-blue-600 text-white py-2 px-6 rounded-full"><span class="fa fa-facebook mr-2"></span>Sign up with Facebook</a>
              <a href="https://www.instagram.com/nonstopc16/" class=" btn instagram inline-block bg-blue-400 text-white py-2 px-6 rounded-full"><span class="fa fa-instagram mr-2"></span>Sign up with instagram</a>
            </div>
          </div>
        </div>

        <div class="lesson-wrapper py-16">
          <div class="container mx-auto">
            <div class="heading text-center mb-12">
              <h2 class="text-3xl font-bold">Learn Where to Get Started!</h2>
            </div>
            <div class="lessons grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="lesson bg-white p-6 shadow-lg rounded-lg">
                <div class="lesson-icon text-center mb-4">
                  <img src="https://prog-8.com/images/html/advanced/html.png" alt="HTML & CSS" class="mx-auto mb-2" />
                  <p class="text-xl font-semibold">HTML & CSS</p>
                </div>
                <p class="text-gray-600">Languages used to build and design the appearances of your websites. HTML adds the structure, and CSS styles it.</p>
              </div>
              <div class="lesson bg-white p-6 shadow-lg rounded-lg">
                <div class="lesson-icon text-center mb-4">
                  <img src="https://prog-8.com/images/html/advanced/jQuery.png" alt="jQuery" class="mx-auto mb-2" />
                  <p class="text-xl font-semibold">jQuery</p>
                </div>
                <p class="text-gray-600">A fast, feature-rich and easy-to-use JavaScript library that handles animations and Ajax requests.</p>
              </div>
              <div class="lesson bg-white p-6 shadow-lg rounded-lg">
                <div class="lesson-icon text-center mb-4">
                  <img src="https://prog-8.com/images/html/advanced/ruby.png" alt="Ruby" class="mx-auto mb-2" />
                  <p class="text-xl font-semibold">Ruby</p>
                </div>
                <p class="text-gray-600">A dynamic, general-purpose language that is simple and productive. It is commonly used around the world to build web applications.</p>
              </div>
              <div class="lesson bg-white p-6 shadow-lg rounded-lg">
                <div class="lesson-icon text-center mb-4">
                  <img src="https://prog-8.com/images/html/advanced/php.png" alt="PHP" class="mx-auto mb-2" />
                  <p class="text-xl font-semibold">PHP</p>
                </div>
                <p class="text-gray-600">An open source scripting language that can be embedded into HTML, and well suited for web development.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="message-wrapper bg-blue-500 text-white py-16">
          <div class="container mx-auto text-center">
            <div class="heading mb-8">
              <h2 class="text-3xl font-bold">Ready to become an awesome programmer?</h2>
              <h3 class="text-xl">Let's learn to code, learn to be creative!</h3>
            </div>
            <a href="#" class="btn message bg-yellow-500 text-white py-2 px-7 rounded-full">Start Learning</a>
          </div>
        </div>

        <footer class="bg-gray-800 text-white py-8">
          <div class="container mx-auto text-left">
            <img src="https://prog-8.com/images/html/advanced/footer_logo.png" alt="Footer Logo" class="mx-auto ml-0" />
            <p class="text-gray-400">Learn to Code, Learn to be Creative.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;