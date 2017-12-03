# Iris VSL (#10) Template
This template was built at Baltimore's AF for use with their controls / systems at the time of development.  


## Doc Index
1. [Purpose of the template](#purpose)  
2. [Using the template](#Using)  
3. [Uploading a completed template to Iris](#Uploading)   
4. [Reviewing the completed page](#Review)  
5. [What’s in the template](#Contents) 


## <a id="purpose" name="purpose">Purpose of the template</a>
 The **iris_vsl_template.html** file was built to establish standard code structure / controls across developers to help speed up collaboration and development of an iris html landing page.


##  <a id="Using" name="Using">Using the template</a>
*	As the page is being developed locally place appropriate content between the comments of start and end.
*	Use the promo’s word docx to come up with a title for the page
*	Change the var videoId = 'ipyu8uewmu'; to the right wistia embed Id. Should be on deliverables in basecamp. 
* Replaced the '50' in video.bind("crosstime", 50, with the correct CTA pop time. That should also be on deliverales in basecamp. 
*	Replace the placehold.it image int eh 2step area with the family shot
*	Check that the domain in the 2 step script section is accurate and that the pubpromo matches the three letter initial of the publication the promotion is for. 


## <a id="Uploading" name="Uploading">Uploading a completed template to Iris</a>
*	Remove the scripts in the ‘remove on iris’ section, and deleted any un-needed code / comments
*	Copy everything between the html head tags of the completed template. Got to Iris > Creatives > Pages > This promos page > Build. Paste the copied code from the template into the ‘Head Content’ area of the iris page. 
*	Copy everything between the html body tags of the template. On the same iris page as mentioned above click source at the ‘Body Content’ area and paste the copied code there. 


## <a id="Review" name="Review">Reviewing the completed page</a>
https://docs.google.com/document/d/1_RS2JLpdJDcRjofZ3XJn-TWfz00w9bXfPP8hGDg3vmU/edit


## <a id="Contents" name="Contents">What’s in the template</a>

### meta charset="utf-8"
Ensures that the page wlil be parsed as a normal single-byte ASCII file.

### name="viewport" content="width=device-width, initial-scale=1"
Controls the zoom level on the page and how a user can zoom on mobile. 

### '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>'
Loads the jquery library for testing jqeury locally. This should be removed on Iris because our build populates that globally. 

### '<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>'
Loads the wistia library. Wistia is the service we use stream videos. This should be removed on Iris because our build populates that globally. 

### '<script src="https://d13p2xj50zkyqm.cloudfront.net/scripts/promo_function.js"></script>'
A custom built library to add dynamic content like pub specific phone numbers and functions that trigger by promocode.

### The Exitpop Script
Found above the external style sheet in the head section, this function will watch for a mouse to go past the url field. It will then wait 60seconds before triggering the contents in the deiv popmessage. 

### The Video Script
This is looking for a wistia embed variable so it can add that class to the above class wistia_embed. It also has two functions that are set to trigger at different points in the video. 1) crosstime, is waiting set point (50seconds in the template) to display the button to the order form. 2) end, is waiting for the very end of the video to pop the button to the order form. This one is a fall back in case someone sets the first crosstime button pop to be longer than the videos run time. 

### a class="clickPop_2" href="#ORDER_FORM_LINK#" target="_blank">Click to Proceed
This link in the 2Step section has an href that will load dynamically based on the iris tree used to get to the landing page. 

### '<script src="https://d2fdrq23ypws1n.cloudfront.net/reports/LFW/Turapur_0615/Turapitcher_0715/2step.js"></script>'

A custom library to help carry the email cookie to another domain. 


