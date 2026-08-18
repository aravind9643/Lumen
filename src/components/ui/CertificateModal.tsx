import { useState } from 'react'
import { Icon } from './Icon'
import { triggerConfetti } from './Confetti'

interface CertificateModalProps {
  courseTitle: string
  courseSlug: string
  completedDate?: string
  onClose: () => void
}

export function CertificateModal({
  courseTitle,
  courseSlug,
  completedDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }),
  onClose,
}: CertificateModalProps) {
  const [learnerName, setLearnerName] = useState(() => {
    try {
      return localStorage.getItem('lumen:learner-name') || 'Dedicated Learner'
    } catch {
      return 'Dedicated Learner'
    }
  })
  const [copied, setCopied] = useState(false)

  const certId = `LMN-${courseSlug.toUpperCase().slice(0, 4)}-${Math.abs(
    courseSlug.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0)
  )
    .toString(16)
    .toUpperCase()}`

  const handleNameChange = (name: string) => {
    setLearnerName(name)
    try {
      localStorage.setItem('lumen:learner-name', name)
    } catch {
      // ignore
    }
  }

  const handlePrint = () => {
    triggerConfetti()
    window.print()
  }

  const handleShareTwitter = () => {
    const shareUrl = `${window.location.origin}/tutorials/${courseSlug}`
    const text = encodeURIComponent(`I just completed the "${courseTitle}" course on Lumen! Master software and AI from first principles. 🎓`)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const handleShareLinkedIn = () => {
    const shareUrl = `${window.location.origin}/tutorials/${courseSlug}`
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}/tutorials/${courseSlug}`
    navigator.clipboard.writeText(`I just completed the "${courseTitle}" course on Lumen! Check it out: ${shareUrl}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border-token bg-bg-elev p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="no-print absolute right-5 top-5 rounded-full p-2 text-fg-muted hover:bg-bg-subtle hover:text-fg"
          aria-label="Close modal"
        >
          <Icon name="close" size={16} />
        </button>

        {/* Certificate Card Printable Area */}
        <div
          id="certificate-print-area"
          className="relative overflow-hidden rounded-2xl border-4 border-accent/40 bg-bg p-8 text-center sm:p-12"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-accent" />
          <div className="absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-accent" />
          <div className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-accent" />
          <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-accent" />

          {/* Logo / Badge */}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/40 bg-accent-soft text-accent shadow-sm">
            <Icon name="award" size={28} />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Certificate of Completion
          </p>

          <p className="mt-4 text-xs uppercase tracking-wider text-fg-muted">This is proudly presented to</p>

          {/* Learner Name Input (Inline Editable) */}
          <div className="my-3">
            <input
              type="text"
              value={learnerName}
              onChange={(e) => handleNameChange(e.target.value)}
              className="w-full bg-transparent text-center font-serif text-2xl font-bold tracking-tight text-fg outline-none focus:border-b-2 focus:border-accent sm:text-3xl"
              placeholder="Your Full Name"
            />
          </div>

          <p className="mx-auto max-w-md text-xs leading-relaxed text-fg-muted">
            for successfully mastering all chapters, practical implementations, code blocks, and evaluations in
          </p>

          <h3 className="my-3 text-lg font-extrabold text-fg sm:text-xl">{courseTitle}</h3>

          <div className="mt-8 flex items-center justify-between border-t border-border-token pt-4 text-left text-[11px] text-fg-muted">
            <div>
              <p className="font-semibold text-fg">Date of Completion</p>
              <p>{completedDate}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-fg">Certificate Verification</p>
              <p className="font-mono text-accent">{certId}</p>
            </div>
          </div>
        </div>

        {/* Action Controls (Hidden when printing) */}
        <div className="no-print mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-fg-muted">
            Click your name on the certificate to personalize it before saving.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleShareTwitter}
              className="flex items-center gap-1.5 rounded-xl border border-border-token bg-bg px-3 py-2 text-xs font-semibold text-fg-muted transition-all hover:border-accent hover:text-accent"
              title="Share on X / Twitter"
            >
              <Icon name="sparkles" size={11} className="text-sky-400" />
              <span>Post on X</span>
            </button>
            <button
              onClick={handleShareLinkedIn}
              className="flex items-center gap-1.5 rounded-xl border border-border-token bg-bg px-3 py-2 text-xs font-semibold text-fg-muted transition-all hover:border-accent hover:text-accent"
              title="Share on LinkedIn"
            >
              <Icon name="award" size={11} className="text-blue-500" />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 rounded-xl border border-border-token bg-bg px-3 py-2 text-xs font-semibold text-fg-muted transition-all hover:border-accent hover:text-accent"
            >
              <Icon name="copy" size={12} />
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-accent-fg shadow-md transition-all hover:opacity-90"
            >
              <Icon name="file" size={12} />
              Print / Save PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
