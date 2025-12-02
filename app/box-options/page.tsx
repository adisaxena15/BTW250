import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { GraduationCap, Users, Heart, Globe } from "lucide-react"

export default function BoxOptionsPage() {
  const boxTypes = [
    {
      name: "Student Quick-Prep Box",
      icon: GraduationCap,
      tag: "Good for 3-4 days",
      description: "Easy-to-prepare meals for busy students with limited kitchen access.",
      items: [
        "Instant oatmeal packets & granola bars",
        "Peanut butter & whole grain crackers",
        "Canned soup & microwaveable rice",
        "Fresh apples & bananas",
        "Pasta & marinara sauce",
        "Snack mix & dried fruit",
      ],
    },
    {
      name: "Senior-Friendly Box",
      icon: Heart,
      tag: "Good for 5-7 days",
      description: "Nutritious, easy-to-open items suited for older adults.",
      items: [
        "Low-sodium canned vegetables",
        "Whole grain bread & oatmeal",
        "Lean protein (canned chicken/tuna)",
        "Fresh soft fruits (bananas, peaches)",
        "Milk & yogurt",
        "Ready-to-heat soup & stew",
      ],
    },
    {
      name: "Family Box",
      icon: Users,
      tag: "Designed for 2 adults + 2 children",
      description: "Balanced meals and snacks for households with children.",
      items: [
        "Whole grain cereal & milk",
        "Fresh vegetables & fruit",
        "Ground beef or chicken",
        "Rice, pasta & bread",
        "Canned beans & tomatoes",
        "Kid-friendly snacks & juice boxes",
        "Eggs & cheese",
      ],
    },
    {
      name: "Cultural Comfort Box",
      icon: Globe,
      tag: "Customized to preferences",
      description: "Ingredients for culturally specific meals based on your background.",
      items: [
        "Basmati or jasmine rice",
        "Spices & seasonings (cumin, turmeric, etc.)",
        "Lentils, chickpeas & dried beans",
        "Halal/Kosher protein options available",
        "Specialty sauces & condiments",
        "Fresh produce suited to cuisine type",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Page Header */}
      <section className="bg-card py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">What's in a CUFoodBox?</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Every food box is customized based on household size, dietary needs, and cultural preferences. Below are
            examples of typical box contents—actual items vary based on availability and your specific needs.
          </p>
        </div>
      </section>

      {/* Box Options */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {boxTypes.map((box) => (
              <Card key={box.name} className="bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <box.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{box.name}</CardTitle>
                    </div>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground w-fit">
                    {box.tag}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{box.description}</p>
                  <ul className="space-y-2">
                    {box.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-3xl mx-auto mt-12">
            <Card className="bg-card">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">How We Customize Your Box</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    When you request a food box, you'll tell us about your household size, dietary restrictions, and any
                    cultural food preferences. Our volunteers use this information to pack a box tailored to your needs.
                  </p>
                  <p>
                    We source food from the Eastern Illinois Foodbank, local farms, and community donations. Contents
                    vary by season and availability, but we always aim to include a balance of proteins, grains, fresh
                    produce, and shelf-stable staples.
                  </p>
                  <p>
                    Have specific needs or questions?{" "}
                    <a href="/contact" className="text-primary hover:underline">
                      Contact us
                    </a>{" "}
                    and we'll do our best to accommodate.
                  </p>
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
