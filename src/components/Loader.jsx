import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl font-extrabold text-cyan-400"
      >
        MH
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-gray-300 text-xl"
      >
        Md Hamid Azam
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "220px" }}
        transition={{ duration: 1.8 }}
        className="h-1 bg-cyan-400 mt-8 rounded-full"
      />
    </div>
  );
}

export default Loader;