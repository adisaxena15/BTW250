import Link from "next/link"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Users, Package, Calendar, Home, Truck, ClipboardCheck, Clock, MapPin, Utensils } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative bg-card py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/volunteers-delivering-food-boxes-to-family-at-door.jpg"
            alt="CUFoodBox volunteers delivering food"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/80" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              Home-Delivered Food Boxes for Champaign-Urbana Families Who Can't Reach Pantries
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              CUFoodBox delivers nutritious, culturally appropriate groceries directly to the doors of residents facing
              transportation, mobility, or scheduling barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                <Link href="/get-involved#donate">Donate Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/contact">Request a Food Box</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-1">850+</div>
              <div className="text-sm text-muted-foreground">Households Served</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/40 mb-3">
                <Package className="w-7 h-7 text-foreground" />
              </div>
              <div className="text-4xl font-bold text-primary mb-1">120+</div>
              <div className="text-sm text-muted-foreground">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-1">Monthly</div>
              <div className="text-sm text-muted-foreground">Food Box Deliveries</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">How CUFoodBox Works</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Three simple steps to receive nutritious food at your door.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-4">
                <ClipboardCheck className="w-10 h-10" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2">Step 1</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Enroll</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sign up online or through one of our partner organizations. The process is simple and confidential.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-4">
                <Package className="w-10 h-10" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2">Step 2</div>
              <h3 className="text-xl font-bold text-foreground mb-3">We Pack & Deliver</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Volunteers prepare and deliver culturally appropriate food boxes tailored to your household.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-4">
                <Home className="w-10 h-10" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2">Step 3</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Receive Food at Home</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deliveries arrive at your door on a schedule that works for you—with dignity and privacy.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Why CUFoodBox is Different
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We go beyond traditional food pantries to meet people where they are.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Home Delivery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For residents who cannot reach pantries due to transportation or mobility barriers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Utensils className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Culturally Appropriate Food</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Food options that respect diverse dietary traditions and preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deliveries scheduled around the lives of workers, students, and seniors.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Community Partnerships</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strong relationships with local organizations across Champaign-Urbana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiary Stories */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Stories from Our Community
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Real experiences from neighbors who have benefited from CUFoodBox.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src="/elderly-latina-woman-warm-smile-portrait.jpg" alt="Maria" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-foreground">Maria, 72</h4>
                    <p className="text-sm text-muted-foreground">Retired Teacher</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "After my hip surgery, I couldn't drive to the food pantry anymore. CUFoodBox volunteers bring fresh
                  vegetables right to my door. They're so kind and respectful."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src="/young-african-american-male-college-student-portra.jpg" alt="James" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-foreground">James, 21</h4>
                    <p className="text-sm text-muted-foreground">University Student</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Between classes and my part-time job, I had no time to get to the pantry. CUFoodBox delivers right to
                  my apartment. I can focus on my studies instead of worrying about food."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src="/working-mother-mid-30s-warm-portrait.jpg" alt="Sarah" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-foreground">Sarah, 34</h4>
                    <p className="text-sm text-muted-foreground">Working Parent</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "As a single mom working two jobs, I couldn't make it to the pantry during their hours. CUFoodBox
                  delivers when it works for my schedule. My kids now have healthy food every day."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Common questions about CUFoodBox and our services.
          </p>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">Is CUFoodBox free?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. All food boxes and deliveries are completely free to recipients. We are a nonprofit organization
                  funded by donations and grants.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">Who qualifies for delivery?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Any Champaign-Urbana resident facing barriers to accessing traditional food pantries—including
                  transportation challenges, mobility limitations, inflexible work schedules, or health concerns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">
                  How often can I receive a food box?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Enrolled households receive monthly deliveries. You can pause or resume service at any time based on
                  your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">
                  How do donors know their money is used responsibly?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  87% of donations go directly to program services. We publish annual reports with detailed financial
                  information and outcomes, and our records are reviewed by an independent accountant.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Community Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border">
              <span className="text-sm font-medium text-muted-foreground text-center">Eastern Illinois Foodbank</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border">
              <span className="text-sm font-medium text-muted-foreground text-center">Local Harvest Farms</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border">
              <span className="text-sm font-medium text-muted-foreground text-center">University YMCA</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-card rounded-lg border border-border">
              <span className="text-sm font-medium text-muted-foreground text-center">Faith in Action</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Join Us in Fighting Food Insecurity</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Whether through volunteering, donating, or spreading the word, you can help ensure that every neighbor in
            Champaign-Urbana has access to nutritious food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/get-involved">Volunteer</Link>
            </Button>
            <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              <Link href="/get-involved#donate">Donate</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
