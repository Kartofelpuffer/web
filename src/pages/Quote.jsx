import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { ArrowLeft, BadgeCheck, CalendarClock, CarFront, PhoneCall, ShieldCheck, Star, Wrench } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';

const trustPoints = [
  'Same-day availability across Dallas-Fort Worth',
  'Upfront pricing before any work begins',
  'Certified mobile technicians',
  '1,000+ local drivers served'
];

const processSteps = [
  {
    title: 'Share your vehicle details',
    description: 'Tell us your make, model, service issue, and preferred location in under 2 minutes.',
    icon: CarFront
  },
  {
    title: 'Get a clear quote fast',
    description: 'We review your request and send a transparent estimate with recommended options.',
    icon: CalendarClock
  },
  {
    title: 'Book your on-site service',
    description: 'Choose a time that works for you and our technician comes directly to your home or office.',
    icon: Wrench
  }
];

const confidencePoints = [
  {
    title: 'No-pressure estimates',
    description: 'Your quote is 100% free with no obligation to book.'
  },
  {
    title: 'Satisfaction-first service',
    description: 'We stand behind every completed job with quality workmanship.'
  },
  {
    title: 'Responsive communication',
    description: 'Expect fast replies and clear next steps from start to finish.'
  }
];

export default function Quote() {
  useEffect(() => {
    document.title = 'Get a Free Quote | Summit Auto Care';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get a free quote for mobile auto services in Dallas-Fort Worth. Oil changes, brake repair, and detailing at your location.');
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function() {
        try{
          var f = document.createElement("iframe");
          var ifrmSrc = 'https://forms.zohopublic.com/summitautocaretxgm1/form/PersonalInformationForm/formperma/wfYbJVEC9sfk6il1Rk2oLrIjPP9sTXCVzB29M2uLXqE?zf_rszfm=1';

          try{
            if ( typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined" ) {
              for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
                var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
                utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
                var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
                if ( typeof utmVal !== "undefined" ) {
                  if ( utmVal != "" ) {
                    if(ifrmSrc.indexOf('?') > 0){
                      ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                    }else{
                      ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                    }
                  }
                }
              }
            }
            if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
              for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
                var utmPm = ZFLead.utmPNameArr[ prmIdx ];
                var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
                if ( typeof utmVal !== "undefined" ) {
                  if ( utmVal != "" ){
                    if(ifrmSrc.indexOf('?') > 0){
                      ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                    }else{
                      ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                    }
                  }
                }
              }
            }
          }catch(e){}

          f.src = ifrmSrc;
          f.style.border="none";
          f.style.height="980px";
          f.style.width="100%";
          f.style.transition="all 0.5s ease";
          f.setAttribute("aria-label", 'Get a FREE Quote Today');

          var d = document.getElementById("zf_div_wfYbJVEC9sfk6il1Rk2oLrIjPP9sTXCVzB29M2uLXqE");
          while(d.firstChild) {
            d.removeChild(d.firstChild);
          }
          d.appendChild(f);
          window.addEventListener('message', function (){
            var evntData = event.data;
            if( evntData && evntData.constructor == String ){
              var zf_ifrm_data = evntData.split("|");
              if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                var zf_perma = zf_ifrm_data[0];
                var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                var iframe = document.getElementById("zf_div_wfYbJVEC9sfk6il1Rk2oLrIjPP9sTXCVzB29M2uLXqE").getElementsByTagName("iframe")[0];
                if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                  var prevIframeHeight = iframe.style.height;
                  var zf_tout = false;
                  if( zf_ifrm_data.length == 3 ) {
                    iframe.scrollIntoView();
                    zf_tout = true;
                  }
                  if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                    if( zf_tout ) {
                      setTimeout(function(){
                        iframe.style.height = zf_ifrm_ht_nw;
                      },500);
                    } else {
                      iframe.style.height = zf_ifrm_ht_nw;
                    }
                  }
                }
              }
            }
          }, false);
        }catch(e){}
      })();
    `;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysScrolled={true} />
      <CTAButton />

      <main className="pt-20 bg-slate-50">
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-start"
            >
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-4 py-1.5 text-sm font-semibold">
                  <Star className="w-4 h-4 fill-current" />
                  Trusted Mobile Auto Care in DFW
                </div>

                <div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                    Get a Fast, Honest Quote and Get Back on the Road Today
                  </h1>
                  <p className="text-slate-700 text-lg mt-4 max-w-2xl">
                    Skip the shop wait. Summit Auto Care brings certified mobile service to your home or office with transparent pricing and flexible scheduling.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2 bg-white rounded-lg border border-slate-200 p-3">
                      <BadgeCheck className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                      <p className="text-slate-700 text-sm font-medium">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <p className="text-sm text-slate-600 uppercase tracking-wide font-semibold mb-2">Need help right away?</p>
                  <a
                    href="tel:+14698209640"
                    className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    <PhoneCall className="w-5 h-5" />
                    Call (469) 820-9640
                  </a>
                  <p className="text-sm text-slate-600 mt-2">Speak directly with our team for urgent requests and same-day availability.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-6">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">Start Your Free Quote</h2>
                  <p className="text-slate-600 text-sm mt-1">Takes about 2 minutes. No obligation required.</p>
                </div>
                <div id="zf_div_wfYbJVEC9sfk6il1Rk2oLrIjPP9sTXCVzB29M2uLXqE" className="w-full"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-12 grid lg:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">How it works</h3>
                <div className="space-y-4">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.title} className="flex gap-4">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-slate-700" />
                            <p className="font-semibold text-slate-900">{step.title}</p>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-6 text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  Our promise
                </div>
                <h3 className="text-2xl font-bold mb-4">Why drivers choose Summit Auto Care</h3>
                <div className="space-y-4">
                  {confidencePoints.map((point) => (
                    <div key={point.title}>
                      <p className="font-semibold">{point.title}</p>
                      <p className="text-white/80 text-sm">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="text-center mt-10">
              <Link to={createPageUrl('Home')}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
