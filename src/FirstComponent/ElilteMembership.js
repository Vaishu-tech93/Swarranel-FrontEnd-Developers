import React from 'react';
import img from '../FirstComponent/b11.jpg'; 

function EliteMembership() {
  return (
    <>
      <span className="flex flex-col md:flex-row  mt-20">
        <img
          src="/Elite_Club.webp"
          className="ml-4 md:ml-20 w-64 h-64 md:w-96 md:h-96 mt-20 md:mt-64 mx-auto"
          alt="Elite Club"
        />
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="h-auto bg-cover bg-center w-full md:w-2/3 mt-6 md:mt-0 p-6"
        >
          <p className="text-sm md:text-lg text-gray-900 dark:text-white mx-auto md:mx-0 px-4 md:px-10  mt-10 leading-relaxed ">
            1. Membership Fees are Only Rs. 1300/- Per Member<br /><br />
            2. Membership is completely Transferable and is valid from 1st April till 31st March 2025<br /><br />
            3. Each Registered member will be entitled for one ticket each for any 4 out of 6+ Grand Musical Shows conducted by Swarraneel Entertainments at Prof. Ramkrishna More Auditorium, Chinchwad, Ga Di Madgulkar Auditorium, Nigdi, or Elpro City Square Auditorium, Chinchwad; membership is not valid for events conducted outside PCMC<br /><br />
            4. Booking of each event will be opened for “Members Only” at least one week prior to opening it for the external audience. Booking of seats for members will be on a rotation basis in 3 sections of respective rows as per the membership<br /><br />
            5. Flat discount of 20% on extra tickets for Members will be available for all Scheme Events. In addition, if a member wishes to attend more than 4 events in the year or any event outside PCMC, the member will be extended a flat discount of 20% on tickets for any such events<br /><br />
            6. For every event attended by our members, complementary snacks will be arranged for them as well as for the extra seats booked by them<br /><br />
            7. First 2 rows will be reserved for Swarraneel Officials and invites and a few rows will be reserved for online sale on BookMyShow or Swarraneel’s Booking Platform<br /><br />
            8. Booking will be taken through a well-defined and executed process over WhatsApp group of registered members thus giving complete transparency to our members<br /><br />
            9. All musical events will be conducted on Friday or Saturday or Sunday (6/7 pm or 9/9:30 pm); our effort will be to make maximum shows during the year on a Saturday or Sunday evening 6 PM<br /><br />
            10. The scheme will not be available for any joint ventures by Swarraneel unless exclusively declared by Swarraneel authorities<br /><br />
            11. Every registered member will be issued a membership card which is mandatory to be carried while collecting ticket(s) from the booking window/desk at the auditorium<br /><br />
            12. In addition, Swarraneel will also work with other events being organized in PCMC to explore possibilities of offering special discounts to our Club Members<br /><br />
            13. Please scan the QR Code given below to pay and avail the membership (Please share the payment screenshot with us on <a href="https://whatsapp.com" className="text-blue-600">WhatsApp</a> once the payment is done)
          </p>
        </div>
      </span>
      <img
        src="/QR-Code.jpg"
        className="w-30 md:w-30 mx-auto mt-10 mb-20 "
        alt="QR Code"
      />
    </>
  );
}

export default EliteMembership;
