import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { createEvent } from "ics";

import shape15 from "@/images/slider/shape15.svg";
import cover from "@/images/cover.jpg";
import invitationbg from "@/images/slider/invitation-bg2.jpg";
import corner1 from "@/images/slider/corner1.svg";
import corner2 from "@/images/slider/corner2.svg";
import corner3 from "@/images/slider/corner3.svg";
import corner4 from "@/images/slider/corner4.svg";
import shape13 from "@/images/slider/shape13.svg";
import shape14 from "@/images/slider/shape14.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [icsFile, setIcsFile] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const event: any = {
      start: [2025, 4, 4, 18, 0],
      duration: { hours: 1 },
      title: "Engagement Ceremony of Vinothkanna and Banupriya",
      description:
        "Join us for the engagement ceremony of Vinothkanna and Banupriya.",
      location:
        "Arulmigu Vadakasi Amman Kovil, Kumanthapuram, Kadayanallur, Tamil Nadu 627751",
      url: "https://vinocrazy.com/",
      geo: { lat: 9.0833, lon: 77.3498 },
      categories: ["Engagement", "Ceremony"],
      status: "CONFIRMED",
      busyStatus: "BUSY",
      organizer: { name: "Family Members", email: "svkanna.g@gmail.com" },
      attendees: [],
    };

    createEvent(event, (error, value) => {
      if (error) {
        console.log(error);
        return;
      }
      const blob = new Blob([value], { type: "text/calendar" });
      const url = URL.createObjectURL(blob);
      setIcsFile(url);
    });

    const countdown = () => {
      const eventDate = new Date(2025, 3, 4, 18, 0, 0); // April 4, 2025, 18:00:00
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft("The event has started!");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timerId = setInterval(countdown, 1000);
    return () => clearInterval(timerId);
  }, []);

  const handleAddToCalendar = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      const icsContent = `BEGIN:VCALENDAR
      VERSION:2.0
      BEGIN:VEVENT
      UID:uid1@example.com
      DTSTAMP:20250322T000000Z
      ORGANIZER;CN=Family Members:mailto:svkanna.g@gmail.com
      DTSTART:20250404T180000Z
      DTEND:20250404T190000Z
      SUMMARY:Engagement Ceremony of Vinothkanna and Banupriya
      DESCRIPTION:Join us for the engagement ceremony of Vinothkanna and Banupriya.
      LOCATION:Arulmigu Vadakasi Amman Kovil, Kumanthapuram, Kadayanallur, Tamil Nadu 627751
      END:VEVENT
      END:VCALENDAR`;
      const blob = new Blob([icsContent], { type: "text/calendar" });
      const url = URL.createObjectURL(blob);
      window.open(`webcal:${url}`, "_blank");
    } else {
      const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Engagement+Ceremony+of+Vinothkanna+and+Banupriya&dates=20250404T180000Z/20250404T190000Z&details=Join+us+for+the+engagement+ceremony+of+Vinothkanna+and+Banupriya.&location=Arulmigu+Vadakasi+Amman+Kovil,+Kumanthapuram,+Kadayanallur,+Tamil+Nadu+627751&sf=true&output=xml`;
      window.open(calendarUrl, "_blank");
    }
  };

  return (
    <>
      <Head>
        <title>Engagement Ceremony of Vinothkanna and Banupriya</title>
        <meta
          name="description"
          content="With love and joy in our hearts, we invite you to celebrate the beginning of our forever."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />


        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Engagement Ceremony of Vinothkanna and Banupriya"
        />
        <meta
          property="og:description"
          content="With love and joy in our hearts, we invite you to celebrate the beginning of our forever."
        />
        <meta property="og:image" content={`${cover.src}`} />
        <meta property="og:url" content="https://vinocrazy.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Engagement Ceremony of Vinothkanna and Banupriya"
        />
        <meta
          name="twitter:description"
          content="With love and joy in our hearts, we invite you to celebrate the beginning of our forever."
        />
        <meta name="twitter:image" content={`${cover.src}`} />
        <meta name="twitter:url" content="https://x.com/itsvinocrazy" />
      </Head>
      <main>
        <section
          className="wpo-invitation-area-s2"
          style={{
            background: `url(${invitationbg.src}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        >
          <div className="hero-container">
            <div className="hero-inner">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="wpo-event-wrap">
                      <div className="wpo-event-item">
                        <div className="wpo-event-text">
                          <h2>Banupriya & Vinothkanna</h2>
                          <p>Engagement Ceremony at April 04, 2025</p>
                          <div className="inner-shape">
                            <Image src={shape15} alt="Shape 15" />
                          </div>
                          <ul>
                            <li>
                              Friday, 04 Apr. 2025 <br />
                              6:00 PM – 7:00 PM
                            </li>
                            <li>
                              <a
                                className="popup-gmaps"
                                href="#"
                                onClick={handleAddToCalendar}
                              >
                                Add to Calendar
                              </a>
                            </li>
                            <li>
                              Arulmigu Vadakasi Amman Kovil , Kumanthapuram,
                              Kadayanallur, Tamil Nadu 627751
                            </li>
                            <li>
                              <strong>Countdown: {timeLeft}</strong>
                            </li>
                            {/* <li>+1 234-567-8910</li> */}
                            <li>
                              <a
                                className="popup-gmaps"
                                href="https://maps.app.goo.gl/bbYQeZRxEhviDpj57"
                              >
                                See Location
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="shape-1">
                          <Image src={corner1} alt="Corner 1" />
                        </div>
                        <div className="shape-2">
                          <Image src={corner2} alt="Corner 2" />
                        </div>
                        <div className="shape-3">
                          <Image src={corner3} alt="Corner 3" />
                        </div>
                        <div className="shape-4">
                          <Image src={corner4} alt="Corner 4" />
                        </div>
                      </div>
                      <div className="frame-shape-1">
                        <Image src={shape13} alt="Shape 13" />
                      </div>
                      <div className="frame-shape-2">
                        <Image src={shape14} alt="Shape 14" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}