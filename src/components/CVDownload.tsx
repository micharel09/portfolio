import { useState } from 'react'
import { Button } from './ui/button'

interface CVDownloadProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  showIcon?: boolean
  children?: React.ReactNode
}

const CVDownload = ({ 
  variant = 'default', 
  size = 'default', 
  className = '', 
  showIcon = true,
  children 
}: CVDownloadProps) => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      // Create a link element and trigger download
      const link = document.createElement('a')
      link.href = 'https://res.cloudinary.com/ddmgchwpw/image/upload/v1751127854/TRAN-MINH-QUAN_qdw423.pdf'
      link.download = 'CV-Tran-Minh-Quan.pdf'
      link.target = '_blank'
      
      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Add a small delay for better UX
      setTimeout(() => {
        setIsDownloading(false)
      }, 1000)
    } catch (error) {
      console.error('Error downloading CV:', error)
      setIsDownloading(false)
    }
  }

  const defaultContent = (
    <>
      {showIcon && (
        <svg 
          className={`${isDownloading ? 'animate-spin' : ''} ${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} mr-2`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isDownloading ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          )}
        </svg>
      )}
      {isDownloading ? 'Đang tải...' : 'Tải CV của tôi'}
    </>
  )

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant={variant}
      size={size}
      className={`
        ${className}
        ${isDownloading ? 'cursor-wait' : 'cursor-pointer'}
        transition-all duration-200 hover:scale-105 active:scale-95
        ${variant === 'default' ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25' : ''}
        ${variant === 'outline' ? 'border-blue-400 text-blue-400 hover:bg-blue-900/20 hover:border-blue-300' : ''}
      `}
      title="Tải xuống CV của Trần Minh Quân"
    >
      {children || defaultContent}
    </Button>
  )
}

export default CVDownload
