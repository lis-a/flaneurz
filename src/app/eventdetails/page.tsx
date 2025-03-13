"use client";

// import MapPreview from "@/components/map-preview";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import { useRouter } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";
import Rating from "@/components/ui/rating";

const MapPreview = dynamic(() => import("@/components/map-preview"), {
  ssr: false,
});

const EventDetails = () => {
  const router = useRouter();
  return (
    <div className="max-w-sm mx-auto">
      <div className="relative w-full h-56 bg-[url(/brocante.png)] rounded-md">
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
        <h1 className="text-xl font-bold">Brocante du 11eme</h1>
        <div className="flex gap-2">
          <Tag label="Seconde main" color="yellow" />
          <Tag label="Marché" color="blue" />
          <Tag label="Bons plans" color="red" />
        </div>
        <p className="font-bold">
          Venez découvrir notre charmante brocante au cœur du 11e ! Chaque objet
          raconte une histoire, chaque stand recèle des trésors cachés. Des
          antiquités aux objets vintage, en passant par les créations
          artisanales, notre brocante offre une expérience unique pour les
          chineurs et les amateurs de pièces authentiques.
        </p>

        <div className="bg-gray-100 p-3 rounded-md flex flex-col gap-2">
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span className="font-medium">Adresse</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-700 font-medium">
              Place de la République, 75011 Paris
            </span>
            <div>
              <MapPreview
                latitude={48.86722964698431}
                longitude={2.3635289813164597}
              />
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col justify-center items-center">
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
        </div> */}

        <div>
          <div className="flex gap-2 mb-4">
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
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            <span className="font-medium">Avis</span>
          </div>
          <div className="p-3 rounded-md bg-gray-50 flex flex-col gap-3 dark:text-gray-700">
            <div className="flex gap-2">
              <div className="bg-gray-300 rounded-full size-12"></div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Sophie A.</span>
                <Rating value={4} />
              </div>
            </div>
            <p>
              Une brocante pleine de charme ! Mon ami a déniché une lampe art déco
              magnifique et un service à thé vintage à prix raisonnable.
              Trèd conviviale et les exposants étaient accueillants.
            </p>
          </div>
        </div>
        <div className="p-3 rounded-md bg-gray-50 flex flex-col gap-3 dark:text-gray-700">
          <div className="flex gap-2">
            <div className="bg-gray-300 rounded-full size-12"></div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold">Thomas B.</span>
              <Rating value={4.5} />
            </div>
          </div>
          <p>
            Excellente découverte ce dimanche ! Cette petite brocante de
            quartier cache de véritables trésors. Organisation parfaite et bel emplacement ombragé.
          </p>
        </div>

        <div className="">
          <Button
            label="S'y rendre"
            className="rounded-4xl text-xl w-full"
            onClick={() => router.push("itinerarychoice")}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
