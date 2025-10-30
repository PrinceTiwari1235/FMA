export default function ContactPage() {
  return (
    <main className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6 text-slate-600">Have questions? Send us a message and we'll get back to you.</p>
        <form action="#" className="grid gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium mb-1">Name</span>
            <input name="name" className="border rounded p-3" />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium mb-1">Email</span>
            <input name="email" type="email" className="border rounded p-3" />
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium mb-1">Message</span>
            <textarea name="message" rows={6} className="border rounded p-3" />
          </label>
          <div>
            <button className="px-5 py-3 rounded bg-indigo-600 text-white">Send Message</button>
          </div>
        </form>
      </div>
    </main>
  );
}
