"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  MessageCircle,
  Zap,
  Clock,
  Shield,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  BarChart3,
} from "lucide-react"

export default function BotExpertSite() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BotExpert
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("offres")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Nos Offres
              </button>
              <button
                onClick={() => scrollToSection("pourquoi")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Pourquoi nous
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
            <Button
              onClick={() => scrollToSection("rendez-vous")}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
            >
              Réserver une démo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Intelligence Artificielle Avancée
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Donnez vie à votre relation client grâce à l'IA
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed">
              Boostez votre réactivité, fidélisez vos clients et automatisez vos tâches avec nos solutions IA sur
              mesure.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("rendez-vous")}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Réserver une démo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Offres Section */}
      <section id="offres" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Nos Offres
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Choisissez la solution IA qui correspond parfaitement à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Offre 1 - Chatbot Basique */}
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">🟢 Basique</Badge>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">140€</div>
                    <div className="text-sm text-white/60">one-shot</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-white">Chatbot Basique</CardTitle>
                <CardDescription className="text-white/60">
                  Solution rapide pour automatiser vos réponses clients
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white/70">Intégration rapide sur votre site web</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white/70">Réponses automatisées aux FAQ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white/70">Amélioration de la réactivité</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white/70">Génération de leads optimisée</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Offre 2 - Chatbot Réseaux Sociaux */}
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">🔵 Populaire</Badge>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-400">90€</div>
                    <div className="text-sm text-white/60">/mois</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-white">Chatbot Réseaux Sociaux</CardTitle>
                <CardDescription className="text-white/60">
                  Automatisation complète de vos réseaux sociaux
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-white/70">Messenger, WhatsApp, Instagram</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-white/70">Réponses 24/7 automatisées</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-white/70">Prise de RDV automatique</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <span className="text-white/70">Statistiques mensuelles</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            {/* Offre 3 - IA Intégrale */}
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">🔴 Premium</Badge>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-400">300€</div>
                    <div className="text-sm text-white/60">/mois</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-white">IA Intégrale et Automatisation</CardTitle>
                <CardDescription className="text-white/60">
                  Solution complète avec CRM et automatisation avancée
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-white/70">IA unifiée site web + réseaux</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-white/70">Connexion CRM avancée</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-white/70">Automatisation email complète</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-white/70">Formation + support premium</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Découvrir cette offre
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir BotExpert */}
      <section id="pourquoi" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Pourquoi choisir BotExpert ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/30 text-center">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Réactivité maximale</h3>
                <p className="text-white/70">Votre IA répond 24/7 sans interruption</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-green-500/30 text-center">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Simplicité</h3>
                <p className="text-white/70">Nous nous occupons de tout, de l'intégration à la formation</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-purple-500/30 text-center">
              <CardContent className="pt-6">
                <BarChart3 className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Performances mesurables</h3>
                <p className="text-white/70">Tableau de bord statistiques inclus</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-orange-500/30 text-center">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Sécurité garantie</h3>
                <p className="text-white/70">Confidentialité et sécurité de vos données</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prise de rendez-vous */}
      <section id="rendez-vous" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Prendre rendez-vous
            </h2>
            <p className="text-xl text-white/70">
              Réservez votre démo gratuite et découvrez comment l'IA peut transformer votre business
            </p>
          </div>

          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Réservez votre créneau</h3>
                  <div className="space-y-4">
                    <Input
                      placeholder="Votre nom complet"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-white/50"
                    />
                    <Input
                      type="email"
                      placeholder="Votre email"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-white/50"
                    />
                    <Input
                      type="tel"
                      placeholder="Votre téléphone"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-white/50"
                    />
                    <Textarea
                      placeholder="Décrivez brièvement vos besoins..."
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-white/50"
                      rows={4}
                    />
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                      <Calendar className="mr-2 h-4 w-4" />
                      Réserver ma démo gratuite
                    </Button>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-500/20 p-3 rounded-full">
                      <Users className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Consultation personnalisée</h4>
                      <p className="text-white/70">Analyse de vos besoins spécifiques</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Démonstration live</h4>
                      <p className="text-white/70">Voir l'IA en action sur vos cas d'usage</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Devis sur mesure</h4>
                      <p className="text-white/70">Proposition adaptée à votre budget</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Contact
            </h2>
            <p className="text-xl text-white/70">Une question ? Besoin d'informations ? Contactez-nous !</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Votre nom"
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-white/50"
                />
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-white/50"
                />
                <Textarea
                  placeholder="Votre message..."
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-white/50"
                  rows={5}
                />
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                  <Mail className="mr-2 h-4 w-4" />
                  Envoyer le message
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-8 w-8 text-cyan-400" />
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-white/70">contact@botexpert.fr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-green-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="font-semibold text-white">WhatsApp</h3>
                      <p className="text-white/70">+33 7 66 20 32 28</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="h-8 w-8 text-purple-400" />
                    <div>
                      <h3 className="font-semibold text-white">Messenger</h3>
                      <p className="text-white/70">Chat direct disponible</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              BotExpert
            </span>
          </div>
          <p className="text-white/60 mb-4">Transformez votre relation client grâce à l'intelligence artificielle</p>
          <p className="text-white/40 text-sm">© 2024 BotExpert. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
