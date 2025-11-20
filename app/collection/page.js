'use client'
import { useEffect } from 'react'
import Header from '../../components/Header'

const folder = "/assets/Shiina/Clean Background/"

const imageList = [
  // Volume 1
  { file: "1.07_ Iviera_Clean.png", name: "Chapter 1.07 - Iviera" },
  { file: "1.09_ Iviera_Clean.png", name: "Chapter 1.09 - Iviera" },
  { file: "1.11_ Iviera_Clean.png", name: "Chapter 1.11 - Iviera" },
  { file: "1.11_ Iviera_Alter_Clean .png", name: "Chapter 1.11 Alternate - Iviera" },

  // Volume 2
  { file: "2.05_ Iviera_Clean.png", name: "Chapter 2.05 - Iviera" },
  { file: "2.08_ Iviera_Clean.png", name: "Chapter 2.08 - Iviera" },
  { file: "2.08_ Iviera_Alter_Clean.png", name: "Chapter 2.08 Alternate - Iviera" },
  { file: "2.09_ Iviera.png", name: "Chapter 2.09 - Iviera" },
  { file: "2.11_ Iviera_Clean.png", name: "Chapter 2.11 - Iviera" },
  { file: "2.14_ Iviera_Clean.png", name: "Chapter 2.14 - Iviera" },

  // Volume 3
  { file: "3.08_ Iviera_Clean.png", name: "Chapter 3.08 - Iviera" },
  { file: "3.11_ Iviera_Clean.png", name: "Chapter 3.11 - Iviera" },

  // Volume 4
  { file: "4.06_ Iviera—Clean.png", name: "Chapter 4.06 - Iviera" },
  { file: "4.10_ Iviera—Clean.png", name: "Chapter 4.10 - Iviera" },
  { file: "4.11_ Iviera—Clean.png", name: "Chapter 4.11 - Iviera" },
  { file: "4.12_ Iviera—Clean.png", name: "Chapter 4.12 - Iviera" },
  { file: "4.12_ Iviera—Edits—Clean.png", name: "Chapter 4.12 Edited - Iviera" },
  { file: "4.13_ Iviera—Clean.png", name: "Chapter 4.13 - Iviera" },

  // Volume 5
  { file: "5.08_ Iviera—Warm—Clean.png", name: "Chapter 5.08 Warm - Iviera" },
  { file: "5.10_ Iviera—Clean.png", name: "Chapter 5.10 - Iviera" },
  { file: "5.10 v2_ Iviera—Clean.png", name: "Chapter 5.10 v2 - Iviera" },
  { file: "5.12_ Iviera—Clean.png", name: "Chapter 5.12 - Iviera" },

  // Volume 5.5
  { file: "5.5.11_ Iviera—Clean.png", name: "Chapter 5.5.11 - Iviera" },
  { file: "5.5.12_ Iviera—Clean.png", name: "Chapter 5.5.12 - Iviera" },
  { file: "5.5.13_ Iviera—Clean.png", name: "Chapter 5.5.13 - Iviera" },
  { file: "5.5.14_ Iviera—Clean.png", name: "Chapter 5.5.14 - Iviera" },
  { file: "5.5.18_ Iviera—Clean.png", name: "Chapter 5.5.18 - Iviera" },

  // Volume 6
  { file: "6.11_ Iviera—Clean.png", name: "Chapter 6.11 - Iviera" },
  { file: "6.13_ Iviera—Clean.png", name: "Chapter 6.13 - Iviera" },

  // Volume 7
  { file: "7.05_ Iviera—Clean.png", name: "Chapter 7.05 - Iviera" },
  { file: "7.06_ Iviera—Clean.png", name: "Chapter 7.06 - Iviera" },
  { file: "7.08_ Iviera—Clean.png", name: "Chapter 7.08 - Iviera" },
  { file: "7.12_ Iviera—Clean.png", name: "Chapter 7.12 - Iviera" },
  { file: "7.14_ Iviera—Clean.png", name: "Chapter 7.14 - Iviera" },

  // Volume 8
  { file: "8.05_ Iviera—Clean.png", name: "Chapter 8.05 - Iviera" },
  { file: "8.06_ Iviera—Clean—Amane.png", name: "Chapter 8.06 - Amane" },
  { file: "8.06_ Iviera—Clean—Chibi.png", name: "Chapter 8.06 - Chibi" },
  { file: "8.06_ Iviera—Clean—Mahiru.png", name: "Chapter 8.06 - Mahiru" },
  { file: "8.07_ Iviera—Clean.png", name: "Chapter 8.07 - Iviera" },
  { file: "8.08_ Iviera—Clean.png", name: "Chapter 8.08 - Iviera" },

  // Volume 8.5
  { file: "V8.5 - 05.png", name: "Volume 8.5 - Page 05" },
  { file: "V8.5 - 06.png", name: "Volume 8.5 - Page 06" },
  { file: "V8.5 - 07.png", name: "Volume 8.5 - Page 07" },
  { file: "V8.5 - 08.png", name: "Volume 8.5 - Page 08" },
  { file: "V8.5 - 09.png", name: "Volume 8.5 - Page 09" },
  { file: "V8.5 - 10.png", name: "Volume 8.5 - Page 10" },
  { file: "V8.5 - 11.png", name: "Volume 8.5 - Page 11" },
  { file: "V8.5 - 12.png", name: "Volume 8.5 - Page 12" },

  // Volume 9
  { file: "V9_ Drama CD Cover—No BG 3.png", name: "Volume 9-Music" },
  { file: "V9 - 05.png", name: "Volume 9 - Page 05" },
  { file: "V9 - 06.png", name: "Volume 9 - Page 06" },
  { file: "V9 - 07.png", name: "Volume 9 - Page 07" },
  { file: "V9 - 08.png", name: "Volume 9 - Page 08" },
  { file: "V9 - 09.png", name: "Volume 9 - Page 09" },
  { file: "V9 - 10.png", name: "Volume 9 - Page 10" },
  { file: "V9 - 11.png", name: "Volume 9 - Page 11" },
  { file: "V9 - 12.png", name: "Volume 9 - Page 12" },
  { file: "V9 - 13.png", name: "Volume 9 - Page 13" },
  { file: "V9 - 14.png", name: "Volume 9 - Page 14" },

  // Volume 10
  { file: "Vol. 10 - 05.png", name: "Volume 10 - Page 05" },
  { file: "Vol. 10 - 08.png", name: "Volume 10 - Page 08" },
  { file: "Vol. 10 - 09.png", name: "Volume 10 - Page 09" },
  { file: "Vol. 10 - 10.png", name: "Volume 10 - Page 10" },
  { file: "Vol. 10 - 12.png", name: "Volume 10 - Page 12" },

  // Volume 11
  { file: "Vol. 11 - 05.png", name: "Volume 11 - Page 05" },
  { file: "Vol. 11 - 08.png", name: "Volume 11 - Page 08" },
  { file: "Vol. 11 - 10.png", name: "Volume 11 - Page 10" },
  { file: "Vol. 11 - 11.png", name: "Volume 11 - Page 11" },

  // Volume 11.5
  { file: "Vol. 11.5 - 06.png", name: "Volume 11.5 - Page 06" },
  { file: "Vol. 11.5 - 07 [Clean].png", name: "Volume 11.5 - Page 07" },
  { file: "Vol. 11.5 - 08.png", name: "Volume 11.5 - Page 08" },
  { file: "Vol. 11.5 - 09.png", name: "Volume 11.5 - Page 09" },
  { file: "Vol. 11.5 - 10.png", name: "Volume 11.5 - Page 10" },
]

export default function CollectionPage() {
  useEffect(() => {
    const video = document.querySelector('.sakura-video')
    if (video) {
      video.playbackRate = 0.8
    }
  }, [])

  return (
    <>
      <div className="collection-background"></div>
      
      <video autoPlay muted loop playsInline className="sakura-video">
        <source src="/assets/Falling cherry blossom petals..mp4" type="video/mp4" />
      </video>

      <Header active="collection" />

      <main>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <img 
            src="/assets/The_Angel_Next_Door_Spoils_Me_Rotten_Logo.webp" 
            alt="Shiina Mahiru Gallery" 
            className="logo-image"
          />
        </div>

        <div className="gallery-container" id="gallery">
          {imageList.map((item, index) => (
            <div key={index} className="image-card" style={{ animationDelay: `${Math.min(index * 0.1, 0.6)}s` }}>
              <img 
                src={folder + encodeURIComponent(item.file)} 
                alt={item.name}
                loading="lazy"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
