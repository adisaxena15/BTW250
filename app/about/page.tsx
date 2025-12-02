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

      {/* Mission & Vision */}
<section className="py-12 md:py-16 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto space-y-12">

      {/* Mission */}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          CUFoodBox eliminates obstacles to food availability by providing nutritious and culturally familiar food
          boxes directly to residents who can’t frequently visit local food pantries. Many in Champaign-Urbana struggle
          with transportation, mobility, or tight work schedules, and we focus on reaching people where they are. Our
          goal is to ensure that every household has consistent, convenient, and dignified access to wholesome food.
        </p>
      </div>

      {/* Vision */}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We envision a Champaign-Urbana where every resident has consistent access to nutritious food, which is
          delivered with compassion, convenience, and cultural inclusivity. Our goal is to ensure that income, mobility,
          or scheduling challenges never stand in the way of eating well. Through simple delivery systems and strong local
          partnerships, CUFoodBox works toward a community where healthy food reaches everyone who needs it, right at
          their doorstep.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Origin Story */}
<section className="pt-2 pb-10 md:pt-2 md:pb-10 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          CUFoodBox was created by a UIUC student who often saw classmates and community members skip meals because
          they did not have the time, transportation, or money to reach traditional food pantries. Many students spend
          long days on campus and do not end up eating due to their schedules, work hours, or limited resources. This
          concern became more real when the founder spent a summer working with a startup focused on making takeout meals
          more affordable. It was clear how strongly cost, transportation, and convenience shape someone’s ability to eat
          consistently.
        </p>
        <p>
          CUFoodBox was created to address these challenges by bringing nutritious and culturally familiar food directly
          to the homes of residents who cannot visit pantries in person. To find a variety of healthful meals, CUFoodBox
          now works with nearby farms, supermarkets, university organizations, and community institutions. Volunteers and
          part-time drivers assist prepare and distribute boxes each week, using basic systems that manage dietary needs
          and delivery routes.
        </p>
        <p>
          Our story is still evolving, but our objective is unwavering: establish a trustworthy, neighborhood-based
          approach to facilitate food availability for all Champaign-Urbana residents.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Leadership Team */}
<section className="py-12 md:py-16 bg-card">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-balance">
      Our Leadership Team
    </h2>

    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="bg-background">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src="/placeholder-founder.jpg"
              alt="Diya Mehta"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">Diya Mehta</h3>
              <p className="text-sm font-medium text-primary mb-3">Founder, CUFoodBox</p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                CUFoodBox was founded by Diya Mehta, a UIUC student who noticed how often classmates
                and community members had difficulty reaching traditional food pantries. Many students
                spent long days on campus and didn't always have the time or transportation to access food
                when they needed it.
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                While working with a startup focused on affordable meals, Diya saw how convenience, scheduling,
                and access can shape someone’s ability to eat consistently. CUFoodBox grew from the idea that food
                assistance should match real lives and real routines by bringing nutritious, culturally familiar
                food directly to households that cannot visit pantries in person.
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Our story continues to evolve, but the goal remains steady: a dependable, community-connected
                model that makes food access easier for everyone in Champaign-Urbana.
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
