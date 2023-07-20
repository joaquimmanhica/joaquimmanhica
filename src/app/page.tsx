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
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";

import en_ment from "../../public/ensin-ment.png";
import MyTypeWriterAnim from "./typewriter";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
    const handleDownload = () => {
      const fileUrl = 'https://firebasestorage.googleapis.com/v0/b/admissaowebapp.appspot.com/o/arquivos%2Fcv%2FJoaquim%20Manhica%20-%20curriculo.pdf?alt=media&token=7d6839f4-3803-4290-aaf0-af6bb26af830';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'Joaquim_Manhica_cv.pdf';
      link.click();
    };

  return (
    <div className={darkMode ? "dark" : ""}>
    <main className='bg-white text-gray-950 px-10 sm:p-1 font-poppins  dark:bg-gray-900 dark:text-white'>
      <nav className='flex py-10 px-10  mb-0 justify-between sticky top-0 bg-white dark:bg-gray-800 dark:text-white z-50'>
          <h1 className='text-xl font-burtons font-bold'>
            J . Manhica
          </h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill 
             onClick={() => setDarkMode(!darkMode)}
            className='cursor-pointer text-2xl'/></li>
            <li onClick={handleDownload}> <a className=' bg-gray-700 hover:cursor-pointer text-white px-8 py-2 rounded-md ml-3'>Curriculo</a></li>
          </ul>
        </nav>
      <section className='min-h-screen bg-my_hero bg-cover bg-center dark:text-white p-5 '>
        <div className='relative bg-gradient-to-t from-gray-950 rounded-full mx-auto w-40 h-40 overflow-hidden'>
         <GiEyelashes size={100}/>
        </div>
        <div className='text-center p-10 sm:p-1'>
          <div className='text-5xl py-2 text-white font-medium dark:text-white'><MyTypeWriterAnim myText={"Olá, sou Joaquim Manhica"}/></div>
          <h3 className='text-2xl text-white py-2'>Especialista em desenvolvimento Mobile</h3>
          <p className='text-white py-5 leading-8 dark:text-gray-200'>
          Como engenheiro de software com formação na universidade pedagógica de maputo, 
          tenho um histórico comprovado de sucesso e conquistas significativas. 
          Com experiência em desenvolvimento de aplicativos nativos e híbridos,
           estou entusiasmado em destacar minhas habilidades e contribuições para sua equipe.
          </p>
        </div>
        <div className='text-5xl text-white flex justify-center gap-10 py-3'> 
              <a href="https://www.linkedin.com/in/joaquim-manhica-b99084147/">
                <AiFillLinkedin onClick={(e) => e.stopPropagation()} /> 
              </a>
              <a href="https://github.com/joaquimmanhica">
                <AiFillGithub onClick={(e) => e.stopPropagation()} /> 
              </a>
          <AiFillYoutube/>
        </div>
       
      </section>
      <section>
          <div className='text-center mt-5'>
            <h3 className="text-3xl py-1 dark:text-white ">Meus serviços</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Sou um desenvolvedor Fullstack JavaScript especializado em desenvolvimento mobile e ensino de programação mobile. Ofereço serviços completos de criação de aplicativos móveis nativos para iOS e Android, utilizando tecnologias como React Native e Node.js. Também forneço treinamentos e mentorias personalizadas para aqueles que desejam aprender a programar aplicativos móveis. Minha abordagem é centrada no cliente, priorizando a usabilidade, experiência do usuário e performance. Tenho experiência em todas as etapas do ciclo de desenvolvimento e garanto resultados de alta qualidade.
              
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
               Aprender programação mobile pode ser desafiador, mas estou aqui para ajudar você a dominar as habilidades necessárias.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 dark:text-white flex-1">
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
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800 dark:text-white">
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
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1  dark:bg-gray-800 dark:text-white">
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
          <div className="flex justify-center align-middle flex-col py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 m-3">
              <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Image className="object-cover w-full h-64" src={web1} alt="Article"/>
                  <div className="p-6">
                    <div>
                      <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400"></span>
                      <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"  role="link">Aplicativo de Delivery</a>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Um aplicativo de delivery é um software desenvolvido para smartphones e dispositivos móveis que conecta clientes a uma ampla variedade de estabelecimentos comerciais. Seja para pedir uma pizza, solicitar mantimentos frescos ou até mesmo comprar itens de eletrônicos, esses aplicativos oferecem uma plataforma intuitiva e fácil de usar, tornando a experiência de compra on-line mais ágil e eficiente.</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1 m-3">
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Image className="object-cover w-full h-64" src={web2} alt="Article"/>
                  <div className="p-6">
                    <div>
                      <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400"></span>
                      <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"  role="link">Aplicativo de Delivery</a>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Um aplicativo de delivery é um software desenvolvido para smartphones e dispositivos móveis que conecta clientes a uma ampla variedade de estabelecimentos comerciais. Seja para pedir uma pizza, solicitar mantimentos frescos ou até mesmo comprar itens de eletrônicos, esses aplicativos oferecem uma plataforma intuitiva e fácil de usar, tornando a experiência de compra on-line mais ágil e eficiente.</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1  m-3">
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Image className="object-cover w-full h-64" src={web3} alt="Article"/>
                  <div className="p-6">
                    <div>
                      <a href="https://play.google.com/store/apps/details?id=com.codlabel.upkwick" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">Aplicativo de consulta de resultados de exames de admissão a UP</a>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Aplicação de consulta de informações referentes aos exames de admissão na Universidade Pedagógica de Maputo</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1  m-3">
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Image className="object-cover w-full h-64" src={web4} alt="Article"/>
                  <div className="p-6">
                    <div>
                      <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">Delivery de Rosas</a>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Esses aplicativos oferecem uma seleção cuidadosamente escolhida de rosas frescas e deslumbrantes, permitindo que os usuários escolham entre uma variedade de cores, tamanhos e arranjos. Seja para celebrar uma ocasião especial, expressar amor, gratidão, ou simplesmente surpreender alguém querido, enviar um buquê de rosas através do aplicativo de delivery é uma maneira prática e emocionante de criar momentos memoráveis.</p>
                    </div>
                  </div>
              </div>
            </div>
           
          </div>
        </section>
        <section className="min-h-screen bg-my_footer bg-cover bg-center bg-black/70">
          <div className="flex flex-col min-h-screen bg-black/50">
            <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
              <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                <div className="text-white lg:w-1/2 lg:mx-6">
                  <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Sua solução definitiva para programação e design de aplicativos</h1>

                  <p className="max-w-xl mt-6">
                  Aprender programação mobile pode ser desafiador, mas estou aqui para ajudar você a dominar as habilidades necessárias.
                  </p>

                  <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-950 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-600 focus:ring-opacity-50">
                    Contacte-me
                  </button>

                  <div className="mt-6 md:mt-8">
                    <h3 className="text-gray-300 ">Siga-me</h3>
                    <div className="flex mt-4 -mx-1.5 ">
                      <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="https://github.com/joaquimmanhica">
                        <AiFillGithub size={"54"} onClick={(e) => e.stopPropagation()} />
                      </a>

                      <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="https://www.linkedin.com/in/joaquim-manhica-b99084147/">
                        <AiFillLinkedin size={"54"} onClick={(e) => e.stopPropagation()} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 lg:w-1/2 lg:mx-6">
                  <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                    <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Formulario de contacto</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      Pode perguntar-me qualquer coisa, terei prazer em responde-lo.
                    </p>

                    <form className="mt-6">
                      <div className="flex-1">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nome completo</label>
                        <input type="text" placeholder="Fulano X" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                      </div>

                      <div className="flex-1 mt-6">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                        <input type="email" placeholder="fulano@examplo.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                      </div>

                      <div className="w-full mt-6">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mensagem</label>
                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Mensagem"></textarea>
                      </div>
                      <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-950 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 focus:ring-opacity-50">
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
    </div>
  )
}
