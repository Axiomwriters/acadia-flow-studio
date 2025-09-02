import { useState } from "react"
import { motion } from "framer-motion"
import { CourseCard } from "@/components/courses/CourseCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"

const mockCourses = [
  {
    id: "1",
    title: "Advanced Machine Learning",
    description: "Deep dive into neural networks, deep learning architectures, and modern ML techniques for research applications.",
    progress: 65,
    difficulty: "Advanced" as const,
    duration: "8 weeks",
    rating: 4.8,
    students: 1250
  },
  {
    id: "2",
    title: "Research Methodology",
    description: "Comprehensive guide to academic research methods, data collection, and statistical analysis techniques.",
    progress: 0,
    difficulty: "Beginner" as const,
    duration: "6 weeks",
    rating: 4.6,
    students: 2100
  },
  {
    id: "3",
    title: "Data Visualization",
    description: "Learn to create compelling visualizations and tell stories with data using modern tools and techniques.",
    progress: 30,
    difficulty: "Intermediate" as const,
    duration: "4 weeks",
    rating: 4.7,
    students: 890
  },
  {
    id: "4",
    title: "Academic Writing",
    description: "Master the art of academic writing, paper structure, and publication strategies for peer-reviewed journals.",
    progress: 90,
    difficulty: "Intermediate" as const,
    duration: "5 weeks",
    rating: 4.9,
    students: 1680
  },
  {
    id: "5",
    title: "Statistical Computing",
    description: "Advanced statistical computing using R and Python for academic research and data analysis.",
    progress: 45,
    difficulty: "Advanced" as const,
    duration: "10 weeks",
    rating: 4.5,
    students: 760
  },
  {
    id: "6",
    title: "Literature Review Techniques",
    description: "Systematic approaches to conducting comprehensive literature reviews and meta-analyses.",
    progress: 0,
    difficulty: "Beginner" as const,
    duration: "3 weeks",
    rating: 4.4,
    students: 950
  }
]

export default function Courses() {
  const [activeTab, setActiveTab] = useState<"materials" | "tutorials">("materials")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCourses = mockCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient mb-2">
              Learning Resources
            </h1>
            <p className="text-muted-foreground">
              Expand your knowledge with our curated academic courses
            </p>
          </div>
          <Button className="gradient-primary">
            Enroll in Course
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card border-0"
            />
          </div>
          <Button variant="outline" size="icon" className="glass-card hover-glow">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="glass-card p-1 rounded-2xl">
            <div className="flex">
              <Button
                variant={activeTab === "materials" ? "default" : "ghost"}
                onClick={() => setActiveTab("materials")}
                className={`rounded-xl transition-all duration-300 ${
                  activeTab === "materials" 
                    ? "gradient-primary text-white shadow-lg" 
                    : "hover:bg-muted"
                }`}
              >
                Materials
              </Button>
              <Button
                variant={activeTab === "tutorials" ? "default" : "ghost"}
                onClick={() => setActiveTab("tutorials")}
                className={`rounded-xl transition-all duration-300 ${
                  activeTab === "tutorials" 
                    ? "gradient-primary text-white shadow-lg" 
                    : "hover:bg-muted"
                }`}
              >
                Tutorials
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Course Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex gap-4 flex-wrap"
      >
        <Badge variant="secondary" className="px-4 py-2">
          {filteredCourses.length} Courses Available
        </Badge>
        <Badge variant="outline" className="px-4 py-2">
          {filteredCourses.filter(c => c.progress > 0).length} In Progress
        </Badge>
        <Badge variant="outline" className="px-4 py-2">
          {filteredCourses.filter(c => c.progress === 100).length} Completed
        </Badge>
      </motion.div>

      {/* Course Grid */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCourses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground">No courses found matching your search.</p>
          <Button
            variant="ghost"
            onClick={() => setSearchTerm("")}
            className="mt-2"
          >
            Clear search
          </Button>
        </motion.div>
      )}
    </div>
  )
}