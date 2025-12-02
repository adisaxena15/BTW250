import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Package, Truck, Users, Database, Heart, ClipboardCheck } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="bg-card py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">How It Works</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            CUFoodBox uses a simple, community-centered system to move food from local partners to the households that
            can&apos;t easily reach traditional food pantries. Each step is designed to reduce barriers and respect the
            routines of the people we serve.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Enrollment & Referral */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ClipboardCheck className="w-6 h-6 text-primary" />
                  </div>
                  Enrollment &amp; Referral
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Households can enroll through a short online form or with help from partner organizations such as
                  schools, clinics, UIUC groups, and social service agencies. The form collects basic contact
                  information, household size, dietary restrictions, cultural food preferences, and preferred delivery
                  timing.
                </p>
                <p>
                  For residents without stable internet, phone enrollment is available so they can share the same
                  information with a staff member or volunteer. Referrals from community partners help CUFoodBox reach
                  older adults, students, workers, and families who may not otherwise seek out traditional pantry
                  services.
                </p>
              </CardContent>
            </Card>

            {/* Food Sourcing & Packing */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-foreground" />
                  </div>
                  Food Sourcing &amp; Packing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CUFoodBox gathers food from local food pantries, grocery stores, farms, and community gardens. These
                  partners provide a mix of pantry staples, fresh produce, and culturally familiar items that reflect the
                  needs of Champaign-Urbana residents.
                </p>
                <p>
                  Volunteers and part-time staff meet at a central location to pack weekly or biweekly boxes. During
                  packing, they check dates and quality, and they match items to the dietary restrictions and
                  preferences households share during enrollment.
                </p>
              </CardContent>
            </Card>

            {/* Packing & Household Customization */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  Preparing Each Household&apos;s Box
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Boxes are assembled with household size and dietary needs in mind. Families who note specific cultural
                  foods, allergies, or health-related needs are matched with options that fit those details whenever
                  possible.
                </p>
                <p>
                  The goal is not only to deliver enough food for the week or two between deliveries, but to make sure
                  the contents feel familiar, respectful, and realistic for each home.
                </p>
              </CardContent>
            </Card>

            {/* Delivery Model */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-foreground" />
                  </div>
                  Home Delivery Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CUFoodBox uses a flexible delivery system supported by volunteer drivers and part-time paid drivers.
                  Routes are planned so that boxes are delivered on a weekly or biweekly schedule that aligns with the
                  preferred delivery windows households share during enrollment.
                </p>
                <p>
                  The delivery model focuses on residents who cannot easily travel to pantries in person, including
                  seniors, people without cars, shift workers, and students with busy schedules. The goal is to make food
                  access fit into people&apos;s lives rather than asking them to rearrange their day.
                </p>
              </CardContent>
            </Card>

            {/* Community Partnerships */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  Community Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CUFoodBox collaborates with food pantries, university groups, extension programs, and city
                  organizations. These partners support food sourcing, outreach, volunteer recruitment, and long-term
                  program development.
                </p>
                <p>
                  Working within the broader food security network in Champaign-Urbana helps CUFoodBox avoid
                  duplication, respond to emerging needs, and connect households with additional resources when
                  necessary.
                </p>
              </CardContent>
            </Card>

            {/* Data Tracking & Evaluation */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-foreground" />
                  </div>
                  Data Tracking &amp; Program Review
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A simple data system tracks deliveries, household needs, volunteer involvement, and food inventory.
                  This information helps CUFoodBox understand how consistently households are served and where routes or
                  schedules might need adjustment.
                </p>
                <p>
                  Each year, the team reviews program performance to see how well the delivery model is meeting goals
                  related to food security, reliability, and community reach. These evaluations guide improvements and
                  support transparent, organized operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
