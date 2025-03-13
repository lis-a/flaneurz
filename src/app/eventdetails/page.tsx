'use client'

import Button from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import Tag from "@/components/ui/tag";
import { useRouter } from "next/navigation";
import React from "react";

const EventDetails = () => {
  const router = useRouter();
  return (
    <div className="max-w-sm mx-auto">
      <div className="relative w-full h-48 bg-gray-300 rounded-md">
        <button className="absolute top-2 left-2 bg-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="bg-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
          <button className="bg-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex gap-4 flex-col p-4">
        <h1 className="text-xl font-bold">Exposition à la mairie du 14e</h1>
        <div className="flex gap-2">
          <Tag label="Culturel" />
          <Tag label="Exposition" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius
          accusantium culpa ea? Cupiditate consectetur placeat rem, repellendus
          illo rerum commodi unde sunt perspiciatis nulla, praesentium ipsum
          officia natus beatae.
        </p>

        <div className="bg-gray-100 p-3 rounded-md">
          <span className="text-gray-700 font-medium">
            📍 2 Pl. Ferdinand Brunot, 75014 Paris
          </span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="font-medium">Note</p>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>

            <span>2,5/5</span>
          </div>
        </div>

        <div>
          <p className="font-medium">Avis</p>
          <div className="p-3 rounded-md bg-gray-50 dark:text-gray-700">
            <p>“Super activité, j’ai adoré !” M. Dupont</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            label="S'y rendre"
            className="flex"
            onClick={() => router.push("itinerarychoice")}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
