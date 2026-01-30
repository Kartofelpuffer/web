import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Calendar, Clock, ArrowLeft, User, Phone, Share2, Facebook, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

const blogContent = {
  1: {
    title: "Why Mobile Oil Changes in Dallas-Fort Worth Save You Time and Money",
    excerpt: "Discover how mobile oil change services in the DFW area can save busy Texans hours of waiting at traditional auto shops while providing the same quality service at competitive prices.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    date: "January 15, 2025",
    readTime: "5 min read",
    author: "Summit Auto Care",
    category: "Oil Change",
    content: `
## The Hidden Cost of Traditional Oil Changes

For Dallas-Fort Worth residents, time is one of the most valuable commodities. Between work, family, and the daily commute on I-35 or 635, finding time for vehicle maintenance can feel impossible. Traditional oil changes at auto shops often mean:

- **30-60 minutes of waiting** in a cramped lobby
- **Driving to and from** the service center
- **Unexpected upsells** and pressure tactics
- **Scheduling conflicts** with your busy life

## How Mobile Oil Changes Work in DFW

Mobile oil change services bring the auto shop directly to your location—whether that's your home in Plano, your office in downtown Dallas, or anywhere in the Fort Worth metroplex. Here's what to expect:

### 1. Easy Online Booking
Schedule your service at a time that works for you. Early morning before work? During your lunch break? We work around YOUR schedule.

### 2. We Come to You
Our certified technicians arrive at your location with all necessary equipment, premium synthetic oil, and quality filters.

### 3. Professional Service
While you continue your day, we perform a complete oil change service including:
- Drain old oil and replace with premium synthetic
- Install new oil filter
- Check and top off all fluids
- Perform a multi-point inspection
- Properly dispose of old oil

### 4. No Hidden Fees
You get transparent, upfront pricing with no surprise charges or unnecessary upsells.

## The Real Savings for Texas Drivers

When you factor in the true cost of a traditional oil change—including your time, gas, and potential lost productivity—mobile oil changes often provide better value:

| Factor | Traditional Shop | Mobile Service |
|--------|-----------------|----------------|
| Service Time | 30-60 min | Same |
| Travel Time | 20-40 min | 0 min |
| Waiting | Yes | No |
| Convenience | Low | High |

## Perfect for DFW Lifestyles

Mobile oil changes are ideal for:

- **Busy professionals** who can't leave the office
- **Parents** managing kids' schedules
- **Remote workers** who want service at home
- **Fleet managers** needing multiple vehicles serviced
- **Anyone** who values their time

## Schedule Your Mobile Oil Change Today

Ready to experience the convenience of mobile auto care? Summit Auto Care TX serves the entire Dallas-Fort Worth metroplex with professional, reliable service.

**Fill out the Free Quote form or text (214) 842-7614 to schedule a Mobile Oil Change today**
    `
  },
  2: {
    title: "5 Warning Signs Your Brakes Need Replacement: A Texas Driver's Guide",
    excerpt: "Learn the critical warning signs that indicate your vehicle needs brake service. From squeaking sounds to vibrating pedals, know when it's time to call a mobile mechanic in Texas.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/c7eac7241_SummitAuto.png",
    date: "January 10, 2025",
    readTime: "7 min read",
    author: "Summit Auto Care",
    category: "Brake Services",
    content: `
## Your Brakes: The Most Important Safety Feature

Your vehicle's braking system is arguably its most critical safety component. For Texas drivers navigating busy highways like I-35, I-20, and the Dallas North Tollway, reliable brakes aren't just important—they're essential for your safety and the safety of others.

## Warning Sign #1: Squeaking or Squealing Sounds

**What you hear:** A high-pitched squeaking or squealing noise when you apply the brakes.

**What it means:** Most brake pads have built-in wear indicators—small metal tabs that contact the rotor when pads are worn down. This squealing is your early warning system telling you it's time for new pads.

**Action needed:** Schedule brake inspection soon. You likely have some time, but don't ignore this warning.

## Warning Sign #2: Grinding Noises

**What you hear:** A harsh, grinding metal-on-metal sound when braking.

**What it means:** This is serious. Your brake pads are completely worn, and metal is grinding against metal. This damages your rotors and significantly reduces braking effectiveness.

**Action needed:** Stop driving and get immediate brake service. Continuing to drive with grinding brakes is dangerous and will result in much more expensive repairs.

## Warning Sign #3: Vibrating Brake Pedal

**What you feel:** Pulsing or vibration through the brake pedal when you apply pressure.

**What it means:** Your brake rotors are likely warped. This can happen from:
- Excessive heat buildup
- Hard braking over time
- Driving through water after heavy braking (thermal shock)

**Action needed:** Have your rotors inspected. They may need resurfacing or replacement.

## Warning Sign #4: Soft or Spongy Brake Pedal

**What you feel:** The brake pedal feels soft, goes further to the floor than usual, or feels "spongy" when pressed.

**What it means:** This often indicates:
- Air in the brake lines
- Brake fluid leak
- Failing master cylinder
- Worn brake pads

**Action needed:** This is a safety concern. Have your brake system inspected immediately.

## Warning Sign #5: Vehicle Pulling to One Side

**What you notice:** Your car pulls to the left or right when braking.

**What it means:** This could indicate:
- Uneven brake pad wear
- Stuck brake caliper
- Brake fluid issues
- Alignment problems

**Action needed:** Get a brake inspection to identify the cause and correct it.

## Texas Weather and Your Brakes

The extreme Texas heat puts extra stress on your braking system:

- **Summer temperatures** can cause brake fluid to degrade faster
- **Stop-and-go traffic** on hot pavement increases brake wear
- **Sudden storms** mean wet roads that require more braking distance

## Mobile Brake Service in DFW

Don't wait until a small brake issue becomes a major safety hazard. Summit Auto Care TX offers mobile brake services throughout the Dallas-Fort Worth area. We'll come to your location, inspect your brakes, and provide honest recommendations.

**Get your FREE quote for brake services.**
    `
  },
  3: {
    title: "Mobile Auto Detailing in Texas: Is It Worth It?",
    excerpt: "Discover whether mobile auto detailing is worth the investment for Texas drivers. We break down costs, benefits, and compare mobile vs. traditional detail shops in the DFW area.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/e1c57bc4b_Interior.jpg",
    date: "January 5, 2025",
    readTime: "6 min read",
    author: "Summit Auto Care",
    category: "Auto Detailing",
    content: `
## The Mobile Detailing Question

If you're a Texas driver considering mobile auto detailing, you're probably wondering: is it actually worth the cost? With traditional detail shops seemingly everywhere in the Dallas-Fort Worth area, what makes mobile detailing a smart choice?

Let's break down the real costs, benefits, and value proposition of mobile detailing for Texas vehicle owners.

## What You Get with Mobile Auto Detailing

Mobile detailing brings professional-grade auto care directly to your location. Here's what a comprehensive mobile detail typically includes:

### Exterior Services
- **Complete wash and dry**
- **Clay bar treatment** to remove bonded contaminants
- **Paint correction** for scratches and swirl marks
- **Wax or ceramic coating** application
- **Wheel and tire cleaning and dressing**
- **Window and mirror cleaning**
- **Trim restoration**

### Interior Services
- **Vacuum and deep clean** all carpets and mats
- **Leather conditioning** and protection
- **Dashboard and console cleaning**
- **Door panel and interior trim detailing**
- **Window cleaning**
- **Odor elimination**
- **Air vent cleaning**

## The Cost Breakdown: Mobile vs. Traditional

Let's look at the true cost comparison for Dallas-Fort Worth drivers:

### Traditional Detail Shop
- **Service cost:** $150-300
- **Driving time:** 30-40 minutes round trip
- **Gas:** $5-10
- **Drop-off/pickup time:** 15-30 minutes each way
- **Waiting or coordinating rides:** 2-4 hours
- **Total time investment:** 3-5 hours

### Mobile Detailing
- **Service cost:** $175-325
- **Driving time:** 0 minutes
- **Gas:** $0
- **Your time required:** 0 minutes
- **Continue your day:** Work, relax, or handle other tasks
- **Total time investment:** 0 hours

**The Real Math:** Even if mobile detailing costs $25-50 more, you're saving 3-5 hours. If you value your time at just $20/hour, that's $60-100 in time savings—making mobile detailing the better value.

## Benefits for Texas Drivers

### 1. Weather Protection Where It Matters

Texas weather is brutal on vehicles. Mobile detailers work at your location, which means:
- **Shaded work area** in your driveway or garage
- **No exposure** to parking lot dust while drying
- **Better protection** immediately after service
- **Controlled environment** for ceramic coating curing

### 2. Convenience for Busy Lifestyles

Perfect for:
- **Working professionals** who can't leave the office
- **Parents** managing kids' schedules
- **Remote workers** at home
- **Anyone** who values their time

### 3. Personalized Service

Mobile detailers typically:
- **Focus on one vehicle** at a time
- **Provide direct communication** with the technician
- **Offer customized packages** for your needs
- **Build long-term relationships** with clients

### 4. Quality Products and Equipment

Professional mobile detailers bring:
- **Commercial-grade equipment**
- **Premium products** not available to consumers
- **Professional expertise** and techniques
- **Proper water reclamation** systems

## When Mobile Detailing Makes the Most Sense

Mobile detailing is especially valuable when:

- You have **multiple vehicles** to detail (fleet, family cars)
- Your vehicle is **difficult to transport** (classic cars, lowered vehicles)
- You're **preparing to sell** and want to maximize value
- You need **regular maintenance** detailing
- **Time is your most valuable asset**

## What to Look for in a Mobile Detailer

Not all mobile detailing services are equal. Choose a provider who offers:

- **Transparent pricing** with no hidden fees
- **Professional certifications** and training
- **Quality products** and equipment
- **Insurance coverage** for peace of mind
- **Customer reviews** and testimonials
- **Flexible scheduling** that works for you

## The ROI: Is It Worth It?

Consider the benefits beyond just appearance:

### Resale Value Protection
- Detailed vehicles sell **faster** and for **10-15% more**
- Professional detailing documents **maintenance history**
- Preserved paint and interior condition attract buyers

### Long-Term Savings
- **Prevents paint damage** that requires expensive correction
- **Protects interior** from sun damage and cracking
- **Maintains warranty** by showing proper care
- **Extends vehicle life** through proper maintenance

### Time Value
- **Zero travel time** to and from shops
- **No waiting** in lobbies
- **Continue your day** productively
- **More time** for family and work

## The Verdict: Yes, It's Worth It

For most Texas drivers, mobile auto detailing provides excellent value. When you factor in the time savings, convenience, quality service, and long-term vehicle protection, the slightly higher cost pays for itself.

## Ready to Try Mobile Detailing?

Summit Auto Care TX offers professional mobile detailing services throughout the Dallas-Fort Worth metroplex. We bring expert care directly to your home or office, using premium products and professional techniques.

**Schedule Your Mobile Detail Today - Just Text (214) 842-7614 or fill out the Free Quote Form**

Experience the convenience of professional auto detailing without leaving your location. Get a free quote and discover why mobile detailing is the smart choice for Texas drivers.
    `
  }
};

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = parseInt(urlParams.get('id')) || 1;
  const blog = blogContent[blogId];

  React.useEffect(() => {
    if (blog) {
      document.title = `Summit Auto Care TX`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', blog.excerpt);
      }
      
      // Add keywords meta tag
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      
      const keywords = `${blog.category}, Dallas Fort Worth, DFW, mobile mechanic, auto repair, car maintenance, Texas`;
      metaKeywords.setAttribute('content', keywords);
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Blog post not found</p>
      </div>);

  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysScrolled={true} />
      
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[400px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-slate-900/70" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                {blog.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blog.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg prose-slate max-w-none
                prose-headings:text-slate-900 
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-strong:text-slate-900
                prose-ul:text-slate-600
                prose-li:text-slate-600
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-table:border-collapse prose-table:w-full
                prose-th:bg-slate-100 prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-slate-200
                prose-td:p-3 prose-td:border prose-td:border-slate-200">




















              {/* Actually render markdown properly */}
              <div className="whitespace-pre-line">
                {blog.content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4">{line.replace('## ', '')}</h2>;
                  } else if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-xl font-semibold text-slate-900 mt-8 mb-3">{line.replace('### ', '')}</h3>;
                  } else if (line.startsWith('- **')) {
                    const match = line.match(/- \*\*(.+?)\*\*(.*)/);
                    if (match) {
                      return <li key={i} className="text-slate-600 ml-4"><strong className="text-slate-900">{match[1]}</strong>{match[2]}</li>;
                    }
                  } else if (line.startsWith('- ')) {
                    return <li key={i} className="text-slate-600 ml-4">{line.replace('- ', '')}</li>;
                  } else if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={i} className="text-slate-900 mt-4 text-2xl font-semibold">{line.replace(/\*\*/g, '')}</p>;
                  } else if (line.startsWith('|')) {
                    return null; // Skip table rows for simplified rendering
                  } else if (line.trim() === '') {
                    return <br key={i} />;
                  } else {
                    // Handle inline bold
                    const parts = line.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <p key={i} className="text-slate-600 leading-relaxed mb-4">
                        {parts.map((part, j) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={j} className="text-slate-900">{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </p>);

                  }
                })}
              </div>
            </motion.div>

            {/* CTA Box */}
            <div className="mt-12 bg-gradient-to-br from-blue-600 to-slate-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Summit Auto Care TX provides professional mobile auto services throughout the Dallas-Fort Worth area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl('Home')}>
                  <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6">
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:+12148427614">
                  <Button variant="outline" className="bg-background text-blue-700 px-8 py-6 text-sm font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm hover:text-accent-foreground h-9 border-white hover:bg-white/10">
                    <Phone className="w-5 h-5 mr-2" />
                    (214) 842-7614
                  </Button>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-200">
              <Link to={createPageUrl('Blog')}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  All Articles
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>);

}