import React from "react";
import PhilosopherStoneImage from "../../Images/Philosopher_Stone.jpg";
import ChamberImage from "../../Images/Chamber.jpg";
import PrisonerImage from "../../Images/Prisoner.jpg";
import GobletImage from "../../Images/Goblet.jpeg";
import PhoenixImage from "../../Images/Phoenix.jpg";
import HalfImage from "../../Images/Half.jpg";
import HallowsImage from "../../Images/Hallows.jpg";
import CursedImage from "../../Images/Curseded.webp";
import Book1 from "../../Books/Book 1 - The Philosopher s Stone.pdf";
import Book2 from "../../Books/Book 2 - The Chamber of Secrets.pdf";
import Book3 from "../../Books/Book 3 - The Prisoner of Azkaban.pdf";
import Book4 from "../../Books/Book 4 - The Goblet of Fire.pdf";
import Book5 from "../../Books/Book 5 - The Order of the Phoenix.pdf";
import Book6 from "../../Books/Book 6 - The Half Blood Prince.pdf";
import Book7 from "../../Books/Book 7 - The Deathly Hallows.pdf";
import Book8 from "../../Books/Book 8 - The Cursed Child.pdf";

function Books() {
  return (
    <>
      <div className="flex font-serif">
        <div className="text-3xl font-serif mt-4 text-white ml-20">Books</div>
      </div>
      <div className="flex justify-center md:justify-evenly my-12 font-mono">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-36 gap-x-40 mx-4 md:mx-12">
        <div className="text-white">
            <a href={Book1} className="group">
              <div className="mr-12 md:mr-[-10px] h-90 sm:h-80 w-30 flex flex-row gap-6">
                <div className="mx-12">1.</div>
                <div className="flex flex-col">
                  <img
                    src={PhilosopherStoneImage}
                    alt="Chamber of Secrets"
                    className="h-full w-full transition-transform transform group-hover:scale-105"
                  />
                  <div className="mt-2 text-xl italic transition-colors group-hover:text-yellow-400">
                    The Philo-sopher&#39;s Stone
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-white">
            <a href={Book2} className="group">
              <div className="mr-12 md:mr-[-10px] h-90 sm:h-80 w-30 flex flex-row gap-6">
                <div className="mx-12">2.</div>
                <div className="flex flex-col">
                  <img
                    src={ChamberImage}
                    alt="Chamber of Secrets"
                    className="h-full w-full transition-transform transform group-hover:scale-105"
                  />
                  <div className="mt-2 text-xl italic transition-colors group-hover:text-yellow-400">
                    The Chamber of Secrets
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-white">
            <a href={Book3} className="group">
              <div className="mr-12 md:mr-[-10px] h-90 sm:h-80 w-30 flex flex-row gap-6">
                <div className="mx-12">3.</div>
                <div className="flex flex-col">
                  <img
                    src={PrisonerImage}
                    alt="Prisoner of Azkaban"
                    className="h-full w-full transition-transform transform group-hover:scale-105"
                  />
                  <div className="mt-2 text-xl italic transition-colors group-hover:text-yellow-400">
                    The Prisoner of Azkaban
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-white">
            <a href={Book4} className="group">
              <div className="mr-12 md:mr-[-10px] h-90 sm:h-80 w-30 flex flex-row gap-6">
                <div className="mx-12">4.</div>
                <div className="flex flex-col">
                  <img
                    src={GobletImage}
                    alt="Goblet of Fire"
                    className="h-full w-full transition-transform transform group-hover:scale-105"
                  />
                  <div className="mt-2 text-xl italic transition-colors group-hover:text-yellow-400">
                    The Goblet of Fire
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-white">
            <a href={Book5} className="group">
              <div className="mr-12 md:mr-[-10px] h-90 sm:h-80 w-30 flex flex-row gap-6">
                <div className="mx-12">5.</div>
                <div className="flex flex-col">
                  <img
                    src={PhoenixImage}
                    alt="Order of the Phoenix"
                    className="h-full w-full transition-transform transform group-hover:scale-105"
                  />
                  <div className="mt-2 text-xl italic transition-colors group-hover:text-yellow-400">
                    The Order of the Phoenix
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-white">
            <a href={Book6} className="group">
              <div className="mr-12 md:mr-[-10px] h-90 sm:h-80 w-30 flex flex-row gap-6">
                <div className="mx-12">6.</div>
                <div className="flex flex-col">
                  <img
                    src={HalfImage}
                    alt="Half Blood Prince"
                    className="h-full w-full transition-transform transform group-hover:scale-105"
                  />
                  <div className="mt-2 text-xl italic transition-colors group-hover:text-yellow-400">
                    The Half Blood Prince
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-white">
            <a href={Book7} className="group">
              <div className="mr-12 md:mr-[-10px] h-90 sm:h-80 w-30 flex flex-row gap-6">
                <div className="mx-12">7.</div>
                <div className="flex flex-col">
                  <img
                    src={HallowsImage}
                    alt="Deathly Hallows"
                    className="h-full w-full transition-transform transform group-hover:scale-105"
                  />
                  <div className="mt-2 text-xl italic transition-colors group-hover:text-yellow-400">
                    The Deathly Hallows
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="text-white">
            <a href={Book8} className="group">
              <div className="mr-12 md:mr-[-10px] h-90 sm:h-80 w-30 flex flex-row gap-6">
                <div className="mx-12">8.</div>
                <div className="flex flex-col">
                  <img
                    src={CursedImage}
                    alt="Cursed Child"
                    className="h-full w-full transition-transform transform group-hover:scale-105"
                  />
                  <div className="mt-2 text-xl italic transition-colors group-hover:text-yellow-400">
                    The Cursed Child
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
