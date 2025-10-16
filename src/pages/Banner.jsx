import { motion } from "framer-motion";
import team from "../assets/calebration.jpg"
import smile from "../assets/smile.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team}
            animate={{y:[70,100,70]}}
            transition={{
              duration:6,
              repeat:Infinity,
            }}
            className="w-[300px] border-l-12 border-b-12 border-cyan-700 rounded-t-4xl rounded-r-4xl shadow-2xl"
          />
          <motion.img
            src={smile}
            animate={{x:[150,180,150]}}
            transition={{
              duration:8,
              delay:4,
              repeat:Infinity,
            }}
            className="w-[300px] border-l-12 border-b-12 border-cyan-700 rounded-t-4xl rounded-r-4xl shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            className="text-5xl font-bold"
            animate={{ x: 50, color: "teal" }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            latest{" "}
            <motion.span
              animate={{
                color: [
                  "#F0F8FF",
                  "#00FFFF",
                  "#6495ED",
                  "#DC143C",
                  "#8B008B"
                ],
              }}
              transition={{
                duration: 2,
                delay: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="font-bold text-5xl"
            >
              Jobs
            </motion.span>{" "}
            For You
          </motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
