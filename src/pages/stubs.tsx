import { Link } from 'react-router-dom'

function Stub({ title }: { title: string }) {
  return (
    <main className="max-w-[1080px] mx-auto px-7 py-24 text-center">
      <h1 className="font-display text-[40px] text-wine mb-4" style={{ fontWeight: 430 }}>{title}</h1>
      <p className="text-ink-soft text-[17px] mb-8">This page is coming soon.</p>
      <Link to="/" className="text-wine font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine">
        Back to home
      </Link>
    </main>
  )
}

export function Programs()      { return <Stub title="Programs" /> }
export function HowItWorks()    { return <Stub title="How it works" /> }
export function ForParents()    { return <Stub title="For parents" /> }
export function Sponsor()       { return <Stub title="Sponsor a student" /> }
export function About()         { return <Stub title="About us" /> }
export function SuccessStories(){ return <Stub title="Success stories" /> }
export function FAQ()           { return <Stub title="FAQ" /> }
export function Apply()         { return <Stub title="Book a free trial" /> }
export function Dashboard()     { return <Stub title="Dashboard" /> }
export function Teach()         { return <Stub title="Teach" /> }
export function Admin()         { return <Stub title="Admin" /> }
