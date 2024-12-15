import { Scale } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t pl-10 pr-10">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="h-6 w-6" />
              <span className="font-bold">EquiRightsAI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Promoting fairness and equality through AI-powered analysis
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Features</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/features/resume-analysis"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Resume Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/features/policy-analysis"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Policy Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/features/fair-access"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Fair Access Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/help/reporting"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Report Discrimination
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} EquiRightsAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
