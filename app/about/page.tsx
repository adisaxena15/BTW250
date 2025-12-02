import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Card, CardContent } from "../../components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="bg-card py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Who We Are</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Our story, mission, and commitment to serving the Champaign-Urbana community with dignity and compassion.
          </p>
        </div>
      </section>

      {/* Mission & Vision - unchanged structure, just bg color updates */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CUFoodBox exists to eliminate barriers to food access by delivering nutritious, culturally appropriate
                food boxes directly to the homes of Champaign-Urbana residents who cannot reach traditional food
                pantries due to transportation, mobility, scheduling, or other systemic challenges. We believe that
                access to healthy food is a fundamental right, and we work to ensure that every neighbor can feed
                themselves and their families with dignity.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a Champaign-Urbana where no resident experiences food insecurity due to lack of
                transportation, inflexible schedules, or physical barriers. We imagine a community where food assistance
                is provided with respect and cultural sensitivity, where volunteers and recipients build relationships
                rooted in mutual care, and where systemic barriers to food access are dismantled through innovative,
                community-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                CUFoodBox was founded in 2019 by Sarah Martinez, a social worker who spent years working with low-income
                families in Champaign-Urbana. Through her work, Sarah repeatedly encountered families, students, and
                seniors who qualified for food assistance but couldn't access traditional pantries.
              </p>
              <p>
                She met university students without cars who missed pantry hours because of class schedules. She worked
                with seniors who could no longer drive and had no family nearby to help. She counseled working parents
                who couldn't leave their jobs during the narrow windows when pantries were open.
              </p>
              <p>
                Sarah realized that food pantries, while essential, weren't reaching everyone who needed them. The
                barriers were systemic: limited public transportation, inflexible operating hours, physical
                inaccessibility, and the stigma many people felt about seeking help in public.
              </p>
              <p>
                In response, Sarah started small—delivering food boxes from her own car to five households that couldn't
                reach pantries. Within six months, the program grew to serve 50 households. By the end of the first
                year, CUFoodBox was delivering to over 200 families monthly.
              </p>
              <p>
                Today, CUFoodBox serves more than 850 households with the help of 120+ volunteers. But our core
                commitment remains the same: bringing nutritious food directly to neighbors who face barriers to
                accessing traditional food assistance, with compassion, respect, and cultural sensitivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-balance">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Dignity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We treat every recipient with respect and honor their autonomy, privacy, and choices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Accessibility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We actively remove barriers—whether transportation, scheduling, language, or mobility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Cultural Sensitivity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We provide foods that reflect the diverse cultural backgrounds of our recipients.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build connections between volunteers, recipients, and partners through mutual care.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Transparency</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We operate with honesty and openness, sharing our data and finances with the community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Equity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We recognize different barriers and provide support that meets each household's unique needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-balance">Our Leadership Team</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src="/professional-latina-woman-social-worker-portrait.jpg"
                    alt="Sarah Martinez"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Sarah Martinez, MSW</h3>
                    <p className="text-sm font-medium text-primary mb-3">Founder & Executive Director</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Sarah has over 15 years of experience in social work and community development. Her personal
                      experience with food insecurity as a college student motivates her commitment to ensuring
                      accessible, dignified food assistance for all.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src="/professional-asian-man-public-health-portrait-glas.jpg"
                    alt="David Chen"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">David Chen, MPH</h3>
                    <p className="text-sm font-medium text-primary mb-3">Program Director</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      David oversees CUFoodBox's operations, volunteer coordination, and partnership development. He
                      ensures that our food sourcing prioritizes nutrition quality, freshness, and cultural
                      appropriateness.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src="/professional-african-american-woman-nonprofit-mana.jpg"
                    alt="Keisha Williams"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Keisha Williams, MBA</h3>
                    <p className="text-sm font-medium text-primary mb-3">Operations & Outreach Coordinator</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Keisha manages CUFoodBox's enrollment processes, data tracking, and community outreach. Her
                      background in nonprofit management strengthens our operational efficiency and community
                      relationships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
