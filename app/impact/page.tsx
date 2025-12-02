import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Card, CardContent } from "../../components/ui/card"
import { Users, Package, Calendar, TrendingUp, Heart, Home } from "lucide-react"

export default function ImpactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Page Header */}
      <section className="bg-card py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Impact</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Measuring the difference CUFoodBox makes in the lives of Champaign-Urbana residents facing food insecurity.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-balance">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">850+</div>
                <div className="text-sm font-medium text-muted-foreground mb-3">Households Served</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Families, students, seniors, and individuals receiving monthly food boxes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/40 mb-4">
                  <Package className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">10,200+</div>
                <div className="text-sm font-medium text-muted-foreground mb-3">Food Boxes Delivered</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Over 255,000 pounds of nutritious food delivered since 2019
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">120+</div>
                <div className="text-sm font-medium text-muted-foreground mb-3">Active Volunteers</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Community members contributing over 5,000 hours annually
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/40 mb-4">
                  <Calendar className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">Monthly</div>
                <div className="text-sm font-medium text-muted-foreground mb-3">Delivery Frequency</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Consistent, reliable food access for households every month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">87%</div>
                <div className="text-sm font-medium text-muted-foreground mb-3">Program Funding</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Of donations go directly to food purchasing and delivery
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/40 mb-4">
                  <Home className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm font-medium text-muted-foreground mb-3">Partner Organizations</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Collaborating with local groups to maximize community impact
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficiary Stories */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4 text-balance">
            Voices from Our Community
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Real stories from neighbors whose lives have been touched by CUFoodBox.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src="/elderly-latina-woman-warm-smile.jpg"
                    alt="Maria"
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-lg mb-1">Maria Rodriguez, 72</h4>
                    <p className="text-sm text-muted-foreground mb-3">Retired Teacher, West Champaign</p>
                    <p className="text-muted-foreground leading-relaxed">
                      "After my hip replacement surgery, I couldn't drive to the food pantry anymore. CUFoodBox
                      volunteers bring fresh vegetables, rice, beans, and even some Mexican ingredients I love. They
                      always ask if the delivery time works for me. This program has been a blessing."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src="/young-african-american-male-college-student.jpg"
                    alt="James"
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-lg mb-1">James Taylor, 21</h4>
                    <p className="text-sm text-muted-foreground mb-3">University Student, Campus Area</p>
                    <p className="text-muted-foreground leading-relaxed">
                      "I'm a full-time student working part-time to pay rent. Between classes and my job, I had no time
                      to get to the food pantry before it closed. CUFoodBox delivers right to my apartment building. I
                      can focus on my studies instead of constantly worrying about food."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src="/working-mother-mid-30s-with-children.jpg"
                    alt="Sarah"
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-lg mb-1">Sarah Johnson, 34</h4>
                    <p className="text-sm text-muted-foreground mb-3">Single Parent, North Urbana</p>
                    <p className="text-muted-foreground leading-relaxed">
                      "I'm raising two kids on my own and working two jobs. The food pantry hours never matched my work
                      schedule. CUFoodBox delivers on Sunday afternoons. My kids are eating better, and I'm not lying
                      awake at night worried about how I'll feed them."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Donations Are Used */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
              How Your Support Makes a Difference
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every dollar donated to CUFoodBox goes toward eliminating hunger in Champaign-Urbana. Here's how your
              contributions are allocated:
            </p>

            <div className="space-y-6">
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">87%</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Program Services</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Food purchasing from local farms and food banks, warehouse space, delivery vehicle fuel, packing
                        supplies, and volunteer support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-secondary-foreground">8%</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Operations & Administration</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Staff salaries, office supplies, database software, insurance, and legal compliance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-muted-foreground">5%</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Fundraising & Outreach</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Community outreach materials, donor communications, and website maintenance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Addressing Barriers */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
              Breaking Down Barriers to Food Access
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              CUFoodBox addresses the systemic barriers that prevent vulnerable populations from accessing traditional
              food pantries:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-foreground">Transportation:</strong>{" "}
                  <span className="text-muted-foreground">
                    By delivering directly to doors, we remove the need for transportation entirely.
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-foreground">Scheduling:</strong>{" "}
                  <span className="text-muted-foreground">
                    Flexible delivery scheduling accommodates work schedules, classes, and childcare.
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-foreground">Mobility:</strong>{" "}
                  <span className="text-muted-foreground">
                    Home delivery ensures access without physical strain or health risks.
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-foreground">Stigma:</strong>{" "}
                  <span className="text-muted-foreground">
                    Private delivery offers dignity and reduces psychological barriers.
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-foreground">Language & Culture:</strong>{" "}
                  <span className="text-muted-foreground">
                    Multilingual enrollment and culturally appropriate food options.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
