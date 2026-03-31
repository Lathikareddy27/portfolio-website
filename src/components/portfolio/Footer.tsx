export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Lathika Reddy. All rights reserved.
      </p>
    </footer>
  );
}
