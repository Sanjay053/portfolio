import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import {
  Form,
  Button,
  Card,
  Row,
  Col,
  FloatingLabel,
  Alert,
} from "react-bootstrap";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, SOCIAL_LINKS } from "../Constants/contact";



const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [charCount, setCharCount] = useState(0);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  // Validation Logic
  const validateField = (name: string, value: string) => {
    if (!value.trim() && name !== "phone") return `${name} is required.`.replace("name", "Full name");

    const rules: Record<string, string | null> = {
      name:
        value.trim().length < 3 ? "Name must be at least 3 characters." : null,

      email: !/^\S+@\S+\.\S+$/.test(value)
        ? "Enter a valid email address."
        : null,

      phone:
        value && (!/^[0-9\s+\-]+$/.test(value) || value.length < 7)
          ? "Invalid phone number."
          : null,

      message:
        value.length < 10 ? "Message must be at least 10 characters." : null,
    };

    return rules[name] || "";
  };

  // Input change handler
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));

    if (name === "message") setCharCount(value.length);
  };

  // Blur handler
  const handleBlur = (e: any) => {
    const { name, value } = e.target;

    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  // Form validity
  const isFormValid = () =>
    formData.name &&
    formData.email &&
    formData.message &&
    !errors.name &&
    !errors.email &&
    !errors.message &&
    (formData.phone.length === 0 || !errors.phone);

  // Email send handler
  const sendMail = async (e: any) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { ...formData, time: new Date().toLocaleString() },
        PUBLIC_KEY
      );

      setStatus("success");
      setShowSuccessAlert(true);

      // Auto hide
      setTimeout(() => setShowSuccessAlert(false), 5000);

      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({ name: "", email: "", phone: "", message: "" });
      setCharCount(0);

    } catch (error) {
      console.error(error);
      setStatus("error");
      setShowErrorAlert(true);

      setTimeout(() => setShowErrorAlert(false), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-200 p-6"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <Card className="shadow-xl border-0 rounded-3xl bg-white/90 backdrop-blur-md p-4">
          <Card.Body>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center text-indigo-700 mb-3"
            >
              Contact Me
            </motion.h1>

             {/* ALERTS */}
            {showSuccessAlert && (
              <Alert variant="success" className="fw-semibold p-2">
                🎉 Message sent successfully!
              </Alert>
            )}
            {showErrorAlert && (
              <Alert variant="danger" className="fw-semibold p-2">
                ❌ Something went wrong. Try again later.
              </Alert>
            )}

            {/* FORM */}
            <Form onSubmit={sendMail}>
              <Row className="mb-3">
                {(["name", "email"] as const).map((field, idx) => (
                  <Col xs={12} md={6} key={idx}>
                    <FloatingLabel
                      label={field === "name" ? "Full Name" : "Email Address"}
                      className="mb-1"
                    >
                      <Form.Control
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </FloatingLabel>

                    {touched[field] && errors[field] && (
                      <p className="text-red-500 text-sm">{errors[field]}</p>
                    )}
                  </Col>
                ))}
              </Row>

              {/* PHONE */}
              <FloatingLabel label="Phone Number (optional)" className="mb-1">
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FloatingLabel>
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              {/* MESSAGE */}
              <FloatingLabel label="Your Message" className="mb-1 mt-3">
                <Form.Control
                  as="textarea"
                  style={{ height: "140px" }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FloatingLabel>
              {touched.message && errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}

              <p className="text-end text-gray-500 text-sm mb-3">
                {charCount}/500 characters
              </p>

              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  type="submit"
                  className="w-100 py-3 fw-semibold"
                  disabled={!isFormValid() || status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </motion.button>
            </Form>

            {/* SOCIAL ICONS */}
            <div className="mt-6 text-center">
              <div className="flex justify-center gap-4">
                {SOCIAL_LINKS.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    whileHover={{ scale: 1.18, y: -4 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="text-indigo-600 hover:text-indigo-800 transition duration-300"
                    style={{
                      filter: "drop-shadow(0px 2px 4px rgba(99,102,241,0.35))",
                    }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
