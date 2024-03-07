import React from "react";
import "./about.css"
const About = () => {
  return (
  <div id="about">
    <div className="mx-auto max-w-7xl px-2 md:px-4">
 
  <div>
    <div className="flex flex-col space-y-8 pb-10 pt-12 text-center md:pt-24">
      <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
        Simple, transparent pricing
      </p>
      <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
        quam ratione placeat?
      </p>
    </div>
    <div className="mt-8 w-full space-y-4 md:mt-12">
      <div className="grid space-y-8 lg:grid-cols-3 lg:space-x-8 lg:space-y-0">
        <div className=" rounded-2xl border border-gray-200 bg-white shadow">
          <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
            <p className="text-4xl font-bold leading-10">$10/mth</p>
            <div className="flex w-full flex-col items-start justify-start space-y-1">
              <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                Basic plan
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                Billed annually.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start px-8 pb-10 pt-8">
            <div className="flex w-full flex-col space-y-4">
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Access to all basic features{" "}
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Basic reporting and analytics
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Up to 10 individual users
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  20GB individual data each user
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Basic chat and email support
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col px-8 pb-8">
            <div className="flex w-full flex-col items-start justify-start space-y-3">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
              <button
                type="button"
                className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-2xl border border-gray-200 bg-white shadow">
          <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
            <p className="text-4xl font-bold leading-10">$20/mth</p>
            <div className="flex w-full flex-col items-start justify-start space-y-1">
              <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                Business plan
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                Billed annually.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start px-8 pb-10 pt-8">
            <div className="flex w-full flex-col space-y-4">
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  200+ integrations
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Advanced reporting and analytics
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Up to 20 individual users
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  40GB individual data each user
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Priority chat and email support
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col px-8 pb-8">
            <div className="flex w-full flex-col items-start justify-start space-y-3">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
              <button
                type="button"
                className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-2xl border border-gray-200 bg-white shadow">
          <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
            <p className="text-4xl font-bold leading-10">$40/mth</p>
            <div className="flex w-full flex-col items-start justify-start space-y-1">
              <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                Enterprise plan
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                Billed annually.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start px-8 pb-10 pt-8">
            <div className="flex w-full flex-col space-y-4">
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Advanced custom fields
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Audit log and data history
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Unlimited individual users
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Unlimited individual data
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full bg-gray-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Personalized+priority service
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col px-8 pb-8">
            <div className="flex w-full flex-col items-start justify-start space-y-3">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
              <button
                type="button"
                className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-14 space-y-16  py-12">
      <div>
        <div className="">
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="text-2xl font-bold leading-10 text-gray-900">FAQS</p>
            </div>
            <p className="max-w-xl text-base text-gray-600">
              Everything you need to know about the product and billing.
              Can&#x27;t find the answer you&#x27;re looking for? Please chat to
              our friendly team.
            </p>
            <hr className="my-8" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:space-x-8">
          <div className="my-8 space-y-5">
            <div className="flex w-full flex-col space-y-2">
              <p className="w-full text-lg font-semibold text-gray-900">
                Is there a free trial available?
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </div>
          </div>
          <div className="my-8 space-y-5">
            <div className="flex w-full flex-col space-y-2">
              <p className="w-full text-lg font-semibold text-gray-900">
                Can I change my plan later?
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                Of course. Our pricing scales with your company. Chat to our
                friendly team to find a solution that works for you.
              </p>
            </div>
          </div>
          <div className="my-8 space-y-5">
            <div className="flex w-full flex-col space-y-2">
              <p className="w-full text-lg font-semibold text-gray-900">
                What is your cancellation policy?
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                We understand that things change. You can cancel your plan at
                any time and we’ll refund you the difference already paid.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:space-x-8">
          <div className="my-8 space-y-5">
            <div className="flex w-full flex-col space-y-2">
              <p className="w-full text-lg font-semibold text-gray-900">
                Can other info be added to an invoice?
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </div>
          </div>
          <div className="my-8 space-y-5">
            <div className="flex w-full flex-col space-y-2">
              <p className="w-full text-lg font-semibold text-gray-900">
                How does billing work?
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                Plans are per workspace, not per account. You can upgrade one
                workspace, and still have any number of free workspaces.
              </p>
            </div>
          </div>
          <div className="my-8 space-y-5">
            <div className="flex w-full flex-col space-y-2">
              <p className="w-full text-lg font-semibold text-gray-900">
                How do I change my account email?
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                You can change the email address associated with your account by
                going to account from a laptop or desktop.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col justify-between rounded-md bg-gray-50 p-4 md:flex-row md:items-center md:p-8 lg:space-x-8">
            <div className="space-y-2">
              <p className="text-xl font-semibold leading-loose text-gray-900">
                Still have questions?
              </p>
              <p className="text-base text-gray-600 md:text-lg md:leading-7">
                Can&#x27;t find the answer you&#x27;re looking for? Please chat
                to our friendly team.
              </p>
            </div>
            <button
              type="button"
              className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:mt-0"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr className="mt-6" />
  <div className="mx-auto max-w-7xl">

  </div>
</div>

  </div>
  )
}

export default About
