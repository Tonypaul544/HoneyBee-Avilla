import { useState } from 'react'
import { useInView } from './hooks/useInView'

export default function Contact() {
    const [contentRef, contentInView] = useInView()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const recipient = 'vincentukattah@gmail.com'

    function handleSubmit(e) {
        e.preventDefault()

        const subject = `Message from ${name || 'Website visitor'}`
        const bodyPlain = `Name: ${name}\nEmail: ${email}\n\n${message}`

        // Gmail compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyPlain)}`
        const win = window.open(gmailUrl, '_blank')

        // Fallback to mailto if popup blocked
        if (!win) {
            const mailto = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyPlain)}`
            window.location.href = mailto
        }
    }

    return (
        <section id="contact" ref={contentRef} className={`w-full py-12 ${contentInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="max-w-4xl mx-auto p-6 rounded-lg bg-transparent-blue border border-gray-700 box-shadow-white">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Contact The Artist</h2>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 text-white space-y-4">
                        <h3 className="text-xl font-semibold">Available For</h3>
                        <ul className="list-disc list-inside text-sm">
                            <li>Live Performances</li>
                            <li>Collaborations</li>
                            <li>Interviews</li>
                            <li>Event Bookings</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-4">Contact Information</h3>
                        <p className="text-sm">Email: <a href={`mailto:${recipient}`} className="underline">{recipient}</a></p>
                        <p className="text-sm">Phone: <a href="tel:+447804555040" className="underline">+44 7804 555040</a></p>
                        <p className="text-sm">Social: <a href="https://instagram.com/honeybee_avilla" target="_blank" rel="noreferrer" className="underline">@honeybee_avilla</a></p>
                    </div>

                    <form className="md:w-1/2 bg-[#061024] p-4 rounded-lg" onSubmit={handleSubmit}>
                        <label className="block text-xs text-gray-300 mb-1">Your Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-3 px-3 py-2 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-gray-500" placeholder="Full name" />

                        <label className="block text-xs text-gray-300 mb-1">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-3 px-3 py-2 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-gray-500" placeholder="you@example.com" />

                        <label className="block text-xs text-gray-300 mb-1">Message</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full mb-3 px-3 py-2 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-gray-500" rows="5" placeholder="Write your message"></textarea>

                        <div className="flex justify-end">
                            <button type="submit" className="bg-gray-600 hover:bg-gray-500 text-white rounded-full px-6 py-2">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}