// FAQs.js

import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: 'What is Blood-Donor?',
      answer: 'It is an online platform dedicated to connecting blood donors with those in need. It facilitates the process of blood donation, making it easier for donors to contribute and for recipients to find the support they require.',
    },
    {
      question: 'How does blood donor work?',
      answer: 'First of all you need to create an account. Then using these credentials one can login and generate request when they require the blood. Also they will receive blood request email to their registered email as their credentials match with the credentials specified by the requestor',
    },
    {
      question: 'What information is visible to users of the site, of the donors?',
      answer: 'There is complete privacy of the donors, no information is displayed in the website',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="container" style={{marginTop:"7%", marginLeft:"10%"}}>
      <h2 style={{marginTop:'4%',marginLeft:'5%',marginBottom:'5%'}}>Frequently Asked Questions (FAQs)</h2>
      <ul style={{marginLeft:'5%',marginRight:'5%'}}>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQs;
