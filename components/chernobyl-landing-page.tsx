"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Linkedin, Github, Twitter, Link2, Leaf, Hexagon } from "lucide-react"

export default function ChernobylLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)

  const navigationItems = [
    { name: "Powerplants", href: "/powerplants" },
    { name: "Peoples Stories", href: "/peoples-stories" },
    { name: "Wall of Honor", href: "/wall-of-honor" },
    { name: "The Doctors POV", href: "/doctors-pov" },
    { name: "What Went Wrong", href: "/what-went-wrong" },
  ]

  const sidebarItems = [
    { id: "fault", label: "The Fault", href: "#the-fault" },
    { id: "alarm", label: "The Alarm", href: "#why-the-alarm" },
    { id: "chernobyl", label: "Chernobyl", href: "#whats-chernobyl" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Link2, href: "#", label: "Link" },
  ]

  const contentCards = [
    {
      title: "Why it Happened",
      description: "They age and draw first line. Improving end destructs may instantly.",
      link: "See details",
      position: "top",
    },
    {
      title: "How it Happened",
      description: "Why kept very over home first. Considered sympathize uncommonly occasional assistance sufficient.",
      link: "See details",
      position: "center",
    },
    {
      title: "Who was responsible",
      description:
        "Really boy law county she unable her sister. Feet you off its like like six. Merit behind an afraid or warmly.",
      link: "See details",
      position: "bottom",
    },
  ]

  const partners = [
    { name: "HAYDEN", type: "text" },
    { name: "GOOD MOOD", type: "text" },
    { name: "GOODNESS", type: "text-with-icon", icon: Leaf },
    { name: "SPACE GALLERY", type: "text-with-icon", icon: Hexagon },
    { name: "Parker & Co.", type: "text" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-orange-400 to-yellow-400 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('background.png')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 via-orange-400/30 to-yellow-400/20"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between p-4 sm:p-6 h-16 sm:h-20">
        <Link href="/" className="text-white text-xl sm:text-2xl font-bold tracking-wide flex-shrink-0">
          MOOVIE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 w-10 text-white hover:text-gray-300 hover:bg-white/10"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 sm:top-20 right-4 sm:right-6 lg:hidden z-50">
          <div className="px-4 py-3 space-y-2 bg-black/90 backdrop-blur-md rounded-lg border border-white/10 min-w-48">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 text-sm font-medium transition-all duration-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Left Sidebar - Hidden on mobile, shown on tablet+ */}
      <aside className="hidden sm:flex absolute left-0 top-16 sm:top-20 bottom-0 w-12 lg:w-16 flex-col justify-between z-40">
        {/* Navigation Items */}
        <nav className="flex-1 flex items-center py-8">
          <ul className="flex flex-col items-center justify-center gap-2 lg:gap-4 w-full h-full">
            {sidebarItems.map((item) => (
              <li key={item.id} className="relative">
                <Link
                  href={item.href}
                  className={`group flex items-center justify-center ${
                    activeLink === item.id ? "text-white" : "text-white/70"
                  }`}
                  onClick={() => setActiveLink(item.id)}
                >
                  <span className="origin-center -rotate-90 whitespace-nowrap text-xs font-medium tracking-wider uppercase hover:text-white transition-colors duration-200 py-4 px-2 my-3 lg:my-4">
                    {item.label}
                  </span>
                </Link>
                {activeLink === item.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-white"></span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="pb-6">
          <ul className="flex flex-col items-center gap-3">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-200 flex items-center justify-center p-2"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content Container */}
      <div className="relative z-30 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col">
        {/* Content Wrapper */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Content Area */}
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 lg:py-12">
            <div className="max-w-full sm:max-w-xl lg:max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none mb-4 md:mb-6">
                UNTOLD
                <br />
                STORY OF
                <br />
                CHERNOBYL
                <br />
                CITY
              </h1>

              <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-6 md:mb-8 max-w-sm md:max-w-md leading-relaxed">
                We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor
                convinced residence own.
              </p>

              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium">
                Get the vibe →
              </button>
            </div>
          </div>

          {/* Right Content Cards */}
          <div className="w-full lg:w-1/2 xl:w-2/5 px-4 sm:px-8 lg:px-6 xl:px-10 py-8 lg:py-12">
            {/* Mobile/Tablet: Stack cards vertically */}
            <div className="lg:hidden space-y-4">
              {contentCards.map((card, index) => (
                <div
                  key={index}
                  className="w-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-black/40 transition-all duration-300"
                >
                  <h3 className="text-white text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-3">
                    {card.description}
                  </p>
                  <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    {card.link}
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop: Triangular layout */}
            <div className="hidden lg:block relative w-full h-full min-h-96">
              {contentCards.map((card, index) => {
                let positionClasses = ""

                if (card.position === "top") {
                  positionClasses = "absolute top-0 right-0"
                } else if (card.position === "center") {
                  positionClasses = "absolute top-1/2 -translate-y-1/2 left-0"
                } else if (card.position === "bottom") {
                  positionClasses = "absolute bottom-0 right-0"
                }

                return (
                  <div
                    key={index}
                    className={`${positionClasses} w-64 xl:w-72 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-black/40 transition-all duration-300 hover:scale-105 ${
                      card.position === "center" ? "z-20" : "z-10"
                    }`}
                  >
                    <h3 className="text-white text-lg font-bold mb-2">{card.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      {card.description}
                    </p>
                    <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                      {card.link}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Partner Logos Footer */}
        <div className="relative z-30 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-4 sm:pb-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-1 sm:gap-2 text-white/60 hover:text-white/80 transition-colors duration-300 text-xs sm:text-sm"
              >
                {partner.type === "text-with-icon" && partner.icon && (
                  <partner.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                )}
                <span className="font-medium tracking-wide whitespace-nowrap">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation for sidebar items - shown only on mobile */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-black/90 backdrop-blur-md rounded-lg border border-white/10 p-3">
          <div className="flex justify-around">
            {sidebarItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-2 py-1 rounded-md transition-colors duration-200 ${
                  activeLink === item.id ? "text-white bg-white/10" : "text-white/70"
                }`}
                onClick={() => setActiveLink(item.id)}
              >
                <span className="text-xs font-medium tracking-wider uppercase">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}