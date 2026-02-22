import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Home, Video, Users, Maximize } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import stagingVideo from "@/assets/staging-video.mp4";
import upscalingBefore from "@/assets/upscaling-before.png";
import upscalingAfter from "@/assets/upscaling-after.png";

const featureTabs = [
  {
    id: "staging",
    label: "AI Virtual Staging",
    icon: Home,
    description: "Transform empty spaces into beautifully furnished luxury interiors",
    benefit: "Stop wasting £2,000 on physical staging. Our AI creates beautifully furnished 3D interiors from your raw photos, helping buyers visualise their dream home instantly.",
  },
  {
    id: "video",
    label: "Cinematic AI Video",
    icon: Video,
    description: "Create stunning property walkthroughs with cinematic quality",
    benefit: "Sell the future, not just the present. We transform a photo of a plot of land or a renovation project into a cinematic video of the completed building. Show your clients the final result before the first brick is even laid.",
  },
  {
    id: "upscaling",
    label: "4K Upscaling",
    icon: Maximize,
    description: "Enhance any image to crystal-clear 4K resolution",
    benefit: "DSLR quality from your pocket. Our AI upgrades every smartphone photo to crystal-clear 4K resolution, ensuring your listings stand out on premium portals like Rightmove and Zoopla.",
  },
  {
    id: "avatars",
    label: "AI Avatars",
    icon: Users,
    description: "Professional AI-generated presenter avatars for property tours",
    benefit: "Stop wasting hours filming and narrating. Simply send us your property photos, and we will create a high-end video narrated by your own Personalised AI Avatar. Build your personal brand on autopilot.",
  },
];

const VideoPlaceholder = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="relative aspect-video rounded-xl overflow-hidden glass-card">
    <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light via-charcoal to-charcoal-dark" />
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_0%,_transparent_50%)]" />
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
      <div className="relative mb-6 group cursor-pointer">
        <div className="absolute inset-0 gold-gradient rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
        </div>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground text-center max-w-md mb-4">{description}</p>
      <span className="px-4 py-1.5 rounded-full glass text-sm text-primary font-medium">
        Demo Coming Soon
      </span>
    </div>
    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
  </div>
);

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("staging");
  const activeFeature = featureTabs.find(tab => tab.id === activeTab)!;

  return (
    <section id="showcase" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Powerful <span className="gold-text">AI Features</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our suite of AI-powered tools designed to transform your property marketing
            into stunning visual experiences.
          </p>
        </div>

        {/* Feature Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 md:gap-3 bg-transparent h-auto p-0 mb-10">
            {featureTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 data-[state=inactive]:glass data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-white/10 data-[state=active]:gold-gradient data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20"
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ').pop()}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <div className="glass-card p-3 md:p-4">
            <TabsContent
              value="staging"
              className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=active]:animate-fade-in"
            >
              <video
                src={stagingVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[16/10] rounded-xl object-cover"
              />
            </TabsContent>

            <TabsContent
              value="video"
              className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=active]:animate-fade-in"
            >
              <VideoPlaceholder
                icon={Video}
                title="Cinematic AI Video"
                description="We transform a photo of a plot of land or a renovation project into a cinematic video of the completed building."
              />
            </TabsContent>

            <TabsContent
              value="upscaling"
              className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=active]:animate-fade-in"
            >
              <BeforeAfterSlider
                beforeImage={upscalingBefore}
                afterImage={upscalingAfter}
                beforeLabel="Low Resolution"
                afterLabel="4K Enhanced"
              />
            </TabsContent>

            <TabsContent
              value="avatars"
              className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=active]:animate-fade-in"
            >
              <VideoPlaceholder
                icon={Users}
                title="AI Avatars"
                description="Simply send us your property photos, and we will create a high-end video narrated by your own Personalised AI Avatar."
              />
            </TabsContent>
          </div>

          {/* Animated benefit block */}
          <div key={activeTab} className="text-center mt-8 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-3">
              <activeFeature.icon className="w-5 h-5 text-primary" />
              <span className="font-serif text-lg font-semibold text-primary">{activeFeature.label}</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {activeFeature.benefit}
            </p>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Showcase;
