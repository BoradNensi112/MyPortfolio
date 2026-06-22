import { FileArchive, Inspect, LinkIcon, Mail, MapPin, Phone, RadioTowerIcon, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useState } from "react"

export const ContectSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        
        // Aapki Web3Forms Access Key
        formData.append("access_key", "78ce517e-a7f0-4b89-ad3d-e4a7da24a2a4"); 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                alert("Thank you for reaching out! I'll get back to you shortly.");
                e.target.reset(); 
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error sending message.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary ">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collabrate ? feel free to reach out . i'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className=" text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="flex flex-col space-y-6 w-max mx-auto">

                            {/* Email Section */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-lg">Email</h4>
                                    <a href="mailto:boradnensi112@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        boradnensi112@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone Section */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-lg">Phone</h4>
                                    <a href="tel:9510649466" className="text-muted-foreground hover:text-primary transition-colors">
                                        9510649466
                                    </a>
                                </div>
                            </div>

                            {/* Location Section */}
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-lg">Location</h4>
                                    <span className="text-muted-foreground">
                                        83, Shreenath Society, Ahmedabad
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="bg-card p-8 shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send A Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name"
                                    className="block text-sm font-medium mb-2 ">
                                    Your Name</label>
                                <input type="text" name="name" id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bd-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Nensi Borad..." />
                            </div>

                            <div>
                                <label htmlFor="email"
                                    className="block text-sm font-medium mb-2 ">
                                    Your Email</label>
                                <input type="email" name="email" id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bd-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Nensi112@gmail.com" />
                            </div>

                            <div>
                                <label htmlFor="message"
                                    className="block text-sm font-medium mb-2 ">
                                    Your Message</label>
                                <textarea name="message" id="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bd-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello I'd Like To Talk About..." />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2", isSubmitting && "opacity-70 cursor-not-allowed")}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

// 78ce517e-a7f0-4b89-ad3d-e4a7da24a2a4