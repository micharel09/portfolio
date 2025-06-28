import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 85, color: "bg-blue-500" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "Tailwind CSS", level: 80, color: "bg-cyan-500" },
        { name: "Ant UI", level: 75, color: "bg-blue-600" },
        { name: "Figma", level: 70, color: "bg-purple-600" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 30, color: "bg-green-600" },
        { name: "C# .NET", level: 85, color: "bg-purple-700" },
        { name: "SQL Server", level: 80, color: "bg-red-600" },
        { name: "MongoDB", level: 75, color: "bg-green-500" },
        { name: "REST APIs", level: 85, color: "bg-purple-500" },
        { name: "RazorPage", level: 70, color: "bg-blue-700" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 85, color: "bg-gray-800" },
        { name: "OOP Programming", level: 90, color: "bg-indigo-600" },
        { name: "AI Tools", level: 75, color: "bg-pink-500" },
        { name: "Copilot", level: 80, color: "bg-green-700" },
        { name: "Windsurf", level: 70, color: "bg-blue-500" },
        { name: "Augmentcode", level: 75, color: "bg-purple-500" }
      ]
    }
  ]

  const softSkills = [
    "Tư duy logic",
    "Giải quyết vấn đề",
    "Làm việc nhóm",
    "Giao tiếp hiệu quả",
    "Quản lý thời gian",
    "Học hỏi nhanh",
    "Sáng tạo",
    "Chịu áp lực tốt"
  ]

  const certifications = [
    {
      name: "CertNexus Certified Ethical Emerging Technologist",
      issuer: "CertNexus - Coursera",
      year: "2023",
      icon: "🏆"
    },
    {
      name: "Web Design for Everybody: Basics of Web Development & Coding",
      issuer: "University of Michigan - Coursera",
      year: "2022",
      icon: "🎓"
    },
    {
      name: "Computer Communications",
      issuer: "University of Cordo System - Coursera",
      year: "2022",
      icon: "📜"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kỹ năng & <span className="text-blue-400">Chuyên môn</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Những công nghệ và kỹ năng tôi đã học được trong quá trình học tập và thực hành
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">{category.icon}</span>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-white">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">🧠</span>
                <span>Kỹ năng mềm</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">🏅</span>
                <span>Chứng chỉ</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    <span className="text-xl">{cert.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-300">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                🚀 Hành trình học tập không ngừng
              </h3>
              <p className="text-gray-300 mb-6">
                Tôi tin rằng trong lĩnh vực công nghệ, việc học hỏi không bao giờ dừng lại.
                Hiện tại tôi đang tập trung học thêm về:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  React Native
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                  Vue.js
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Python
                </Badge>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  DevOps
                </Badge>
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  Cloud Computing
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Skills
