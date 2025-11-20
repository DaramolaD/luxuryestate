import { Footer, Header } from "@/components/sections";

/**
 * Layout for public pages only
 * Includes Header and Footer components
 * This layout applies to all pages within the (public) route group
 */
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

