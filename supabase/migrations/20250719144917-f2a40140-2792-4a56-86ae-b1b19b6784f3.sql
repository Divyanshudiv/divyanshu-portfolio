-- Create content management tables for portfolio

-- News/Timeline items table
CREATE TABLE public.news_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('internship', 'publication', 'achievement', 'project')),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('upcoming', 'published', 'completed')),
  color TEXT NOT NULL DEFAULT 'blue',
  icon TEXT NOT NULL DEFAULT 'Calendar',
  publication_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Research areas table
CREATE TABLE public.research_areas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'Brain',
  color TEXT NOT NULL DEFAULT 'blue',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Research projects table
CREATE TABLE public.research_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  institution TEXT NOT NULL,
  supervisor TEXT,
  description TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('ongoing', 'completed', 'published')),
  year INTEGER NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('undergraduate', 'graduate', 'independent')),
  technologies TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Experience entries table
CREATE TABLE public.experience_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  location TEXT,
  description TEXT NOT NULL,
  technologies TEXT[] DEFAULT '{}',
  achievements TEXT[] DEFAULT '{}',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Contact form submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.news_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (portfolio content should be visible to everyone)
CREATE POLICY "Anyone can view news items" ON public.news_items FOR SELECT USING (true);
CREATE POLICY "Anyone can view research areas" ON public.research_areas FOR SELECT USING (true);
CREATE POLICY "Anyone can view research projects" ON public.research_projects FOR SELECT USING (true);
CREATE POLICY "Anyone can view experience entries" ON public.experience_entries FOR SELECT USING (true);

-- Contact form - anyone can submit, but only authenticated users can view
CREATE POLICY "Anyone can submit contact forms" ON public.contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Only authenticated users can view submissions" ON public.contact_submissions FOR SELECT USING (auth.role() = 'authenticated');

-- Create update timestamp trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_news_items_updated_at
  BEFORE UPDATE ON public.news_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_research_areas_updated_at
  BEFORE UPDATE ON public.research_areas
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_research_projects_updated_at
  BEFORE UPDATE ON public.research_projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_experience_entries_updated_at
  BEFORE UPDATE ON public.experience_entries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data from your current hardcoded content
INSERT INTO public.news_items (type, title, description, date, status, color, icon) VALUES
('internship', 'Summer Research Internship', 'Joining the AI Research Lab at Tech University for a 10-week summer program focusing on machine learning applications in healthcare.', '2024-06-01', 'upcoming', 'blue', 'Briefcase'),
('publication', 'First-Author Paper Accepted', 'Our paper "Novel Approaches to Data Analysis" has been accepted at the International Conference on Data Science.', '2024-03-15', 'published', 'green', 'BookOpen'),
('achievement', 'Dean''s List Recognition', 'Achieved Dean''s List status for academic excellence in Fall 2023 semester.', '2023-12-15', 'completed', 'purple', 'Award');

INSERT INTO public.research_areas (title, description, icon, color, display_order) VALUES
('Machine Learning', 'Exploring deep learning architectures and their applications in real-world problems, with focus on computer vision and natural language processing.', 'Brain', 'blue', 1),
('Data Science', 'Developing innovative methods for data analysis, visualization, and interpretation across various domains including healthcare and finance.', 'BarChart3', 'green', 2),
('Software Engineering', 'Building scalable and maintainable software systems using modern frameworks and best practices in full-stack development.', 'Code', 'purple', 3);

INSERT INTO public.research_projects (title, institution, supervisor, description, status, year, type, technologies) VALUES
('AI-Powered Healthcare Analytics', 'University Research Lab', 'Dr. Sarah Johnson', 'Developing machine learning models to predict patient outcomes using electronic health records and medical imaging data.', 'ongoing', 2024, 'undergraduate', ARRAY['Python', 'TensorFlow', 'PostgreSQL', 'Docker']),
('Blockchain-Based Supply Chain', 'Tech Innovation Center', 'Prof. Michael Chen', 'Creating a transparent and secure supply chain management system using blockchain technology and smart contracts.', 'completed', 2023, 'independent', ARRAY['Solidity', 'React', 'Node.js', 'Web3']);

INSERT INTO public.experience_entries (company, position, start_date, end_date, location, description, technologies, achievements, display_order) VALUES
('Tech Innovations Inc.', 'Software Development Intern', '2023-06-01', '2023-08-31', 'San Francisco, CA', 'Developed full-stack web applications and contributed to the company''s main product platform.', ARRAY['React', 'Node.js', 'PostgreSQL', 'AWS'], ARRAY['Reduced page load times by 40%', 'Implemented new user authentication system', 'Mentored 2 junior interns'], 1);