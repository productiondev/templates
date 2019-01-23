# DEMO:
https://nifty-turing-c29968.netlify.com

# QUESTIONS:
> HOMEPAGE:
- How many days/squares will there be on the homepage? 6
- If a day is unlocked, will it show any kind of title/desc or just an 'unlocked' image? Just unlock w/ TITLE/SubTitle
<!-- - If a day is locked, will it a 'locked' image? What about on hover or click, will is show a title/desc or shake the lock to convey 'No entry/access' message? -->
- Will the copy for each day have the same styles as the OF (quotes, bulleted list items, images, etc.)? Roughly, yes
- Yes/No to "Click Here for Updates" button. Would make my life a lot easier if "No" :)
- I'd like to programatically unlock the days so I dont have to unlock at weird times in the morning. Can I unlock each at 12am each day?
- If Home in nav is considered Day1, if they click it, they go to the Homepage where the first sq is ReadMore (but also looks like Day 1)?
--- NEW ---
- If "Jump right in" is clicked can we take users to just after Jame's intro so it seems like they jumped in, but really they hear most of the webinar? (also would be less time to code this way).
- What time to goLive/release each day's content?
- What to actually have on the Event page when it has not opened? (just not clickable?, timer bounce?)
- Russell, We potentially might have to bust the cache on the AF server if updates get made while microsite is live (since the 2019summit.com domain will redirect to /promos/). Is busting cache something I can get access to or do you want me to contact you?

# COMMENTS:
- All copy for the days is controlled by the PrismicCMS (need login info)
- Added orange bullets on the bulleted lists. Lmk if we need to switch to same as font color
- Removed eyebrow copy (Per Emma's slack)


# TODO:
[x] - Make timer text in circles a little bigger on mobile
[x] - Add theme color dark blue to index
[x] - When clicking link from mini menu, set it to sticky after closing (look at closeMiniMenu) method (Might have to set a scrollTo top call if the title is blocked by the menu)
[x] - Body html background the dark blue
- Make sure users cannot navigate to pages if locked
- Set styles for content coming from Prismic
- Is there a way to lighten up the bg images like in the mockup so to better differentiate between eyebrow and nav?
- If event is clicked before it's open, how to tell the user to come back / not time yet?
- TOUCHBASE W/ EMILY AND EMAIL TEAM ON COPY/SLICKTEXT, ETC.
- TOUCHBASE W/ EMILY/Emma ON squares on homepage (Remove Event SQUARE)
- Redirect 30min prior
- "Jump In" / "Start New" functionality
- Waiting on welcome video / gif overlay (https://3.basecamp.com/3487677/buckets/10077700/documents/1531576902)
- RUSSELL - Rebrandly to /promos/ not _10;

--- EVENT PAGE ---
- Get with Russell on api call and route


---
For github:

- Day's content gets released / viewable at X:XXpm/am everyday leading up to event (See variable: webinarReleaseContentTime)
- Event content can be released / viewable at a different/custom time than day's content (See vars: webinarStartDate/webinarStartTime)



----
Hello Rob and Russell,

I am needing help with a server level update. It looks like the domain "http://sites.agorafinancial.com” cannot post data to "https://wiggum.agorafinancial.com/api” (see attached screenshot of the ‘Access-control-allow-headers’ error).

Would you all mind allowing the sites.af domain (specifically https://sites.agorafinancial.com/promos/LF/Altucher2019Summit/) to send the same data that’s being sent from the signups.ja domain here: https://signups.jamesaltucher.com/X430V100 (phoneNumber, email, userStatus).

We can use the <iframe> provided by slickText, but styling that form cannot be done since the iframe’s src is from another domain (at least this is what I’ve read/tried). We could also probably style it via the slickText site, but would rather go the API vs iframe route.

Also, if this is not do able by 10am Fri., please let us know since we’ll be sending out this link out at that time.

Thank you!
Joe