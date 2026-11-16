import { education } from "../lib/data"

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-heading text-foreground">Education</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Formal education and ongoing learning.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="rounded-xl border border-border bg-card p-6 shadow-sm ring-1 ring-foreground/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-bold font-heading text-lg text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-primary">{edu.institution}</p>
                </div>
                <p className="text-sm text-muted-foreground">{edu.duration}</p>
              </div>
              <p className="text-sm text-muted-foreground">{edu.location}</p>
              {edu.honors && (
                <p className="mt-1 text-xs text-muted-foreground">{edu.honors}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
