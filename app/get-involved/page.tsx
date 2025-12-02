import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Heart, Users, Handshake, DollarSign, Package, Truck } from "lucide-react"
import Link from "next/link"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Page Header */}
      <section className="bg-card py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Get Involved</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Join us in reducing barriers to food access. Whether you volunteer, donate, or partner with us, your support
            helps CUFoodBox bring nutritious, culturally familiar food directly to households in Champaign-Urbana.
          </p>
        </div>
      </section>

      {/* Primary ways to help */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10 text-balance">Ways You Can Help</h2>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Volunteer */}
            <Card className="bg-card h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Volunteer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Help pack or deliver food boxes to residents who can&apos;t easily reach traditional food pantries.
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">Sign Up to Volunteer</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Donate */}
            <Card className="bg-card h-full flex flex-col" id="donate">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Donate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fund food, storage, and delivery routes so CUFoodBox can run reliably for households who depend on it.
                </p>
                <Button className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Make a Donation
                </Button>
              </CardContent>
            </Card>

            {/* Partner */}
            <Card className="bg-card h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-2xl">Partner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Food pantries, farms, grocery stores, and campus or city groups can collaborate with us to reach more
                  households.
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compact details: volunteers, donations, partnerships */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Volunteer roles */}
            <Card className="bg-background h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Volunteer Roles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <div>
                  <p className="font-semibold text-foreground mb-1">Food Box Packing</p>
                  <p>Sort items and pack boxes based on household size, dietary needs, and cultural preferences.</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>No prior experience needed</li>
                    <li>Great for student and community groups</li>
                    <li>Light to moderate lifting depending on role</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Delivery Driver</p>
                  <p>Follow planned routes to bring CUFoodBox directly to residents&apos; homes.</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>Comfortable driving around Champaign-Urbana</li>
                    <li>Able to lift and carry food boxes</li>
                    <li>Flexible weekly or biweekly shifts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Donation impact + quick facts */}
            <Card className="bg-background h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Donation Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-lg bg-card">
                    <div className="text-2xl font-bold text-primary mb-1">$50</div>
                    <p>Supports one household&apos;s food box.</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-card">
                    <div className="text-2xl font-bold text-primary mb-1">$150</div>
                    <p>Contributes to multiple deliveries in a month.</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-card">
                    <div className="text-2xl font-bold text-primary mb-1">$500</div>
                    <p>Strengthens routes and logistics for many households.</p>
                  </div>
                </div>
                <p>
                  Your gift helps us source food, coordinate deliveries, and keep the program reliable for households who
                  cannot easily reach pantries. CUFoodBox is a registered 501(c)(3) nonprofit; donations are
                  tax-deductible.
                </p>
                <Button className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Partnerships in a single compact band */}
          <div className="mt-10">
            <Card className="bg-background">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Handshake className="w-5 h-5 text-primary" />
                  Partnership Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground leading-relaxed">
                <div>
                  <p className="font-semibold text-foreground mb-1">Food Pantries &amp; Food Partners</p>
                  <p>
                    Share surplus food, coordinate low-cost sourcing, and help match items to the cultural and
                    nutritional needs of local households.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Schools &amp; Community Orgs</p>
                  <p>
                    Refer households, host sign-up events, and connect residents who cannot easily reach traditional
                    food pantries.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Local Businesses</p>
                  <p>
                    Support CUFoodBox through in-kind donations, logistics help, and by raising awareness about
                    home-delivered food access.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us About Partnerships</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
