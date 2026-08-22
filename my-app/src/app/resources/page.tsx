import Link from 'next/link'; 

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">Tech Resources</h1>
      <p className="mt-4 text-slate-300">Here you will find tutorials, dev tools, and guides!</p>
      
      {/* ආපහු Home Page එකට යන්න Button එකක් */}
      <Link href="/" className="mt-6 bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700">
        ← Back to Home
      </Link>
    </main>
  );
}