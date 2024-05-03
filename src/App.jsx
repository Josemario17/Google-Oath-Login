import { useState } from 'react'
import google from '../src/Img/google.png'
import facebook from '../src/Img/fb.png'
import './App.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'


function App() {
  const [LoginSucess, setLoginSucess] = useState(false)
  const [nome, setnome] = useState(null)
  const [emailUser, setEmailUser] = useState(null)
  const [imageUrl, setimageUrl] = useState(null)

  const credentialResponse = (response) => {
    setLoginSucess(true)

    let token = response.credential
    const decoded = jwtDecode(token);
    const { name, email, picture } = decoded

    setnome(name)
    setEmailUser(email)
    setimageUrl(picture)

    console.log(decoded);
  }

  return (
    <>
      {
        LoginSucess ?
          <div class="w-5/6 h-auto mx-auto flex flex-wrap items-center justify-center">
            <div class="flex items-center h-screen w-full justify-center">
              <div class="max-w-lg">
                <div class="min-w-[370px] px-12 bg-white shadow-2xl border-2 border-solid border-gray-200 rounded-lg py-8">
                  <div
                    class="relative w-full mx-auto mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 flex items-center justify-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
                    <h3 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                      {nome}
                    </h3>
                  </div>
                  <div class="photo-wrapper p-2">
                    <img class="w-32 h-32 rounded-full mx-auto" src={imageUrl} alt={`Imagem de ${nome}`} />
                  </div>
                  <div class="p-2">
                    <div class="text-center text-gray-400 text-xs font-semibold">
                      <p className='text-lg flex items-center justify-center gap-2 my-4'>Sessão <span
                        class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="-ms-1 me-1.5 h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="whitespace-nowrap text-sm">Activa</p>
                      </span>
                      </p>
                    </div>
                    <table class="text-xs my-3">
                      <tbody>
                        <tr>
                          <td class="px-2 py-2 text-lg">{emailUser}</td>
                        </tr>
                      </tbody></table>

                    <div class="text-center my-3">
                      <button
                        onClick={() => { setLoginSucess(false) }}
                        class="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Sair
                      </button>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          :

          <section class="w-5/6 h-auto mx-auto mt-36 flex flex-wrap items-center justify-center">
            <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
              <div
                class="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
                <h3 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                  Iniciar Sessão
                </h3>
              </div>
              <div class="p-6 flex justify-center gap-6 items-center">
                <GoogleOAuthProvider clientId="437972046641-4e0i5lm8ocac6lf4bhcr0ae0q5veu7pp.apps.googleusercontent.com">
                  <GoogleLogin onSuccess={credentialResponse}
                    onError={() => {
                      console.log('Login Failed');
                    }} />
                </GoogleOAuthProvider>
              </div>
              <div class="flex flex-col gap-4 p-6">
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " />
                  <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input
                    class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " />
                  <label
                    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Senha
                  </label>
                </div>
                <div class="-ml-2.5">
                  <div class="inline-flex items-center">
                    <label for="checkbox" class="relative flex items-center p-3 rounded-full cursor-pointer">
                      <input type="checkbox"
                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="checkbox" />
                      <span
                        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                    <label for="checkbox" class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="checkbox">
                      Lembrar-me
                    </label>
                  </div>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button
                  class="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button">
                  Entrar
                </button>
                <p class="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                  Não tenho uma conta
                  <a href="#signup"
                    class="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                    Fazer cadastro
                  </a>
                </p>
              </div>
            </div>
          </section>
      }
    </>
  )
}

export default App
