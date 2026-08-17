import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import {
  Building2, Users, BookOpen, GraduationCap,
  Award, Calendar, Beaker, FileText,
  Coffee, Briefcase, Phone, Globe
} from 'lucide-react';
import './index.css';

const PageContent = ({ title, subtitle, icon: Icon, features = [] }) => (
  <div className="page-container">
    <div className="page-header">
      <div className="header-content">
        {Icon && <div className="page-icon"><Icon size={48} /></div>}
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>
    </div>

    <div className="page-body">
      {features.length > 0 && (
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <PageContent
                title="Welcome to Amrut's Phoenix Uni"
                subtitle="Experience world-class education and research that transforms the future."
                icon={Globe}
                features={[
                  { title: "Global Recognition", desc: "Ranked among the top 50 universities worldwide for research impact." },
                  { title: "Diverse Community", desc: "Home to students and faculty from over 100 different countries." },
                  { title: "Innovation Hub", desc: "State-of-the-art facilities fostering the next generation of innovators." }
                ]}
              />
            } />

            <Route path="/about" element={<Outlet />}>
              <Route index element={
                <PageContent
                  title="About Us"
                  subtitle="A legacy of excellence since 1890."
                  icon={Building2}
                  features={[
                    { title: "Our History", desc: "Founded in the late 19th century, our institution has steadily grown into a global leader in academia." },
                    { title: "Accreditation", desc: "Fully accredited by national and international educational boards, ensuring the highest standards of teaching." }
                  ]}
                />
              } />
              <Route path="vision-mission" element={
                <PageContent
                  title="Vision & Mission"
                  subtitle="To be a global leader in education and research, committed to social progress."
                  icon={Globe}
                  features={[
                    { title: "Our Vision", desc: "Empowering minds to create a sustainable and inclusive world." },
                    { title: "Our Mission", desc: "Delivering world-class education, fostering critical thinking, and advancing knowledge." }
                  ]}
                />
              } />
              <Route path="leadership" element={
                <PageContent
                  title="Leadership"
                  subtitle="Guided by visionaries dedicated to educational excellence."
                  icon={Users}
                  features={[
                    { title: "President's Office", desc: "Our executive leadership is committed to maintaining an environment of rigorous academic inquiry." },
                    { title: "Board of Trustees", desc: "The governing body ensuring long-term strategic growth and financial stability of the university." }
                  ]}
                />
              } />
              <Route path="departments" element={
                <PageContent
                  title="Departments"
                  subtitle="Explore our diverse academic departments across sciences, arts, and engineering."
                  icon={Building2}
                  features={[
                    { title: "Sciences", desc: "Physics, Chemistry, Biology, and Environmental Sciences." },
                    { title: "Arts & Humanities", desc: "Literature, History, Philosophy, and Fine Arts." },
                    { title: "Engineering", desc: "Computer Science, Mechanical, Civil, and Electrical." }
                  ]}
                />
              } />
            </Route>

            <Route path="/academics" element={<Outlet />}>
              <Route index element={
                <PageContent
                  title="Academics"
                  subtitle="Discover our academic programs and excellence."
                  icon={BookOpen}
                  features={[
                    { title: "Academic Calendar", desc: "Stay up to date with semester start dates, examination periods, and holidays." },
                    { title: "Library Services", desc: "Access millions of books, journals, and digital resources through our central library network." }
                  ]}
                />
              } />
              <Route path="undergraduate" element={
                <PageContent
                  title="Undergraduate"
                  subtitle="Over 50 comprehensive bachelor's degree programs."
                  icon={GraduationCap}
                  features={[
                    { title: "Flexible Curriculum", desc: "Design your own major or choose from interdisciplinary options." },
                    { title: "Experiential Learning", desc: "Internships and study abroad opportunities for all students." }
                  ]}
                />
              } />
              <Route path="postgraduate" element={
                <PageContent
                  title="Postgraduate"
                  subtitle="Advanced master's degrees for career specialization."
                  icon={Award}
                  features={[
                    { title: "Master's Programs", desc: "One and two-year programs designed to elevate your professional expertise." },
                    { title: "Executive Education", desc: "Tailored programs for working professionals looking to advance in leadership." }
                  ]}
                />
              } />
              <Route path="phd" element={
                <PageContent
                  title="PhD Programs"
                  subtitle="Doctoral programs focused on intensive research and academic leadership."
                  icon={BookOpen}
                  features={[
                    { title: "Full Funding", desc: "Competitive stipends and research grants for all admitted candidates." },
                    { title: "Mentorship", desc: "Work closely with world-renowned faculty members." }
                  ]}
                />
              } />
            </Route>

            <Route path="/admissions" element={<Outlet />}>
              <Route index element={
                <PageContent
                  title="Admissions"
                  subtitle="Join our vibrant academic community."
                  icon={Users}
                  features={[
                    { title: "Why Choose Us?", desc: "Discover a diverse community, world-class faculty, and unparalleled networking opportunities." },
                    { title: "Virtual Tour", desc: "Explore our beautiful campus from anywhere in the world with our interactive 3D tour." }
                  ]}
                />
              } />
              <Route path="eligibility" element={
                <PageContent
                  title="Eligibility"
                  subtitle="Check the requirements for admission to our various programs."
                  icon={Award}
                  features={[
                    { title: "Undergraduate", desc: "High school diploma with a minimum 3.5 GPA or equivalent." },
                    { title: "Postgraduate", desc: "Bachelor's degree in a related field with strong academic standing." }
                  ]}
                />
              } />
              <Route path="application-process" element={
                <PageContent
                  title="Application Process"
                  subtitle="Step-by-step guide to applying to our university."
                  icon={FileText}
                  features={[
                    { title: "1. Apply Online", desc: "Submit your application through our portal." },
                    { title: "2. Submit Documents", desc: "Upload transcripts, essays, and letters of recommendation." },
                    { title: "3. Interview", desc: "Shortlisted candidates will be invited for an interview." }
                  ]}
                />
              } />
              <Route path="important-dates" element={
                <PageContent
                  title="Important Dates"
                  subtitle="Keep track of deadlines and events for the upcoming academic year."
                  icon={Calendar}
                  features={[
                    { title: "Fall Entry", desc: "Application Deadline: January 15th" },
                    { title: "Spring Entry", desc: "Application Deadline: October 1st" }
                  ]}
                />
              } />
            </Route>

            <Route path="/research" element={<Outlet />}>
              <Route index element={
                <PageContent
                  title="Research"
                  subtitle="Pushing the boundaries of knowledge."
                  icon={Beaker}
                  features={[
                    { title: "Research Institutes", desc: "Dedicated centers for specialized research in medicine, technology, and humanities." },
                    { title: "Grants & Funding", desc: "Information on internal and external research funding opportunities." }
                  ]}
                />
              } />
              <Route path="areas" element={
                <PageContent
                  title="Research Areas"
                  subtitle="Explore our interdisciplinary research domains."
                  icon={Beaker}
                  features={[
                    { title: "Artificial Intelligence", desc: "Machine learning, robotics, and natural language processing." },
                    { title: "Sustainability", desc: "Renewable energy, climate change, and sustainable materials." }
                  ]}
                />
              } />
              <Route path="publications" element={
                <PageContent
                  title="Publications"
                  subtitle="Read the latest academic papers from our faculty and researchers."
                  icon={FileText}
                  features={[
                    { title: "Journal Articles", desc: "Peer-reviewed papers published in top-tier international journals." },
                    { title: "Books & Monographs", desc: "In-depth studies and textbooks authored by our distinguished professors." }
                  ]}
                />
              } />
            </Route>

            <Route path="/campus-life" element={
              <PageContent
                title="Campus Life"
                subtitle="Experience a vibrant, dynamic, and inclusive campus environment."
                icon={Coffee}
                features={[
                  { title: "Student Clubs", desc: "Over 200 student-run organizations covering arts, culture, and sports." },
                  { title: "Housing", desc: "Modern, comfortable dormitories fostering a tight-knit community." },
                  { title: "Athletics", desc: "State-of-the-art sports facilities and competitive varsity teams." }
                ]}
              />
            } />
            <Route path="/placements" element={
              <PageContent
                title="Placements"
                subtitle="Launch your career with top employers from around the globe."
                icon={Briefcase}
                features={[
                  { title: "Career Fairs", desc: "Bi-annual fairs with over 500 participating companies." },
                  { title: "Alumni Network", desc: "Connect with our extensive global network of successful graduates." }
                ]}
              />
            } />
            <Route path="/contact" element={
              <PageContent
                title="Contact Us"
                subtitle="We're here to help. Get in touch with our offices."
                icon={Phone}
                features={[
                  { title: "General Enquiries", desc: "Email: info@university.edu | Phone: +91 12345 78900" },
                  { title: "Admissions Office", desc: "Email: admissions@university.edu | Phone: +91 97483 32495" }
                ]}
              />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
