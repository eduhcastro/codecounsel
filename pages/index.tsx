import { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '@supabase/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react";
import Link from 'next/link';
import SectionContainer from '~/components/SectionContainer';
import Layout from '~/components/Layout';
import Settings from '~/components/modal/Settings';
import DarkModeToggle from '~/components/DarkModeToggle'

const Home: NextPage = () => {
  const meta_title = 'CodeCounsel';
  const meta_description = 'Personalized advice to elevate your scripts.';
  const [visibleSettigns, setSettignsVisible] = useState(false);

  const handlerSeti = (event: any) => setSettignsVisible(event)

  return (
    <>
      <Head>
        <title>{`${meta_title} | For Developers`}</title>
        <meta name="description" content={meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SectionContainer className="space-y-16">
          <div className="container-lg">
            <div className="text-wrap-center margin-large">
              <div className="margin-small">
                <div className="max-width-title">
                  <h1 className="heading-large h1">
                    From a developer <span className="indigo-gradient">to Developers</span>
                  </h1>
                </div>
              </div>
              <div className="margin-medium">
                <div className="max-width-paragraph">
                  <div className="text-xl descri"></div>
                  <Button
                    onClick={() => setSettignsVisible(true)}
                    size="medium"
                    className="default"
                    type="default"
                  >
                    Start using company!
                  </Button>
                </div>
              </div>
              <div className="step-3">
                <div className="contri-list" style={{ display: 'flex' }}>
                  <div className="contri-list-user">
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="image-designer-male"
                      style={{
                        pointerEvents: 'none',
                        userSelect: 'none',
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'inherit',
                        objectPosition: 'center',
                        objectFit: 'cover',
                        imageRendering: 'auto',
                      }}
                    />
                  </div>
                  <div className="contri-list-user">
                    <img
                      src="https://framerusercontent.com/images/4EIANjev7LuKhnhOHDsv1sNBN4Y.webp"
                      alt="image-designer-male"
                      style={{
                        pointerEvents: 'none',
                        userSelect: 'none',
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'inherit',
                        objectPosition: 'center',
                        objectFit: 'cover',
                        imageRendering: 'auto',
                      }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="margin-medium" style={{ display: 'flex' }}>
            <Link href="/app/assistant">
              <img src="/images/main1.png" className="item_code" /></Link>
            <img src="/images/main1.png" className="item_code main" />
            <img src="/images/main1.png" className="item_code" />
          </div>
          <div style={{ opacity: 1, transform: 'perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px)' }}>
            <div className="div-title" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }} data-framer-component-type="RichTextContainer">
              <h3 className="framer-text framer-styles-preset-1wml6uu h1" data-styles-preset="fVxnimdqP" style={{ textAlign: 'center' }}>
                Users Reviews
              </h3>
            </div>
            <div className="framer-1mu8xsg" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }} data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-21ogod text-scale-900 text-xl" data-styles-preset="xZndidUCt" style={{
                textAlign: "center", display: "flex",
                flexDirection: "column",
                alignContent: "center",
                placeItems: "center"
              }}>
                Leave a comment about the project!
                <Button
                  style={{ marginTop: "8px" }}
                  size="medium"
                  type="primary"
                >
                  Add a comment!
                </Button>
              </p>

            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="mr-3 ml-3">
                <a target="_blank" className="cursor-pointer" href="https://twitter.com/justinjunodev/status/1500264302749622273">
                  <div className="dark:bg-scale-300 border-scale-300 dark:border-scale-400 rounded-2xl border bg-white p-6 drop-shadow-sm border-none effect-my" >
                    <div className="relative">
                      <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div className="h-10 w-10 overflow-hidden rounded-full border dark:border-gray-600">
                          <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '0px', position: 'relative' }}>
                            <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: '0px', margin: '0px', padding: '100% 0px 0px' }}></span>
                            <img
                              alt="@justinjunodev twitter image"
                              src="https://th.bing.com/th/id/OIP.wcIi-ZrVYYytXnNg5TXn1QHaHa?pid=ImgDet&rs=1"
                              decoding="async"
                              data-nimg="responsive"
                              style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                              sizes="100vw"
                            />
                            <noscript></noscript>
                          </span>
                        </div>
                        <p className="text-scale-1200 text-sm font-medium -mt-1 mt-3 p">@justinjunodev</p>
                      </div>
                    </div>
                    <p className="text-scale-900 mt-3 text-base comment p">
                      "Y'all @supabase + @nextjs is amazing! 🙌 Barely an hour into a proof-of-concept and already have most of the functionality in place. 🤯🤯🤯"
                    </p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides here */}
          </Swiper>

          
          <Settings
            visible={visibleSettigns}
            setVisible={handlerSeti}
          />
        </SectionContainer>
        <DarkModeToggle/>
      </Layout>
    </>
  );
};

export default Home;
