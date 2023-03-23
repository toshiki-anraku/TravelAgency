import React from 'react'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'

const LandingPage = (props) => {
  return (
    <>
      <div className="landing-page-container">
        <Head>
          <title>Travel Agency</title>
          <meta property="og:title" content="Travel Agency" />
        </Head>
        <div className="landing-page-top-container">
          <nav data-role="Header" className="landing-page-navbar">
            <h1>Travel</h1>
            <div className="landing-page-right-side">
              <div className="landing-page-links-container">
                <span className="landing-page-text">Home</span>
                <span className="landing-page-text01">About</span>
                <span className="landing-page-text02">Tour Packages</span>
                <span className="landing-page-text03">Contact</span>
              </div>
              <a href="#main-section" className="landing-page-link">
                <SolidButton button="Explore places"></SolidButton>
              </a>
            </div>
            <div data-role="BurgerMenu" className="landing-page-burger-menu">
              <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="landing-page-mobile-menu">
              <div className="landing-page-nav">
                <div className="landing-page-top">
                  <h1>Travel</h1>
                  <div
                    data-role="CloseMobileMenu"
                    className="landing-page-close-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="landing-page-icon03"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="landing-page-right-side1">
                  <div className="landing-page-links-container1">
                    <span className="landing-page-text04">Home</span>
                    <span className="landing-page-text05">About</span>
                    <span className="landing-page-text06">Tour Packages</span>
                    <span>Contact</span>
                  </div>
                  <a href="#main-section" className="landing-page-link01">
                    <SolidButton button="Explore places"></SolidButton>
                  </a>
                </div>
              </div>
              <div className="landing-page-follow-container">
                <span className="landing-page-text08">
                  Follow us on
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <div className="landing-page-icons-container">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link02"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="landing-page-icon05"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link03"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="landing-page-icon07"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link04"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="landing-page-icon09"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="landing-page-hero">
            <div className="landing-page-content-container">
              <h1 className="Heading landing-page-text09">Book an exclusive</h1>
              <h2 className="Subheading landing-page-subheading">
                home for your personal travel
              </h2>
              <span className="landing-page-text10">
                <span>
                  Each property is hand-picked,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>personally visited and cannot be found elsewhere.</span>
              </span>
              <SolidButton button="Explore homes"></SolidButton>
            </div>
          </div>
        </div>
        <div id="main-section" className="landing-page-main">
          <h1>Most famous places</h1>
          <span className="landing-page-text15">Recommended</span>
          <div className="landing-page-cards-container">
            <PlaceCard
              city="London"
              image="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></PlaceCard>
            <PlaceCard
              city="Rome"
              image="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></PlaceCard>
            <PlaceCard
              city="Cluj-Napoca"
              image="https://images.unsplash.com/photo-1513342791620-b106dc487c94?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></PlaceCard>
            <PlaceCard
              city="Paris"
              image="https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></PlaceCard>
            <PlaceCard
              city="Amsterdam"
              image="https://images.unsplash.com/photo-1585211969224-3e992986159d?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></PlaceCard>
            <PlaceCard
              city="Barcelona"
              image="https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></PlaceCard>
          </div>
        </div>
        <div className="landing-page-footer">
          <div className="landing-page-menu">
            <h1>Travel</h1>
            <div className="landing-page-links-container2">
              <div className="landing-page-container1">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link05"
                >
                  Tour packages
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link06"
                >
                  Personalized offers
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link07"
                >
                  Special deals
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link08"
                >
                  Summer holiday
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </a>
              </div>
              <div className="landing-page-container2">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link09"
                >
                  About us
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link10"
                >
                  FAQ
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link11"
                >
                  Terms and conditions
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link12"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="landing-page-follow-container1">
              <span className="landing-page-text16">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="landing-page-icons-container1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link13"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon11"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link14"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon13"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link15"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon15"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .landing-page-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .landing-page-top-container {
            width: 100%;
            height: 600px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000');
            background-position: 0% 40%;
          }
          .landing-page-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-text {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .landing-page-text01 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .landing-page-text02 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .landing-page-text03 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .landing-page-link {
            display: contents;
          }
          .landing-page-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-burger-menu {
            width: 24px;
            height: 24px;
          }
          .landing-page-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .landing-page-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-page-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-page-icon03 {
            width: 24px;
            height: 24px;
          }
          .landing-page-right-side1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-text04 {
            margin-bottom: 8px;
          }
          .landing-page-text05 {
            margin-bottom: 8px;
          }
          .landing-page-text06 {
            margin-bottom: 8px;
          }
          .landing-page-link01 {
            display: contents;
          }
          .landing-page-follow-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-text08 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .landing-page-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-link02 {
            display: contents;
          }
          .landing-page-icon05 {
            width: 24px;
            height: 24px;
          }
          .landing-page-link03 {
            display: contents;
          }
          .landing-page-icon07 {
            width: 24px;
            height: 24px;
          }
          .landing-page-link04 {
            display: contents;
          }
          .landing-page-icon09 {
            width: 24px;
            height: 24px;
          }
          .landing-page-hero {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .landing-page-content-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-page-text10 {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .landing-page-main {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-quadruple);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: flex-start;
          }
          .landing-page-text15 {
            color: var(--dl-color-gray-500);
          }
          .landing-page-cards-container {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .landing-page-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-links-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-container1 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .landing-page-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-link08 {
            text-decoration: none;
          }
          .landing-page-container2 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .landing-page-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-link12 {
            text-decoration: none;
          }
          .landing-page-follow-container1 {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-text16 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .landing-page-icons-container1 {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-link13 {
            display: contents;
          }
          .landing-page-icon11 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .landing-page-link14 {
            display: contents;
          }
          .landing-page-icon13 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .landing-page-link15 {
            display: contents;
          }
          .landing-page-icon15 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .landing-page-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .landing-page-cards-container {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .landing-page-right-side {
              display: none;
            }
            .landing-page-burger-menu {
              display: flex;
            }
            .landing-page-hero {
              justify-content: center;
            }
            .landing-page-content-container {
              align-items: center;
            }
            .landing-page-text09 {
              font-size: 2.5rem;
            }
            .landing-page-text10 {
              text-align: center;
            }
            .landing-page-main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .landing-page-menu {
              flex-direction: column;
            }
            .landing-page-links-container2 {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
            .landing-page-container1 {
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .landing-page-text09 {
              font-size: 2rem;
              text-align: center;
            }
            .landing-page-subheading {
              font-size: 1.3rem;
              text-align: center;
            }
            .landing-page-links-container2 {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .landing-page-link05 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-link06 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-link07 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-link08 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-container2 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .landing-page-link09 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-link10 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-link11 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-link12 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-follow-container1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default LandingPage
