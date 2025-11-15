import { Card, Button } from "antd";
import Profile from "../Asset/sanjay_overheadphone.jpeg";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../Constants/home";

const { Meta } = Card;

const HoverIcon = ({ icon, url }: any) => (
  <motion.div whileHover={{ scale: 1.2, y: -4 }} whileTap={{ scale: 0.9 }}>
    <Button type="link" href={url} target="_blank" icon={icon} />
  </motion.div>
);

const AnimatedText = ({ children }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ color: "#4f46e5", scale: 1.08 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-200 p-6">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">
        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          whileHover={{
            rotate: [0, -5, 5, -3, 3, 0],
            transition: { duration: 0.4 },
          }}
        >
          Hi, I’m Sanjay 👋
        </motion.div>
      </h1>

      {/* Subheading */}
      <p className="text-lg text-gray-700 mb-6">
        <AnimatedText>
          Frontend Developer | Building responsive apps with React & Angular
        </AnimatedText>
      </p>

      {/* Profile Card */}
      <Card
        style={{ width: 320 }}
        cover={
          <motion.img
            src={Profile}
            alt="profile"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
          />
        }
        actions={SOCIAL_LINKS.map((item, index) => (
          <HoverIcon key={index} icon={item.icon} url={item.url} />
        ))}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Meta title="Sanjay" description="UI Developer" />
        </motion.div>
      </Card>
    </div>
  );
};

export default HomePage;
