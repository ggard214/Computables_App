'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Projects",
      [
        {
          title: "Dedicated Plex Build",
          summary: `I have recently gotten back into PC building and have been building/modifying 
        my home PC for a little while now.  I decided that it is time to move Plex off of 
        my PC and into a Plex dedicated build.  When I originally built my new PC, I built it 
        with an AMD Ryzen 7 2700, I quickly changed that when I found a sale for a 2700X at 
        Micro Center and have since had the 2700 laying around.  I just recently updated my 
        PC again from an NVIDIA GTX 1060 6gb to an EVGA GeForce 2080 Super, so I figured 
        I had two of the main components sitting around why not build a Plex dedicated build 
        and offload the duties of Plex from my home/gaming rig to its own dedicated box.`,
          steps: `My parts list is as follows: AMD Ryzen 7 2700 using the stock 2700x cooler.  Video card 
        is the MSI GTX 1060 6gb card, the case is the Cooler Master Q300L, Ram is the 
        Team T-Force Vulcan Z DDR4 3200 16gb kit, the SSD is the Team Group MS30 M.2 1TB 
        Sata III SSD, Motherboard is the ASRock B450M-HDV AM4 Micro ATX, the power supply 
        is the Corsair CX550F RGB %%) watt unit, the case fans are split with 2 Fractal Design X2 
        GP-12 and 2 Venturi HP-12 fans as well as a Silverstone 8 port PWN fan hub/splitter, I also 
        added an HDMI dummy plug to keep video on since the system will run headless.
        
        The Build!  I read mixed reviews of the case but I cannot complain at all about the 
        heat in the case.  This system is running cool!  I laid out all the parts and installed the 
        CPU, CPU fan, M.2 drive and Ram into the motherboard.  Once this was setup, I installed the backplate for the 
        motherboard and popped the board into the case.  I next plugged in the panel connectors and installed 
        the fans and fan hub into the case.  I installed the Video Card and the Power Supply next.  With all 
        the parts loaded, it is time to boot on the system.
        
        I booted up and got into the bios to set up all the settings needed.  I then had my copy of Windows 10 
        Pro on a usb drive to install.  Once into windows, I did the necessary updates and installed Plex Media Server.  
        All my files are on a separate NAS device with redundancy so I linked those drive to my Plex setup.  I went through server setup and 
        setup the scraper I will be using and began loading the movies.  This took a while as I have a pretty extensive 
        library.  Once it was loaded up I turned on the server, went to a client on my apple TV and it worked!!!!
        
        The system runs very cool and serving up movies is snappy!  I would def recommend a dedicated Plex Build!`,
          userId: 2,
        },
        {
          title: "First attempt at watercooling",
          summary: `This is my first attempt with water cooling my PC.  I have typically been all fans for cooling in the 
      past.  I am planning this build using softline tubing which will be easier to work with initially.`,
          steps: `I began this change from fan cooling to watercooling with picking out my part.  I went with EK waterblocks, pumps and radiators.  
      They seem to have good reliability and I am looking forward to their ease of use.  I took out all the fans from the case and my cpu cooler as well.  
      I then cleaned my CPU with some alcohol to clear the thermal paste.  I installed the radiators fans and secured it to the case.  I then measured all the tubing and cut the runs.  
      I installed the CPU block and was able to fill the tube to check for leaks.  So far no leaks.  I then drained the loop and synched everything down.  Once tightended and ready for liquid, 
      i filled the loop with the color liquid I chose.
      
      My temps have been amazing since the change and I couldnt be happier!`,
          userId: 3,
        },
        {
          title: "Fan cooled setup",
          summary: `I went a little overboard with fan cooling on my build and any place that a fan was available to be mounted it was filed!`,
          steps: `I bought all new RCG fans for this build.  I want it to be a badass battlestation for people to admire if they ever come to my house!  I 
      started with clearing all the crappy fans that came with the case out and mounting all the new ones.  
      
      I then cable managed all the fans cables to the fan hub in my system which is pulling heavy duty right now!  Once cable managed I turned on the system and 
      wow the sound is loud!  Lots of fans moving is some hum in the air but I love it.  The PC looks how I envisioned it and I couldnt be happier!`,
          userId: 1,
        },
        {
          title: "First time modifying a PC into a pyramid",
          summary: `I recently got a new welder and water to try out making a pc into a pyramid with plexiglass and a steel tube frame.  Here is what I did!`,
          steps: `I got some angle tube from home depot and cut it down with angled ends so that the parts would match up.  I welded the frame in place.  I then cut down plexiglass to size to fit in the openings 
      and made the base for the components to sit on.  This was very time consuming with making sure all the holes for the screws lined up.  I did the cooling like how the new xbox is build with a heavy duty fan 
      to push air up and out the top.  The system isnt as cool as I would like but it looks cool hehe....  I will probably continue to modify this case to get it even cooler!`,
          userId: 3,
        },
        {
          title: "My first build!",
          summary: `I decided to build my first PC instead of buying a premade`,
          steps: `This is the part that many people find intimidating, but once you get started, you’ll see that these components are designed to be put together easily. 
          As long as you’ve done your research and know everything is compatible, it really is like putting together a fancy Lego kit.  
          
          Memory is one of the more straightforward components to install.  Start by pushing open the two tabs on either side of the RAM slot on the motherboard slot. 
          Look to the memory guide to check that you’re installing with the right orientation. Once the RAM module is lined up with the slot, 
          simply push down until you hear a click, then make sure the tabs are closed. Repeat those steps for any additional memory.  Depending on your case, it might 
          be easier to do this before you install the motherboard into the case.
          
          Most CPUs today don’t have pins, as the connector pins are usually located on the motherboard. This is great, because damaging the expensive CPU is much worse 
          than the (usually) cheaper motherboard.  The process may vary slightly depending on the CPU and motherboard, but usually installation follows a similar pattern.  
          Start by unlocking the CPU bar. Then, open the CPU door, place the CPU in the right direction, (arrows marked on both will help you line it up), close the door, 
          and lock the bar down. Mounting the heatsink is also dependent of your hardware, but it generally connects through the four holes closest to the CPU socket.  
          Usually this is done through screws or locking/twisting plastic pins. Remember to use a sensible portion of thermal paste when mounting the heatsink; an amount 
          roughly the size of a pea is a good reference.  Also, be sure to plug the CPU cooler into the motherboard so it will have the power it needs to function. 
          The exact process should be clearly articulated in the instructions that come with your cooler.  Again, installing the CPU and CPU cooler is best done before the 
          motherboard is placed in the case to keep things as simple as possible.
          
          Once everything is wired up and looks the way you want it to, it’s time to plug in the power supply, hit that power button, and turn on your new computer. 
          If everything is connected properly, you should see your motherboard’s BIOS screen. The final step is to install your operating system of choice, and start using your new PC!`,
          userId: 2,
        },
        {
          title: "Overclocking my PC",
          summary: `I decided to give it a shot and see if I can get more power out of my battlestation!`,
          steps: `The first step to increase the clock speed should be to increase the multiplier. This uses the base clock built into the motherboard (usually 100 MHz); 
          multiplying that number yields your clock speed. For example, a multiplier of 36 (x100 MHz) gets you 3.6 GHz.  Gradually raise the multiplier one step at a time. 
          This is usually done by typing in the number or using the “+” key on the keyboard. Add it slowly. Treat this as an iterative process. Speed up the computer a little bit; 
          then, if all goes well, go back and speed it up some more. You can start by increasing the multiplier for one core and go slowly for the others. The more cores you overclock, 
          the hotter (and more unstable) things become. Save your settings and reboot the system. Stress test and benchmark to estimate the CPU stability and performance.  However, 
          overclocking the multiplier only gets you so far (in our case from 36 to 39) without things becoming unstable. That’s because your CPU requires a bit more “juice” to get going.`,
          userId: 2,
        },
        {
          title: "PC Modification",
          summary: `You asked for it and now you've got it: A beginner's guide to tricking out your rig. Follow our directions and we'll guide you through your first steps into adding a 
          mod of two, we promise it won't hurt a bit.`,
          steps: `Safety is more important than all of the above when undertaking any sort of painting. Always paint in a well-ventilated area or outside if you can, and always wear a face mask.  Weather 
          conditions will also make a huge difference to results: Adverse humidity or heat ruins paintwork. Painting with cellulose in damp conditions and you'll create a 'blooming effect', where a 
          milky white colour will start to appear across the panel. Spray-paint on a hot day and the paint can dry before it reaches the panel!  Check the wind conditions too, it should be very light 
          or as still as possible, anymore than a gentle breeze and you'll lose spray paint into the atmosphere.
          
          Disassembly of the chassis or PC case is a fairly straightforward process. Personally, I like to take several photographs to enable swift reassembly. Most cases are riveted together using aluminium rivets. 
          These tend to be soft and very easy to remove using a cordless drill and a 3mm drill bit.
          
          We're now looking at a pile of pressed steel panels and it's time to rub them down using a warm water mix with a dash of washing up liquid. This will help de-grease the steel panels while 
          rubbing or flattening them down using 400 grit Wet n Dry sand paper. I've lightly rubbed down both sides of each panel and washed them off.
          
          After you have made sure that the chassis panels are 100 per cent dry and make sure you inspect these for any dirt you may have missed. Shake the primer well for at least three to five minutes. 
          Lay each panel down and from approximately six to eight inches away apply a 'dust' or very light coat of primer.
          
          Gently build up the coats of primer allowing 10 to 20 minutes before applying the next coat. This is the secret of getting a good result when spray painting: lots of light coats built 
          up over a period of time. Hitting the panel hard with the spray paint from the first coat will cause a reaction, run or worse.
          
          Once the primer coat has been completed and given at least 24 hours of drying time, you'll need to flattening off the primer coat to reduce any imperfections. 
          This is a must in my book as preparation is key to obtaining a good or well finished panel. I've used 800 grit Wet 'n' Dry sand paper for this stage.
          
          The reassembly of the chassis or PC case is a little harder as you don't want to scratch the panels in any way possible. The case has been re-riveted using black 
          coloured rivets to match of tie in with the paint colour scheme. Once the chassis is back on its feet, our entry level case looks a whole lot better than when it arrived.`,
          userId: 4,
        },
        {
          title: "Overclocking this old beast!",
          summary: `My system is getting a little old by todays PC standards so I wanted to overclock it to see if I could get some more life out of it`,
          steps: `Many voltage parameters can affect a CPU’s operation, but arguably the most important and impactful is core voltage (VCore). You can adjust the 
          voltage using Intel’s XTU, similar to how you changed the multipliers. This process can differentiate between unstable and stable overclocks, or even the 
          difference between modest and much higher overclocks.  But be warned: You need to take more care when adjusting the CPU voltage than you do with multipliers. 
          If you push the CPU to run at a ridiculously high multiplier, it will just crash and restart your system. If you try and force too much voltage through your CPU, 
          it can kill it, so proceed with caution.`,
          userId: 3,
        },
        {
          title: "First server build",
          summary: `I needed a new home storage for all of my movies and data so I decided to build a home server`,
          steps: `A server doesn't have to be particularly powerful. eBay runs on mega-thousand-dollar Sun computers, and Google uses thousands of machines to power its search. 
          But for personal use, a server needs considerably less horsepower than your average desktop computer. While other computers busy themselves with complex tasks like 
          despeckling photographs and calculating missile trajectories, your home server has a much simpler task: receiving requests for data and then sending that data as requested. 
          Your server won't use much processing power, especially without a graphical interface to worry about. A machine with 64MB of RAM and a 300MHz processor can make a perfectly 
          good server; with slightly more robust specs, it can handle almost anything you'll throw at it.`,
          userId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
       return queryInterface.bulkDelete('Projects', null, {});
    
  }
};
