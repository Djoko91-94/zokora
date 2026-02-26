import React from 'react'

export default function Card({ titleText, contentsText, classes }) {
    return (
        <div className="md:w-1/3 bg-gray-200 rounded-lg p-8 min-h-full flex-wrap">
            <div className="flex items-center my-2">
                <div className="bg-green-500 text-white rounded-full"></div>
                <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M15 1H1V7H3.38197L4.88196 4L7.11803 4L10 9.76393L11.382 7H15V1Z" fill="#000000"
                    />
                    <path d="M15 9H12.618L11.118 12L8.88197 12L6 6.23607L4.61803 9H1V15H15V9Z" fill="#000000"
                    />
                </svg>
            </div>
            <h2 className="text-gray-900 text-lg font-medium ml-2 my-5">{titleText}</h2>
            <p>
                {contentsText}
            </p>
            <a href="#" className="flex mt-3 text-green-500 items-center">
                MORE
                <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    )
}

