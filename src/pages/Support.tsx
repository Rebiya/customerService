import React from "react";
import {
  UserIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-700 mb-6 sm:mb-8 text-center">
          Business Licensing Service
        </h1>

        {/* Business Owner Workflow */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border-2 border-primary hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 sm:mb-4 flex items-center">
            <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-700" />
            How to use the website
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            As a business owner, you can easily register, apply for licenses,
            and manage your applications through our platform. Here’s how it
            works:
          </p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
            <li>
              <strong>Step 1:</strong> Register and set up your business
              profile.
            </li>
            <li>
              <strong>Step 2:</strong> Select a service (e.g., Business License
              Registration, Consultation).
            </li>
            <li>
              <strong>Step 3:</strong> Choose to either book an appointment or
              apply for a license directly.
            </li>
            <li>
              <strong>Step 4:</strong> Track your application status and receive
              notifications.
            </li>
          </ul>
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 border-2 border-primary hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 sm:mb-4 flex items-center">
            <DocumentTextIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700 mr-2" />
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                How long does it take to get a license approved?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                The approval process typically takes 5-7 business days. However,
                it may vary depending on the complexity of your application.
              </p>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                What documents are required for a business license?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                You will need to submit proof of identity, business registration
                documents, and any other relevant permits.
              </p>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                Can I reschedule an appointment?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Yes, you can reschedule your appointment by logging into your
                account and updating your booking.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border-2 border-primary hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3 sm:mb-4 flex items-center">
            <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-700" />
            Contact Us
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            If you have any questions or face issues, feel free to reach out to
            our customer support team:
          </p>
          <div className="space-y-1 sm:space-y-2">
            <div className="flex items-center hover:text-blue-700 transition-colors duration-300">
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700 mr-2" />
              <span className="text-sm sm:text-base text-gray-700">
                +251 902 471 446
              </span>
            </div>
            <div className="flex items-center hover:text-blue-700 transition-colors duration-300">
              <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700 mr-2" />
              <span className="text-sm sm:text-base text-gray-700">
                rebum.19@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
