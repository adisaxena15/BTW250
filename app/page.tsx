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
              CUFoodBox delivers nutritious meals directly to the doors of residents facing
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

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            How CUFoodBox Works
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A community-centered system designed to make nutritious food access simple, flexible, and barrier‑free.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-4">
                <ClipboardCheck className="w-10 h-10" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2">Step 1</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Sign Up</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enroll online or through a partner organization. Households share basic details, nutritional needs, cultural food preferences,
                and preferred delivery windows in a short assessment.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-4">
                <Package className="w-10 h-10" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2">Step 2</div>
              <h3 className="text-xl font-bold text-foreground mb-3">We Source, Pack & Plan Routes</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Food is gathered from local pantries, farms, and grocery partners. Volunteers and part‑time drivers pack each box, while simple
                route‑planning tools ensure deliveries are efficient and meet each household’s schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-4">
                <Home className="w-10 h-10" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2">Step 3</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Home Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your box arrives at your door weekly or biweekly. Deliveries prioritize convenience, privacy, and accessibility—especially for
                residents who cannot reach traditional food pantries.
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


      <section className="py-16 md:py-20 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
      Frequently Asked Questions
    </h2>
    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Quick answers about CUFoodBox and how our delivery program works.
    </p>

    <div className="max-w-2xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-semibold">
            Is CUFoodBox free?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes. CUFoodBox is completely free for all enrolled households. Our program is supported through community
            partnerships, donations, and local food sourcing collaborations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-semibold">
            Who can sign up for CUFoodBox?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            We serve Champaign-Urbana residents who cannot regularly access in-person food pantries due to barriers like
            limited transportation, mobility challenges, demanding work hours, or caregiving responsibilities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left font-semibold">
            How often will I receive a food box?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Deliveries occur weekly or biweekly depending on your household’s needs, as indicated during enrollment. You
            can adjust your delivery schedule at any time.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left font-semibold">
            What kind of food will I receive?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Each box includes nutritious, fresh, and culturally appropriate foods sourced from local farms, food pantries,
            and grocery partners. Dietary restrictions and cultural preferences shared during sign‑up are respected.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</section>


      {/* Partners */}
      <section className="py-16 md:py-20 bg-card">
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
