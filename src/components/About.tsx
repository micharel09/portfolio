import { Card, CardContent } from './ui/card'
import CVDownload from './CVDownload'

const About = () => {
  const stats = [
    { number: "2025", label: "Dự kiến tốt nghiệp", icon: "🎓" },
    { number: "3+", label: "Dự án thực tế", icon: "💻" },
    { number: "8+", label: "Công nghệ thành thạo", icon: "🚀" },
    { number: "100%", label: "Đam mê học hỏi", icon: "❤️" }
  ]

  const highlights = [
    {
      title: "Học tập không ngừng",
      description: "Luôn cập nhật những công nghệ mới nhất trong lĩnh vực web development",
      icon: "📚"
    },
    {
      title: "Tư duy logic",
      description: "Khả năng phân tích và giải quyết vấn đề một cách có hệ thống",
      icon: "🧠"
    },
    {
      title: "Làm việc nhóm",
      description: "Kinh nghiệm làm việc nhóm qua các dự án học tập và thực tập",
      icon: "👥"
    },
    {
      title: "Sáng tạo",
      description: "Đam mê tạo ra những sản phẩm có giá trị và trải nghiệm người dùng tốt",
      icon: "✨"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Về <span className="text-blue-400">tôi</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
           Hành trình học tập và đam mê trong lĩnh vực phát triển web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div>
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-8xl font-bold">
                    👨‍💻
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Software Engineering Student - FPT University
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Xin chào! Tôi là Trần Minh Quân, sinh viên năm 4 chuyên ngành Software Engineering tại
                  FPT University campus HCM. Với niềm đam mê dành cho lập trình và
                  phát triển web, tôi đã tích lũy được kinh nghiệm qua nhiều dự án tại trường.
                </p>
                <p>
                  Tôi có kinh nghiệm phát triển các ứng dụng web full-stack, từ việc thiết kế
                  giao diện người dùng với React đến xây dựng backend với C# và quản lý
                  cơ sở dữ liệu. Các dự án của tôi bao gồm platform chia sẻ phim, hệ thống
                  quản lý sự kiện, và ứng dụng quản lý sở thú.
                </p>
                <p>
                  Mục tiêu của tôi là trở thành một Full-stack Developer chuyên nghiệp,
                  có thể đóng góp tích cực vào sự phát triển của công ty và tạo ra những
                  sản phẩm có giá trị thực sự cho người dùng. Tôi đang tìm kiếm cơ hội thực tập
                  để áp dụng kiến thức và học hỏi thêm từ môi trường làm việc chuyên nghiệp.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <div className="text-2xl">{highlight.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                    <p className="text-sm text-gray-300">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <CVDownload size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
