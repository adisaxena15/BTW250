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
          {/* Side-by-side responsive grid to reduce scrolling */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
            {/* Enrollment & Referral */}
            <Card className="bg-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ClipboardCheck className="w-6 h-6 text-primary" />
                  </div>
                  <span>Enrollment &amp; Referral</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed flex-1">
                <p>
                  Households enroll through a short online form or with help from partner organizations such as schools,
                  clinics, UIUC groups, and social service agencies.
                </p>
                <p>
                  Phone enrollment and referrals from community partners help CUFoodBox reach older adults, students,
                  workers, and families who may not otherwise seek out traditional pantry services.
                </p>
              </CardContent>
            </Card>

            {/* Food Sourcing & Packing */}
            <Card className="bg-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-foreground" />
                  </div>
                  <span>Food Sourcing &amp; Packing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed flex-1">
                <p>
                  CUFoodBox gathers food from local pantries, grocery stores, farms, and community gardens, providing a
                  mix of pantry staples, fresh produce, and culturally familiar items.
                </p>
                <p>
                  Volunteers and part-time staff meet at a central location to pack weekly or biweekly boxes and check
                  dates, quality, and fit with each household&apos;s preferences.
                </p>
              </CardContent>
            </Card>

            {/* Preparing Each Household's Box */}
            <Card className="bg-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <span>Preparing Each Household&apos;s Box</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed flex-1">
                <p>
                  Boxes are assembled with household size, allergies, and cultural or health-related needs in mind so
                  deliveries feel familiar, respectful, and realistic for each home.
                </p>
                <p>
                  Whenever possible, households that note specific cultural foods or health needs are matched with
                  options that reflect those details.
                </p>
              </CardContent>
            </Card>

            {/* Home Delivery Model */}
            <Card className="bg-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-foreground" />
                  </div>
                  <span>Home Delivery Model</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed flex-1">
                <p>
                  Volunteer and part-time drivers follow planned routes so boxes are dropped off on weekly or biweekly
                  schedules that match households&apos; preferred delivery windows.
                </p>
                <p>
                  The model focuses on residents who cannot easily travel to pantries in person, including seniors,
                  people without cars, shift workers, and students with busy schedules.
                </p>
              </CardContent>
            </Card>

            {/* Community Partnerships */}
            <Card className="bg-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <span>Community Partnerships</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed flex-1">
                <p>
                  CUFoodBox collaborates with food pantries, university groups, extension programs, and city
                  organizations for food sourcing, outreach, and volunteer recruitment.
                </p>
                <p>
                  Working within the broader food-security network helps avoid duplication and connect households with
                  additional resources when needed.
                </p>
              </CardContent>
            </Card>

            {/* Data Tracking & Program Review */}
            <Card className="bg-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-foreground" />
                  </div>
                  <span>Data Tracking &amp; Program Review</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground leading-relaxed flex-1">
                <p>
                  A simple data system tracks deliveries, household needs, volunteer involvement, and food inventory to
                  show how consistently households are served.
                </p>
                <p>
                  Annual reviews use this information to adjust routes and schedules and to evaluate how well the
                  delivery model meets food security and reliability goals.
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
