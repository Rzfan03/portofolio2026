import { useEffect, useState } from "react";
import { FaReact, FaWindows } from "react-icons/fa";
import AnimatedContent from "./components/AnimateMe";
import ProfileCard from "./components/ProfileCard";
import SplitText from "./components/SplitText";
import { SiDiscord, SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import {
  SiAstro,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiLinux,
  SiNodedotjs,
  SiC,
  SiRuby,
  SiSvelte,
  SiBun,
  SiNextdotjs,
} from "react-icons/si";

const App = () => {
  const [project, setProject] = useState(0);
  const [DataWakatime, setDataWakatime] = useState([]);
  const [time, setTime] = useState("");
  const [os, setOs] = useState("");
  const [editor, setEditor] = useState([]);
  const [followers, setFollowers] = useState("");

  useEffect(() => {
    const getDataWakatime = async () => {
      const ApiUrl = await fetch("https://api-rzfan03.vercel.app/");
      const result = await ApiUrl.json();

      setDataWakatime(result.data.languages || []);
      setTime(result.data.human_readable_total || "0 hrs");
      setOs(result.data.operating_systems?.[0]?.name || "Linux");
      setEditor(result.data.editors || []);
    };

    const getGithub = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Rzfan03");
        const result = await response.json();

        setFollowers(result.company || "Freelance");
        setProject(result.public_repos || 0);
      } catch (e) {
        console.error("Github error:", e);
      }
    };

    getGithub();
    getDataWakatime();
  }, []);

  const Intermediate = [
    { name: "React", icon: FaReact },
    { name: "Typescript", icon: SiTypescript },
    { name: "Javascript", icon: SiJavascript },
    { name: "Astro", icon: SiAstro },
    { name: "Linux", icon: SiLinux },
    { name: "NodeJS", icon: SiNodedotjs },
    { name: "Git", icon: SiGit },
    { name: "Windows", icon: FaWindows },
  ];

  const Beginner = [
    { name: "Python", icon: SiPython },
    { name: "C", icon: SiC },
    { name: "Ruby", icon: SiRuby },
    { name: "Svelte", icon: SiSvelte },
    { name: "Bun", icon: SiBun },
    { name: "NextJS", icon: SiNextdotjs },
  ];

  const Projects = [
    {
      name: "Paradox",
      desc: "Made Meet Client Easy With Paradox!",
      techStack: ["React", "Typescript", "TailwindCSS"],
      link: "https://paradox-rzfan03.vercel.app/",
    },
    {
      name: "Sabalong-ui",
      desc: "Unique UI Library for React",
      techStack: ["React", "Typescript", "TailwindCSS"],
      link: "https://sabalong-ui.vercel.app/",
    },
    {
      name: "Bakaanime!",
      desc: "Free Anime Streaming Website",
      techStack: ["NextJS", "Typescript", "TailwindCSS"],
      link: "https://bakaanime.vercel.app/",
    },
    {
      name: "Rzfan03",
      desc: "My Portofolio in 2025",
      techStack: ["Astro", "Typescript", "TailwindCSS"],
      link: "rzfan03.netlify.app/",
    },
  ];

  return (
    <main className="bg-zinc-900">
      {/* Home Section */}
      <section
        id="home"
        className="bg-zinc-900 flex justify-center items-center overflow-hidden"
      >
        <AnimatedContent
          className="flex w-full max-w-8xl h-screen

              "
        >
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-center min-h-[90vh] max-md:min-h-screen px-10 lg:px-20 w-full max-w-8xl gap-10">
            {/* Sisi Kiri: Teks */}

            <div className="flex flex-col gap-4 max-md:text-center max-w-4xl">
              <SplitText
                text="I'm Rizqy Fajrul Syabani"
                className="text-8xl max-w-5xl font-extrabold text-white tracking-tighter" // Tambah text-white dan ukuran besar
                delay={50}
                duration={0.8}
                ease="power4.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-20px"
                textAlign="left"
              />

              <span className="text-lg text-wrap max-w-md text-left md:text-xl text-zinc-500 font-medium">
                "A Junior FrontEnd Developer passionate about creating aesthetic
                and functional web applications. Always striving to learn, grow,
                and build high-quality digital products."
              </span>

              <div className="flex max-md:text-xs max-md:hidden gap-4 mt-4 justify-start max-md:justify-center">
                <div className="p-3 px-8 border-2 border-zinc-800 hover:border-zinc-400 hover:bg-zinc-800/50 transition-all duration-300 cursor-default group">
                  <span className="text-white font-mono group-hover:scale-105 inline-block transition-transform">
                    {project}+ Projects
                  </span>
                </div>

                <div className="p-3 px-8 border-2 border-zinc-800 hover:border-zinc-400 hover:bg-zinc-800/50 transition-all duration-300 cursor-default group">
                  <span className="text-white font-mono group-hover:scale-105 inline-block transition-transform">
                    Work at {followers || "Freelance"}
                  </span>
                </div>
              </div>
            </div>

            {/* Sisi Kanan: Profile Card */}

            <div className="relative hidden md:flex justify-center items-center">
              <AnimatedContent>
                <ProfileCard

                      delay="2"

                      text=""

                      className="z-50"

                      title="Junior Frontend Developer"

                      handle="Rzfan03"

                      status="Availabel for Hire!"

                      contactText="Contact Me"

                      avatarUrl="/card.png"

                      showUserInfo={true}

                      enableTilt={true}

                      enableMobileTilt={false}

                      onContactClick={() => (window.location.href = "#")}

                      showIcon

                      showBehindGlow

                      behindGlowColor="hsla(319, 100%, 70%, 0.6)"

                      customInnerGradient="linear-gradient(145deg,hsla(319, 40%, 45%, 0.55) 0%,hsla(242, 60%, 70%, 0.27) 100%)"

                    />
              </AnimatedContent>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* About Section - Fix Spacing */}
      <AnimatedContent>
        <section
          id="about"
          className="py-24 flex justify-center items-center border-b border-zinc-800/50"
        >
          <div className="w-full max-w-7xl px-6 flex flex-col gap-12">
            <SplitText className="text-4xl text-white" text="About me" />
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <img
                className="w-full max-w-md aspect-[3/4] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                src="photo.png"
                alt="Profile"
              />
              <div className="flex-1">
                <p className="text-white max-w-4xl p-5 text-wrap max-md:text-left text-lg">
                  "I am Rizqy Fajrul Syabani, a 16-year-old Junior Frontend
                  Developer and Linux enthusiast based in Indonesia. My journey
                  into the world of technology is fueled by an insatiable
                  curiosity and the thrill of transforming abstract concepts
                  into high-performance, interactive realities. I don’t just
                  write code; I strive to craft digital experiences that feel
                  intuitive, seamless, and human-centric. As the founder and
                  creator of{" "}
                  <span
                    onClick={() => {
                      window.location.href = "https://sabalong-ui.vercel.app/";
                    }}
                    className="bg-white p-2  cursor-pointer text-zinc-900 py-0.5"
                  >
                    Sabalong-ui
                  </span>
                  , I have dedicated myself to exploring the boundaries of
                  modern frontend architecture. This project serves as my
                  personal laboratory, where I experiment with cutting-edge best
                  practices, modular components, and accessible design patterns.
                  Through Sabalong-UI, I aim to simplify the web development
                  process while maintaining a high standard of aesthetic and
                  functional excellence. Currently, I am pursuing my studies at
                  SMKN 1 Sumbawa Besar, where I have built a rigorous foundation
                  in software engineering and computational thinking. My
                  academic journey is complemented by a deep-seated passion for
                  the Linux ecosystem. I am a firm believer in terminal-centric
                  productivity, constantly refining my workflow through custom
                  dotfiles and system optimizations to achieve maximum
                  efficiency in my development cycle.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Skills Section - Tight Layout */}
      <AnimatedContent>
        <section
          id="skills"
          className="py-24 flex justify-center border-b border-zinc-800/50"
        >
          <div className="w-full max-w-7xl px-6">
            <SplitText className="text-4xl mb-12 text-white" text="My Skills" />
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-8">
                <h1 className="text-zinc-500 text-xl w-32 shrink-0 pt-2">
                  Intermediate
                </h1>
                <div className="flex flex-wrap gap-3">
                  {Intermediate.map((item) => (
                    <div
                      key={item.name}
                      className="bg-zinc-900 border border-zinc-800 p-2 px-4 flex items-center gap-3 hover:border-zinc-400 transition-all"
                    >
                      <item.icon className="text-zinc-400" size={18} />
                      <span className="text-white text-lg">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <h1 className="text-zinc-500 w-32 text-xl shrink-0 pt-2">
                  Beginner
                </h1>
                <div className="flex flex-wrap gap-3">
                  {Beginner.map((item) => (
                    <div
                      key={item.name}
                      className="bg-zinc-900 border border-zinc-800 p-2 px-4 flex items-center gap-3 hover:border-zinc-400 transition-all"
                    >
                      <item.icon className="text-zinc-400" size={18} />
                      <span className="text-white text-lg">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Projects Section */}
      <AnimatedContent>
        <section
          id="projects"
          className="bg-zinc-900 flex-col min-h-screen flex justify-center items-center"
        >
          <SplitText
            text="My Projects"
            className="text-4xl text-white  mb-12 mt-12"
          />{" "}
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
            {Projects.map((item) => {
              return (
                <div key={item.name} className="p-5 w-full max-w-md">
                  <a
                    href={item.link}
                    class="block items-center border-2 text-zinc-800 border-zinc-800 bg-zinc-900 p-4 shadow-[4px_4px_0_0] transition-all hover:scale-95 hover:border-zinc-600 focus:ring-2 focus:ring-zinc-700 focus:outline-0 sm:p-6 px-8 py-"
                  >
                    <h3 class="mt-1 text-xl font-semibold text-white">
                      {item.name}
                    </h3>

                    <p class="mt-2 line-clamp-2 text-pretty text-white max-w-3xl">
                      {item.desc}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {item.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm font-medium text-zinc-300 bg-zinc-500/10 px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </AnimatedContent>
      {/* stats section*/}
      <section id="stats" className="min-h-screen bg-zinc-900 flex flex-col">
        <div className="flex justify-center items-center">
          <SplitText
            text="My Stats"
            className="text-4xl text-white  mb-18 md:mb-25 mt-12"
          />
        </div>
        <div className="flex justify-around max-md:flex-col gap-8 max-md:items-center">
          <div className="flex flex-col gap-2">
            <span className="text-2xl text-white">Total Hours : {time} </span>
            {editor.map((item) => {
              return (
                <span className="text-lg text-white" key={item.id}>
                  {item.name} : {item.text}
                </span>
              );
            })}
            <span className="text-white text-lg">OS : {os}</span>
          </div>
          <AnimatedContent className="flex">
            <div className="flex flex-col gap-12">
              {DataWakatime?.slice(0, 8).map((item) => {
                return (
                  <div
                    key={item.name}
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={200}
                  >
                    <p className="text-lg font-medium text-white">
                      {item.name} {item.percent}%
                    </p>
                    <div className="mt-2 h-2 w-200 max-md:max-w-sm rounded-full bg-zinc-800">
                      <div
                        className="h-full bg-zinc-200"
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Contact Section */}
      <AnimatedContent>
        <section
          id="contact"
          className="py-24 flex flex-col justify-center items-center px-6"
        >
          <div className="w-full max-w-4xl text-center">
            <SplitText
              text="Get In Touch"
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
            />
            <p className="text-zinc-500 text-lg mb-12 max-w-xl mx-auto">
              Got a question, a project idea, or just want to say hi? My inbox
              is always open.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <a
                href="https://discord.com/users/1241671009820741632"
                target="_blank"
                className="flex items-center justify-between p-6 border-2 border-zinc-800 hover:border-zinc-400 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <SiDiscord className="text-zinc-400 group-hover:text-[#5865F2] text-3xl transition-all" />
                  <div>
                    <h4 className="text-white font-bold">Discord</h4>
                    <p className="text-zinc-500 text-sm">@rzfan_</p>
                  </div>
                </div>
                <span className="text-zinc-600">→</span>
              </a>
              <a
                href="https://github.com/Rzfan03"
                target="_blank"
                className="flex items-center justify-between p-6 border-2 border-zinc-800 hover:border-zinc-400 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <SiGithub className="text-zinc-400 group-hover:text-white text-3xl transition-all" />
                  <div>
                    <h4 className="text-white font-bold">GitHub</h4>
                    <p className="text-zinc-500 text-sm">Rzfan03</p>
                  </div>
                </div>
                <span className="text-zinc-600">→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rizqy-fajrul-syabani-b65002359/"
                target="_blank"
                className="flex items-center justify-between p-6 border-2 border-zinc-800 hover:border-zinc-400 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <SiLinkedin className="text-zinc-400 group-hover:text-[#0A66C2] text-3xl transition-all" />
                  <div>
                    <h4 className="text-white font-bold">LinkedIn</h4>
                    <p className="text-zinc-500 text-sm">Rizqy Fajrul</p>
                  </div>
                </div>
                <span className="text-zinc-600">→</span>
              </a>
              <a
                href="mailto:Fajrulsyaban47@gmail.com"
                className="flex items-center justify-between p-6 border-2 border-zinc-800 hover:border-zinc-400 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <SiGmail className="text-zinc-400 group-hover:text-[#EA4335] text-3xl transition-all" />
                  <div>
                    <h4 className="text-white font-bold">Email</h4>
                    <p className="text-zinc-500 text-sm">Contact Me</p>
                  </div>
                </div>
                <span className="text-zinc-600">→</span>
              </a>
            </div>
            <div className="mt-20 text-zinc-700 font-mono text-xs">
              © 2026 - Rzfan03
            </div>
          </div>
        </section>
      </AnimatedContent>
    </main>
  );
};

export default App;
