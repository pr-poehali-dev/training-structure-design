import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-inter font-bold text-xl text-gray-900">
              Сервис-Эксперт
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#training" className="text-gray-600 hover:text-primary transition-colors font-medium">Тренинги</a>
              <a href="#cases" className="text-gray-600 hover:text-primary transition-colors font-medium">Результаты</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2.5">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-gray-50 to-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-semibold px-4 py-2">
                Эксперт по клиентскому сервису
              </Badge>
              <h1 className="font-inter font-bold text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                Увеличиваю прибыль на 
                <span className="text-primary block mt-2">15-40%</span>
                через сервис-тренинги
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Выстраиваю экологичный сервис без агрессивных продаж. 
                Системный подход — процессы работают без вашего участия.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Получить бесплатный аудит
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg font-semibold">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Обсудить задачу
                </Button>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="relative">
                <img 
                  src="/img/d4c04ea7-efc0-452b-884c-d47a863b4353.jpg" 
                  alt="Профессиональный портрет эксперта по клиентскому сервису" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-1">
                      <div className="w-8 h-8 bg-primary rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="font-semibold text-sm text-gray-700">500+ довольных клиентов</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-50 text-red-600 border-red-200">Проблемы вашего бизнеса</Badge>
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">
              Узнаёте себя?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Типичные проблемы бизнеса, которые стоят денег каждый день
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "UserX", text: "Клиенты уходят и не возвращаются", color: "text-red-500", bg: "bg-red-50" },
              { icon: "TrendingDown", text: "Низкий средний чек", color: "text-orange-500", bg: "bg-orange-50" },
              { icon: "Users", text: "Персонал не продает", color: "text-yellow-500", bg: "bg-yellow-50" },
              { icon: "AlertCircle", text: "Хаос в процессах", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: "Star", text: "Плохие отзывы убивают репутацию", color: "text-purple-500", bg: "bg-purple-50" }
            ].map((problem, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${problem.bg} flex items-center justify-center`}>
                    <Icon name={problem.icon} className={problem.color} size={28} />
                  </div>
                  <p className="text-gray-800 font-semibold leading-tight">{problem.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-50 text-green-600 border-green-200">Решения</Badge>
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">
              Как я решаю эти проблемы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексный подход к развитию клиентского сервиса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "GraduationCap",
                title: "Тренинги для персонала",
                description: "Обучаю команду продавать через сервис, а не через давление",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: "Search",
                title: "Аудит клиентского опыта",
                description: "Выявляю точки потери клиентов и потенциал роста",
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                icon: "Settings",
                title: "Внедрение CRM и скриптов",
                description: "Создаю систему, которая работает без вашего участия",
                color: "text-green-600",
                bg: "bg-green-50"
              },
              {
                icon: "MessageSquare",
                title: "Консультации руководителей",
                description: "Помогаю выстроить стратегию развития сервиса",
                color: "text-orange-600",
                bg: "bg-orange-50"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 bg-white border-0 shadow-lg group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${service.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service.icon} className={service.color} size={32} />
                  </div>
                  <CardTitle className="font-inter font-bold text-xl text-gray-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 text-center text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Program Section */}
      <section id="training" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Тренинговая программа</Badge>
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">
              Программа «Сервис, который продаёт»
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2.5-3 часа интенсивной работы с вашей командой. Оффлайн или онлайн формат.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Card className="mb-8 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-inter font-bold text-2xl text-gray-900 flex items-center">
                    <Icon name="Clock" className="mr-3 text-primary" size={24} />
                    Структура тренинга
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { block: "Введение", time: "10 мин", format: "Презентация", progress: 100 },
                    { block: "Философия продаж", time: "15 мин", format: "Интерактивная лекция", progress: 100 },
                    { block: "6 этапов продаж", time: "40 мин", format: "Теория + примеры", progress: 85 },
                    { block: "Ролевые игры", time: "60 мин", format: "Практикум", progress: 70 },
                    { block: "Обратная связь", time: "20 мин", format: "Обсуждение, Q&A", progress: 50 },
                    { block: "Закрепление", time: "10 мин", format: "ДЗ, итоги", progress: 30 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.block}</h4>
                          <p className="text-sm text-gray-600">{item.format}</p>
                        </div>
                        <Badge variant="outline" className="font-mono">{item.time}</Badge>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-inter font-bold text-xl text-gray-900">
                    Что получат участники
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "Готовые скрипты для 6 этапов продаж",
                      "Чек-лист идеальной консультации",
                      "Таблица услуг с преимуществами",
                      "Техники работы с возражениями"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" className="text-green-500 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Tabs defaultValue="aida" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="aida">Модель AIDA</TabsTrigger>
                  <TabsTrigger value="stages">6 этапов</TabsTrigger>
                </TabsList>
                <TabsContent value="aida" className="mt-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-inter font-bold text-xl text-gray-900">
                        Интеграция AIDA → 6 этапов
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        { 
                          aida: "Attention", 
                          stage: "Приветствие + Выявление потребностей",
                          color: "bg-red-50 text-red-600"
                        },
                        { 
                          aida: "Interest", 
                          stage: "Презентация преимуществ",
                          color: "bg-orange-50 text-orange-600"
                        },
                        { 
                          aida: "Desire", 
                          stage: "Отработка возражений",
                          color: "bg-yellow-50 text-yellow-600"
                        },
                        { 
                          aida: "Action", 
                          stage: "Завершение сделки + Допродажи",
                          color: "bg-green-50 text-green-600"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                          <Badge className={`font-bold ${item.color} border-0`}>
                            {item.aida}
                          </Badge>
                          <Icon name="ArrowRight" className="text-gray-400" size={16} />
                          <span className="font-medium text-gray-900">{item.stage}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="stages" className="mt-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-inter font-bold text-xl text-gray-900">
                        Практические упражнения
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { stage: "Выявление потребностей", game: "«Клиент в клинике»" },
                        { stage: "Возражения", game: "«А что, если...» с мячиком" },
                        { stage: "Допродажи", game: "«Цепочка допродаж»" },
                        { stage: "Послепродажное обслуживание", game: "«Напоминание о записи»" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-primary/5 rounded-xl">
                          <span className="font-medium text-gray-900">{item.stage}</span>
                          <Badge variant="outline" className="font-medium">
                            {item.game}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">
              Преимущества работы со мной
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "Award", 
                title: "Опыт 9+ лет", 
                subtitle: "в управлении и развитии сервиса",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              { 
                icon: "Building2", 
                title: "Разные сферы", 
                subtitle: "спа, рестораны, образование, B2B",
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              { 
                icon: "Target", 
                title: "Только практика", 
                subtitle: "инструменты, которые работают",
                color: "text-green-600",
                bg: "bg-green-50"
              },
              { 
                icon: "Cog", 
                title: "Системный подход", 
                subtitle: "процессы работают без вас",
                color: "text-orange-600",
                bg: "bg-orange-50"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${benefit.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={benefit.icon} className={benefit.color} size={32} />
                </div>
                <h3 className="font-inter font-bold text-xl text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-50 text-green-600 border-green-200">Результаты</Badge>
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">
              Результаты моих клиентов
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                client: "Владелец сети кофеен",
                location: "г. Москва",
                result: "+25%",
                metric: "к среднему чеку",
                description: "После внедрения скриптов продаж",
                color: "text-green-600"
              },
              {
                client: "Директор спа-салона",
                location: "г. Санкт-Петербург",
                result: "−30%",
                metric: "отток клиентов",
                description: "Снизили за 2 месяца работы",
                color: "text-blue-600"
              },
              {
                client: "Руководитель учебного центра",
                location: "г. Екатеринбург",
                result: "+40%",
                metric: "повторных продаж",
                description: "Через улучшение клиентского опыта",
                color: "text-purple-600"
              }
            ].map((caseItem, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="font-inter font-bold text-lg text-gray-900 leading-tight">
                        {caseItem.client}
                      </CardTitle>
                      <p className="text-gray-500 font-medium">{caseItem.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className={`text-4xl font-bold ${caseItem.color} mb-1`}>
                      {caseItem.result}
                    </div>
                    <div className="text-lg font-semibold text-gray-700 mb-3">
                      {caseItem.metric}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{caseItem.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">
              Как происходит работа
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {[
                { step: "1", title: "Заявка", subtitle: "Оставляете заявку на сайте", icon: "MessageSquare", color: "bg-red-500" },
                { step: "2", title: "Консультация", subtitle: "30 минут бесплатно", icon: "Phone", color: "bg-orange-500" },
                { step: "3", title: "Аудит", subtitle: "Анализ текущего сервиса", icon: "Search", color: "bg-yellow-500" },
                { step: "4", title: "Внедрение", subtitle: "Тренинги и системы", icon: "Settings", color: "bg-green-500" },
                { step: "5", title: "Результат", subtitle: "Рост прибыли 15-40%", icon: "TrendingUp", color: "bg-primary" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center mb-8 lg:mb-0 group">
                  <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon name={step.icon} className="text-white" size={28} />
                  </div>
                  <div className="text-sm text-primary font-bold mb-1">Шаг {step.step}</div>
                  <div className="font-inter font-bold text-lg text-gray-900 mb-1">{step.title}</div>
                  <div className="text-gray-600 text-sm max-w-20">{step.subtitle}</div>
                  {index < 4 && (
                    <Icon name="ArrowRight" className="text-gray-400 mt-6 hidden lg:block rotate-0 lg:rotate-0" size={24} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-8">
              Почему я могу помочь вашему бизнесу
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Более 9 лет я помогаю бизнесу зарабатывать больше через качественный сервис. 
                  Работала в совершенно разных сферах — от спа-салонов до B2B продаж.
                </p>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Знаю, как сложно найти баланс между заботой о клиенте и прибыльностью бизнеса. 
                  Поэтому создаю системы, которые работают на автопилоте.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    "Школа мастеров массажа",
                    "Сеть ресторанов",
                    "Спа-салон премиум",
                    "Металлоконструкции B2B"
                  ].map((company, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="Check" className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700 font-medium">{company}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-left border-0 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Icon name="Download" className="text-primary mr-3" size={28} />
                    <h3 className="font-inter font-bold text-xl text-gray-900">
                      Бесплатный чек-лист
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">
                    "5 ошибок сервиса, которые стоят вам денег"
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-semibold py-3">
                    Скачать чек-лист
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">
                Готовы повысить лояльность клиентов?
              </h2>
              <p className="text-xl text-gray-600">
                Запишитесь на бесплатную 30-минутную консультацию
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8 border-0 shadow-lg">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="font-inter font-bold text-2xl text-gray-900">
                    Оставьте заявку
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Обсудим вашу ситуацию и найдем решение
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <Input placeholder="Ваше имя" className="text-lg py-3" />
                    <Input placeholder="Телефон или email" className="text-lg py-3" />
                    <Textarea placeholder="Расскажите о вашей задаче" rows={4} className="text-lg" />
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-semibold py-3">
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Телефон</div>
                    <div className="text-gray-600 text-lg">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Email</div>
                    <div className="text-gray-600 text-lg">expert@service.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Telegram</div>
                    <div className="text-gray-600 text-lg">@service_expert</div>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-500 mb-4 font-medium">Следите за полезными материалами:</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold">
                      Telegram
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="md:col-span-2">
              <div className="font-inter font-bold text-2xl text-white mb-4">
                Сервис-Эксперт
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Увеличиваю прибыль бизнеса через экологичный клиентский сервис. 
                Системный подход — процессы работают без вашего участия.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Услуги</h3>
              <div className="space-y-2 text-gray-400">
                <div>Аудит сервиса</div>
                <div>Тренинги персонала</div>
                <div>Консалтинг</div>
                <div>Внедрение CRM</div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div>+7 (999) 123-45-67</div>
                <div>expert@service.com</div>
                <div>@service_expert</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Сервис-Эксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}