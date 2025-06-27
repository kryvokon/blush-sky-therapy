import { CalendarDays, MessageCircle, User, Heart, Star, Clock, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { format } from "date-fns";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-300/5 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-2 text-center lg:text-left space-y-8">
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl font-extralight text-white leading-tight tracking-wide">
                    Dr. Sarah <span className="text-amber-400 font-light">Martinez</span>
                  </h1>
                  <p className="text-2xl md:text-3xl text-slate-300 font-extralight">
                    Clinical Psychologist
                  </p>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto lg:mx-0"></div>
                </div>
                
                <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Creating a sanctuary for healing and growth. I believe in the profound power of human connection and the inherent strength within each individual.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-4 rounded-full text-lg font-medium transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Book Consultation
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-slate-800">Schedule Your Consultation</DialogTitle>
                        <DialogDescription className="text-slate-600">
                          Choose a date that works best for you. I'll contact you within 24 hours to confirm the time.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-center py-4">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          className="rounded-md border border-slate-200 pointer-events-auto"
                        />
                      </div>
                      {selectedDate && (
                        <div className="space-y-4">
                          <p className="text-center text-slate-700">
                            Selected: <span className="font-medium">{format(selectedDate, "PPPP")}</span>
                          </p>
                          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-3 rounded-full">
                            Confirm Booking
                          </Button>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" size="lg" className="border-2 border-slate-400 text-slate-300 hover:bg-slate-800/50 hover:border-amber-400 px-10 py-4 rounded-full text-lg font-medium transition-all duration-500">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="relative flex justify-center lg:justify-end">
                <div className="space-y-8">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-96 h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl ring-4 ring-amber-400/20">
                      <img 
                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" 
                        alt="Dr. Sarah Martinez" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/15 rounded-full blur-2xl"></div>
                  </div>
                  
                  {/* Direct Calendar Access */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-400/20">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-medium text-slate-800 mb-2">Quick Booking</h3>
                      <p className="text-sm text-slate-600">Select your preferred date</p>
                    </div>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md pointer-events-auto mx-auto"
                    />
                    {selectedDate && (
                      <div className="mt-4 space-y-3">
                        <p className="text-center text-slate-700 text-sm">
                          Selected: <span className="font-medium">{format(selectedDate, "MMM d, yyyy")}</span>
                        </p>
                        <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-2 rounded-full text-sm">
                          Book This Date
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80" 
                    alt="Dr. Sarah Martinez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-amber-100 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full"></div>
              </div>
              
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <h2 className="text-5xl font-extralight text-slate-800 mb-6">About Me</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mb-8"></div>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-slate-700 font-light">
                    With over a decade of experience in clinical psychology, I am deeply committed to helping individuals navigate life's complexities with compassion and evidence-based therapeutic approaches.
                  </p>
                  
                  <p className="text-slate-700 font-light">
                    My practice centers on creating a serene, non-judgmental environment where clients feel truly heard, understood, and empowered to embrace positive transformation.
                  </p>
                </div>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-slate-700 font-light">Ph.D. in Clinical Psychology, Stanford University</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    <span className="text-slate-700 font-light">Licensed Clinical Psychologist (CA)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-slate-700 font-light">Certified in Cognitive Behavioral Therapy</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    <span className="text-slate-700 font-light">Member of American Psychological Association</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-extralight text-white mb-6">Services</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-blue-400 rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                Flexible consultation formats tailored to your unique needs and preferences
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-slate-800/50 backdrop-blur-sm border border-amber-400/10 rounded-2xl">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-20 h-20 bg-amber-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-10 h-10 text-amber-400" />
                  </div>
                  <CardTitle className="text-2xl font-light text-white">Online Sessions</CardTitle>
                  <CardDescription className="text-slate-400 font-light text-lg">
                    Convenient therapy from your comfortable space
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pb-8">
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <span className="font-light">Secure video platform</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <span className="font-light">Flexible scheduling</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <span className="font-light">Same quality care</span>
                    </li>
                  </ul>
                  <div className="pt-6">
                    <span className="text-3xl font-extralight text-amber-400">$120</span>
                    <span className="text-slate-400 font-light">/session</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-slate-800/50 backdrop-blur-sm border border-amber-400/10 rounded-2xl">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-20 h-20 bg-slate-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <User className="w-10 h-10 text-slate-300" />
                  </div>
                  <CardTitle className="text-2xl font-light text-white">In-Person Sessions</CardTitle>
                  <CardDescription className="text-slate-400 font-light text-lg">
                    Traditional face-to-face therapy in a serene setting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pb-8">
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <span className="font-light">Comfortable office setting</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <span className="font-light">Personal connection</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <span className="font-light">Private entrance</span>
                    </li>
                  </ul>
                  <div className="pt-6">
                    <span className="text-3xl font-extralight text-amber-400">$140</span>
                    <span className="text-slate-400 font-light">/session</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-slate-800/50 backdrop-blur-sm border border-amber-400/10 rounded-2xl">
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400/10 to-slate-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-amber-400" />
                  </div>
                  <CardTitle className="text-2xl font-light text-white">Initial Consultation</CardTitle>
                  <CardDescription className="text-slate-400 font-light text-lg">
                    Get acquainted and discuss your unique needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pb-8">
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <span className="font-light">45-minute session</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <span className="font-light">Assessment & planning</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <span className="font-light">No commitment required</span>
                    </li>
                  </ul>
                  <div className="pt-6">
                    <span className="text-3xl font-extralight text-amber-400">$90</span>
                    <span className="text-slate-400 font-light">/session</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-extralight text-slate-800 mb-6">Book a Consultation</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-blue-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-slate-700 mb-16 max-w-2xl mx-auto font-light">
              Ready to begin your journey? Schedule your consultation today and take the first step towards meaningful change.
            </p>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center">
                      <CalendarDays className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-white text-lg">Flexible Scheduling</h3>
                      <p className="text-slate-400 font-light">Evening and weekend appointments available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-slate-600/20 rounded-2xl flex items-center justify-center">
                      <Clock className="w-8 h-8 text-slate-300" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-white text-lg">Quick Response</h3>
                      <p className="text-slate-400 font-light">I'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center">
                      <Star className="w-8 h-8 text-amber-400" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-white text-lg">Personalized Care</h3>
                      <p className="text-slate-400 font-light">Tailored approach for your unique needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="lg" 
                        className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-6 rounded-2xl text-xl font-medium transition-all duration-500 transform hover:scale-105 shadow-lg"
                      >
                        Schedule Online
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-slate-800">Choose Your Date</DialogTitle>
                        <DialogDescription className="text-slate-600">
                          Select a preferred date and I'll contact you to confirm the appointment time.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-center py-4">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          className="rounded-md border border-slate-200 pointer-events-auto"
                        />
                      </div>
                      {selectedDate && (
                        <div className="space-y-4">
                          <p className="text-center text-slate-700">
                            Selected: <span className="font-medium">{format(selectedDate, "PPPP")}</span>
                          </p>
                          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-3 rounded-full">
                            Confirm Booking
                          </Button>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-2 border-slate-400 text-slate-300 hover:bg-slate-700 py-6 rounded-2xl text-xl font-medium transition-all duration-500"
                  >
                    Call to Book
                  </Button>
                  <p className="text-sm text-slate-400 mt-6 font-light">
                    Most insurance plans accepted. Sliding scale available for qualifying individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-extralight text-white mb-6">Helpful Articles</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-blue-400 rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                Evidence-based insights and practical guidance for mental wellness
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-slate-800/50 backdrop-blur-sm border border-amber-400/10 rounded-2xl overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&q=80" 
                    alt="Managing Anxiety" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light text-white mb-4">Managing Anxiety in Daily Life</h3>
                  <p className="text-slate-400 font-light mb-6 leading-relaxed">
                    Practical strategies to cope with anxiety and find calm in your everyday routine. Learn evidence-based techniques for immediate relief.
                  </p>
                  <div className="text-amber-400 font-medium hover:text-amber-300 cursor-pointer transition-colors">Read More →</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-slate-800/50 backdrop-blur-sm border border-amber-400/10 rounded-2xl overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=500&q=80" 
                    alt="Healthy Relationships" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light text-white mb-4">Building Healthy Relationships</h3>
                  <p className="text-slate-400 font-light mb-6 leading-relaxed">
                    Understanding communication patterns and boundaries that create stronger, more fulfilling connections with others.
                  </p>
                  <div className="text-slate-300 font-medium hover:text-amber-300 cursor-pointer transition-colors">Read More →</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 bg-slate-800/50 backdrop-blur-sm border border-amber-400/10 rounded-2xl overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=500&q=80" 
                    alt="Self-Care Practices" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light text-white mb-4">Self-Care That Actually Works</h3>
                  <p className="text-slate-400 font-light mb-6 leading-relaxed">
                    Move beyond buzzwords to discover authentic self-care practices that support your mental health and well-being.
                  </p>
                  <div className="text-amber-400 font-medium hover:text-amber-300 cursor-pointer transition-colors">Read More →</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20 border-t border-amber-400/10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="col-span-2">
                <h3 className="text-3xl font-extralight mb-6 text-amber-400">Dr. Sarah Martinez</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-light text-lg">
                  Creating a sanctuary for healing and growth. Your mental health journey matters, and you don't have to navigate it alone.
                </p>
                <div className="flex space-x-6">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-2xl flex items-center justify-center hover:bg-amber-400/20 transition-colors cursor-pointer">
                    <span className="text-amber-400 font-medium">f</span>
                  </div>
                  <div className="w-12 h-12 bg-slate-600/20 rounded-2xl flex items-center justify-center hover:bg-slate-600/30 transition-colors cursor-pointer">
                    <span className="text-slate-300 font-medium">in</span>
                  </div>
                  <div className="w-12 h-12 bg-amber-400/10 rounded-2xl flex items-center justify-center hover:bg-amber-400/20 transition-colors cursor-pointer">
                    <span className="text-amber-400 font-medium">@</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-light mb-6 text-amber-400">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-400 font-light">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-slate-300" />
                    <span className="text-slate-400 font-light">hello@drsarahmartinez.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <span className="text-slate-400 font-light">123 Wellness Ave<br />Suite 200<br />San Francisco, CA 94102</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-light mb-6 text-amber-400">Office Hours</h4>
                <div className="space-y-3 text-slate-400 font-light">
                  <div>Mon - Thu: 9am - 7pm</div>
                  <div>Friday: 9am - 5pm</div>
                  <div>Saturday: 10am - 3pm</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
            
            <Separator className="bg-slate-800 my-12" />
            
            <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 font-light">
              <div className="mb-6 md:mb-0">
                © 2024 Dr. Sarah Martinez. All rights reserved.
              </div>
              <div className="flex space-x-8">
                <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-amber-400 transition-colors">GDPR Compliance</a>
              </div>
            </div>
            
            <div className="mt-8 text-xs text-slate-600 text-center font-light">
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
