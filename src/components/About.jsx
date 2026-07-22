import SectionWrapper from "./SectionWrapper";

function About() {
  return (
    <SectionWrapper>
    <section id="about" className="bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-cyan-400 mb-10">About Me</h2>

        <p className="text-gray-300 text-xl leading-9">
          I'm <span className="text-cyan-400 font-semibold">Md Hamid Azam</span>
          , a B.Tech CSE student passionate about Full Stack Development using
          the MERN Stack. I enjoy building real-world applications, solving DSA
          problems in Java, and continuously improving my development skills.
        </p>
      </div>
    </section>
    </SectionWrapper>
  );
}

export default About;
