// app/layout.tsx
export const metadata = {
  title: "Schellnast",
  description: "La red social futurista",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
