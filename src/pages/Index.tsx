
import { CalendarDays, MessageCircle, User, Heart, Star, Clock, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-blue-50 to-pink-100 min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-pink-100/20 to-blue-100/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
              Dr. Sarah <span className="text-pink-400">Martinez</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Clinical Psychologist & Mental Health Advocate
            </p>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
              Creating a safe, compassionate space where healing begins. I believe in the power of human connection and the strength that lies within each of us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                Book Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" 
                    alt="Dr. Sarah Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-400/10 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-light text-gray-800 mb-4">About Me</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mb-6"></div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over 10 years of experience in clinical psychology, I am passionate about helping individuals navigate life's challenges with compassion and evidence-based approaches.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  My practice focuses on creating a warm, non-judgmental environment where clients feel heard, understood, and empowered to make positive changes in their lives.
                </p>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-700">Ph.D. in Clinical Psychology, Stanford University</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-700">Licensed Clinical Psychologist (CA)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-700">Certified in Cognitive Behavioral Therapy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-700">Member of American Psychological Association</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50/50 to-blue-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Services</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I offer flexible consultation formats to meet your unique needs and preferences
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-pink-500" />
                  </div>
                  <CardTitle className="text-xl font-medium text-gray-800">Online Sessions</CardTitle>
                  <CardDescription className="text-gray-600">
                    Convenient therapy from the comfort of your home
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                      Secure video platform
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                      Flexible scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                      Same quality care
                    </li>
                  </ul>
                  <div className="pt-4">
                    <span className="text-2xl font-light text-gray-800">$120</span>
                    <span className="text-gray-600">/session</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl font-medium text-gray-800">In-Person Sessions</CardTitle>
                  <CardDescription className="text-gray-600">
                    Traditional face-to-face therapy in a welcoming space
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-gray-700">
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
                    <span className="text-2xl font-light text-gray-800">$140</span>
                    <span className="text-gray-600">/session</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-pink-500" />
                  </div>
                  <CardTitle className="text-xl font-medium text-gray-800">Initial Consultation</CardTitle>
                  <CardDescription className="text-gray-600">
                    Get to know each other and discuss your needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                      45-minute session
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                      Assessment & planning
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                      No commitment required
                    </li>
                  </ul>
                  <div className="pt-4">
                    <span className="text-2xl font-light text-gray-800">$90</span>
                    <span className="text-gray-600">/session</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-800 mb-4">Book a Consultation</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Ready to start your journey? Schedule your consultation today and take the first step towards positive change.
            </p>
            
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <CalendarDays className="w-6 h-6 text-pink-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-800">Flexible Scheduling</h3>
                      <p className="text-gray-600 text-sm">Evening and weekend appointments available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-800">Quick Response</h3>
                      <p className="text-gray-600 text-sm">I'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-pink-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-800">Personalized Care</h3>
                      <p className="text-gray-600 text-sm">Tailored approach for your unique needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-pink-400 hover:bg-pink-500 text-white py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Online
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 py-4 rounded-full text-lg font-medium transition-all duration-300"
                  >
                    Call to Book
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    Most insurance plans accepted. Sliding scale available for qualifying individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 to-pink-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-800 mb-4">Helpful Articles</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Evidence-based insights and practical tips for mental wellness
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80" 
                    alt="Managing Anxiety" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Managing Anxiety in Daily Life</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Practical strategies to cope with anxiety and find calm in your everyday routine. Learn evidence-based techniques that you can use immediately.
                  </p>
                  <div className="text-sm text-pink-500 font-medium">Read More →</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=500&q=80" 
                    alt="Healthy Relationships" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Building Healthy Relationships</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Understanding communication patterns and boundaries that create stronger, more fulfilling connections with others.
                  </p>
                  <div className="text-sm text-blue-500 font-medium">Read More →</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80" 
                    alt="Self-Care Practices" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Self-Care That Actually Works</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Move beyond buzzwords to discover authentic self-care practices that support your mental health and well-being.
                  </p>
                  <div className="text-sm text-pink-500 font-medium">Read More →</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <h3 className="text-2xl font-light mb-4">Dr. Sarah Martinez</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Creating a safe space for healing and growth. Your mental health journey matters, and you don't have to walk it alone.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-pink-400/20 rounded-full flex items-center justify-center hover:bg-pink-400/30 transition-colors cursor-pointer">
                    <span className="text-pink-400 text-sm">f</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center hover:bg-blue-400/30 transition-colors cursor-pointer">
                    <span className="text-blue-400 text-sm">in</span>
                  </div>
                  <div className="w-10 h-10 bg-pink-400/20 rounded-full flex items-center justify-center hover:bg-pink-400/30 transition-colors cursor-pointer">
                    <span className="text-pink-400 text-sm">@</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Contact Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-pink-400" />
                    <span className="text-gray-300">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">hello@drsarahmartinez.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    <span className="text-gray-300">123 Wellness Ave<br />Suite 200<br />San Francisco, CA 94102</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Office Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <div>Mon - Thu: 9am - 7pm</div>
                  <div>Friday: 9am - 5pm</div>
                  <div>Saturday: 10am - 3pm</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
            
            <Separator className="bg-gray-700 my-8" />
            
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <div className="mb-4 md:mb-0">
                © 2024 Dr. Sarah Martinez. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-pink-400 transition-colors">GDPR Compliance</a>
              </div>
            </div>
            
            <div className="mt-6 text-xs text-gray-500 text-center">
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
