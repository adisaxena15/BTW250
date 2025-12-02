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
            Join us in fighting food insecurity. Whether you volunteer, donate, or partner with us, your support makes a
            real difference in our community.
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
                  Join our team of community volunteers who pack and deliver food boxes to neighbors in need.
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up to Volunteer
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card" id="donate">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Donate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Financial contributions help us purchase fresh food and expand our reach to more households.
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
                  Organizations, farms, and businesses can partner with us to support food security in our community.
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
            We welcome volunteers of all ages and abilities. Choose the role that fits your schedule and interests.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Food Box Packing</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">2-3 hours, twice monthly</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Help pack food boxes at our warehouse. Great for groups, families, and students looking for service
                  hours.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>No experience needed</li>
                  <li>Family-friendly (ages 8+)</li>
                  <li>Flexible scheduling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Delivery Driver</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">3-4 hours, once monthly</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Deliver food boxes to recipients' homes. Work in pairs for safety and community connection.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Valid driver's license required</li>
                  <li>Reliable vehicle needed</li>
                  <li>Work in pairs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Outreach & Enrollment</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">Flexible, 2-5 hours weekly</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Help connect eligible households with CUFoodBox. Assist with enrollment and community outreach events.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Good communication skills</li>
                  <li>Multilingual volunteers welcome</li>
                  <li>Remote options available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Administrative Support</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">Flexible, 3-5 hours weekly</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Assist with data entry, scheduling, donor communications, or grant writing.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Computer skills helpful</li>
                  <li>Remote or in-office</li>
                  <li>Use your professional skills</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Apply to Volunteer
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
              Your financial contributions directly support our mission. 87% of donations go directly to program
              services. We are a registered 501(c)(3) nonprofit, and all donations are tax-deductible.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$50</div>
                  <p className="text-sm text-muted-foreground">Provides a full food box for one household</p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$150</div>
                  <p className="text-sm text-muted-foreground">Supplies three families for a month</p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$500</div>
                  <p className="text-sm text-muted-foreground">Covers delivery costs for 20 households</p>
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
              We partner with local organizations, farms, businesses, and community groups to strengthen our impact.
            </p>

            <div className="space-y-6">
              <Card className="bg-background">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Local Farms & Food Producers</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Partner with us to supply fresh produce, grains, or proteins. We prioritize local sourcing and can
                    offer regular purchasing agreements.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Community Organizations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Schools, healthcare providers, social service agencies, and faith communities can refer eligible
                    households and help us reach those who need our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Businesses & Corporations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Corporate partnerships, employee volunteer programs, and sponsorships help expand our capacity and
                    serve more households.
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
