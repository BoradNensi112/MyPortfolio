import { Briefcase, Code, User } from "lucide-react";
import Resume from "../assets/Resume.pdf" ;
export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative ">

        <div className="container mx-auto mx-w-5xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3 className="text-3xl text-semibold">Passionate Web Developer</h3>

                    <p className="text-muted-foreground">Although I am a fresher, I have built a strong foundation in web development through continuous learning and hands-on projects. I am enthusiastic about taking on new challenges and growing as a Full-Stack Developer.</p>

                    <p className="text-muted-foreground">
                        I enjoy solving problems, learning new technologies, and turning ideas into functional digital solutions. My goal is to grow as a MERN Stack Developer, contribute to innovative projects, and create impactful web experiences that deliver real value to users.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact"  className="cosmic-button">Get In Touch</a>
                         <a href={Resume}  className="px-6 py-2  rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                    </div>

                </div>

                <div className="grid  grid-cols-1 gap-6">

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <Code  className="h-6 w-6 text-primary "/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">As a MERN Stack enthusiast, I enjoy transforming ideas into functional and visually appealing web applications while continuously learning new technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <User  className="h-6 w-6 text-primary "/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Backend & API Development</h4>
                                <p className="text-muted-foreground">Creating robust backend systems and RESTful APIs using Node.js, Express.js, and MongoDB to power modern web applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <Briefcase  className="h-6 w-6 text-primary "/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Frontend Development</h4>
                                <p className="text-muted-foreground">Building responsive and interactive user interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS.</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    </section>
} 