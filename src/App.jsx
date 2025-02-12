import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myimage from './assets/myimage.jpg'
import Card from './components/Card';
import SkillBars from './components/SkillBars'

const skills = [
  {
    skillName: "HTML",
    level: 30
  },
  {
    skillName: "CSS",
    level: 40

  },
  {
    skillName: "Python",
    level: 55
  },
  {
    skillName: "Cisco",
    level: 80
  },
  {
    skillName: "Java script",
    level: 40
  },
  {
    skillName: "English",
    level: 20
  },

  {
    skillName: "French",
    level: 100
  },

  {
    skillName: "Japanese",
    level: 35
  },
]


function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center font-serif">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">DjokoCode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300 font-serif">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300 font-serif">
              About
            </a>
            <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300 font-serif">
              Skills
            </a>
            <a href="#Blog" className="mr-5 hover:text-blue-400 duration-300 font-serif">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section classname="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center font-serif">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium,mb-4 font-serif">
              HI!
              <br />
              I'm DjokoCode
              <br />
              Web developer
            </h1>
            <p className="mb-8 leading-relaxed font-serif">
              I'm a passionate, creative and solutions-oriented web developer apprentice who tries to bring technical expertise and experience to ambitious digital projects,I'm proficient in various technologies, including HTML, CSS, JavaScript, PHP and frameworks such as React, Vue.js, Node.js,python.
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300 font-serif">
              Contact
            </button>
          </div>
          <div className="md:w-1/2 lg:max-lg w-5/6">
            <img src={myimage} alt="" />
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
        </div>
        <div className="text-center mb-20">
          <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900 font-serif" id="about">
            About Me
          </h1>
          <p className="pb-10 font-serif">
            hi my name is Djoko tayem christy brayanne i'm from cameroon studying in japan, my dream is to become a computer engineer and i'll do everything to be one, i'm a hard worker and always motivated to learn a lot.
          </p>
          <p class="font-serif">
            I'm particularly interested in [specific: IP addressing and routing,software development, cybersecurity, database management, etc.], and I'm always ready to learn and take on new challenges. I have a good command of programming languages such as [examples: Python, JavaScript, HTML/CSS] and tools such as [examples: Git, Visual Studio Code].

            I'm self-motivated, autonomous, and I'm convinced that I can bring added value to a team while continuing to develop my skills.
          </p>
        </div>
      </section>
      {/*カードのdiv タグ*/}
      <div className="m-6 px-6 mx-auto max-w-6xl min-h-96 font-serif">
        <div className="flex gap-2 max-h-full">
          <Card
            titleText="Learn to code by watching others"
            contentsText="my hobbies are listening to music, especially hiphop, watching TV shows and series, studying new languages, playing sports, watching educational videos on social networks, I love technology, for example mobile phones and computers, I love business, and in the future I'd like to be a  big businessman and provide for my family."
          />
          <Card
            titleText="Passionate by Code"
            contentsText="I've had experience in the professional world since the first year of high school,in 2019-2020 I did my internship at Camtel Cameroon Telecommunication, where
              In 2023 I carried out a project on the security of a wifi network at ISYD with a captive portal, but the implementation malfunctioned."
          />
          <Card
            titleText="Everytime Code"
            contentsText="I went to a training school and got a BTS in network and telecommunication in 2023, I also have experience in audio visual and alarm and security, during my school career I had to learn that apart from network and telecommunication, I used to help an uncle with the preventive and corrective maintenance of air-conditioning units."
          />
        </div>
      </div>
      <div className="md:w-1/3 p-4"></div>
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* left side */}
          <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex j">
            <img src="https://t4.ftcdn.net/jpg/02/66/07/83/360_F_266078398_vXlKFR2KDOj8bpsly1lduNbvaDrZGMY2.jpg"
              alt=""
              className="rounded"
            />
          </div>
          {/*right side*/}

          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left font-serif" id="Skills">
              My Skills
            </h1>

            <div className="w-full">
              {SkillBars(skills)}
            </div>

          </div>

          <div className="mt-7 lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left font-serif" id="Blog">
              My Blog
            </h1>
            <p className="pb-3 font-serif">
              Welcome to my blog!
            </p>
            <p class="font-serif">
              Hello everyone! My name is Djoko, and I'm passionate about web design and technology. After earning my BTS in Networks and Telecommunications in 2023, I decided to dive into the world of web development and start creating websites. Before specializing in this field, I also studied Maintenance and Installation of Electronic Systems, which gave me a solid technical foundation and a deep understanding of systems and electronic devices. I'm here to share my journey, discoveries, and all the useful resources I come across for beginners like me, who are eager to learn.
            </p>
          </div>

        </div>
      </section>

      {/* footer*/}
      <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-screen-xl mx-auto px-6 flex justify-between items-start">
          <div class="footer-links space-y-4">
            <ul class="list-none">
              <li><a href="/about" class="hover:text-orange-500">À propos</a></li>
              <li><a href="/contact" class="hover:text-orange-500">Contact</a></li>
              <li><a href="/privacy-policy" class="hover:text-orange-500">Politique de confidentialité</a></li>
              <li><a href="/terms" class="hover:text-orange-500">Conditions d'utilisation</a></li>
            </ul>
          </div>
          <div class="footer-socials space-x-6">
            <a href="https://www.facebook.com/brayanne.christy/" class="text-white text-xl hover:text-orange-500">Facebook</a>
            <a href="https://www.instagram.com/nonstopc16/" class="text-white text-xl hover:text-orange-500">Instagram</a>
          </div>
          <div class="footer-newsletter flex flex-col space-y-4">
            <p class="text-lg">Abonnez-vous à notre newsletter</p>
            <form action="#" class="flex flex-col space-y-3">
              <button type="submit" class="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500">S'abonner</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom text-center mt-6">
          <p>&copy; 2025 Mon Site Web - Tous droits réservés</p>
        </div>
      </footer>
    </>
  );
}

export default App;