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
            Learn how CUFoodBox operates—from food sourcing to delivery—to serve our community with dignity and care.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Enrollment System - moved to top for user-centric flow */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ClipboardCheck className="w-6 h-6 text-primary" />
                  </div>
                  Enrollment Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Enrollment is simple and designed to minimize barriers. Interested households complete a short online
                  or paper form that asks for basic contact information, household size, dietary restrictions, and food
                  preferences. We do not require proof of income or extensive documentation—our focus is on trust and
                  accessibility.
                </p>
                <p>
                  Forms are available in English, Spanish, and Mandarin, and staff are available to assist with
                  enrollment by phone. Referrals come from schools, social service agencies, healthcare providers, and
                  community organizations.
                </p>
              </CardContent>
            </Card>

            {/* Food Sourcing */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-foreground" />
                  </div>
                  Food Sourcing & Quality
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We partner with the Eastern Illinois Foodbank to source non-perishable staples, including grains,
                  canned goods, and proteins. We work with local farms and produce distributors to provide fresh fruits
                  and vegetables whenever possible.
                </p>
                <p>
                  Cultural diversity is central to our sourcing model. We stock ingredients that reflect the diverse
                  backgrounds of Champaign-Urbana residents. Recipients indicate dietary restrictions and cultural food
                  preferences during enrollment.
                </p>
              </CardContent>
            </Card>

            {/* Packing Model */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  Food Box Packing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our volunteer teams pack food boxes at our community warehouse space twice per month. Each box is
                  customized based on household size and dietary preferences.
                </p>
                <p>
                  Standard boxes include approximately 25-30 pounds of food—enough to supplement a household's grocery
                  needs for two weeks. Volunteers often include handwritten notes to recipients, building community
                  connection.
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
                  Home Delivery System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Deliveries occur monthly and are coordinated with recipients in advance. We use an online scheduling
                  system that allows recipients to select delivery windows that work for their schedules.
                </p>
                <p>
                  Volunteer delivery teams work in pairs for safety and efficiency. They leave boxes at the door if
                  recipients prefer contactless delivery or hand them directly to recipients who wish to connect in
                  person.
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
                  CUFoodBox relies on strong partnerships with local organizations to source food, recruit volunteers,
                  and identify households in need. Our primary partners include the Eastern Illinois Foodbank and local
                  farms.
                </p>
                <p>
                  We collaborate with the University YMCA, faith communities, and student organizations for volunteer
                  recruitment. Social service agencies refer families and individuals who could benefit from our
                  services.
                </p>
              </CardContent>
            </Card>

            {/* Data Tracking */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-foreground" />
                  </div>
                  Data & Impact Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We maintain a secure database to track enrollment, delivery schedules, food preferences, and program
                  outcomes. All data is stored securely and used only for program improvement and reporting purposes.
                </p>
                <p>
                  Twice per year, we survey recipients to gather feedback on food quality, delivery experience, and
                  program impact. We share aggregated data in annual reports to demonstrate our impact to donors and
                  partners.
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
