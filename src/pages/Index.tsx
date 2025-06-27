
import { CalendarDays, MessageCircle, User, Heart, Star, Clock, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-amber-300/10 to-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-950/80"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
                  Dr. Sarah <span className="text-amber-400">Martinez</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
                  Clinical Psychologist & Mental Health Advocate
                </p>
                <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Creating a safe, compassionate space where healing begins. I believe in the power of human connection and the strength that lies within each of us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                    Book Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-300 text-blue-200 hover:bg-blue-800/50 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="relative flex justify-center lg:justify-end">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-amber-400/30">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" 
                    alt="Dr. Sarah Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl border-4 border-amber-400/50">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" 
                    alt="Dr. Sarah Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-light text-blue-900 mb-4">About Me</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mb-6"></div>
                </div>
                
                <p className="text-lg text-blue-800 leading-relaxed">
                  With over 10 years of experience in clinical psychology, I am passionate about helping individuals navigate life's challenges with compassion and evidence-based approaches.
                </p>
                
                <p className="text-lg text-blue-800 leading-relaxed">
                  My practice focuses on creating a warm, non-judgmental environment where clients feel heard, understood, and empowered to make positive changes in their lives.
                </p>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-blue-800">Ph.D. in Clinical Psychology, Stanford University</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-800">Licensed Clinical Psychologist (CA)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-blue-800">Certified in Cognitive Behavioral Therapy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-800">Member of American Psychological Association</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-white mb-4">Services</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-blue-400 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                I offer flexible consultation formats to meet your unique needs and preferences
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-blue-800/80 backdrop-blur-sm border border-amber-400/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-amber-400" />
                  </div>
                  <CardTitle className="text-xl font-medium text-white">Online Sessions</CardTitle>
                  <CardDescription className="text-blue-200">
                    Convenient therapy from the comfort of your home
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                      Secure video platform
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                      Flexible scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                      Same quality care
                    </li>
                  </ul>
                  <div className="pt-4">
                    <span className="text-2xl font-light text-amber-400">$120</span>
                    <span className="text-blue-200">/session</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-blue-800/80 backdrop-blur-sm border border-amber-400/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-blue-300" />
                  </div>
                  <CardTitle className="text-xl font-medium text-white">In-Person Sessions</CardTitle>
                  <CardDescription className="text-blue-200">
                    Traditional face-to-face therapy in a welcoming space
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      Comfortable office setting
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      Personal connection
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      Private entrance
                    </li>
                  </ul>
                  <div className="pt-4">
                    <span className="text-2xl font-light text-amber-400">$140</span>
                    <span className="text-blue-200">/session</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-blue-800/80 backdrop-blur-sm border border-amber-400/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-amber-400" />
                  </div>
                  <CardTitle className="text-xl font-medium text-white">Initial Consultation</CardTitle>
                  <CardDescription className="text-blue-200">
                    Get to know each other and discuss your needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-blue-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                      45-minute session
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                      Assessment & planning
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                      No commitment required
                    </li>
                  </ul>
                  <div className="pt-4">
                    <span className="text-2xl font-light text-amber-400">$90</span>
                    <span className="text-blue-200">/session</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-blue-900 mb-4">Book a Consultation</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-blue-800 mb-12 max-w-2xl mx-auto">
              Ready to start your journey? Schedule your consultation today and take the first step towards positive change.
            </p>
            
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 md:p-12 border border-amber-400/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center">
                      <CalendarDays className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-white">Flexible Scheduling</h3>
                      <p className="text-blue-200 text-sm">Evening and weekend appointments available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-300" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-white">Quick Response</h3>
                      <p className="text-blue-200 text-sm">I'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-white">Personalized Care</h3>
                      <p className="text-blue-200 text-sm">Tailored approach for your unique needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-blue-950 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Online
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-blue-300 text-blue-200 hover:bg-blue-700 py-4 rounded-full text-lg font-medium transition-all duration-300"
                  >
                    Call to Book
                  </Button>
                  <p className="text-sm text-blue-200 mt-4">
                    Most insurance plans accepted. Sliding scale available for qualifying individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-white mb-4">Helpful Articles</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-blue-400 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                Evidence-based insights and practical tips for mental wellness
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-blue-800/80 backdrop-blur-sm border border-amber-400/20">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&q=80" 
                    alt="Managing Anxiety" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">Managing Anxiety in Daily Life</h3>
                  <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                    Practical strategies to cope with anxiety and find calm in your everyday routine. Learn evidence-based techniques that you can use immediately.
                  </p>
                  <div className="text-sm text-amber-400 font-medium">Read More →</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-blue-800/80 backdrop-blur-sm border border-amber-400/20">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=500&q=80" 
                    alt="Healthy Relationships" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">Building Healthy Relationships</h3>
                  <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                    Understanding communication patterns and boundaries that create stronger, more fulfilling connections with others.
                  </p>
                  <div className="text-sm text-blue-300 font-medium">Read More →</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-blue-800/80 backdrop-blur-sm border border-amber-400/20">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=500&q=80" 
                    alt="Self-Care Practices" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">Self-Care That Actually Works</h3>
                  <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                    Move beyond buzzwords to discover authentic self-care practices that support your mental health and well-being.
                  </p>
                  <div className="text-sm text-amber-400 font-medium">Read More →</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-16 border-t border-amber-400/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <h3 className="text-2xl font-light mb-4 text-amber-400">Dr. Sarah Martinez</h3>
                <p className="text-blue-200 mb-6 leading-relaxed">
                  Creating a safe space for healing and growth. Your mental health journey matters, and you don't have to walk it alone.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center hover:bg-amber-400/30 transition-colors cursor-pointer">
                    <span className="text-amber-400 text-sm">f</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center hover:bg-blue-400/30 transition-colors cursor-pointer">
                    <span className="text-blue-300 text-sm">in</span>
                  </div>
                  <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center hover:bg-amber-400/30 transition-colors cursor-pointer">
                    <span className="text-amber-400 text-sm">@</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-amber-400">Contact Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span className="text-blue-200">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-300" />
                    <span className="text-blue-200">hello@drsarahmartinez.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span className="text-blue-200">123 Wellness Ave<br />Suite 200<br />San Francisco, CA 94102</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-amber-400">Office Hours</h4>
                <div className="space-y-2 text-blue-200">
                  <div>Mon - Thu: 9am - 7pm</div>
                  <div>Friday: 9am - 5pm</div>
                  <div>Saturday: 10am - 3pm</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
            
            <Separator className="bg-blue-800 my-8" />
            
            <div className="flex flex-col md:flex-row justify-between items-center text-blue-300 text-sm">
              <div className="mb-4 md:mb-0">
                © 2024 Dr. Sarah Martinez. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-200 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-amber-400 transition-colors">GDPR Compliance</a>
              </div>
            </div>
            
            <div className="mt-6 text-xs text-blue-400 text-center">
              This website complies with GDPR requirements. We respect your privacy and handle your personal data with care. 
              For more information, please review our Privacy Policy.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
