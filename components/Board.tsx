"use client";

import React, { useState } from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";

interface BoardMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  gradient: string;
  initial: string;
}

const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Sneha Jain",
    position: "President",
    description: "Leading with Vision",
    image: "/Seha.jpeg",
    gradient: "from-rose-tan to-rose-tan-dark",
    initial: "P",
  },
  {
    id: 2,
    name: "Rishi Oswal",
    position: "Secretary",
    description: "Organizing Success",
    image: "/Rishi.jpeg",
    gradient: "from-luxury-gold to-rose-tan",
    initial: "S",
  },
  {
    id: 3,
    name: "Anisha Shah",
    position: "Joint Secretary",
    description: "Ensuring Smooth Operations",
    image: "/Anisha.jpeg",
    gradient: "from-rose-tan-light to-mauve-wine-light",
    initial: "JS",
  },
  {
    id: 4,
    name: "Ansh Gandhi",
    position: "Treasurer",
    description: "Financial Stewardship",
    image: "/ansh.jpeg",
    gradient: "from-rose-tan-light to-mauve-wine-light",
    initial: "T",
  },
  {
    id: 5,
    name: "Sujal Yadav",
    position: "Vice President",
    description: "Supporting Excellence",
    image: "",
    gradient: "from-mauve-wine to-mauve-wine-dark",
    initial: "VP",
  },
  {
    id: 6,
    name: "Disha Daga",
    position: "Club Mentor",
    description: "Guiding with Experience",
    image: "/Disha.jpeg",
    gradient: "from-rose-tan-light to-mauve-wine-light",
    initial: "CM",
  },
  {
    id: 7,
    name: "Sahil Oswal",
    position: "IPP",
    description: "Continuing Legacy",
    image: "",
    gradient: "from-rose-tan-light to-mauve-wine-light",
    initial: "IP",
  },
  {
    id: 8,
    name: "Vanshita Jain",
    position: "SAA",
    description: "Maintaining Order & Discipline",
    image: "/Vanshita.jpeg",
    gradient: "from-rose-tan-light to-mauve-wine-light",
    initial: "SA",
  },
  {
    id: 9,
    name: "Pritesh Gadiya",
    position: "CSD",
    description: "Fostering Fellowship",
    image: "/Pritesh.JPG",
    gradient: "from-rose-tan-light to-mauve-wine-light",
    initial: "CSD",
  },
  {
    id: 10,
    name: "Shrenik Dugad",
    position: "PDD",
    description: "Encouraging Growth & Learning",
    image: "/Shrenik.jpeg",
    gradient: "from-rose-tan-light to-mauve-wine-light",
    initial: "PDD",
  },
  {
    id: 11,
    name: "Pranav Gandhi",
    position: "ISD",
    description: "Building Global Connections",
    image: "/Pranav.jpeg",
    gradient: "from-rose-tan-light to-mauve-wine-light",
    initial: "ISD",
  },
  {
    id: 12,
    name: "Lavish Lodha",
    position: "CMD",
    description: "Driving Social Impact",
    image: "/Lavish.png",
    gradient: "from-rose-tan-light to-mauve-wine-light",
    initial: "CMD",
  },
  {
    id: 13,
    name: "Viraj Soni",
    position: "DEI",
    description: "Promoting Inclusivity",
    image: "",
    gradient: "from-rose-tan-light to-mauve-wine-light",
    initial: "DEI",
  },
];

export default function BoardMembers() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="board" className="py-20 luxury-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Board of Directors
          </h2>

          <p className="text-white max-w-2xl mx-auto">
            Meet the passionate leaders driving our mission forward
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-mauve-wine border border-mauve-wine"
              onMouseEnter={() => setHovered(member.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image / Placeholder */}
              <div className="aspect-square">
                {member.image ? (
                  <img
                    src={member.image}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={member.name}
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center text-4xl font-bold text-white bg-gradient-to-br ${member.gradient}`}
                  >
                    {member.initial}
                  </div>
                )}
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-mauve-wine-dark/90 via-mauve-wine/80 to-transparent text-white p-6 flex flex-col justify-end transition-all duration-300 ${
                  hovered === member.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-xl font-bold text-luxury-gold">
                  {member.name}
                </h3>
                <p className="text-rose-tan-light text-sm mb-3">
                  {member.position}
                </p>
                <p className="text-sm opacity-90 mb-4">{member.description}</p>

                <div className="flex gap-3">
                  <button className="w-9 h-9 bg-white/10 hover:bg-luxury-gold rounded-full flex items-center justify-center transition">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 bg-white/10 hover:bg-luxury-gold rounded-full flex items-center justify-center transition">
                    <Instagram className="w-4 h-4 " />
                  </button>
                  <button className="w-9 h-9 bg-white/10 hover:luxury-gold rounded-full flex items-center justify-center transition">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Default text (when NOT hovered) */}
              <div
                className={`p-5 text-center transition-all duration-300 ${
                  hovered === member.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="font-bold text-white">{member.name}</h3>
                <p className="text-sm text-white">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
