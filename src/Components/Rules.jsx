import React from "react";

function Rules() {
  return (
    <div>
      <div className="text-red-400 mx-6 md:mx-14">
        <div className="px-2 text-2xl sm:text-4xl italic py-4 my-4 rounded-lg flex justify-center bg-gray-900 font-serif">
          Wizardtopia Rules
        </div>
        <div className="bg-gray-700 rounded-lg p-2 md:p-4 ">
          <ul className="list-decimal text-white mx-12 font-sans">
            <li className="my-4">
              Swear words must be avoided strictly, failiure of which will
              result in deduction of points from houses.
            </li>
            <li className="my-4">
              Since we are a club inside Jadavpur University and, of course, a
              civilized society, we must respect our seniors with the way they
              deserve it. Anyone disrespecting their seniors will be penalised.
              For normal students, it will be a deduction of 50 points on first
              such incident. For prefects and headboys/girls, it will be a
              straight deduction of 70 points along with expulsion from their
              designated post. For professors, it will be a deduction of 100
              points along with expulsion from the job. In the second incident,
              he/she will be out of the club. However, everyone will be given a
              chance to prove themselves not guilty before punishment. If he/she
              is found to be rude there too, no wait will be done for the 2nd
              incident.
            </li>
            <li className="my-4">
              Leaving the group brings you a permanent ban from the club except.
              for mistaken leavings. Mistakenly left people will have to report
              it within 12 hours of the incident.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rules;
