import { Button } from '@/components/ui/button';
import { Zap, ArrowRightCircle, ShieldCheck, Network, DatabaseZap, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Убедимся, что Image импортирован
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const advantages = [
  {
    icon: Award,
    title: 'В реестре Роскомнадзора',
    description: 'Наш хостинг официально зарегистрирован и соответствует законодательству РФ.',
  },
  {
    icon: Network,
    title: 'Соответствие СОРМ',
    description: 'Мы обеспечиваем полное техническое соответствие требованиям СОРМ.',
  },
  {
    icon: ShieldCheck,
    title: 'Защита от DDoS-атак',
    description: 'Многоуровневая система защиты от DDoS-атак для стабильной работы ваших проектов.',
  },
  {
    icon: DatabaseZap,
    title: 'Российские дата-центры',
    description: 'Современное оборудование, размещенное в надежных дата-центрах на территории России.',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative text-center py-12 bg-card/80 backdrop-blur-sm rounded-lg shadow-xl">
        <Zap className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Надежный Российский Хостинг "БыстрыйСтарт"
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground mx-auto max-w-3xl">
          Запустите свой проект в Рунете уже сегодня! Мы предоставляем бесплатный хостинг, соответствующий всем требованиям законодательства РФ, с защитой от DDoS-атак и поддержкой СОРМ.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#get-hosting">
              Получить хостинг бесплатно
              <ArrowRightCircle className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        {/* Возвращаем декоративные изображения */}
        <Image
          src="/moscow-illustration.png" 
          alt="Иллюстрация Москвы"
          width={100} 
          height={100}
          className="absolute top-4 right-4 hidden sm:block pointer-events-none"
          data-ai-hint="Moscow illustration"
          priority
        />
        <Image
          src="/russian-skyline.png"
          alt="Российский городской пейзаж"
          width={120}
          height={120}
          className="absolute bottom-4 left-4 hidden sm:block pointer-events-none"
          data-ai-hint="skyline russia"
          priority
        />
      </section>

      <section id="advantages">
      <h2 className="text-3xl font-semibold mb-10 text-center text-primary bg-card/80 backdrop-blur-sm rounded-md py-2 px-4 inline-block mx-auto">
          Почему выбирают "БыстрыйСтарт"?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <Card key={advantage.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <advantage.icon className="mx-auto h-12 w-12 text-accent mb-3" />
                <CardTitle className="text-xl text-primary">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
