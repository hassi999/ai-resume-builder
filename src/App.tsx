
import {
  ArrowRight,
  Check,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ResumeEditor from "./pages/ResumeEditor";



function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <main className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-200/40 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-80 -z-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

        <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4 text-purple-600" />

              <span>AI-powered resume builder</span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Build your{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                resume
              </span>{" "}
              with AI.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Create a professional, job-winning resume in minutes.
              Let AI improve your content, highlight your skills, and
              help you stand out from the competition.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Get Started */}
              <Button
                size="lg"
                className="group cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-6 text-base text-white shadow-lg transition hover:from-blue-600 hover:to-purple-700"
              >
                Get Started

                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Watch Demo */}
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer rounded-full px-7 py-6 text-base"
              >
                <Play className="mr-2 h-4 w-4 fill-current" />

                Watch Demo
              </Button>
            </div>

            {/* Small Features */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                AI-powered
              </div>

              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Professional templates
              </div>

              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                ATS friendly
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* AI Improved Floating Card */}
           <div className="absolute -left-10 -top-4 z-20 hidden rounded-2xl border bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-purple-100 p-2">
                  <WandSparkles className="h-5 w-5 text-purple-600" />
                </div>

                <div >
                  <p className="text-sm font-semibold ">
                    AI Improved
                  </p>

                  <p className="text-xs text-gray-500">
                    Your resume looks better
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RESUME CARD ================= */}
            <div className="mt-6 rotate-2 rounded-2xl border bg-white p-4 shadow-2xl transition duration-500 hover:rotate-0 sm:mt-8 sm:p-5">
              <div className="rounded-xl border bg-gray-50 p-6">
                {/* Resume Header */}
                <div className="border-b pb-5">
                  <h2 className="text-xl font-bold text-gray-900">
                    Alex Johnson
                  </h2>

                  <p className="mt-1 text-sm font-medium text-purple-600">
                    Full Stack Developer
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    alex@example.com • New York, NY • +1 234 567 890
                  </p>
                </div>

                {/* Summary */}
                <div className="mt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-purple-600">
                    Professional Summary
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-gray-600">
                    Full Stack Developer with experience building
                    modern web applications using React, Node.js,
                    and TypeScript. Passionate about creating fast,
                    scalable, and user-friendly products.
                  </p>
                </div>

                {/* Experience */}
                <div className="mt-7">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-purple-600">
                    Experience
                  </h3>

                  <div className="mt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Software Developer
                        </p>

                        <p className="text-xs text-gray-500">
                          Tech Company
                        </p>
                      </div>

                      <p className="text-xs text-gray-400">
                        2023 – Present
                      </p>
                    </div>

                    <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                      <li>
                        • Built responsive web applications using React
                      </li>

                      <li>
                        • Improved application performance and UX
                      </li>

                      <li>
                        • Collaborated with cross-functional teams
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div className="mt-7">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-purple-600">
                    Education
                  </h3>

                  <div className="mt-3">
                    <p className="text-sm font-semibold text-gray-800">
                      Bachelor of Computer Science
                    </p>

                    <p className="text-xs text-gray-500">
                      University of Technology • 2019 – 2023
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-7">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-purple-600">
                    Skills
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                      React
                    </span>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      TypeScript
                    </span>

                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                      Node.js
                    </span>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= SCORE CARD ================= */}
            <div className="absolute -bottom-7 -right-5 hidden rounded-2xl border bg-white p-4 shadow-xl sm:block">
              <p className="text-xs text-gray-500">
                Resume Score
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-2xl font-bold">
                  92
                </span>

                <span className="text-sm font-medium text-green-500">
                  Excellent
                </span>
              </div>

              <div className="mt-2 h-1.5 w-28 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES BAR ================= */}
        <section className="border-t bg-gray-50/70">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4">
            <div>
              <p className="text-2xl font-bold">AI</p>

              <p className="mt-1 text-sm text-gray-500">
                Smart writing
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">10+</p>

              <p className="mt-1 text-sm text-gray-500">
                Resume templates
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">5 min</p>

              <p className="mt-1 text-sm text-gray-500">
                To create a resume
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">ATS</p>

              <p className="mt-1 text-sm text-gray-500">
                Friendly resumes
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/resume/new" element={<ResumeEditor />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
