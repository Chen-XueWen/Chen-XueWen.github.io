import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Brain, 
  Code, 
  Award, 
  BookOpen,
  MapPin,
  Calendar,
  ChevronDown,
  Menu,
  X,
  Users,
  Presentation,
  GraduationCap,
  Building2,
  Target
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    'Agentic AI', 'Retrieval-Augmented Generation (RAG)', 'Prompt Engineering',
    'Explainable AI', 'Natural Language Processing', 'Generative AI',
    'Large Language Models', 'Multi AI Agent Systems', 'Human-Centered AI',
    'Risk Modeling', 'Fraud Detection', 'Financial Technology', 'Python', 
    'Machine Learning', 'Deep Learning', 'Computational Linguistics'
  ]

  const education = [
    {
      degree: "Doctor of Philosophy (PhD) in Digital Financial Technology",
      institution: "Asian Institute of Digital Finance, National University of Singapore",
      period: "August 2021 - August 2025",
      location: "Singapore",
      thesis: "Human-Centered AI for Financial Decision Making", 
      supervisor: "Stanley Kok, School of Computing",
      gpa: "5.0/5.0, AIDF Scholar",
    },
    {
      degree: "Bachelor of Engineering (B.Eng) in Electrical Engineering",
      institution: "National University of Singapore",
      period: "August 2015 - August 2019",
      location: "Singapore",
      gpa: "4.7/5.0 (First Class Honours - Highest Distinction), Dean's List",
    },
    {
      degree: "Fall Semester Exchange Programme",
      institution: "National Taiwan University of Science and Technology",
      period: "2017 - 2018",
      location: "Taiwan",
      gpa: "4.0/4.0",
    }
  ]

  const publications = [
    {
      title: "ScamGPT-J: Inside the Scammer's Mind, A Generative AI-Based Approach Toward Combating Messaging Scams",
      venue: "International Conference on Information Systems (ICIS) 2024",
      acceptance: "27% acceptance rate (441/1613)",
      authors: "Xue Wen Tan*, Kenneth See*, Stanley Kok",
      additional: "Also presented at The 3rd Quantum Computing Workshop 2024"
    },
    {
      title: "Explainable Risk Classification in Financial Reports",
      venue: "International Conference on Information Systems (ICIS) 2023", 
      acceptance: "28% acceptance rate (387/1380)",
      authors: "Xue Wen Tan, Stanley Kok",
      additional: "Also presented at AAAI Summer Symposium AI4FinTech 2023 and ETH-NUS FinsureTech Conference 2023"
    },
    {
      title: "SMARTe: Slot-based Method for Accountable Relational Triple extraction",
      venue: "Submitted to ACL 2025",
      acceptance: "Under Review",
      authors: "Xue Wen Tan, Stanley Kok"
    },
  ]

  const experience = [
    {
      role: "Manager, Artificial Intelligence",
      company: "IMDA (Infocomm Media Development Authority)",
      period: "July 2025 - Present",
      location: "Singapore",
      description: "Lead agentic AI strategy across development, due diligence, and safety initiatives. Drive ecosystem growth through applied research, grants, and community collaboration programs. Focus on advancing Singapore's AI capabilities in the public sector."
    },
    {
      role: "AI Doctoral Researcher",
      company: "Asian Institute of Digital Finance, NUS",
      period: "August 2021 - August 2025",
      location: "Singapore",
      description: "Completed PhD in Digital Financial Technology with thesis titled 'Human-Centered AI for Financial Decision Making'. Developed state-of-the-art ML and generative AI models for risk classification, fraud detection, and explainable financial information extraction. Published at top-tier conferences."
    },
    {
      role: "Information Technology Analyst",
      company: "DBS Bank",
      period: "August 2019 - August 2021",
      location: "Singapore",
      description: "Led end-to-end digital banking solutions under SEED Graduate Associate Programme. Integrated RESTful APIs, MQs, and Tivoli interfaces using agile methodology. Contributed to Celent Model Bank 2021 award. Developed iOS apps and won OWASP Secure Coding Competition. Worked throughout Covid-19 as essential bank staff."
    },
    {
      role: "Microchip Design Engineering Intern",
      company: "MediaTek",
      period: "January 2018 - June 2018",
      location: "Singapore",
      description: "Specialized in physical design automation and low-power VLSI, optimizing placement, routability, and power analysis with EDA tools and scripting. Co-developed a graph-theory-based power analysis tool, published at SNUG 2018."
    }
  ]

  const certifications = [
    "To Be Updated",
  ]

  const achievements = [
    "To Be Updated",
  ]

  const academicServices = [
    "Reviewer for International Conference on Information Systems (ICIS)",
    "Discussant at 2022 Global AI Finance Research Conference",
    "Teaching Assistant for FT5001 (Fintech Innovations for Consumers) AY2021/2022"
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-light text-slate-800 tracking-wide"
            >
              Xue Wen Tan
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-10">
              {['home', 'about', 'education', 'experience', 'research', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-slate-900 border-b-2 border-slate-900 pb-1' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-4 space-y-3">
                {['home', 'about', 'education', 'experience', 'research', 'achievements', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-2 capitalize text-slate-600 hover:text-slate-900 font-medium"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-slate-200 shadow-lg">
                <img 
                  src="/profile.jpeg" 
                  alt="Xue Wen Tan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              Xue Wen Tan
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-4 font-light">
              Manager, Artificial Intelligence
            </p>
            
            <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              Leading agentic AI strategy and ecosystem growth at IMDA. PhD in Digital Financial Technology from NUS, with expertise in explainable AI, Generative models and Computational Linguistics.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button 
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-none font-medium tracking-wide"
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-none font-medium tracking-wide"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              <a href="mailto:xuewen@u.nus.edu" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/xue-wen" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/chen-xuewen" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={24} className="text-slate-300 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-900 mb-4">About</h2>
              <div className="w-16 h-0.5 bg-slate-900 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  I am a Singaporean AI Research Scientist with a strong background in Artificial Intelligence (AI) and Financial Technology (FinTech). 
                  I hold a PhD in AI (FinTech Specialization) from the National University of Singapore (NUS), 
                  where I focused on AI-driven financial solutions, including risk modeling, fraud detection, and information extraction. 
                  Prior to that, I graduated with First Class Honours in Electrical Engineering from NUS and gained hands-on experience in 
                  banking technology as a SEED Graduate Associate at DBS. Currently, I am working as an AI researcher in the public sector, 
                  leveraging my expertise to drive innovation and develop impactful AI solutions for national initiatives. 
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  My expertise lies in Explainable AI, Natural Language Processing, and Generative AI, 
                  with a passion for developing scalable AI models that drive real-world impact. 
                  I bring a strong foundation in project management, backed by PMP and CSM certifications, 
                  as well as cloud computing expertise through AWS certifications. 
                  On top of those, I have built a strong professional network across the banking, 
                  AI and deep tech industries, academia, and the public sector.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  I thrive in challenging environments, believe that uncertainty fuels innovation, 
                  and enjoy mentoring and collaborating with cross-functional teams.
                  Outside of work, I enjoy investing / coding my own tradebot, playing the piano, and practicing Suzhounese. Let’s connect!
                </p>

                <div className="flex items-center space-x-3 text-slate-500 pt-4">
                  <MapPin size={18} />
                  <span className="font-medium">Singapore</span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-slate-900 mb-6">Core Expertise</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <div key={index} className="text-sm text-slate-600 py-2 px-3 bg-slate-50 border border-slate-200">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-slate-900 mb-6">Certifications</h3>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-900 mb-4">Education</h2>
              <div className="w-16 h-0.5 bg-slate-900 mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white border border-slate-200 p-8 hover:shadow-sm transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-slate-900 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-slate-700 font-medium mb-2">{edu.institution}</p>
                      {edu.details && (
                        <p className="text-slate-600 mb-2">{edu.details}</p>
                      )}
                      {edu.gpa && (
                        <p className="text-slate-600 font-medium">{edu.gpa}</p>
                      )}
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-slate-500">
                      <div className="flex items-center mb-1">
                        <Calendar size={14} className="mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium">
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-900 mb-4">Experience</h2>
              <div className="w-16 h-0.5 bg-slate-900 mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 p-8 hover:shadow-sm transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-slate-900 mb-2">{exp.role}</h3>
                      <p className="text-lg text-slate-700 font-medium mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-slate-500">
                      <div className="flex items-center mb-1">
                        <Calendar size={14} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-900 mb-4">Research & Publications (To be Updated)</h2>
              <div className="w-16 h-0.5 bg-slate-900 mx-auto"></div>
            </div>
            
            <div className="mb-12">
              <div className="bg-white border border-slate-200 p-8">
                <div className="flex items-center mb-4">
                  <Target className="mr-3 text-slate-700" size={20} />
                  <h3 className="text-xl font-medium text-slate-900">Research Focus</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  My research focuses on Natural Language Processing, specifically Explainable AI, Large Language Models, 
                  AI for Social Good, and Computational Linguistics. I am particularly interested in Human-Centered AI 
                  design and developing scalable AI models that drive real-world impact in financial technology and beyond.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  My PhD thesis, "Human-Centered AI for Financial Decision Making," explored AI-driven financial risk modeling, 
                  generative AI for social good, and natural language processing applications in finance.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white border border-slate-200 p-6 hover:shadow-sm transition-shadow duration-300">
                  <h4 className="text-lg font-medium text-slate-900 mb-3 leading-relaxed">{pub.title}</h4>
                  <div className="space-y-2">
                    <p className="text-slate-700 font-medium">{pub.venue}</p>
                    <p className="text-sm text-slate-500">{pub.authors}</p>
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium">
                      {pub.acceptance}
                    </div>
                    {pub.additional && (
                      <p className="text-sm text-slate-500 italic mt-2">
                        {pub.additional}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="bg-white border border-slate-200 p-8">
                <div className="flex items-center mb-4">
                  <Users className="mr-3 text-slate-700" size={20} />
                  <h3 className="text-xl font-medium text-slate-900">Academic Services</h3>
                </div>
                <div className="space-y-3">
                  {academicServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-900 mb-4">Achievements & Recognition</h2>
              <div className="w-16 h-0.5 bg-slate-900 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 border border-slate-200 p-8">
                <div className="flex items-center mb-6">
                  <Award className="mr-3 text-slate-700" size={20} />
                  <h3 className="text-xl font-medium text-slate-900">Awards & Honors</h3>
                </div>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-8">
                <div className="flex items-center mb-6">
                  <Presentation className="mr-3 text-slate-700" size={20} />
                  <h3 className="text-xl font-medium text-slate-900">Speaking Engagements</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">
                      "AI in Finance - Opportunities and Challenges"
                    </h4>
                    <p className="text-sm text-slate-600 mb-2">
                      IET Singapore Event, August 2025
                    </p>
                    <p className="text-sm text-slate-500">
                      Covered AI applications in finance, limitations, risks, and the role of human-centered AI
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">
                      "Explainable Risk Classification in Financial Reports"
                    </h4>
                    <p className="text-sm text-slate-600">
                      ETH-NUS FinsureTech Conference 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-white mb-4">Let's Connect</h2>
            <div className="w-16 h-0.5 bg-white mx-auto mb-12"></div>
            
            <p className="text-xl text-slate-300 mb-16 leading-relaxed">
              Feel free to reach out for collaborations, research discussions, or professional inquiries.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12 mb-16">
              <a 
                href="mailto:xuewen@u.nus.edu"
                className="flex items-center space-x-3 text-lg text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>xuewen@u.nus.edu</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/xue-wen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-lg text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>

            <Separator className="my-12 bg-slate-700" />
            
            <p className="text-slate-400 italic">
              "天生我材必有用" - 李白<br />
              <span className="text-sm">Heaven bestows upon me talents that must be utilized - Li Bai</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 Xue Wen Tan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

