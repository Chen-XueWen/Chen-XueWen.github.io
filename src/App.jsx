import { useState, useEffect } from 'react'
import content from './content.json'
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
  DollarSign,
  Banknote,
  Landmark,
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

  const { 
    hero = {},
    about = {},
    expertise = [],
    education = [],
    publications = [],
    experience = [],
    certifications = [],
    achievements = [],
    academicServices = [],
    navSections = ['home', 'about', 'education', 'experience', 'research', 'achievements', 'contact']
  } = content

  const iconMap = { Brain, Target, Building2, Code, Users, DollarSign, Banknote, Landmark }

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
              {navSections.map((section) => (
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
                {navSections.map((section) => (
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
                  src={hero.profileImage || '/profile.jpeg'} 
                  alt={hero.name || 'Profile'} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              {hero.name || 'Your Name'}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-4 font-light">
              {hero.title || ''}
            </p>
            
            <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              {hero.summary || ''}
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
              <a href={`mailto:${hero?.links?.email || ''}`} className="text-slate-400 hover:text-slate-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href={hero?.links?.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={hero?.links?.github || '#'} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
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
                {(about.paragraphs || []).map((para, i) => (
                  <p key={i} className="text-lg text-slate-600 leading-relaxed">{para}</p>
                ))}

                <div className="flex items-center space-x-3 text-slate-500 pt-4">
                  <MapPin size={18} />
                  <span className="font-medium">{hero.location || 'Location'}</span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-slate-900 mb-6">Core Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expertise.map((cat, idx) => {
                      const Icon = iconMap[cat.icon] || Brain
                      return (
                        <Card key={idx} className="border-slate-200">
                          <CardHeader className="flex flex-row items-center gap-3">
                            <div className="shrink-0 text-slate-700"><Icon size={20} /></div>
                            <div>
                              <CardTitle className="text-base font-medium text-slate-900">{cat.title}</CardTitle>
                              <CardDescription className="text-slate-600 text-sm">{cat.summary}</CardDescription>
                            </div>
                          </CardHeader>
                          {cat.skills && cat.skills.length > 0 && (
                            <CardContent>
                              <div className="flex flex-wrap gap-2">
                                {cat.skills.map((s, i) => (
                                  <Badge key={i} variant="secondary" className="bg-slate-100 text-slate-700 border border-slate-200 rounded-none">
                                    {s}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          )}
                        </Card>
                      )
                    })}
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
                      {edu.thesis && (
                        <p className="text-slate-600 mb-2"><span className="font-medium">Thesis:</span> {edu.thesis}</p>
                      )}
                      {edu.supervisor && (
                        <p className="text-slate-600 mb-2"><span className="font-medium">Supervisor:</span> {edu.supervisor}</p>
                      )}
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
              <h2 className="text-4xl font-light text-slate-900 mb-4">Research & Publications</h2>
              <div className="w-16 h-0.5 bg-slate-900 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white border border-slate-200 p-6 hover:shadow-sm transition-shadow duration-300">
                  <h4 className="text-lg font-medium text-slate-900 mb-3 leading-relaxed">{pub.title}</h4>
                  <div className="space-y-2">
                    {pub.venue && (
                      <p className="text-slate-700 font-medium">{pub.venue}</p>
                    )}
                    <p className="text-sm text-slate-500">{pub.authors}</p>
                    {pub.acceptance && (
                      <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium">
                        {pub.acceptance}
                      </div>
                    )}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900"
                      >
                        View paper <ExternalLink className="ml-1" size={14} />
                      </a>
                    )}
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

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-900 mb-4">Certifications</h2>
              <div className="w-16 h-0.5 bg-slate-900 mx-auto"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3 bg-slate-50 border border-slate-200 p-4">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{cert}</span>
                </div>
              ))}
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
                href={`mailto:${hero?.links?.email || ''}`}
                className="flex items-center space-x-3 text-lg text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>{hero?.links?.email || ''}</span>
              </a>
              
              <a 
                href={hero?.links?.linkedin || '#'}
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
          <p>&copy; 2025 {hero.name || 'Your Name'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
