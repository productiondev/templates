# <a href="https://docs.google.com/document/d/1itiiTgrbdNu-kPmD0L63jv61kE3aVg8inu_iUTrxMxc/edit?usp=sharing">What is Retina</a>
Retina started as a project to help with the creation of promotional pages for Agora Financial. The Retina project aims to make building a promotional page, regardless of graphical or functional complexity, an easy no code task that anyone can do. 


## Doc Index
[Iris and Retina]
[Setting Up Franchises](#franchises)  
[Setting Up Publications & Products](#publications)  
[Promo Building](#promo)   
[Using Visual Composer](#vc)  
[Using Shortcodes](#shortcodes)  
[Javascript Options](#javascript)  


## <a id="franchises" name="franchises">Setting Up Franchises</a>
Franchises are Collections of publications and products. There are a couple options within the franchises that you can change that will apply globally to all publications, products and promos that are assigned to that franchise. here are the options:
###Favicon
This is a .ico file that can be added to the franchise to show a favicon in the browser across all promos that are assigned to the franchise
***
###Footer Text
This is the generic footer text that shows at the bottom of the promo and is applied across all promos that are assigned to the franchise. Typically this includes copyright information, privacy policy, terms, customer support email and phone number.  
Here is an example:

```
© Agora Financial, LLC | 808 St. Paul St., Baltimore, MD 21202 | Privacy Policy | Terms and Conditions Customer Support: [customerserviceemail] | Toll-Free Support: [phonenumber] All rights reserved. No part of this report may be reproduced or placed on any electronic medium without written permission from the publisher. Information contained herein is obtained from sources believed to be reliable, but its accuracy cannot be guaranteed.

```
NOTE: shortcodes can be used in this area to make it more dynamic. see the shortcodes section for those options. 

***
###Customer Support Email Address
This is customer support email address that shows at the bottom of the promo and is applied across all promos that are assigned to the franchise. This is also made available as a shortcode to be used anywhere in the promo. see the shortcodes section for those options. 

```
© Agora Financial, LLC | 808 St. Paul St., Baltimore, MD 21202 | Privacy Policy | Terms and Conditions Customer Support: [customerserviceemail] | Toll-Free Support: [phonenumber] All rights reserved. No part of this report may be reproduced or placed on any electronic medium without written permission from the publisher. Information contained herein is obtained from sources believed to be reliable, but its accuracy cannot be guaranteed.

```
NOTE: shortcodes can be used in this area to make it more dynamic. see the shortcodes section for those options. 

***
###Custom Scripts
This allows a developer to add a script to all promos that fall underneath a franchise. This can include custom styles or javascripts.  
**IMPORTANT:** USE CAUTION AS THIS WILL BE APPLIED TO ALL PROMOS UNDER THE FRANCHISE!!!



## <a id="publications" name="publications">Setting Up Publications & Products</a>

###Code
This is typically a pub or item code used in advantage. (ex: AWN). 
***

###Name
Enter the publication name or products Full Name (ex: Income On Demand)
***

###Phone Number
Enter the phone number someone should use to call sales for this publication or product. This information can be used as a shortcode as well. See the shortcodes section for those options. 
***

###Franchise
This is where you will assign the publication or product to a franchise. **It is important to note that you should always make sure the franchise is created first before creating a publication to ensure it is availabe for assigning.**
***

## <a id="promo" name="promo">Promo Building</a>
Under ```Posts```, Select ```Add New```. This will bring up the promo editor screen. Name the promo the same name as the iris campaign. for example ```TAO_bonanza_0117```. This will ensure that the link to the promo can connect with the campaign in iris. 

Below the WYSIWYG editor, there are several promo options: 
###Publication / Product
This is where you choose the publication or product this promo applies to. Making this connection will also pull in the franchise information so we can apply global settings without having to duplicate things for each promo.
***

###Order Form Link
This is first part of the opium order form url ending with the campaign name. For example ```http://reports.agorafinancial.com/TAO_bonanza_0117```. When linking to the order form through shortcodes, this link will automatically be formated for you to pass the right promocodes over to opium and carry with it any query strings that may be in the url as well. 
***

###Transcript Promo
If you are producing a VSL. this is where you will select the transcript version of the promo. The select box will pull from any promos that have been tagged with a type of **html**.
***

###Show Two Step
Toggling on this functionality forces all links to the order form to become 2 step links. you can upload an image to be shown in the 2 step modal window and you can also add promocodes to a list where you dont want the 2 step to show. This is helpful for external marketers where they want to run a campaign to an existing promo but are not allowed to use 2 step.  
***

###Show Exit Pop
Toggling on this functionality enables an exit popup screen that encourages readers to continue watching the video or gives them an option to view the transcript. By default this is set to initialize after 1 minute. If you want to override the exitpop time you can include a query string of ?exitpop=0 to set it to pop at 0 seconds. Change the 0 to any other amount of seconds if you want. NOTE: you must have a transcript version selected for this to work correctly.  
***

###Show "Advertisement" Message
Toggling on this functionality enables you to show the text "Advertisment" at the top of your promo. IT WILL ONLY SHOW WHEN YOU ADD SPECIFIC PROMO CODES.***

***

###Show Disclaimer
In Development

###Type
Select the type of promo it is. VSL, HTML, IHTML

###Profile Tags
Select from the list of tags that best represents this promo. these tags will be used for lytics content affinity scoring. 

###Tags
These can be used for internal purposes or used to mor granularly classify the promo. 

## <a id="vc" name="vc">Visual Composer</a>

Promos can be built using visual composer which has ALOT of design flexibility without the need to code. Please see the docs here ->
[Visual Composer Documentation](http://vc.wpbakery.com/video-tutorials/)

There is also an add on to visual composer that was added to extend its functionality and capabilities including countdown timers, animations, icon lists, counters, and more. to see how to use these extra features go here -> [Ultimate Addons for Visual Composer](https://www.youtube.com/playlist?list=PL1kzJGWGPrW9CDWwdAWrd_9YQsh1z7u6O)


## <a id="shortcodes" name="shortcodes">Shortcodes</a>
###Time Stamp
Displays the current date in human readable format.  
Here is the shortcode:

```
[timestamp]

```
***
  
###Hostname
Displays the current domain for dynamic urls. So wherever you place this shortcode it will show the current domain for that page.  
Here is the shortcode:

```
[hostname]

```
***

###Phone Number 
Displays a phone number for calling sales. This number is set within each publication and assigned to a particular promo page  
Here is the shortcode:

```
[phonenumber]

```
***

###Customer Service Email 
Displays the customer service email address. This email address is set within each publication and assigned to a particular promo page  
Here is the shortcode:

```
[customerserviceemail]

```
***

###Wistia Video
adds a wistia video to the page. Using this shortcode will provide full video embed support, allow for order buttons to show when the video crosses a certain time and works perfectly with other settings within your promo page.   
 
**Options and Defaults:**    

```
autoplay="true"
- sets the video to play when the page loads
 
playbar="false"
- whether to show the video controls at the bottom of the video

fullscreen="false"
- whether to allow a fullscreen button to enable full screen viewing

playbutton="true"
- Whether to show the play/pause button

videoid="diwezfgilg"
- The Id of the wistia video

crosstime="2"
- How many seconds into the video should the order button show. set this to "false" if you do not have a cross time.

buttontitle="Subscribe Today"
- What should the button say?

```

**Example Implementation**  

```
[wistiavideo videoid="videoidhere" crosstime="2000" buttontitle="Order Now"]  

```  


***

###Buy Link
adds a link to the orderform. This automatically works with 2 step settings and has a couple other options as well.  
 
**Options and Defaults:**    

```
title="Subscribe Today"
- Change the title of the link to anything you want

imgsrc="false"
- if you want to link an image, put the url of the image in this option

twostepoverride="false"
- if two step is set for the promo, set this to true to override it and go straight to orderform. 

class="subnow"
- add a css class name to the button for additional styling options

```

**Example Implementation**  

```
Default Example
[buylink] 

Button Example
[buylink title="Buy Me Now" class="button golden large"]  

Image Example
[buylink imgsrc="http://retina.agorafinancial.com/wp-content/uploads/2017/04/Untitled-1.png"]

```  

***

###Transcript Link
Shows the url of the transcript link. This isnt hyperlinked by default.  
 
**Example Implementation**  

```
[transcriptlink] 

```
***

###Testimonial
Shows a testimonial block in the style of the default #10 control.  
 
**Example Implementation**  

```
[testimonial]Enter Testimonial Text Here[/testimonial]

```
***

###First Name
Shows the visitors first name, if we can get the information from lytics.  

**Options and Defaults:**    

```
default="Reader"
- If there isnt a first name available what do you want to show?

```

**Example Implementation**  

```
[firstname default="Joe Schmo"]

```

***

###City
Shows the visitors city name, if we can get the information from lytics.  

**Options and Defaults:**    

```
default="The United States"
- If there isnt a city available what do you want to show?

```

**Example Implementation**  

```
[city default="The World"]

```

***

###If Lytics User Has Pub
Put some conditional content into the promo based on what publications the customer has. 


**Example Implementation**  

```
[if lytics_user_has_pub=AWN]I see you already have AWN. do you want to go buy something else?[else]You Dont have AWN. Read On[/else][/if]

```

***

###If Lytics User Has Visted Before
Put some conditional content into the promo based on whether they have been to the promo or not

**Example Implementation**  

```
[if lytics_user_has_visted_before]I see you already have Been here before. [else]Welcome New Reader[/else][/if]

```

## <a id="shortcodes" name="javascripts">JavaScripts</a>
###`get_lytics_user_data(fields, callback)`
This function will get lytics data on each individual user. it will first check for a "email" query string. if that doesnt exist it will pull from the lytics cookie. pass in comma seperated (no spaces) list of parameters to pull from the lytics api. if your not sure you can leave the fields parameter an empty string, this will return the kitchen sink. 

**Example Code** 

```
get_lytics_user_data ('last_event_category,first_name', function (results) {
	console.log(results)
})
```
The above will return the last google analaytics event logged for the user as well as their first name.

***

###`set_iframe_cookie(name, value, callback)`
This function will set a cookie on the global iframe. this allows you to pass some information across domains and from promo to orderform without having to add anything to the query string etc. 

**Example Code** 

```
set_iframe_cookie ('email','test@test.com', function (results) {
	console.log(results)
})
```

The above will set a cookie with email address and return the results of the operation if successful.

***

###`get_iframe_cookie(name, callback)`
This function will get a cookie on the global iframe. this allows you to retreive some information across domains and from promo to orderform without having to add anything to the query string etc. 

**Example Code** 

```
get_iframe_cookie ('email', function (results) {
	console.log(results)
})
```

The above will get a cookie and return the results (including the value) if successful.

## Retina Was Built Using
**CMS**: WordPress  

**Core Plugins**: Visual Composer, ACF, Multiple Domain, If Shortcode, Supreme Google Webfonts, Agora Profiles  

**Frontend**: Zurbs Foundation

**Data API**: Lytics

