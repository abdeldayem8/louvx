import Link from "next/link"

interface LinkGroup {
  title: string
  links: Array<{ name: string; href: string }>
}

const FooterLinks = () => {
  const linkGroups: LinkGroup[] = [
    {
      title: "Shop",
      links: [
        { name: "New Arrivals", href: "/new-arrivals" },
        { name: "Best Sellers", href: "/best-sellers" },
        { name: "Sale", href: "/sale" },
        { name: "Gift Cards", href: "/gift-cards" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQs", href: "/faq" },
        { name: "Shipping & Returns", href: "/shipping-returns" },
        { name: "Size Guide", href: "/size-guide" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {linkGroups.map((group) => (
        <div key={group.title}>
          <h4 className="font-semibold text-sm uppercase tracking-wide mb-4 text-foreground">{group.title}</h4>
          <ul className="space-y-2.5">
            {group.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default FooterLinks
