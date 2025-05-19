
import Link from 'next/link';
import { Zap, Home, Info } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { ThemeToggleButton } from '@/components/theme/ThemeToggleButton';

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-8 w-8 text-accent icon-neon-red animate-neon-blink" />
          <span className="text-xl font-bold text-neon-title">БыстрыйСтарт Хостинг</span>
        </Link>
        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/" className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                Главная
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/legal-info" className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                Условия
              </Link>
            </Button>
          </nav>
          <ThemeToggleButton />
          <div className="md:hidden">
            {/* Mobile menu button can be added here if needed, 
                possibly integrating ThemeToggleButton into a Sheet menu */}
          </div>
        </div>
      </div>
    </header>
  );
}
