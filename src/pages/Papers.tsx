import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, FileText, Download, Eye, Edit } from "lucide-react"

const mockPapers = [
  {
    id: "1",
    title: "Machine Learning Approaches in Academic Research: A Comprehensive Survey",
    authors: ["Dr. Jane Doe", "Prof. John Smith", "Dr. Alice Johnson"],
    journal: "Journal of Academic Computing",
    status: "Published",
    date: "2024-01-15",
    citations: 23,
    downloads: 145
  },
  {
    id: "2",
    title: "Data-Driven Methodologies for Educational Assessment",
    authors: ["Dr. Jane Doe", "Dr. Bob Wilson"],
    journal: "Educational Technology & Research",
    status: "Under Review",
    date: "2024-02-28",
    citations: 0,
    downloads: 0
  },
  {
    id: "3",
    title: "Statistical Computing Frameworks for Large-Scale Analysis",
    authors: ["Dr. Jane Doe"],
    journal: "Computational Statistics Quarterly",
    status: "Draft",
    date: "2024-03-10",
    citations: 0,
    downloads: 0
  },
  {
    id: "4",
    title: "Artificial Intelligence in Higher Education: Opportunities and Challenges",
    authors: ["Dr. Jane Doe", "Prof. Sarah Davis", "Dr. Mike Chen"],
    journal: "AI in Education Review",
    status: "Published",
    date: "2023-11-20",
    citations: 67,
    downloads: 289
  }
]

const statusColors = {
  Published: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "Under Review": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Draft: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  Rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
}

export default function Papers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const filteredPapers = mockPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = filterStatus === "all" || paper.status === filterStatus
    return matchesSearch && matchesStatus
  })

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
              Paper Management
            </h1>
            <p className="text-muted-foreground">
              Manage your research papers and publications
            </p>
          </div>
          <Button className="gradient-primary">
            New Paper
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search papers or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card border-0"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 rounded-lg glass-card border-0 bg-background text-foreground"
          >
            <option value="all">All Status</option>
            <option value="Published">Published</option>
            <option value="Under Review">Under Review</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </motion.div>

      {/* Papers List */}
      <div className="space-y-4">
        {filteredPapers.map((paper, index) => (
          <motion.div
            key={paper.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card p-6 hover-lift hover-glow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{paper.title}</h3>
                    <Badge className={statusColors[paper.status as keyof typeof statusColors]}>
                      {paper.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    Authors: {paper.authors.join(", ")}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {paper.journal} • {new Date(paper.date).toLocaleDateString()}
                  </p>
                  
                  {paper.status === "Published" && (
                    <div className="flex gap-6 text-sm">
                      <span className="text-muted-foreground">
                        Citations: <span className="font-medium text-foreground">{paper.citations}</span>
                      </span>
                      <span className="text-muted-foreground">
                        Downloads: <span className="font-medium text-foreground">{paper.downloads}</span>
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="hover-glow">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover-glow">
                    <Edit className="h-4 w-4" />
                  </Button>
                  {paper.status === "Published" && (
                    <Button variant="ghost" size="icon" className="hover-glow">
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPapers.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No papers found matching your criteria.</p>
          <Button
            variant="ghost"
            onClick={() => {
              setSearchTerm("")
              setFilterStatus("all")
            }}
            className="mt-2"
          >
            Clear filters
          </Button>
        </motion.div>
      )}
    </div>
  )
}