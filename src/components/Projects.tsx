import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  github: string
  demo: string
  status: string
  period?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "EIGAKAN - Realtime Movie Sharing Platform",
      description: "Platform chia sẻ phim trực tuyến với nhiều tính năng cho người dùng và quản trị viên. Dự án tốt nghiệp nhóm với đầy đủ tính năng của một ứng dụng thương mại.",
      image: "🎬",
      technologies: ["SQL Server", "C# .NET", "ReactJS", "TailwindCSS", "Figma"],
      features: [
        "Duyệt và xem phim trực tuyến",
        "Tìm kiếm và lọc phim",
        "Quản lý người dùng và nội dung",
        "Upload và quản lý quảng cáo",
        "Giao diện responsive"
      ],
      github: "https://github.com/micharel09/Eigakan-FE",
      demo: "#",
      status: "Hoàn thành",
      period: "Jan 2025 - May 2025"
    },
    {
      title: "RBN Event - Service Connection Platform",
      description: "Nền tảng kết nối khách hàng với các nhà tổ chức sự kiện, cải thiện dịch vụ và tăng doanh thu. Dự án nhóm với focus vào trải nghiệm người dùng.",
      image: "🎉",
      technologies: ["SQL Server", "C# .NET", "RazorPage", "TailwindCSS", "Figma"],
      features: [
        "Kết nối khách hàng và nhà tổ chức",
        "Quản lý sự kiện và dịch vụ",
        "Cải thiện trải nghiệm khách hàng",
        "Tăng cường doanh thu",
        "Giao diện thân thiện"
      ],
      github: "https://github.com/micharel09/Baose162002/RBN_Event",
      demo: "#",
      status: "Hoàn thành",
      period: "Sep 2024 - Nov 2024"
    },
    {
      title: "Zoo Management System",
      description: "Ứng dụng web quản lý sở thú thân thiện với người dùng, tối ưu hóa việc quản lý động vật, nhân viên và khách tham quan.",
      image: "🦁",
      technologies: ["SQL Server", "C# .NET", "RazorPage", "TailwindCSS", "Figma"],
      features: [
        "Quản lý thông tin động vật",
        "Quản lý nhân viên và lịch làm việc",
        "Theo dõi khách tham quan",
        "Tối ưu hóa quy trình quản lý",
        "Giao diện UI/UX hiện đại"
      ],
      github: "https://github.com/micharel09/Zoo-Management",
      demo: "#",
      status: "Hoàn thành",
      period: "Oct 2023 - Dec 2023"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hoàn thành":
        return "bg-green-100 text-green-800"
      case "Đang phát triển":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-700 text-gray-200"
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dự án của <span className="text-blue-400">tôi</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Những dự án tôi đã thực hiện trong quá trình học tập và phát triển kỹ năng
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                {project.period && (
                  <p className="text-blue-600 text-xs font-medium mb-2">
                    📅 {project.period}
                  </p>
                )}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Công nghệ:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Tính năng chính:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-blue-600 text-xs">
                        +{project.features.length - 3} tính năng khác
                      </li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 text-xs bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Muốn xem thêm dự án?
              </h3>
              <p className="text-gray-300 mb-6">
                Tôi có nhiều dự án khác trên GitHub và đang liên tục phát triển những ý tưởng mới.
                Hãy ghé thăm GitHub của tôi để xem toàn bộ portfolio!
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('https://github.com/yourusername', '_blank')}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Xem GitHub của tôi
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Projects
