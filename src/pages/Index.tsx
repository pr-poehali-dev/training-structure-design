import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-inter font-bold text-xl text-slate-800">
              Сервис-Эксперт
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-slate-600 hover:text-primary transition-colors">Обо мне</a>
              <a href="#cases" className="text-slate-600 hover:text-primary transition-colors">Кейсы</a>
              <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Эксперт по клиентскому сервису
              </Badge>
              <h1 className="font-inter font-bold text-4xl lg:text-5xl text-slate-800 leading-tight mb-6">
                Увеличиваю прибыль вашего бизнеса на 
                <span className="text-primary"> 15-40%</span> за счет повышения лояльности клиентов
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Выстраиваю экологичный сервис без агрессивных продаж и бесконечных скидок. 
                Системный подход — процессы работают без вашего участия.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Получить бесплатный аудит
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-4">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Обсудить задачу
                </Button>
              </div>
            </div>
            <div className="lg:text-center">
              <img 
                src="/img/76953687-9dc6-48b8-885d-98b1f9ae5c21.jpg" 
                alt="Профессиональный портрет эксперта по клиентскому сервису" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl text-slate-800 mb-4">
              Вы это узнаете?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Типичные проблемы бизнеса, которые стоят вам денег каждый день
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { icon: "UserX", text: "Клиенты уходят и не возвращаются", color: "text-red-500" },
              { icon: "TrendingDown", text: "Низкий средний чек", color: "text-orange-500" },
              { icon: "Users", text: "Персонал не продает", color: "text-yellow-500" },
              { icon: "AlertCircle", text: "Хаос в процессах", color: "text-blue-500" },
              { icon: "Star", text: "Потеря денег из-за плохих отзывов", color: "text-purple-500" }
            ].map((problem, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name={problem.icon} className={`mx-auto mb-4 ${problem.color}`} size={48} />
                  <p className="text-slate-700 font-medium">{problem.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl text-slate-800 mb-4">
              Как я решаю эти проблемы
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Комплексный подход к развитию клиентского сервиса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "GraduationCap",
                title: "Тренинги для персонала",
                description: "Обучаю команду продавать через сервис, а не через давление"
              },
              {
                icon: "Search",
                title: "Аудит клиентского опыта",
                description: "Выявляю точки потери клиентов и рост потенциала"
              },
              {
                icon: "Settings",
                title: "Внедрение CRM и скриптов",
                description: "Создаю систему, которая работает без вашего участия"
              },
              {
                icon: "MessageSquare",
                title: "Консультации руководителей",
                description: "Помогаю выстроить стратегию развития сервиса"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="text-center">
                  <Icon name={service.icon} className="mx-auto mb-4 text-primary" size={56} />
                  <CardTitle className="font-inter font-semibold text-xl text-slate-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
              Подробнее об услугах
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl text-slate-800 mb-4">
              Преимущества работы со мной
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Award", title: "Опыт 9+ лет", subtitle: "в управлении и развитии сервиса" },
              { icon: "Building2", title: "Разные сферы", subtitle: "спа, рестораны, образование, B2B" },
              { icon: "Target", title: "Только практика", subtitle: "инструменты, которые работают" },
              { icon: "Cog", title: "Системный подход", subtitle: "процессы работают без вас" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <Icon name={benefit.icon} className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="font-inter font-semibold text-xl text-slate-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl text-slate-800 mb-4">
              Результаты моих клиентов
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                client: "Владелец сети кофеен",
                location: "г. Москва",
                result: "+25% к среднему чеку",
                description: "После внедрения скриптов продаж"
              },
              {
                client: "Директор спа-салона",
                location: "г. Санкт-Петербург",
                result: "−30% отток клиентов",
                description: "Снизили за 2 месяца работы"
              },
              {
                client: "Руководитель учебного центра",
                location: "г. Екатеринбург",
                result: "+40% повторных продаж",
                description: "Через улучшение клиентского опыта"
              }
            ].map((caseItem, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="font-inter font-semibold text-lg text-slate-800">
                        {caseItem.client}
                      </CardTitle>
                      <p className="text-slate-500">{caseItem.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {caseItem.result}
                    </div>
                    <p className="text-slate-600">{caseItem.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl text-slate-800 mb-4">
              Как происходит работа
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {[
                { step: "1", title: "Заявка", icon: "MessageSquare" },
                { step: "2", title: "Консультация", icon: "Phone" },
                { step: "3", title: "Аудит", icon: "Search" },
                { step: "4", title: "Внедрение", icon: "Settings" },
                { step: "5", title: "Результат", icon: "TrendingUp" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Icon name={step.icon} className="text-white" size={24} />
                  </div>
                  <div className="text-sm text-primary font-semibold mb-1">Шаг {step.step}</div>
                  <div className="font-inter font-medium text-slate-800">{step.title}</div>
                  {index < 4 && (
                    <Icon name="ArrowRight" className="text-slate-400 mt-4 hidden md:block" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-inter font-bold text-3xl text-slate-800 mb-8">
              Почему я могу помочь вашему бизнесу
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Более 9 лет я помогаю бизнесу зарабатывать больше через качественный сервис. 
                  Работала в совершенно разных сферах — от спа-салонов до B2B продаж.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Знаю, как сложно найти баланс между заботой о клиенте и прибыльностью бизнеса. 
                  Поэтому создаю системы, которые работают на автопилоте.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Школа мастеров массажа",
                    "Сеть ресторанов",
                    "Спа-салон премиум",
                    "Металлоконструкции B2B"
                  ].map((company, index) => (
                    <div key={index} className="flex items-center">
                      <Icon name="Check" className="text-primary mr-2" size={16} />
                      <span className="text-slate-700">{company}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-white p-6 text-left">
                  <div className="flex items-center mb-4">
                    <Icon name="Download" className="text-primary mr-3" size={24} />
                    <h3 className="font-inter font-semibold text-lg text-slate-800">
                      Бесплатный чек-лист
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    "5 ошибок сервиса, которые стоят вам денег"
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Скачать чек-лист
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-inter font-bold text-3xl text-slate-800 mb-4">
                Готовы повысить лояльность клиентов?
              </h2>
              <p className="text-lg text-slate-600">
                Запишитесь на бесплатную 30-минутную консультацию
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="font-inter font-semibold text-xl text-slate-800">
                    Оставьте заявку
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Обсудим вашу ситуацию и найдем решение
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон или email" />
                    <Textarea placeholder="Расскажите о вашей задаче" rows={4} />
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-8">
                <div className="flex items-center">
                  <Icon name="Phone" className="text-primary mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-slate-800">Телефон</div>
                    <div className="text-slate-600">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="text-primary mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-slate-800">Email</div>
                    <div className="text-slate-600">expert@service.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MessageCircle" className="text-primary mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-slate-800">Telegram</div>
                    <div className="text-slate-600">@service_expert</div>
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-sm text-slate-500 mb-4">Следите за полезными материалами:</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">
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
      <footer className="py-12 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="font-inter font-bold text-xl text-white mb-4">
                Сервис-Эксперт
              </div>
              <p className="text-slate-400">
                Увеличиваю прибыль бизнеса через экологичный клиентский сервис
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Услуги</h3>
              <div className="space-y-2 text-slate-400">
                <div>Аудит сервиса</div>
                <div>Тренинги персонала</div>
                <div>Консалтинг</div>
                <div>Внедрение CRM</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-400">
                <div>+7 (999) 123-45-67</div>
                <div>expert@service.com</div>
                <div>@service_expert</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Сервис-Эксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}