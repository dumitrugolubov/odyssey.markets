import React from 'react';

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <h2>GDPR Compliance Statement</h2>
        <p>At Odyssey Exchange, we are committed to protecting your privacy and ensuring compliance with GDPR regulations. This policy explains how we collect, use, and protect your personal information.</p>
        
        <h3>Data Collection</h3>
        <p>We collect information that you provide directly to us, including:</p>
        <ul>
          <li>Account information (email, username)</li>
          <li>Trading activity data</li>
          <li>Communication preferences</li>
        </ul>

        <h3>Your Rights</h3>
        <p>Under GDPR, you have the following rights:</p>
        <ul>
          <li>Right to access your personal data</li>
          <li>Right to rectification</li>
          <li>Right to erasure</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
        </ul>

        <h3>Contact Us</h3>
        <p>For any privacy-related questions, please contact our Data Protection Officer at privacy@odyssey.markets</p>
      </div>
    </div>
  );
}