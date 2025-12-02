"use client"

import type React from "react"
import { useState } from "react"
import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Checkbox } from "../../components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { CheckCircle } from "lucide-react"

export default function RequestFoodBoxPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    householdSize: "",
    dietaryRestrictions: [] as string[],
    otherDietary: "",
    culturalPreferences: "",
    deliveryWindow: "",
    additionalNotes: "",
  })

  const dietaryOptions = [
    { id: "vegetarian", label: "Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "halal-kosher", label: "Halal/Kosher" },
    { id: "gluten-free", label: "Gluten-free" },
    { id: "dairy-free", label: "Dairy-free" },
    { id: "nut-free", label: "Nut-free" },
  ]

  const handleDietaryChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      dietaryRestrictions: checked
        ? [...prev.dietaryRestrictions, id]
        : prev.dietaryRestrictions.filter((item) => item !== id),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Food box request submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <section className="flex-1 py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Thank You for Your Request</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Thank you for requesting a CUFoodBox. Our team will review your information and follow up with next
                steps. We typically respond within 2-3 business days.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="/">Return to Home</a>
              </Button>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Page Header */}
      <section className="bg-card py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Request a Food Box</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            CUFoodBox delivers nutritionally balanced, culturally appropriate food boxes to residents who can't easily
            reach traditional food pantries. Fill out this form so we can learn about your household's needs and
            schedule deliveries.
          </p>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">Contact Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="Your full name"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(217) XXX-XXXX"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">Delivery Address</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address1">Address Line 1 *</Label>
                        <Input
                          id="address1"
                          placeholder="Street address"
                          required
                          value={formData.address1}
                          onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address2">Address Line 2</Label>
                        <Input
                          id="address2"
                          placeholder="Apartment, suite, unit, etc. (optional)"
                          value={formData.address2}
                          onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          placeholder="Champaign"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            placeholder="IL"
                            required
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP Code *</Label>
                          <Input
                            id="zip"
                            placeholder="61820"
                            required
                            value={formData.zip}
                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Household Information */}
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">Household Information</h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="householdSize">Household Size *</Label>
                        <Select
                          value={formData.householdSize}
                          onValueChange={(value) => setFormData({ ...formData, householdSize: value })}
                          required
                        >
                          <SelectTrigger id="householdSize">
                            <SelectValue placeholder="Select household size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 person</SelectItem>
                            <SelectItem value="2">2 people</SelectItem>
                            <SelectItem value="3">3 people</SelectItem>
                            <SelectItem value="4">4 people</SelectItem>
                            <SelectItem value="5">5 people</SelectItem>
                            <SelectItem value="6">6 people</SelectItem>
                            <SelectItem value="7+">7 or more people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <Label>Dietary Restrictions</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {dietaryOptions.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={option.id}
                                checked={formData.dietaryRestrictions.includes(option.id)}
                                onCheckedChange={(checked) => handleDietaryChange(option.id, checked as boolean)}
                              />
                              <Label htmlFor={option.id} className="text-sm font-normal cursor-pointer">
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2 pt-2">
                          <Label htmlFor="otherDietary">Other dietary needs or allergies</Label>
                          <Input
                            id="otherDietary"
                            placeholder="Please specify any other restrictions"
                            value={formData.otherDietary}
                            onChange={(e) => setFormData({ ...formData, otherDietary: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="culturalPreferences">Cultural Food Preferences</Label>
                        <Textarea
                          id="culturalPreferences"
                          placeholder="Let us know if you have preferences for foods from specific cultural traditions (e.g., South Asian, Latin American, East Asian, Middle Eastern, etc.)"
                          rows={3}
                          value={formData.culturalPreferences}
                          onChange={(e) => setFormData({ ...formData, culturalPreferences: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery Preferences */}
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">Delivery Preferences</h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="deliveryWindow">Preferred Delivery Window *</Label>
                        <Select
                          value={formData.deliveryWindow}
                          onValueChange={(value) => setFormData({ ...formData, deliveryWindow: value })}
                          required
                        >
                          <SelectTrigger id="deliveryWindow">
                            <SelectValue placeholder="Select preferred time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekday-morning">Weekday mornings (9am - 12pm)</SelectItem>
                            <SelectItem value="weekday-afternoon">Weekday afternoons (12pm - 5pm)</SelectItem>
                            <SelectItem value="weekday-evening">Weekday evenings (5pm - 7pm)</SelectItem>
                            <SelectItem value="saturday">Saturday (10am - 2pm)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalNotes">Additional Notes</Label>
                        <Textarea
                          id="additionalNotes"
                          placeholder="Any other information that would help us serve you better (delivery instructions, mobility considerations, etc.)"
                          rows={4}
                          value={formData.additionalNotes}
                          onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Privacy Notice */}
                  <div className="p-4 bg-background border border-border rounded-lg">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Privacy Notice:</strong> Your information is kept strictly
                      confidential and is used only to coordinate food box deliveries. We never share your personal
                      information without your permission.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
