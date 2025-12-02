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

      {/* Ways to Get Involved */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-balance">Ways You Can Help</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Volunteer */}
            <Card className="bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Volunteer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lend a hand with packing or delivering food boxes to residents who can&apos;t easily reach
                  traditional food pantries.
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">Sign Up to Volunteer</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Donate */}
            <Card className="bg-card" id="donate">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Donate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Financial contributions help us source food, support delivery routes, and keep CUFoodBox running
                  reliably for households who depend on it.
                </p>
                <Button className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Make a Donation
                </Button>
              </CardContent>
            </Card>

            {/* Partner */}
            <Card className="bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-2xl">Partner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Food pantries, farms, grocery stores, university groups, and community organizations can collaborate
                  with us to identify households, share resources, and strengthen food security in Champaign-Urbana.
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Volunteer Opportunities</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            CUFoodBox relies on volunteers to keep food moving from our partners to local households. Choose a role that
            fits your schedule and comfort level.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Packing */}
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Food Box Packing</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      Help assemble boxes at our central packing location.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Work with other volunteers to sort items and pack weekly or biweekly food boxes based on household
                  size, dietary needs, and cultural preferences.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>No prior experience needed</li>
                  <li>Good option for student and community groups</li>
                  <li>Light to moderate lifting depending on role</li>
                </ul>
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Delivery Driver</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      Bring CUFoodBox directly to residents&apos; homes.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Follow planned routes to deliver boxes to households that cannot easily travel to food pantries,
                  including seniors, students, and working families.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Comfortable driving around Champaign-Urbana</li>
                  <li>Able to lift and carry food boxes</li>
                  <li>Ideal for individuals or pairs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/contact">Apply to Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Information */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">Support Through Donations</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Your financial contributions directly support CUFoodBox&apos;s mission by helping us source food, coordinate
              deliveries, and maintain a reliable program for households in Champaign-Urbana. We are a registered
              501(c)(3) nonprofit, and all donations are tax-deductible.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$50</div>
                  <p className="text-sm text-muted-foreground">Helps support one household&apos;s food box</p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$150</div>
                  <p className="text-sm text-muted-foreground">Contributes to multiple deliveries in a month</p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$500</div>
                  <p className="text-sm text-muted-foreground">Strengthens routes and logistics for many households</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 mb-4">
                <DollarSign className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
              <p className="text-sm text-muted-foreground">
                CUFoodBox is a registered 501(c)(3) nonprofit. Tax ID: 12-3456789
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">Partnership Opportunities</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              CUFoodBox works alongside local food pantries, farms, grocery stores, university groups, and city and
              community organizations. These partnerships make it possible to reach households who might otherwise be
              missed by traditional food assistance.
            </p>

            <div className="space-y-6">
              <Card className="bg-background">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Food Pantries, Farms & Food Partners
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Collaborate with us by sharing surplus food, coordinating low-cost sourcing, or helping identify
                    items that reflect the cultural and nutritional needs of local households.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Schools & Community Organizations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Schools, clinics, university programs, extension services, and community centers can refer
                    households, host sign-up events, and help connect residents who cannot easily reach food pantries.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Local Businesses</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Grocery stores and other local businesses can support CUFoodBox through in-kind food donations,
                    logistical support, and by helping raise awareness about home-delivered food access in
                    Champaign-Urbana.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
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
