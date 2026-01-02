// import React, { useState } from 'react';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('sending');

//     // TODO: hook this up to a real endpoint (Formspree, Netlify, serverless function, etc.)
//     await new Promise((res) => setTimeout(res, 800));

//     setStatus('sent');
//     setName('');
//     setEmail('');
//     setMessage('');

//     setTimeout(() => setStatus('idle'), 3000);
//   };

//   return (
//     <section id="contact" className="py-32 bg-black/40">
//       <div className="max-w-3xl mx-auto px-6">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold mb-4">Contact</h2>
//           <p className="text-gray-400">
//             Let’s work together on something great.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white/5 p-6 md:p-8 rounded-lg shadow-sm">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <label className="flex flex-col">
//               <span className="text-sm text-gray-300 mb-2">Name</span>
//               <input
//                 className="px-4 py-2 rounded-md bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Your name"
//                 required
//               />
//             </label>

//             <label className="flex flex-col">
//               <span className="text-sm text-gray-300 mb-2">Email</span>
//               <input
//                 type="email"
//                 className="px-4 py-2 rounded-md bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 required
//               />
//             </label>

//             <label className="md:col-span-2 flex flex-col">
//               <span className="text-sm text-gray-300 mb-2">Message</span>
//               <textarea
//                 className="px-4 py-3 rounded-md bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 min-h-[120px]"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Tell me about your project..."
//                 required
//               />
//             </label>
//           </div>

//           <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-violet-500 rounded-lg text-white font-medium hover:bg-violet-600 disabled:opacity-60"
//               disabled={status === 'sending'}
//             >
//               {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
//             </button>

//             <p className="text-sm text-gray-400 md:ml-4">
//               {status === 'sent' ? (
//                 'Thanks! I will get back to you soon.'
//               ) : (
//                 <>
//                   Prefer email?{' '}
//                   <a href="mailto:your@email.com" className="text-violet-400 hover:underline">
//                     Email me
//                   </a>
//                 </>
//               )}
//             </p>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    console.log('Submitting contact form to Formspree', [...formData.entries()]);

    try {
      const res = await fetch("https://formspree.io/f/xpqzebbq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      let data: any;
      const ct = res.headers.get('content-type') || '';
      if (ct.includes('application/json')) {
        data = await res.json();
      } else {
        data = await res.text();
      }
      console.log('Formspree response', res.status, data);

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        console.error('Formspree error', res.status, data);
        alert('Failed to send message. Check the console and your Formspree dashboard (inbox, verification, or forwarding settings).');
      }
    } catch (err) {
      console.error('Network error sending form', err);
      setStatus("error");
      alert('Network error sending message. Check your connection and the console for details.');
    }
  };

  return (
    <section id="contact" className="py-32 bg-black/40 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Contact</h2>
          <p className="text-gray-400">
            Let’s work together on something great.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 p-6 md:p-8 rounded-xl"
        >
          <input type="hidden" name="_subject" value="New message from portfolio site" />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Your name"
              required
              className="px-4 py-3 rounded bg-transparent border border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none"
            />

            <input
              type="email"
              name="_replyto"
              placeholder="you@example.com"
              required
              className="px-4 py-3 rounded bg-transparent border border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
              className="md:col-span-2 px-4 py-3 rounded bg-transparent border border-gray-700 min-h-[130px] focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>

          <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-2 bg-violet-500 rounded-lg hover:bg-violet-600 transition disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Sent ✓"
                : "Send Message"}
            </button>

            <p className="text-sm text-gray-400">
              {status === "sent"
                ? "Message sent successfully!"
                : status === "error"
                ? "welcome ."
                : "You are welcome!"}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
