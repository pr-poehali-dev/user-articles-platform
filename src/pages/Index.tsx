import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const articles = [
  {
    id: 1,
    title: "Как я оптимизировал работу React-приложения и ускорил его в 2 раза",
    description:
      "Полезные советы по оптимизации React-приложений, которые помогут значительно увеличить производительность.",
    author: {
      name: "Алексей Иванов",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=250",
    },
    category: "React",
    tags: ["React", "JavaScript", "Оптимизация"],
    readingTime: "5 мин",
    date: "14 мая 2025",
    views: 1245,
    comments: 23,
    rating: 4.8,
  },
  {
    id: 2,
    title: "TypeScript для начинающих: основные принципы и преимущества",
    description:
      "Разбираемся, почему TypeScript стал так популярен, и какие преимущества он даёт разработчикам.",
    author: {
      name: "Мария Соколова",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250",
    },
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Разработка"],
    readingTime: "7 мин",
    date: "10 мая 2025",
    views: 982,
    comments: 15,
    rating: 4.6,
  },
  {
    id: 3,
    title: "Микросервисы vs Монолит: выбираем архитектуру для своего проекта",
    description:
      "Какая архитектура подойдет именно вашему проекту? Разбираем преимущества и недостатки каждого подхода.",
    author: {
      name: "Дмитрий Петров",
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=250",
    },
    category: "Архитектура",
    tags: ["Микросервисы", "Архитектура", "Монолит"],
    readingTime: "10 мин",
    date: "5 мая 2025",
    views: 1876,
    comments: 42,
    rating: 4.9,
  },
  {
    id: 4,
    title: "Нейросети в разработке: как использовать AI для написания кода",
    description:
      "Практическое руководство по использованию современных нейросетей для ускорения процесса разработки.",
    author: {
      name: "Анна Волкова",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250",
    },
    category: "AI",
    tags: ["Нейросети", "AI", "Автоматизация"],
    readingTime: "8 мин",
    date: "1 мая 2025",
    views: 2051,
    comments: 37,
    rating: 4.7,
  },
];

const categories = [
  { name: "React", count: 156 },
  { name: "TypeScript", count: 98 },
  { name: "JavaScript", count: 243 },
  { name: "Vue", count: 87 },
  { name: "Архитектура", count: 126 },
  { name: "AI", count: 74 },
  { name: "Дизайн", count: 108 },
  { name: "Python", count: 167 },
  { name: "Базы данных", count: 94 },
  { name: "DevOps", count: 118 },
];

const Index = () => {
  const { toast } = useToast();

  const handleSubscribe = () => {
    toast({
      title: "Подписка оформлена",
      description: "Вы успешно подписались на обновления",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-30 w-full bg-white dark:bg-gray-800 border-b shadow-sm">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <SidebarTrigger className="mr-2 md:hidden" />
          <div className="mr-4 flex">
            <a href="/" className="flex items-center">
              <Icon name="BookOpen" className="h-6 w-6 text-purple-600" />
              <span className="ml-2 text-xl font-bold">Статьи.ру</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="transition-colors hover:text-purple-600">
              Главная
            </a>
            <a href="#" className="transition-colors hover:text-purple-600">
              Статьи
            </a>
            <a href="#" className="transition-colors hover:text-purple-600">
              Авторы
            </a>
            <a href="#" className="transition-colors hover:text-purple-600">
              О нас
            </a>
          </div>
          <div className="flex-1 flex justify-end gap-4">
            <div className="relative hidden w-full max-w-xs md:flex">
              <Input placeholder="Поиск статей..." className="w-full" />
              <Button variant="ghost" size="icon" className="absolute right-0">
                <Icon name="Search" className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="Bell" className="h-5 w-5" />
            </Button>
            <Button variant="primary">Написать</Button>
          </div>
        </div>
      </header>

      <SidebarProvider>
        <div className="flex">
          <Sidebar className="hidden md:flex">
            <SidebarHeader className="gap-0 p-2">
              <div className="hidden md:flex items-center h-12 px-2">
                <span className="font-semibold">Категории</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <div className="px-2 py-2">
                <div className="space-y-1">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant="ghost"
                      className="w-full justify-between"
                    >
                      {category.name}
                      <Badge variant="secondary" className="ml-auto">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 py-12 px-4 sm:px-6 md:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold">Популярные статьи</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Лучшие материалы от наших авторов
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-4">
                    <div className="space-y-1">
                      <CardTitle className="text-xl line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readingTime}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-muted-foreground line-clamp-3">
                      {article.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={article.author.image}
                          alt={article.author.name}
                        />
                        <AvatarFallback>
                          {article.author.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {article.author.name}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Icon name="Eye" className="h-4 w-4" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Icon name="MessageSquare" className="h-4 w-4" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-purple-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Подпишитесь на рассылку
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Получайте еженедельную подборку лучших статей на вашу почту
                  </p>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Ваш email" className="flex-1" />
                  <Button onClick={handleSubscribe}>Подписаться</Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>

      <footer className="bg-white dark:bg-gray-800 border-t py-12 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="BookOpen" className="h-6 w-6 text-purple-600" />
                <span className="ml-2 text-xl font-bold">Статьи.ру</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Платформа для публикации статей и обмена знаниями
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Статьи
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Авторы
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    О нас
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Правила
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Конфиденциальность
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="Telegram" className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Github" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 Статьи.ру. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
