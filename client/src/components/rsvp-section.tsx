import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertRsvpSchema, type InsertRsvp } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Users, Utensils, MessageSquare, Heart } from "lucide-react";

export default function RsvpSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertRsvp>({
    resolver: zodResolver(insertRsvpSchema),
    defaultValues: {
      name: "",
      email: "",
      guestCount: 1,
      dietaryRestrictions: "none",
      message: "",
    },
  });

  const rsvpMutation = useMutation({
    mutationFn: async (data: InsertRsvp) => {
      const response = await apiRequest("POST", "/api/rsvp", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "RSVP Submitted Successfully! 🎉",
        description: "Thank you for confirming your attendance. We can't wait to celebrate with you!",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/rsvp"] });
    },
    onError: (error: any) => {
      toast({
        title: "RSVP Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertRsvp) => {
    setIsSubmitting(true);
    try {
      await rsvpMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp-section" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Please RSVP
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-4" data-testid="text-rsvp-subtitle">
            Help us plan the perfect celebration!
          </p>
        </div>
        
        <Card className="party-card">
          <CardContent className="p-8 lg:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" />
                          Full Name *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field} 
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com" 
                            {...field} 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="guestCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          Number of Guests
                        </FormLabel>
                        <Select 
                          onValueChange={(value) => field.onChange(parseInt(value))} 
                          defaultValue={field.value?.toString()}
                        >
                          <FormControl>
                            <SelectTrigger data-testid="select-guest-count">
                              <SelectValue placeholder="Select number of guests" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">Just me</SelectItem>
                            <SelectItem value="2">2 people</SelectItem>
                            <SelectItem value="3">3 people</SelectItem>
                            <SelectItem value="4">4 people</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dietaryRestrictions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Utensils className="w-4 h-4 text-primary" />
                          Dietary Restrictions
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || "none"}>
                          <FormControl>
                            <SelectTrigger data-testid="select-dietary">
                              <SelectValue placeholder="Select dietary restrictions" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">No restrictions</SelectItem>
                            <SelectItem value="vegetarian">Vegetarian</SelectItem>
                            <SelectItem value="vegan">Vegan</SelectItem>
                            <SelectItem value="jain">Jain</SelectItem>
                            <SelectItem value="other">Other (specify in message)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Special Message for Simran
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Share your birthday wishes and any special requests..."
                          {...field}
                          value={field.value || ""}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    data-testid="button-submit-rsvp"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Submitting..." : "Confirm My Attendance"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
