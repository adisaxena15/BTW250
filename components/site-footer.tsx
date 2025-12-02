import Link from "next/link"
import { CUFoodBoxLogo } from "./cufoodbox-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* changed from 4 cols to 3 for even distribution */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CUFoodBoxLogo className="w-8 h-8" />
              <h3 className="text-xl font-bold text-primary">CUFoodBox</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Home-delivered food boxes for Champaign-Urbana residents facing transportation, mobility, or scheduling
              barriers to traditional food pantries.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Email:</strong> xxxx@illinois.edu
              <br />
              <strong>Phone:</strong> (217) XXX-XXXX
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Email us anytime or reach out to one of our partner organizations to get connected with CUFoodBox.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} CUFoodBox. All rights reserved. A registered 501(c)(3) nonprofit
            organization.
          </p>
        </div>
      </div>
    </footer>
  )
}