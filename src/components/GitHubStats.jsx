function GitHubStats() {
  return (
    <section
      id="github"
      className="bg-black text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          GitHub Statistics
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          <img
            src="https://github-readme-stats.vercel.app/api?username=MdHamidAzam&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
            className="w-full rounded-2xl"
          />

          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=MdHamidAzam&theme=tokyonight&hide_border=true"
            alt="GitHub Streak"
            className="w-full rounded-2xl"
          />

        </div>

        <div className="mt-10 flex justify-center">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=MdHamidAzam&layout=compact&theme=tokyonight&hide_border=true"
            alt="Top Languages"
            className="rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default GitHubStats;