"use client"
import React from "react";
import Image from 'next/image'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaPlug } from 'react-icons/fa';
import { IoIosPulse } from 'react-icons/io';
import { GiEyelashes } from 'react-icons/gi';
import { BiBook } from 'react-icons/bi';
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

import { useState } from "react";
import deved from "../../public/dev-ed-wave.png";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import en_ment from "../../public/ensin-ment.png";
import MyTypeWriterAnim from "./typewriter";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className='bg-white px-10 font-poppins  dark:bg-gray-950 dark:text-white'>
      <nav className='flex py-10 mb-12 justify-between sticky top-0 bg-white dark:bg-gray-950 dark:text-white'>
          <h1 className='text-xl font-poppins'>
            J . Manhica
          </h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill 
             onClick={() => setDarkMode(!darkMode)}
            className='cursor-pointer text-2xl'/></li>
            <li> <a className=' bg-gray-800 text-white px-8 py-2 rounded-md ml-3' href='#'>Curriculo</a></li>
          </ul>
        </nav>
      <section className='min-h-screen bg-white dark:bg-gray-900 dark:text-white rounded-3xl p-5'>
        <div className='relative bg-gradient-to-t from-gray-950 rounded-full mx-auto w-40 h-40 overflow-hidden'>
         <GiEyelashes size={100}/>
        </div>
        <div className='text-center p-10'>
          <div className='text-5xl py-2 text-gray-800 font-medium dark:text-white'><MyTypeWriterAnim myText={"Olá, sou Joaquim Manhicaoooooooo"}/></div>
          <h3 className='text-2xl py-2'>Especialista em desenvolvimento Mobile</h3>
          <p className='text-gray-500 py-5 leading-8'>
          Como engenheiro de software com formação na universidade pedagógica de maputo, 
          tenho um histórico comprovado de sucesso e conquistas significativas. 
          Com experiência em desenvolvimento de aplicativos nativos e híbridos,
           estou entusiasmado em destacar minhas habilidades e contribuições para sua equipe.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3'>
          <AiFillLinkedin/>
          <AiFillGithub/>
          <AiFillYoutube/>
        </div>
       
      </section>
      <section>
          <div className='text-center mt-10'>
            <h3 className="text-3xl py-1 dark:text-gray-400 ">Meus serviços</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Sou um desenvolvedor Fullstack JavaScript especializado em desenvolvimento mobile e ensino de programação mobile. Ofereço serviços completos de criação de aplicativos móveis nativos para iOS e Android, utilizando tecnologias como React Native e Node.js. Também forneço treinamentos e mentorias personalizadas para aqueles que desejam aprender a programar aplicativos móveis. Minha abordagem é centrada no cliente, priorizando a usabilidade, experiência do usuário e performance. Tenho experiência em todas as etapas do ciclo de desenvolvimento e garanto resultados de alta qualidade.
              
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
               Aprender programação mobile pode ser desafiador, mas estou aqui para ajudar você a dominar as habilidades necessárias.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-900 dark:text-white flex-1">
            <div className='flex justify-center align-middle'>
            <FaPlug size={50}/>
            </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Aplicativos hibridos
              </h3>
              <p className="py-2">
              Aplicativos híbridos são aplicações que combinam elementos de aplicativos nativos e web, sendo desenvolvidos com tecnologias web (HTML, CSS, JavaScript) e encapsulados em um contêiner nativo para funcionar em diferentes plataformas móveis.
              </p>
              <h4 className="py-4 text-gray-900 font-bold dark:text-white">Ferramentas usadas no desenvolvimento</h4>
              <p className="text-gray-800 py-1  dark:text-white">React Native</p>
              <p className="text-gray-800 py-1  dark:text-white">Ionic</p>
              <p className="text-gray-800 py-1  dark:text-white">Flutter</p>
              <p className="text-gray-800 py-1  dark:text-white">PhoneGap/Cordova</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-900 dark:text-white">
            <div className='flex justify-center align-middle'>
            <IoIosPulse size={50}/>
            </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Aplicativos nativos
              </h3>
              <p className="py-2">
              Um aplicativo nativo é um software desenvolvido para uma plataforma específica, como iOS ou Android, usando linguagens de programação nativas suportadas pela plataforma. Eles oferecem acesso total aos recursos do dispositivo e proporcionam uma experiência de usuário otimizada e integrada.
              </p>
              <h4 className="py-4 text-gray-900 font-bold  dark:text-white">Ferramentas usadas no desenvolvimento</h4>
              
              <p className="text-gray-800 py-1  dark:text-white">Xcode</p>
              <p className="text-gray-800 py-1  dark:text-white">Android Studio</p>
              <p className="text-gray-800 py-1  dark:text-white">Visual Studio</p>
              <p className="text-gray-800 py-1  dark:text-white">Flutter</p>
              <p className="text-gray-800 py-1  dark:text-white">React Native</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1  dark:bg-gray-900 dark:text-white">
            <div className='flex justify-center align-middle'>
              <BiBook size={50}/>
            </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Ensino e mentoria</h3>
              <p className="py-2">
              Impulsione sua carreira no desenvolvimento mobile com mentoria especializada! Aproveite a oportunidade de aprender com um desenvolvedor experiente e aprofunde seus conhecimentos em iOS, Android ou desenvolvimento multiplataforma. Junte-se a mim e alcance novos patamares no mundo mobile. Invista no seu futuro agora!
              </p>
              <div className='flex justify-center align-middle'>
              <Image
              alt='profile-pic'
                className="rounded-lg object-cover"
                sizes='100%'
                src={en_ment}
              />
              </div>
              
            </div>
          </div>
        </section>
        <section className="text-center py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Meus projectos</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Explore o poder da mentoria personalizada no desenvolvimento mobile com um especialista comprovado. Aumente sua expertise em projetos mobile, domine tecnologias avançadas e acelere sua carreira. Receba orientação direta e insights valiosos para criar aplicativos de sucesso. Invista em seu crescimento profissional e desbloqueie todo o potencial dos seus projetos mobile.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
              alt='profile-pic'
                className="rounded-lg object-cover"
                sizes='100%'
               
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
              alt='profile-pic'
                className="rounded-lg object-cover"
                sizes='100%'
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
              alt='profile-pic'
                className="rounded-lg object-cover"
                sizes='100%'
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
              alt='profile-pic'
                className="rounded-lg object-cover"
                sizes='100%'
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
              alt='profile-pic'
                className="rounded-lg object-cover"
                sizes='100%'
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
              alt='profile-pic'
                className="rounded-lg object-cover"
                sizes='100%'
                src={web6}
              />
            </div>
          </div>
        </section>
        
    </main>
    </div>
  )
}
