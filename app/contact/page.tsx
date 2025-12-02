"use client"

import type React from "react"

import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Page Header */}
      <section className="bg-card py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Have questions? Need assistance? Want to request a food box? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <a href="mailto:info@cufoodbox.org" className="text-sm text-primary hover:underline">
                        info@cufoodbox.org
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                      <a href="tel:+12175550100" className="text-sm text-primary hover:underline">
                        (217) 555-0100
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9am-5pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Community Way
                        <br />
                        Champaign, IL 61820
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(217) 555-0100"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="What is this regarding?"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please share your question, comment, or how you'd like to help..."
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Need Food Assistance */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-balance">Need Food Assistance?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you or someone you know in Champaign-Urbana needs home-delivered food boxes and faces barriers to
              accessing traditional food pantries, we're here to help. Enrollment is simple and confidential.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Call us at{" "}
              <a href="tel:+12175550100" className="text-primary hover:underline font-medium">
                (217) 555-0100
              </a>{" "}
              or email{" "}
              <a href="mailto:info@cufoodbox.org" className="text-primary hover:underline font-medium">
                info@cufoodbox.org
              </a>{" "}
              to learn more about enrollment. We welcome students, seniors, working families, individuals with
              disabilities, and anyone experiencing barriers to food access.
            </p>
            <div className="p-6 bg-background border border-border rounded-lg">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Privacy Matters:</strong> All inquiries and enrollment information
                are kept strictly confidential. We never share your personal information without your permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
