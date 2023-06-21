import { useTheme } from '~/lib/theme'
import Image from 'next/image'

const Footer = () => {
  const { isDarkMode } = useTheme()

  return (

    <footer className="flex w-full justify-end border-t bg-scale-300 p-4" style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ display: "flex" }}>

        <div>
          <small className="small">We use</small>
          <div>
            <Image
              src={
                isDarkMode
                  ? '/images/collabo/chat-gpt-dark.png'
                  : '/images/collabo/chat-gpt.png'
              }
              title='gpt'
              height={29}
              width={100}
            />
          </div>
        </div>

        <div style={{ marginLeft: "10px" }}>
          <small className="small">Named</small>
          <div>
            <Image
              src={
                isDarkMode
                  ? '/images/collabo/codeconsue-dark.png'
                  : '/images/collabo/codeconsue-light.png'
              }
              title='gpt'
              height={29}
              width={150}
            />
          </div>
        </div>

        <div style={{ marginLeft: "10px" }}>
          <small className="small">Design inspiration</small>
          <div>
            <Image
              src={
                isDarkMode
                  ? '/images/collabo/supabase-logo-wordmark--dark.svg'
                  : '/images/collabo/supabase-logo-wordmark--light.svg'
              }
              title='supabase'
              height={29}
              width={150}
            />
          </div>
        </div>

      </div>

      <div>
        <ul className="mt-4 space-y-2" style={{ display: "flex", justifyContent: "space-evenly" }}>
          <li><a href="https://github.com/eduhcastro/codecounsel" target='__blank' className="text-sm transition-colors text-scale-1100 hover:text-scale-1200  ">Source Code</a></li>
          <li style={{ marginTop: "0px" }}><a href="https://www.linkedin.com/in/eduardo-castro-2a2427223/" target='__blank' className="text-sm transition-colors text-scale-1100 hover:text-scale-1200" >My Linkedin</a></li>
          <li style={{ marginTop: "0px" }}><a href="#" className="text-sm transition-colors text-scale-1100 hover:text-scale-1200" >Contributtion</a></li>
        </ul>
        <small className="small">Developed by Eduardo Castro, with the aim of helping us (junior developers) 2023</small>
      </div>

     
    </footer>
  )
}

export default Footer
