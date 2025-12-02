"use client"

import type React from "react"
import { useState } from "react"
import { SiteHeader } from "../../components/site-header"
import { SiteFooter } from "../../components/site-footer"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { CheckCircle, Package, Truck, Home, ClipboardCheck } from "lucide-react"

export default function TrackYourBoxPage() {
  const [trackingId, setTrackingId] = useState("")
  const [showStatus, setShowStatus] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingId.trim()) {
      setShowStatus(true)
    }
  }

  const trackingSteps = [
    {
      label: "Request received",
      description: "Your food box request has been confirmed",
      completed: true,
      icon: ClipboardCheck,
    },
    {
      label: "Box packed",
      description: "Volunteers have prepared your customized food box",
      completed: true,
      icon: Package,
    },
    {
      label: "Loaded for delivery",
      description: "Your box is on the delivery truck",
      completed: true,
      icon: Truck,
    },
    {
      label: "Out for delivery",
      description: "Your box is on its way to you today",
      completed: false,
      current: true,
      icon: Home,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Page Header */}
      <section className="bg-card py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Track Your Box</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Enter your CUFoodBox ID or phone number to see the status of your upcoming delivery. This page is a
            prototype for demonstration purposes.
          </p>
        </div>
      </section>

      {/* Tracking Form & Status */}
      <section className="py-12 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Tracking Form */}
            <Card className="bg-card mb-8">
              <CardContent className="p-6">
                <form onSubmit={handleTrack} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="trackingId">Box ID or Phone Number</Label>
                    <div className="flex gap-3">
                      <Input
                        id="trackingId"
                        placeholder="e.g., CUF-2024-1234 or (217) 555-0100"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Track
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Status Display */}
            {showStatus && (
              <Card className="bg-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tracking ID</p>
                      <p className="font-semibold text-foreground">CUF-2024-1234</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        Out for delivery
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                    <p className="font-semibold text-foreground">Today, between 2:00 PM - 5:00 PM</p>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-0">
                    {trackingSteps.map((step, index) => (
                      <div key={step.label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              step.completed
                                ? "bg-primary text-primary-foreground"
                                : step.current
                                  ? "bg-primary/20 text-primary border-2 border-primary"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {step.completed ? <CheckCircle className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                          </div>
                          {index < trackingSteps.length - 1 && (
                            <div className={`w-0.5 h-16 ${step.completed ? "bg-primary" : "bg-border"}`} />
                          )}
                        </div>
                        <div className="pb-8">
                          <p className={`font-medium ${step.current ? "text-primary" : "text-foreground"}`}>
                            {step.label}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                          {step.completed && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Completed {index === 0 ? "Dec 1" : index === 1 ? "Dec 1" : "Dec 2"}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-background border border-border rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Questions about your delivery?</strong> Contact us at{" "}
                      <a href="" className="text-primary hover:underline">
                        (XXX) XXX-XXXX
                      </a>{" "}
                      or{" "}
                      <a href="xxxxx@illinois.edu" className="text-primary hover:underline">
                        xxxxx@illinois.edu
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Help Text when no tracking shown */}
            {!showStatus && (
              <div className="text-center text-muted-foreground">
                <p className="mb-4">
                  Your Box ID was included in the confirmation email you received when you requested a food box.
                </p>
                <p>
                  Don't have your Box ID?{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    Contact us
                  </a>{" "}
                  and we can look up your delivery status.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
