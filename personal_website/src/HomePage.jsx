import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Youtube, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 bg-gray-50 text-gray-800">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Dr. [Your Name]</h1>
        <p className="text-lg">Ph.D. in Chemical Engineering | Carbon Capture & Green Tech Enthusiast</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              I'm a Chemical Engineer with a Ph.D. from NIT Trichy, specializing in sustainable
              materials and carbon capture. My current work focuses on graphene from biochar,
              vacuum pressure swing adsorption, and green technology integration in CO₂-intensive
              industries.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Research & Projects</h2>
            <ul className="list-disc ml-5">
              <li>Graphene-like material from biochar via electrochemical exfoliation</li>
              <li>Enhanced CO₂ adsorption using metal-doped biochar</li>
              <li>Techno-economic studies on carbon capture in steel/cement sectors</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Publications</h2>
            <ul className="list-disc ml-5">
              <li>"Vacuum Pressure Swing Adsorption for Carbon Capture" (Under Review)</li>
              <li>"Green synthesis of graphene from biochar" (Thesis work)</li>
            </ul>
            <Button variant="link" className="mt-2" onClick={() => window.open('#')}>View CV</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">YouTube Channel</h2>
            <p>Catch my videos on Telugu culture and personal reflections.</p>
            <Button
              className="mt-3"
              onClick={() => window.open("https://www.youtube.com/@ElaThimmapuramloMeeSrinivasa")}
            >
              <Youtube className="mr-2" /> Visit Channel
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex justify-center gap-6">
          <Button variant="outline" onClick={() => window.location.href='mailto:your.email@example.com'}>
            <Mail className="mr-2" /> Email
          </Button>
          <Button variant="outline" onClick={() => window.open('#')}>
            <FileText className="mr-2" /> CV
          </Button>
        </div>
      </section>
    </main>
  );
}