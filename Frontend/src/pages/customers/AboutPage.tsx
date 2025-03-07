import React, { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";

function AboutPage() {
  const [active, setActive] = useState(0);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className="container mx-auto p-6 mt-20 bg-white shadow-lg rounded-lg flex justify-center items-center">
      <div className="w-full">
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step
            label={
              <span className="text-blue-500 font-semibold">First Step</span>
            }
            description="Create an Account or Login"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500 text-black text-lg transition duration-300 hover:shadow-xl hover:bg-blue-50 mx-auto w-full">
              <ul className="list-none space-y-3">
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Click on the <strong>"Sign Up"</strong> button on the homepage
                  to start the process.
                </li>
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Choose to sign up using your email or national ID for
                  verification.
                </li>
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Fill in your details like{" "}
                  <strong> name, email, and password </strong> securely.
                </li>
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Click <strong>"Create Account"</strong> to complete the
                  sign-up process successfully.
                </li>
              </ul>
            </div>
          </Stepper.Step>

          <Stepper.Step
            label={
              <span className="text-blue-500 font-semibold">Second Step</span>
            }
            description="Applying for a Business License"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500 text-black text-lg transition duration-300 hover:shadow-xl hover:bg-blue-50 mx-auto w-full">
              <ul className="list-none space-y-3">
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Start a <strong>new business application</strong> through your
                  dashboard.
                </li>
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Enter your <strong>business details</strong> like name,
                  address, and type.
                </li>
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Upload the <strong>necessary documents</strong> such as ID and
                  business registration files.
                </li>
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Carefully review all details before clicking{" "}
                  <strong>"Submit Application"</strong>.
                </li>
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Receive an <strong>email or SMS confirmation</strong> once
                  your application is submitted.
                </li>
              </ul>
            </div>
          </Stepper.Step>

          <Stepper.Step
            label={
              <span className="text-blue-500 font-semibold">Third Step</span>
            }
            description="Tracking Your Application Status"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500 text-black text-lg transition duration-300 hover:shadow-xl hover:bg-blue-50 mx-auto w-full">
              <ul className="list-none space-y-3">
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Check the <strong>current status</strong> of your application
                  (Pending, Under Review, Approved).
                </li>
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Receive timely <strong>email/SMS notifications</strong> for
                  any updates.
                </li>
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  If additional documents are required, upload them directly
                  from your dashboard.
                </li>
                <li className="flex flex-wrap items-center">
                  <span className="text-black font-bold mr-2">✔</span>
                  Once approved,{" "}
                  <strong>
                    download your official business license certificate
                  </strong>
                  .
                </li>
              </ul>
            </div>
          </Stepper.Step>

          <Stepper.Completed>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-500 text-black text-lg transition duration-300 hover:shadow-xl hover:bg-green-50 mx-auto w-full text-center">
              <div className="text-green-600 font-semibold text-xl">
                🎉 Congratulations! You have successfully completed all steps!
              </div>
              <ul className="list-none space-y-3 mt-3">
                <li className="flex flex-wrap items-center justify-center">
                  <span className="text-green-600 font-bold mr-2">✔</span>
                  You can now{" "}
                  <strong>download your business license certificate</strong>.
                </li>
                <li className="flex flex-wrap items-center justify-center">
                  <span className="text-green-600 font-bold mr-2">✔</span>
                  Need help? <strong>Contact our support team</strong> for any
                  assistance.
                </li>
                <li className="flex flex-wrap items-center justify-center">
                  <span className="text-green-600 font-bold mr-2">✔</span>
                  Thank you for using our platform! 🚀
                </li>
              </ul>
            </div>
          </Stepper.Completed>
        </Stepper>

        <Group justify="flex-end" mt="xl">
          {active !== 0 && (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active !== 3 && (
            <Button color="blue" onClick={nextStep}>
              Next Step
            </Button>
          )}
        </Group>
      </div>
    </div>
  );
}

export default AboutPage;
